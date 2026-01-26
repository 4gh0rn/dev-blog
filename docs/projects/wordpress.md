# WordPress Blog

Operate your first own blog website. Learn how to configure and operate your blog application quickly, securely, and simply, without lengthy manual installation. Reproduce the setup as often as needed with minimal adjustments.

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/4gh0rn/wp-blog"
    title="GitHub Repository" 
    type="tip"
>
View the complete Docker Compose configuration and setup on GitHub
</GithubLinkAdmonition>

## Project Goal

**Operate your first own blog website** with a setup that is:
- **Quick**: No lengthy manual installation required
- **Secure**: Sensitive data managed through environment variables
- **Simple**: Easy configuration and operation
- **Reproducible**: Setup can be reproduced anywhere with minimal adjustments

Learn to use **Docker Compose** to orchestrate multi-container applications and understand how to create reproducible, maintainable infrastructure.

## Prerequisites

### Required Knowledge
- Basic understanding of web applications
- Familiarity with command line
- Basic knowledge of content management systems (helpful but not required)

### Required Software
- **Docker**: Containerization platform
- **Docker Compose**: Container orchestration tool
- **Git**: Version control

### System Requirements
- Operating system with Docker support
- Minimum 2GB RAM
- Port 8080 available
- Internet connection for downloading images

## Conceptual Overview

### What is Docker Compose?

Docker Compose orchestrates **multiple containers** as a single application:

```mermaid
graph TB
    A[Docker Compose] --> B[WordPress Container]
    A --> C[Database Container]
    A --> D[Shared Network]
    A --> E[Persistent Volumes]
    
    B --> B1[Port 8080]
    C --> C1[MariaDB]
    
    B -.->|Database Connection| C
```

**Benefits:**
- **Multi-Container Management**: Define and run multiple containers together
- **Service Dependencies**: Automatically start services in correct order
- **Network Isolation**: Containers communicate through defined networks
- **Volume Management**: Persistent data storage across restarts

### Core Concepts

**Service Orchestration** - Managing multiple containers:
- **WordPress Service**: Web application container
- **Database Service**: MariaDB database container
- **Service Dependencies**: WordPress waits for database to be ready
- **Restart Policies**: Automatic container restart on failure

**Persistent Storage** - Data survives container restarts:
- **Named Volumes**: Persistent storage for WordPress files and database
- **Data Persistence**: Posts, plugins, themes, and database survive restarts
- **Backup Capability**: Volumes can be backed up and restored
- **Migration Support**: Easy to move to different hosts

**Network Isolation** - Secure container communication:
- **Bridge Network**: Isolated network for containers
- **Service Discovery**: Containers find each other by service name
- **Security**: Network isolation prevents external access to database

**Environment Configuration** - Flexible setup:
- **Environment Variables**: All configuration via `.env` file
- **Default Values**: Safe defaults with `${VAR:-default}` syntax
- **Secret Management**: Passwords and credentials in `.env` (not in code)
- **Reproducibility**: Same setup with different configurations

## The Challenge

### Traditional WordPress Installation

Traditional WordPress setup faces challenges:

```mermaid
graph TB
    A[Manual Installation] --> B[Download WordPress]
    B --> C[Setup Database]
    C --> D[Configure wp-config.php]
    D --> E[File Permissions]
    E --> F[Web Server Config]
    F --> G[Plugin Installation]
    
    H[Problems] --> H1[Time-Consuming]
    H --> H2[Error-Prone]
    H --> H3[Hard to Reproduce]
    H --> H4[Version Conflicts]
```

**Common Issues:**
- **Time-Consuming**: Manual installation takes 30-60 minutes
- **Error-Prone**: Multiple configuration steps, easy to make mistakes
- **Hard to Reproduce**: Different setup on each server
- **Version Conflicts**: PHP, MySQL, WordPress version compatibility
- **Migration Difficulties**: Hard to move to different server
- **Backup Complexity**: Manual backup procedures

