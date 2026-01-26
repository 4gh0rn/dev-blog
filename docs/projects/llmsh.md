# llmsh

Build a zsh plugin that transforms natural language descriptions into ready-to-run shell commands using LLMs. Learn to integrate AI capabilities into terminal workflows, design clean plugin architectures, and create tools that enhance productivity without replacing user control.

import GithubLinkAdmonition from '@site/src/components/GithubLinkAdmonition';

<GithubLinkAdmonition 
    link="https://github.com/brsksh/llmsh"
    title="GitHub Repository" 
    type="tip"
>
View the complete source code and documentation on GitHub
</GithubLinkAdmonition>

## Project Goal

**Build a zsh plugin that uses LLMs to transform natural language into shell commands**:
- **Natural Language Interface**: Describe what you want to do in plain English
- **LLM Integration**: Use Ollama-compatible APIs for command generation
- **Terminal Workflow**: Work entirely within the terminal, no context switching
- **User Control**: Review suggestions before execution, maintain full control
- **Seamless Integration**: Integrate with existing tools (zsh, fzf, Oh-My-Zsh)

Learn to **integrate AI capabilities into terminal workflows** while maintaining user control and understanding.

## Prerequisites

### Required Knowledge
- Understanding of shell scripting (bash/zsh)
- Basic Python programming
- Familiarity with terminal workflows
- Understanding of API design and HTTP requests

### Required Software
- **zsh**: Z shell (version 5.0 or higher)
- **Oh-My-Zsh**: zsh configuration framework
- **Python 3**: Python 3.8 or higher
- **fzf**: Fuzzy finder for command selection
- **jq**: JSON processor
- **curl**: HTTP client
- **Ollama**: Local or remote Ollama-compatible API endpoint

### System Requirements
- Unix-like operating system (Linux, macOS)
- Terminal with zsh support
- Internet connection (for remote Ollama instances) or local Ollama installation

## Conceptual Overview

### What is LLM-Powered Command Generation?

LLM-powered command generation uses **Large Language Models** to understand natural language descriptions and generate syntactically correct shell commands:

```mermaid
graph LR
    A[Natural Language] --> B[LLM API]
    B --> C[Command Suggestions]
    C --> D[User Review]
    D --> E[Execute Command]
```

**Key Concepts:**
- **Natural Language Understanding**: LLMs understand context and intent
- **Code Generation**: LLMs excel at generating syntactically correct code
- **User Review**: Always review suggestions before execution
- **Workflow Integration**: Seamless integration with existing terminal tools

### Plugin Architecture

The plugin follows a **modular architecture** with clear separation of concerns:

```mermaid
graph TB
    A[zsh Plugin] --> B[Python API Client]
    A --> C[fzf Integration]
    A --> D[Configuration System]
    
    B --> E[Ollama API]
    C --> F[Command Selection]
    D --> G[XDG Config]
```

**Architecture Components:**
- **zsh Plugin**: Shell integration and keybinding
- **Python Client**: Handles LLM API communication with bearer token support (including token-based access control via reverse proxies like Nginx)
- **fzf Integration**: Fuzzy selection of command suggestions
- **Configuration**: XDG-based config system

## The Challenge

### Terminal Workflow Friction

Working in the terminal often involves friction when constructing commands:
- **Time-Consuming**: Searching for command syntax takes time
- **Breaks Flow**: Interrupts workflow to look up commands
- **Context Switching**: Need to leave terminal to search online
- **Syntax Errors**: Easy to make mistakes when constructing commands manually

## The Solution: LLM-Powered Command Generation

### Workflow Integration

The plugin integrates seamlessly into terminal workflow:

```mermaid
sequenceDiagram
    participant User
    participant zsh
    participant Python
    participant LLM
    participant fzf
    
    User->>zsh: Type description
    User->>zsh: Press Ctrl+O
    zsh->>Python: Send description
    Python->>LLM: API request
    LLM-->>Python: Command suggestions
    Python-->>zsh: Return suggestions
    zsh->>fzf: Display options
    User->>fzf: Select command
    fzf-->>zsh: Insert command
    User->>zsh: Review & execute
```

