FROM node:20.16-alpine AS builder

WORKDIR /app

# Build arguments (must be provided via docker-compose or build command)
ARG BLOG_ENABLED
ARG DEPLOYMENT_URL
ARG DEPLOYMENT_BRANCH
ARG GITHUB_ORG
ARG GITHUB_PROJECT
ARG BASE_URL

# Copy package files first for better layer caching
# This layer will only be invalidated when package files change
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy all source files (this layer will be invalidated on code changes)
COPY . .

# Set build arguments as environment variables for build
ENV BLOG_ENABLED=${BLOG_ENABLED}
ENV DEPLOYMENT_URL=${DEPLOYMENT_URL}
ENV DEPLOYMENT_BRANCH=${DEPLOYMENT_BRANCH}
ENV GITHUB_ORG=${GITHUB_ORG}
ENV GITHUB_PROJECT=${GITHUB_PROJECT}
ENV BASE_URL=${BASE_URL}

# Build the Docusaurus site
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine AS runner

# Set proper permissions for nginx user (non-root)
# Nginx runs as nginx user by default, but we ensure proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built site from builder stage with proper ownership
COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html

# Make html directory read-only (static files don't need to be writable)
RUN chmod -R 555 /usr/share/nginx/html

# Switch to non-root user for security
USER nginx

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
