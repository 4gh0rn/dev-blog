# Conduit Deployment

Design and implement a workflow for automatic application rollout of the Conduit application. The workflow should be implemented following DevSecOps principles.

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/4gh0rn/conduit-container"
    title="GitHub Repository" 
    type="tip"
>
View the complete CI/CD pipeline and deployment workflow on GitHub
</GithubLinkAdmonition>

## Project Goal

**Design and implement a workflow for automatic application rollout** following **DevSecOps principles**:
- **Automated Deployment**: Eliminate manual deployment steps
- **Security Integration**: Secure secret management and security checks
- **Build Automation**: Build images in CI/CD, not on production server
- **Container Registry**: Push images to container registry (GHCR)
- **SSH Deployment**: Deploy to cloud VM via SSH
- **Error Handling**: Fail-fast on errors, ensure deployment reliability

Learn to implement **CI/CD pipelines** with **DevSecOps best practices**.

## Prerequisites

### Required Knowledge
- Understanding of CI/CD concepts
- Familiarity with GitHub Actions
- Basic knowledge of Docker and container registries
- Understanding of SSH and remote deployment

### Required Software
- **GitHub Account**: For GitHub Actions and container registry
- **Docker**: For local testing (optional)
- **SSH Access**: To target deployment server

### System Requirements
- GitHub repository with Actions enabled
- Cloud VM with Docker installed
- SSH access to deployment server
- Container registry access (GitHub Container Registry)

## Conceptual Overview

### What is CI/CD?

**Continuous Integration (CI)** and **Continuous Deployment (CD)** automate the software delivery process:

```mermaid
graph LR
    A[Code Push] --> B[CI Pipeline]
    B --> C[Build Images]
    C --> D[Push to Registry]
    D --> E[CD Pipeline]
    E --> F[Deploy to Server]
    
    style B fill:#90EE90
    style E fill:#FFE4B5
```

**CI Benefits:**
- **Automated Building**: Build images on every code change
- **Early Detection**: Catch build errors before deployment
- **Consistent Builds**: Same build process every time
- **Version Control**: Images tagged with commit SHA

**CD Benefits:**
- **Automated Deployment**: Deploy without manual steps
- **Fast Feedback**: Quick deployment cycles
- **Consistent Process**: Same deployment process every time
- **Rollback Capability**: Easy to revert to previous version

### DevSecOps Principles

**DevSecOps** integrates security into the DevOps workflow:

```mermaid
graph TB
    A[DevSecOps] --> B[Development]
    A --> C[Security]
    A --> D[Operations]
    
    B --> B1[Code Quality]
    B --> B2[Automated Testing]
    
    C --> C1[Secret Management]
    C --> C2[Security Scanning]
    C --> C3[Access Control]
    
    D --> D1[Automated Deployment]
    D --> D2[Monitoring]
    D --> D3[Incident Response]
    
    style A fill:#90EE90
    style C fill:#FFE4B5
```

**Key Principles:**
- **Security as Code**: Security checks in CI/CD pipeline
- **Secret Management**: Secrets stored securely, not in code
- **Least Privilege**: Minimal permissions for deployment
- **Automated Security**: Security checks automated in pipeline
- **Shift Left**: Security early in development process

## The Challenge

### Manual Deployment Problems

Deploying applications manually faces challenges:

```mermaid
graph TB
    A[Manual Deployment] --> B[Build on Server]
    B --> C[Copy Files]
    C --> D[Configure Environment]
    D --> E[Restart Services]
    
    F[Problems] --> F1[Time-Consuming]
    F --> F2[Error-Prone]
    F --> F3[Inconsistent]
    F --> F4[Security Risks]
    F --> F5[No Audit Trail]
    
    style F fill:#FFB6C1
```

**Common Issues:**
- **Time-Consuming**: Manual steps take significant time
- **Error-Prone**: Human mistakes in deployment process
- **Inconsistent**: Different deployment each time
- **Security Risks**: Secrets in code, insecure transfers
- **No Audit Trail**: Hard to track what was deployed when
- **Build on Server**: Server resources used for building

## The Solution: Automated CI/CD Pipeline

### Pipeline Architecture

The deployment pipeline follows **DevSecOps principles**:

```mermaid
flowchart TD
    A[Code Push] --> B[GitHub Actions Trigger]
    B --> C[Build Backend Image]
    B --> D[Build Frontend Image]
    C --> E[Security Scan]
    D --> E
    E --> F[Push to GHCR]
    F --> G[Deploy Job]
    G --> H[SSH to Server]
    H --> I[Pull Images]
    I --> J[Start Containers]
    J --> K[Health Check]
    K --> L{Healthy?}
    L -->|Yes| M[Deployment Success]
    L -->|No| N[Deployment Failed]
    
    style E fill:#FFE4B5
    style F fill:#90EE90
    style K fill:#87CEEB
```

