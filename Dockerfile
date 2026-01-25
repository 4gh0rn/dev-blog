FROM node:20.16-alpine AS builder

WORKDIR /app

# Build arguments
ARG BLOG_ENABLED=false
ARG DEPLOYMENT_URL="https://4gh0rn.github.io"
ARG DEPLOYMENT_BRANCH="main"
ARG GITHUB_ORG="4gh0rn"
ARG GITHUB_PROJECT="dev-blog"

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production=false

# Copy environment file if it exists, otherwise use example
COPY example.env .env

# Copy all source files
COPY . .

# Set build arguments as environment variables for build
ENV BLOG_ENABLED=${BLOG_ENABLED}
ENV DEPLOYMENT_URL=${DEPLOYMENT_URL}
ENV DEPLOYMENT_BRANCH=${DEPLOYMENT_BRANCH}
ENV GITHUB_ORG=${GITHUB_ORG}
ENV GITHUB_PROJECT=${GITHUB_PROJECT}

# Build the Docusaurus site
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine AS runner

# Copy custom nginx config (if nginx.conf exists, it will be used)
# If the file doesn't exist, Docker will use the default nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built site from builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]