## The Solution: Docker Compose

### Reproducible Setup

Docker Compose enables **reproducible WordPress deployment**:

```mermaid
graph LR
    A[compose.yml] --> B[Define Services]
    B --> C[Configure Volumes]
    C --> D[Setup Network]
    D --> E[One Command Deploy]
    
    E --> F[Same Setup Everywhere]
```

**Benefits:**
- **One Command**: `docker compose up -d` deploys entire stack
- **Consistent**: Same setup on any Docker host
- **Fast**: Setup in minutes, not hours
- **Reproducible**: Exact same configuration every time

### Multi-Container Architecture

The setup uses **two containers** working together:

```mermaid
graph TB
    A[Docker Compose] --> B[WordPress Container]
    A --> C[Database Container]
    
    B --> B1[Port 8080 Exposed]
    B --> B2[WordPress Files Volume]
    B --> B3[Environment Config]
    B --> B4[wordpress:6.5-apache]
    
    C --> C1[Internal Port 3306]
    C --> C2[Database Volume]
    C --> C3[Database Credentials]
    C --> C4[mariadb:10.6]
    
    B -.->|Hostname: db| C
    
    D[wp_net Network] --> B
    D --> C
```

**Container Details:**
- **WordPress**: Official WordPress image (6.5-apache) running as `wp_blog_app`
- **Database**: MariaDB 10.6 running as `wp_blog_db`
- **Volumes**: `wp_data` for WordPress files, `db_data` for database
- **Network**: `wp_net` bridge network for service communication

**Service Communication:**
- WordPress connects to database using hostname `db`
- No need for IP addresses
- Automatic DNS resolution within network
- Secure internal communication

### Persistent Data Storage

**Named Volumes** ensure data persistence:

```mermaid
graph LR
    A[Container Restart] --> B{Volumes Present?}
    B -->|Yes| C[Data Preserved]
    B -->|No| D[Data Lost]
    
    E[wp_data Volume] --> E1[WordPress Files]
    E --> E2[Plugins]
    E --> E3[Themes]
    E --> E4[Uploads]
    
    F[db_data Volume] --> F1[Database Files]
    F --> F2[Tables]
    F --> F3[Content]
```

**Volume Benefits:**
- **Data Persistence**: Content survives container restarts
- **Backup Support**: Volumes can be backed up
- **Migration**: Easy to move volumes to different host
- **Isolation**: Data separated from container lifecycle

### Environment-Based Configuration

All configuration through **environment variables**:

```mermaid
graph TB
    A[.env File] --> B[Database Config]
    A --> C[WordPress Config]
    A --> D[Admin Credentials]
    
    B --> B1[WP_DB_NAME]
    B --> B2[WP_DB_USER]
    B --> B3[WP_DB_PASSWORD]
    
    C --> C1[WP_SITE_URL]
    C --> C2[WP_HOME_URL]
    C --> C3[WP_DEBUG]
    
    D --> D1[WP_ADMIN_USER]
    D --> D2[WP_ADMIN_PASSWORD]
    D --> D3[WP_ADMIN_EMAIL]
```

**Configuration Benefits:**
- **No Hardcoded Secrets**: All sensitive data in `.env`
- **Git-Safe**: `.env` excluded from version control
- **Flexible**: Different configs for different environments
- **Reproducible**: Same setup with different values

## Architecture Concepts

### Service Dependencies

Docker Compose manages **service startup order**:

```mermaid
sequenceDiagram
    participant User
    participant Compose
    participant Database
    participant WordPress
    
    User->>Compose: docker compose up -d
    Compose->>Database: Start db service
    Database->>Database: Initialize MariaDB
    Database-->>Compose: Ready
    Compose->>WordPress: Start wordpress service
    WordPress->>Database: Connect to db:3306
    Database-->>WordPress: Connection established
    WordPress-->>Compose: Ready
    Compose-->>User: All services running
```