**Pipeline Stages:**
1. **Build**: Create container images in CI environment
2. **Security**: Scan images for vulnerabilities
3. **Push**: Upload images to container registry
4. **Deploy**: Pull and deploy on production server
5. **Verify**: Health checks ensure deployment success

### Build in CI, Not on Server

**Build images in GitHub Actions**, not on production server:

```mermaid
graph LR
    A[GitHub Actions] --> B[Build Images]
    B --> C[Push to GHCR]
    C --> D[Production Server]
    D --> E[Pull Images]
    E --> F[Run Containers]
    
    G[Benefits] --> G1[No Build Tools on Server]
    G --> G2[Faster Deployment]
    G --> G3[Consistent Builds]
    G --> G4[Resource Efficiency]
    
    style A fill:#90EE90
    style D fill:#FFE4B5
```

**Benefits:**
- **Server Efficiency**: Production server doesn't need build tools
- **Faster Deployment**: Only pull pre-built images
- **Consistent Builds**: Same build environment every time
- **Resource Optimization**: Build resources separate from production

### Secret Management

**DevSecOps secret management** in GitHub Actions:

```mermaid
graph TB
    A[GitHub Secrets] --> B[SSH_PRIVATE_KEY]
    A --> C[DJANGO_SECRET_KEY]
    A --> D[GHCR_PAT]
    
    E[GitHub Variables] --> F[Configuration Values]
    
    B --> G[SSH Deployment]
    C --> H[Application Config]
    D --> I[Registry Access]
    F --> J[Environment Setup]
    
    style A fill:#90EE90
    style E fill:#FFE4B5
```

**Security Benefits:**
- **No Secrets in Code**: All secrets in GitHub Secrets
- **Access Control**: Only authorized workflows can access secrets
- **Audit Trail**: GitHub tracks secret usage
- **Rotation Support**: Easy to rotate secrets without code changes

### Deployment Process

**Automated deployment via SSH**:

```mermaid
sequenceDiagram
    participant CI
    participant GHCR
    participant SSH
    participant Server
    participant Docker
    
    CI->>GHCR: Build and Push Images
    GHCR-->>CI: Images Available
    CI->>SSH: Establish Connection
    SSH->>Server: Copy Deployment Files
    SSH->>Server: Execute Deploy Script
    Server->>Docker: Pull Images from GHCR
    Docker-->>Server: Images Pulled
    Server->>Docker: Stop Old Containers
    Server->>Docker: Start New Containers
    Docker-->>Server: Containers Running
    Server->>Server: Health Check
    Server-->>CI: Deployment Status
```

**Deployment Steps:**
1. **Build Images**: Create images in GitHub Actions
2. **Push to Registry**: Upload to GitHub Container Registry
3. **SSH Connection**: Connect to production server
4. **Copy Files**: Transfer compose file and deploy script
5. **Pull Images**: Download images from registry
6. **Deploy**: Start containers in detached mode
7. **Verify**: Health check confirms deployment success

## Architecture Concepts

### CI/CD Pipeline Pattern

The workflow implements a **two-stage pipeline**:

```mermaid
graph TB
    A[Trigger] --> B[Build Job]
    B --> C[Deploy Job]
    
    B --> B1[Build Backend]
    B --> B2[Build Frontend]
    B1 --> B3[Push to GHCR]
    B2 --> B3
    
    C --> C1[SSH Connection]
    C1 --> C2[Copy Files]
    C2 --> C3[Execute Deploy]
    C3 --> C4[Health Check]
    
    style B fill:#90EE90
    style C fill:#FFE4B5
```

**Job Separation:**
- **Build Job**: Independent, can run on any runner
- **Deploy Job**: Depends on build, requires SSH access
- **Parallel Builds**: Backend and frontend build in parallel
- **Sequential Deployment**: Deploy after successful build

### Container Registry Pattern

**GitHub Container Registry (GHCR)** for image storage:

```mermaid
graph LR
    A[Build Images] --> B[Tag with SHA]
    A --> C[Tag as latest]
    B --> D[Push to GHCR]
    C --> D
    D --> E[Production Server]
    E --> F[Pull by Tag]
    
    style D fill:#90EE90
    style E fill:#FFE4B5
```