**Workflow Benefits:**
- **No Context Switching**: Everything happens in terminal
- **Fast**: Get suggestions in seconds
- **Review Before Execute**: Always review before running
- **Natural**: Describe what you want, not how to do it

### Design Decisions

**Ollama Compatibility** - Why Ollama-compatible APIs?
- **Local Execution**: Run models locally for privacy and speed
- **Data Sovereignty**: Full control over data, no external services
- **Simple API**: Easy to integrate, well-documented
- **Open Source**: No vendor lock-in, customizable
- **Token Authentication**: Bearer token authentication is supported, including token-based access control via reverse proxies (e.g., Nginx) before the Ollama endpoint

**fzf Integration** - Why fuzzy finder?
- **Fuzzy Search**: Quickly find the right command
- **Keyboard Navigation**: No mouse needed
- **Visual Feedback**: Clear interface for selection
- **Familiar**: Terminal users already know fzf

**XDG Config** - Why XDG directory standard?
- **Clean Separation**: Config separate from shell files
- **Portable**: Easy to share and migrate
- **Version Control**: Can track config changes
- **Standard**: Follows XDG directory standards

## Architecture Concepts

### API Client Design

The Python API client handles LLM communication with:
- **Bearer Token Support**: Secure authentication for remote instances, including token-based access control via reverse proxies (e.g., Nginx) before the Ollama endpoint
- **Configurable Timeouts**: Handle slow API responses
- **Error Handling**: Comprehensive error messages
- **Multiple Suggestions**: Request multiple command alternatives

### Shell Integration

The zsh plugin provides seamless shell integration:
- **Keybinding**: Customizable hotkey (default Ctrl+O)
- **Buffer Capture**: Captures current command line
- **Non-Blocking**: Doesn't block shell during API call
- **Command Insertion**: Inserts selected command into prompt

### Configuration System

Configuration uses XDG directory standard with environment variables:
- **LLMSH_URL**: Ollama endpoint URL
- **LLMSH_MODEL**: Model name (e.g., llama3)
- **LLMSH_TOKEN**: Optional bearer token
- **LLMSH_HOTKEY**: Keybinding (e.g., ^o)
- **LLMSH_COMMAND_COUNT**: Number of suggestions
- **LLMSH_TIMEOUT**: API timeout in seconds

## Learning Outcomes

### Technical Skills
- **LLM Integration**: Design clean APIs for LLM communication, implement bearer token authentication
- **Terminal Tool Development**: Build modular plugins, integrate tools seamlessly into shell workflows
- **Python Development**: Build CLI tools, make API requests with proper error handling
- **Configuration Management**: Handle configuration files and environment variables using XDG standards

### Best Practices
- **User Control**: Always allow user review before execution
- **Security**: Review commands before execution, store tokens securely, use local models for sensitive operations
- **Error Handling**: Provide helpful, actionable error messages
- **Tool Composition**: Leverage existing tools (fzf, zsh) effectively

## Troubleshooting

### API Connection Issues
- Verify Ollama endpoint URL is correct
- Check network connectivity
- Verify bearer token if using authenticated instance (including token-based access via reverse proxies)
- Check API timeout settings

### Command Quality Issues
- Try different LLM models
- Provide more context in description
- Request multiple suggestions and compare
- Review commands carefully before execution

### Integration Issues
- Verify Oh-My-Zsh is installed
- Check plugin is enabled in `.zshrc`
- Verify fzf is installed and in PATH
- Check Python dependencies are installed

## Further References

- [llmsh Blog Post](https://brsk.sh/blog/building-llmsh-terminal-assistant/)
- [Ollama Documentation](https://ollama.ai/docs)
- [Oh-My-Zsh Plugin Development](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins)
- [fzf Documentation](https://github.com/junegunn/fzf)
- [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/basedir-spec-latest.html)