**Dependency Management:**
- `depends_on` ensures database starts before WordPress
- WordPress waits for database to be ready
- Automatic retry on connection failure

### Network Architecture

Containers communicate through **Docker bridge network**:

```mermaid
graph TB
    A[wp_net Network] --> B[WordPress Container]
    A --> C[Database Container]
    
    D[Host System] --> E[Port 8080]
    E --> B
    
    F[External Access] --> E
    
    B -.->|db:3306| C
```

**Network Benefits:**
- **Isolation**: Containers isolated from host network
- **Service Discovery**: Containers find each other by name
- **Security**: Database not exposed to external network
- **Flexibility**: Easy to add more services

### Volume Management

**Named volumes** provide persistent storage:

```mermaid
graph LR
    A[Container Lifecycle] --> B{Volume Exists?}
    B -->|Yes| C[Attach Existing Volume]
    B -->|No| D[Create New Volume]
    
    C --> E[Data Preserved]
    D --> F[Empty Volume]
    
    G[wp_data] --> G1[WordPress Content]
    H[db_data] --> H1[Database Files]
```

**Volume Lifecycle:**
- Volumes created on first `docker compose up`
- Data persists across `docker compose down`
- Volumes removed only with `docker compose down -v`
- Easy backup: copy volume data

## Learning Outcomes

### Docker Compose Mastery
- **Multi-Container Orchestration**: Managing multiple services together
- **Service Dependencies**: Defining startup order and dependencies
- **Network Configuration**: Setting up container communication
- **Volume Management**: Persistent data storage

### Reproducibility
- **Infrastructure as Code**: Defining infrastructure in YAML
- **Version Control**: Tracking infrastructure changes
- **Environment Configuration**: Flexible setup with environment variables
- **Migration Support**: Easy to reproduce on different hosts

### WordPress Operations
- **Containerized WordPress**: Running WordPress in containers
- **Database Management**: MariaDB container configuration
- **Data Persistence**: Understanding volume-based storage
- **Backup Strategies**: Volume backup and restore

## Best Practices

### Security
- **Never commit `.env` files**: Use `.env.example` as template
- **Strong passwords**: Use secure passwords for database and admin
- **Network isolation**: Database not exposed externally
- **Regular updates**: Keep WordPress and MariaDB images updated

### Configuration
- **Environment variables**: All configuration via `.env`
- **Default values**: Use `${VAR:-default}` syntax for safe defaults
- **Documentation**: Document all configuration options
- **Validation**: Verify configuration before deployment

### Data Management
- **Volume backups**: Regular backup of volumes
- **Migration planning**: Document volume migration process
- **Data persistence**: Understand volume lifecycle
- **Cleanup strategy**: Know when to remove volumes

### Operations
- **Restart policies**: Use `restart: unless-stopped`
- **Health monitoring**: Monitor container health
- **Log management**: Centralize container logs
- **Update procedures**: Document upgrade process

## Troubleshooting

### Container Won't Start
- Check logs: `docker compose logs`
- Verify environment variables
- Check port availability (8080)
- Ensure Docker has sufficient resources

### Database Connection Issues
- Verify containers are in same network
- Check database hostname (use service name `db`)
- Verify database credentials in `.env`
- Check database container logs

### Data Not Persisting
- Verify volumes are created: `docker volume ls`
- Check volume mounts in `compose.yml`
- Ensure volumes not removed with `-v` flag
- Verify volume permissions

### Port Already in Use
- Change port mapping in `compose.yml`: `"8081:80"`
- Find process using port: `lsof -i :8080`
- Stop conflicting service
- Use different port for WordPress

## Further References

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [WordPress Docker Image](https://hub.docker.com/_/wordpress)
- [MariaDB Docker Image](https://hub.docker.com/_/mariadb)
- [WordPress Documentation](https://wordpress.org/documentation/)