**Registry Benefits:**
- **Version Control**: Images tagged with commit SHA
- **Latest Tag**: Easy access to most recent build
- **Access Control**: Private/public image management
- **Integration**: Native GitHub integration

### SSH Deployment Pattern

**Secure deployment via SSH**:

```mermaid
graph TB
    A[GitHub Actions] --> B[SSH Connection]
    B --> C[Copy Files]
    C --> D[Execute Script]
    D --> E[Docker Commands]
    
    F[Security] --> F1[SSH Key in Secrets]
    F --> F2[No Passwords in Code]
    F --> F3[Encrypted Connection]
    
    style B fill:#90EE90
    style F fill:#FFE4B5
```

**SSH Benefits:**
- **Secure Connection**: Encrypted communication
- **Key-Based Auth**: SSH keys, no passwords
- **Remote Execution**: Execute commands on remote server
- **File Transfer**: Secure file copying

### DevSecOps Security Integration

**Security integrated into pipeline**:

```mermaid
graph TB
    A[Code Push] --> B[Build]
    B --> C[Security Scan]
    C --> D{Scan Pass?}
    D -->|No| E[Fail Build]
    D -->|Yes| F[Push to Registry]
    F --> G[Deploy]
    G --> H[Secret Validation]
    H --> I{Secrets Valid?}
    I -->|No| J[Fail Deployment]
    I -->|Yes| K[Deploy Success]
    
    style C fill:#FFE4B5
    style H fill:#FFE4B5
    style K fill:#90EE90
```

**Security Measures:**
- **Secret Validation**: Fail-fast if required secrets missing
- **Environment Variables**: All config via secure variables
- **Access Control**: GitHub Environments for deployment protection
- **Audit Trail**: GitHub tracks all deployment actions

## Learning Outcomes

### CI/CD Concepts
- **Pipeline as Code**: Defining workflows in YAML
- **Job Dependencies**: Managing job execution order
- **Artifact Management**: Sharing files between jobs
- **Environment Management**: Using GitHub Environments

### DevSecOps Principles
- **Secret Management**: Secure handling of sensitive data
- **Security Scanning**: Automated vulnerability detection
- **Access Control**: Least privilege, environment protection
- **Security as Code**: Security checks in pipeline

### Deployment Automation
- **SSH Deployment**: Remote server deployment via SSH
- **Container Registry**: Image storage and distribution
- **Health Checks**: Automated deployment verification
- **Error Handling**: Fail-fast on deployment errors

### Best Practices
- **Build in CI**: Don't build on production server
- **Image Tagging**: Version control for container images
- **Secret Rotation**: Easy secret updates without code changes
- **Deployment Verification**: Health checks ensure success

## Best Practices

### Security
- **Never commit secrets**: Use GitHub Secrets for all sensitive data
- **Environment Protection**: Use GitHub Environments for production
- **SSH Key Management**: Store SSH keys in GitHub Secrets
- **Secret Validation**: Fail-fast if required secrets missing

### CI/CD Pipeline
- **Job Separation**: Separate build and deploy jobs
- **Parallel Builds**: Build multiple images in parallel
- **Artifact Management**: Share files between jobs efficiently
- **Error Handling**: Fail-fast on any error

### Deployment
- **Detached Mode**: Run containers in detached mode
- **Health Checks**: Verify deployment with health endpoints
- **Rollback Strategy**: Keep previous images for rollback
- **Logging**: Centralize deployment logs

### Configuration Management
- **Environment Variables**: All config via GitHub Variables
- **Default Values**: Provide safe defaults
- **Validation**: Validate configuration before deployment
- **Documentation**: Document all required secrets and variables

## Troubleshooting

### Build Failures
- Check build logs in GitHub Actions
- Verify Dockerfile syntax
- Check build context includes all files
- Verify build arguments are set correctly

### Deployment Failures
- Verify SSH connection: Check SSH key in secrets
- Check server access: Ensure server is reachable
- Verify secrets: All required secrets must be set
- Check deployment logs: Review SSH action output

### Image Pull Issues
- Verify GHCR access: Check GHCR_PAT secret
- Check image tags: Verify correct tag used
- Verify registry permissions: Ensure read access to images
- Check network: Server must access GHCR

### Health Check Failures
- Check container logs: `docker compose logs`
- Verify ports: Ensure ports are accessible
- Check environment variables: Verify all config set
- Review application logs: Check for startup errors

## Further References

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry)
- [DevSecOps Principles](https://www.devsecops.org/)
- [SSH Deployment Best Practices](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments)
