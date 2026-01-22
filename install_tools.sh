#!/bin/bash

# SecGuided Tools Installation Script
# Supported platforms: Linux, macOS (Debian/Ubuntu/Red Hat/macOS)
# Usage: ./install_tools.sh [category]
# Categories: network, vulnerability, password, webapp, dev, admin, educational, docs

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Functions
print_header() {
    echo -e "${BLUE}"
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║          SecGuided Tools Installation Script                ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo -e "${NC}"
}

print_success() {
    echo -e "${GREEN}✓${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

# Check if running as root
check_root() {
    if [[ $EUID -eq 0 ]]; then
        print_warning "Running as root. Some tools may not recommend root installation."
    fi
}

# Detect OS
detect_os() {
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        if [ -f /etc/debian_version ]; then
            OS="debian"
        elif [ -f /etc/redhat-release ]; then
            OS="redhat"
        else
            OS="linux"
        fi
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        OS="macos"
    else
        print_error "Unsupported operating system: $OSTYPE"
        exit 1
    fi
    print_success "Detected OS: $OS"
}

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Install package based on OS
install_package() {
    local package="$1"
    print_info "Installing $package..."
    
    case $OS in
        debian)
            sudo apt-get update -qq
            sudo apt-get install -y -qq "$package"
            ;;
        redhat)
            sudo yum install -y -q "$package"
            ;;
        macos)
            if command_exists brew; then
                brew install "$package"
            else
                print_error "Homebrew not found. Please install Homebrew first."
                exit 1
            fi
            ;;
        *)
            print_error "Unsupported OS for automatic package installation"
            exit 1
            ;;
    esac
}

# Install network security tools
install_network_tools() {
    print_header
    echo -e "${YELLOW}Installing Network Security Tools${NC}"
    echo "=================================="
    
    print_info "Installing Nmap..."
    install_package nmap
    
    print_info "Installing Wireshark..."
    case $OS in
        debian)
            install_package wireshark
            ;;
        redhat)
            install_package wireshark
            ;;
        macos)
            brew install --cask wireshark
            ;;
    esac
    
    print_success "Network security tools installed!"
    print_info "Burp Suite Community and OWASP ZAP must be downloaded manually:"
    print_info "- Burp Suite: https://portswigger.net/burp/communitydownload"
    print_info "- OWASP ZAP: https://www.zaproxy.org/download/"
}

# Install web application testing tools
install_webapp_tools() {
    print_header
    echo -e "${YELLOW}Installing Web Application Testing Tools${NC}"
    echo "=========================================="
    
    print_info "Installing SQLMap..."
    if command_exists python3; then
        sudo pip3 install sqlmap
    else
        install_package python3-pip
        sudo pip3 install sqlmap
    fi
    
    print_info "Installing Gobuster..."
    if command_exists go; then
        go install github.com/OJ/gobuster/v3@latest
    else
        print_warning "Go not found. Gobuster requires Go to be installed."
    fi
    
    print_info "Metasploit Framework installation..."
    print_warning "Metasploit requires additional setup. Visit: https://www.metasploit.com/download"
    
    print_success "Web application testing tools installed!"
}

# Install development tools
install_dev_tools() {
    print_header
    echo -e "${YELLOW}Installing Development Tools${NC}"
    echo "============================"
    
    print_info "Installing Git..."
    install_package git
    
    print_info "Installing VS Code..."
    case $OS in
        debian)
            wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
            sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
            sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
            sudo apt-get update -qq
            sudo apt-get install -y -qq code
            rm packages.microsoft.gpg
            ;;
        redhat)
            sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
            sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
            sudo yum check-update
            sudo yum install -y code
            ;;
        macos)
            brew install --cask visual-studio-code
            ;;
    esac
    
    print_info "Installing DBeaver..."
    case $OS in
        debian)
            wget -qO - https://dbeaver.io/debs/dbeaver.gpg.key | sudo apt-key add -
            echo "deb https://dbeaver.io/debs/dbeaver-ce /" | sudo tee /etc/apt/sources.list.d/dbeaver.list
            sudo apt-get update -qq
            sudo apt-get install -y -qq dbeaver-ce
            ;;
        redhat)
            sudo wget -O /etc/yum.repos.d/dbeaver.repo https://dbeaver.io/yum/repo/
            sudo yum install -y dbeaver-ce
            ;;
        macos)
            brew install --cask dbeaver-community
            ;;
    esac
    
    print_success "Development tools installed!"
}

# Install system administration tools
install_admin_tools() {
    print_header
    echo -e "${YELLOW}Installing System Administration Tools${NC}"
    echo "======================================"
    
    print_info "Installing htop (better top)..."
    install_package htop
    
    print_info "Installing nethogs (network monitoring)..."
    install_package nethogs
    
    print_info "Installing lsof (list open files)..."
    install_package lsof
    
    print_info "Installing Docker..."
    case $OS in
        debian)
            sudo apt-get update -qq
            sudo apt-get install -y -qq docker.io
            ;;
        redhat)
            sudo yum install -y docker
            ;;
        macos)
            brew install --cask docker
            ;;
    esac
    
    print_success "System administration tools installed!"
    print_warning "Some tools like TCPView, Process Monitor are Windows-only and must be downloaded manually."
}

