.PHONY: help build clean docker-build docker-run docker-stop docker-logs docker-clean docker-compose-up docker-compose-down docker-compose-logs docker-compose-build docker-dev-up docker-dev-down docker-dev-logs dev quick-test

# Colors for output
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[0;33m
CYAN := \033[36m
RED := \033[31m
NC := \033[0m # No Color

# Variables
COMPOSE_FILE := docker-compose.yml
CONTAINER_NAME := docusaurus-blog
IMAGE_NAME := docusaurus-blog
IMAGE_TAG := latest

# Default target
.DEFAULT_GOAL := help

help: ## Show this help message
	@echo "$(BLUE)Available commands:$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(GREEN)%-25s$(NC) %s\n", $$1, $$2}'
	@echo ""

# Basic Commands
build: ## Build the Docusaurus site for production
	@echo "$(BLUE)[INFO] Building Docusaurus site...$(NC)"
	@npm run build
	@echo "$(GREEN)[SUCCESS] Build completed successfully!$(NC)"

clean: ## Clean build artifacts and cache
	@echo "$(YELLOW)[INFO] Cleaning build artifacts...$(NC)"
	@npm run clear || true
	@rm -rf build .docusaurus node_modules/.cache
	@echo "$(GREEN)[SUCCESS] Clean completed!$(NC)"

# Docker Commands
docker-build: ## Build Docker image
	@echo "$(BLUE)[INFO] Building Docker image...$(NC)"
	@if ! command -v docker >/dev/null 2>&1; then \
		echo "$(RED)[ERROR] Docker is not installed. Please install Docker first.$(NC)"; \
		exit 1; \
	fi
	@docker build -t $(IMAGE_NAME):$(IMAGE_TAG) \
		--build-arg BLOG_ENABLED=$${BLOG_ENABLED:-false} \
		--build-arg DEPLOYMENT_URL=$${DEPLOYMENT_URL:-https://4gh0rn.github.io} \
		--build-arg DEPLOYMENT_BRANCH=$${DEPLOYMENT_BRANCH:-main} \
		--build-arg GITHUB_ORG=$${GITHUB_ORG:-4gh0rn} \
		--build-arg GITHUB_PROJECT=$${GITHUB_PROJECT:-dev-blog} \
		.
	@echo "$(GREEN)[SUCCESS] Docker image built successfully!$(NC)"

docker-run: ## Run Docker container
	@echo "$(BLUE)[INFO] Starting Docker container...$(NC)"
	@if ! command -v docker >/dev/null 2>&1; then \
		echo "$(RED)[ERROR] Docker is not installed. Please install Docker first.$(NC)"; \
		exit 1; \
	fi
	@docker run -d \
		--name $(CONTAINER_NAME) \
		-p 3000:80 \
		$(IMAGE_NAME):$(IMAGE_TAG) || \
		(echo "$(YELLOW)[WARN] Container already exists. Stopping and removing...$(NC)" && \
		 docker stop $(CONTAINER_NAME) >/dev/null 2>&1 && \
		 docker rm $(CONTAINER_NAME) >/dev/null 2>&1 && \
		 docker run -d --name $(CONTAINER_NAME) -p 3000:80 $(IMAGE_NAME):$(IMAGE_TAG))
	@echo "$(GREEN)[SUCCESS] Container started successfully!$(NC)"
	@echo "$(YELLOW)[NOTE] Site is available at http://localhost:3000$(NC)"
	@echo "$(CYAN)[TIP] Use 'make docker-logs' to view logs$(NC)"

docker-stop: ## Stop and remove Docker container
	@echo "$(YELLOW)[INFO] Stopping Docker container...$(NC)"
	@docker stop $(CONTAINER_NAME) >/dev/null 2>&1 || true
	@docker rm $(CONTAINER_NAME) >/dev/null 2>&1 || true
	@echo "$(GREEN)[SUCCESS] Container stopped and removed!$(NC)"

docker-logs: ## Show Docker container logs
	@echo "$(BLUE)[INFO] Showing Docker container logs...$(NC)"
	@docker logs -f $(CONTAINER_NAME) || echo "$(RED)[ERROR] Container not found. Is it running?$(NC)"

docker-clean: docker-stop ## Remove Docker image and container
	@echo "$(YELLOW)[INFO] Removing Docker image...$(NC)"
	@docker rmi $(IMAGE_NAME):$(IMAGE_TAG) >/dev/null 2>&1 || true
	@echo "$(GREEN)[SUCCESS] Docker cleanup completed!$(NC)"

# Docker Compose Commands
docker-compose-up: ## Start services with Docker Compose
	@echo "$(BLUE)[INFO] Starting Docker Compose services...$(NC)"
	@if ! command -v docker-compose >/dev/null 2>&1 && ! docker compose version >/dev/null 2>&1; then \
		echo "$(RED)[ERROR] Docker Compose is not installed. Please install Docker Compose first.$(NC)"; \
		exit 1; \
	fi
	@docker-compose up -d 2>/dev/null || docker compose up -d
	@echo "$(GREEN)[SUCCESS] Services started!$(NC)"
	@echo "$(YELLOW)[NOTE] Production site: http://localhost:3000$(NC)"
	@echo "$(CYAN)[TIP] Use 'make docker-compose-logs' to view logs$(NC)"

docker-compose-down: ## Stop Docker Compose services
	@echo "$(YELLOW)[INFO] Stopping Docker Compose services...$(NC)"
	@docker-compose down 2>/dev/null || docker compose down
	@echo "$(GREEN)[SUCCESS] Services stopped!$(NC)"

docker-compose-logs: ## Show Docker Compose logs
	@echo "$(BLUE)[INFO] Showing Docker Compose logs...$(NC)"
	@docker-compose logs -f 2>/dev/null || docker compose logs -f

docker-compose-build: ## Build Docker Compose services
	@echo "$(BLUE)[INFO] Building Docker Compose services...$(NC)"
	@docker-compose build 2>/dev/null || docker compose build
	@echo "$(GREEN)[SUCCESS] Services built successfully!$(NC)"

# Docker Development Commands
docker-dev-up: ## Start Docker development container with hot-reload
	@echo "$(BLUE)[INFO] Starting Docker development container...$(NC)"
	@if ! command -v docker-compose >/dev/null 2>&1 && ! docker compose version >/dev/null 2>&1; then \
		echo "$(RED)[ERROR] Docker Compose is not installed. Please install Docker Compose first.$(NC)"; \
		exit 1; \
	fi
	@docker-compose --profile dev up -d docusaurus-dev 2>/dev/null || docker compose --profile dev up -d docusaurus-dev
	@echo "$(GREEN)[SUCCESS] Development container started!$(NC)"
	@echo "$(YELLOW)[NOTE] Development server: http://localhost:3001$(NC)"
	@echo "$(CYAN)[TIP] Use 'make docker-dev-logs' to view logs$(NC)"
	@echo "$(CYAN)[TIP] Use 'make docker-dev-down' to stop the container$(NC)"

docker-dev-down: ## Stop Docker development container
	@echo "$(YELLOW)[INFO] Stopping Docker development container...$(NC)"
	@docker-compose --profile dev down 2>/dev/null || docker compose --profile dev down
	@echo "$(GREEN)[SUCCESS] Development container stopped!$(NC)"

docker-dev-logs: ## Show Docker development container logs
	@echo "$(BLUE)[INFO] Showing Docker development container logs...$(NC)"
	@docker-compose --profile dev logs -f docusaurus-dev 2>/dev/null || docker compose --profile dev logs -f docusaurus-dev

# Utility Commands
dev: docker-dev-up ## Start development environment with Docker (hot-reload)

quick-test: docker-build docker-run ## Quick Docker test (build + run)
	@echo "$(GREEN)[SUCCESS] Quick test completed!$(NC)"
	@echo "$(YELLOW)[NOTE] Container is running at http://localhost:3000$(NC)"
	@echo "$(CYAN)[TIP] Run 'make docker-logs' to see logs$(NC)"
	@echo "$(CYAN)[TIP] Run 'make docker-stop' to stop the container$(NC)"