# Install password security tools
install_password_tools() {
    print_header
    echo -e "${YELLOW}Installing Password Security Tools${NC}"
    echo "===================================="
    
    print_info "Installing John the Ripper..."
    install_package john
    
    print_info "Installing Hashcat..."
    case $OS in
        debian)
            sudo apt-get install -y -qq hashcat
            ;;
        redhat)
            sudo yum install -y hashcat
            ;;
        macos)
            brew install hashcat
            ;;
    esac
    
    print_info "Installing Hydra..."
    install_package hydra
    
    print_success "Password security tools installed!"
}

# Install vulnerability assessment tools
install_vulnerability_tools() {
    print_header
    echo -e "${YELLOW}Installing Vulnerability Assessment Tools${NC}"
    echo "==========================================="
    
    print_info "Nikto can be installed as follows..."
    if command_exists perl; then
        print_info "Nikto is Perl-based and can be run directly:"
        print_info "git clone https://github.com/sullo/nikto.git"
    else
        print_warning "Perl not found. Please install Perl first."
    fi
    
    print_info "OpenVAS installation is complex and requires Docker or dedicated setup:"
    print_info "Visit: https://www.openvas.org/download.html"
    
    print_info "Nessus must be downloaded and installed manually:"
    print_info "Visit: https://www.tenable.com/products/nessus/nessus-professional"
    
    print_success "Vulnerability assessment tools setup information provided!"
}

# Install educational tools
install_educational_tools() {
    print_header
    echo -e "${YELLOW}Installing Educational Tools${NC}"
    echo "=========================="
    
    print_info "Setting up educational environment..."
    
    print_info "Kali Linux: Download VM image from https://www.kali.org/get-kali/"
    print_info "Metasploitable 2: Download from https://sourceforge.net/projects/metasploitable/"
    print_info "VulnHub: Visit https://www.vulnhub.com/ for vulnerable VMs"
    
    print_info "Installing OWASP WebGoat dependencies..."
    if command_exists java; then
        print_success "Java found, ready for WebGoat"
    else
        print_info "Installing Java..."
        case $OS in
            debian)
                sudo apt-get install -y -qq default-jre
                ;;
            redhat)
                sudo yum install -y java
                ;;
            macos)
                brew install openjdk
                ;;
        esac
    fi
    
    print_info "Setting up DVWA requires web server environment (XAMPP/WAMP)"
    
    print_success "Educational environment setup information provided!"
}

# Show help
show_help() {
    print_header
    echo "Usage: $0 [category]"
    echo ""
    echo "Categories:"
    echo "  network      - Network security tools (Nmap, Wireshark, etc.)"
    echo "  webapp       - Web application testing tools (SQLMap, Gobuster, etc.)"
    echo "  dev          - Development tools (Git, VS Code, DBeaver, etc.)"
    echo "  admin        - System administration tools (Docker, monitoring, etc.)"
    echo "  password     - Password security tools (John, Hashcat, Hydra, etc.)"
    echo "  vulnerability - Vulnerability assessment tools (Nikto, OpenVAS info, etc.)"
    echo "  educational  - Educational tools (Kali, WebGoat setup info, etc.)"
    echo "  all          - Install all available tools (Use with caution!)"
    echo ""
    echo "Examples:"
    echo "  $0 network"
    echo "  $0 dev"
    echo "  $0 all"
    echo ""
    echo "Note: Some tools require manual installation due to licenses or complexity."
}

# Main installation function
install_all() {
    print_header
    echo -e "${YELLOW}Installing ALL Tools${NC}"
    echo "==================="
    print_warning "This will install many packages and may take a long time!"
    read -p "Are you sure you want to continue? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        install_network_tools
        install_webapp_tools
        install_dev_tools
        install_admin_tools
        install_password_tools
        install_vulnerability_tools
        install_educational_tools
        print_success "All tools installation completed!"
    else
        print_info "Installation cancelled."
        exit 0
    fi
}

# Main script
main() {
    print_header
    detect_os
    check_root
    
    case "${1:-}" in
        network)
            install_network_tools
            ;;
        webapp)
            install_webapp_tools
            ;;
        dev)
            install_dev_tools
            ;;
        admin)
            install_admin_tools
            ;;
        password)
            install_password_tools
            ;;
        vulnerability)
            install_vulnerability_tools
            ;;
        educational)
            install_educational_tools
            ;;
        all)
            install_all
            ;;
        help|--help|-h)
            show_help
            ;;
        "")
            show_help
            ;;
        *)
            print_error "Unknown category: $1"
            show_help
            exit 1
            ;;
    esac
}

# Handle script interruption
trap 'print_error "Installation interrupted"; exit 1' INT TERM

# Run main function
main "$@"
