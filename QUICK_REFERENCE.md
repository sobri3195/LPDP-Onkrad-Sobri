# ⚡ Quick Reference Guide

**Quick access to essential tools by category and use case.**

*For detailed information, see [TOOLS.md](TOOLS.md)*

---

## 🎯 Essential Tool Kit

### For Security Beginners
| Tool | Purpose | Platform | Download |
|------|---------|----------|----------|
| **OWASP ZAP** | Web app scanner | Win/Mac/Linux | [Download](https://www.zaproxy.org/download/) |
| **VirtualBox** | VM platform | Win/Mac/Linux | [Download](https://www.virtualbox.org/wiki/Downloads) |
| **Nmap** | Network discovery | Win/Mac/Linux | [Download](https://nmap.org/download.html) |
| **Visual Studio Code** | Code editor | Win/Mac/Linux | [Download](https://code.visualstudio.com/download) |

### For Developers
| Tool | Purpose | Platform | Download |
|------|---------|----------|----------|
| **Git** | Version control | Win/Mac/Linux | [Download](https://git-scm.com/downloads) |
| **GitHub Desktop** | Git GUI | Win/Mac | [Download](https://desktop.github.com/) |
| **DBeaver** | Database tool | Win/Mac/Linux | [Download](https://dbeaver.io/download/) |
| **Burp Suite** | Web app testing | Win/Mac/Linux | [Download](https://portswigger.net/burp/communitydownload) |

### For System Admins
| Tool | Purpose | Platform | Download |
|------|---------|----------|----------|
| **Termius** | SSH client | Win/Mac/Linux | [Download](https://termius.com/download) |
| **Advanced IP Scanner** | Network scanner | Win | [Download](https://www.advanced-ip-scanner.com/) |
| **Process Monitor** | System monitor | Win | [Download](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon) |
| **Docker Desktop** | Containers | Win/Mac/Linux | [Download](https://www.docker.com/products/docker-desktop) |

---

## 🔍 Find Tools by Use Case

### Network Discovery & Scanning
```
Nmap → Advanced IP Scanner → Angry IP Scanner
```

### Web Application Security
```
Burp Suite → OWASP ZAP → SQLMap → Gobuster
```

### Password Security
```
Hashcat → John the Ripper → Hydra
```

### System Monitoring
```
Process Monitor ← TCPView ← Sysinternals Suite
```

### Development Environment
```
VS Code → Git → DBeaver → Docker
```

### Remote Access
```
Termius → MobaXterm → PuTTY
```

---

## 🎓 Learning Platform Setup

### Quick Lab Setup
1. **Install VirtualBox** → [Download](https://www.virtualbox.org/wiki/Downloads)
2. **Download Kali Linux VM** → [Download](https://www.kali.org/get-kali/)
3. **Get VulnHub VMs** → [Visit](https://www.vulnhub.com/)
4. **Install Docker Desktop** → [Download](https://www.docker.com/products/docker-desktop)

### Practice Environments
- **Web Application Testing:** WebGoat + DVWA
- **Network Security:** Metasploitable 2
- **Penetration Testing:** Kali Linux tools
- **Container Security:** Docker-based labs

---

## ⚡ Command Quick Reference

### Nmap Essentials
```bash
# Quick scan
nmap -F target.com

# Service detection
nmap -sV target.com

# Aggressive scan
nmap -A target.com

# Network discovery
nmap -sn 192.168.1.0/24
```

### SQLMap Quick Test
```bash
# Test URL
sqlmap -u "http://target.com/page.php?id=1" --batch

# Post data test
sqlmap -u "http://target.com/login" --data="user=admin&pass=admin"

# Get databases
sqlmap -u "http://target.com/page.php?id=1" --dbs
```

### Git Essentials
```bash
# Initialize
git init

# Add files
git add .

# Commit
git commit -m "message"

# Push
git push origin main
```

### Docker Quick Commands
```bash
# List containers
docker ps -a

# Run container
docker run -it kali-linux

# Stop container
docker stop [container]
```

---

## 📊 Tool Comparison Matrix

| Function | Free Option | Professional Option | Learning Resource |
|----------|-------------|-------------------|------------------|
| **Web Scanner** | OWASP ZAP | Burp Suite Pro | WebGoat/DVWA |
| **Network Scan** | Nmap | Nessus | Metasploitable |
| **Password Test** | John the Ripper | Hashcat (GPU) | Hydra (brute force) |
| **Code Editor** | VS Code | JetBrains IDEs | Git + GitHub |
| **VM Platform** | VirtualBox | VMware Workstation | Docker Desktop |
| **SSH Client** | PuTTY | Termius | MobaXterm |

---

## 🛠️ Installation Priority

### Tier 1 - Essential (Install First)
1. **VirtualBox** - Virtualization foundation
2. **Visual Studio Code** - Code editing
3. **Git** - Version control
4. **Nmap** - Network scanning
5. **Termius** - SSH client

### Tier 2 - Important (Install Next)
1. **OWASP ZAP** - Web security testing
2. **Docker Desktop** - Container platform
3. **DBeaver** - Database management
4. **GitHub Desktop** - Git GUI
5. **Advanced IP Scanner** - Network tools

### Tier 3 - Specialized (Install as Needed)
1. **Kali Linux VM** - Security distribution
2. **Burp Suite** - Professional web testing
3. **Metasploit** - Penetration testing
4. **OpenVAS** - Vulnerability scanning
5. **Sysinternals Suite** - Windows utilities

---

## 🎯 Platform-Specific Recommendations

### Windows Users
| Purpose | Tool | Alternative |
|---------|------|-------------|
| SSH | MobaXterm | PuTTY |
| Network | Advanced IP Scanner | Angry IP Scanner |
| System | Process Monitor | Sysinternals Suite |
| VM | VirtualBox | VMware Workstation |

### Linux Users
| Purpose | Tool | Alternative |
|---------|------|-------------|
| Shell | Built-in Terminal | Termius |
| Network | Nmap | Wireshark |
| VM | VirtualBox | KVM |
| Scanner | OpenVAS | Nikto |

### macOS Users
| Purpose | Tool | Alternative |
|---------|------|-------------|
| Terminal | iTerm2 | Termius |
| Network | Wireshark | Nmap |
| VM | VirtualBox | VMware Fusion |
| Dev | VS Code | JetBrains IDEs |

---

## 🔄 Update Commands

### Package Managers
```bash
# Windows (Chocolatey)
choco upgrade all

# macOS (Homebrew)
brew upgrade

# Linux (APT)
sudo apt update && sudo apt upgrade -y

# Linux (YUM)
sudo yum update -y
```

### Specific Tools
```bash
# Update Nmap
sudo apt-get install --only-upgrade nmap

# Update SQLMap
cd /path/to/sqlmap && git pull

# Update Metasploit
msfupdate
```

---

## ⚠️ Quick Legal Reminder

**Always ensure:**
- ✓ Written permission before testing
- ✓ Scope clearly defined
- ✓ Testing in isolated environments
- ✓ Following responsible disclosure
- ✗ Unauthorized access is illegal
- ✗ Use only for ethical purposes

---

## 🆘 Quick Help

### Tool Not Working?
1. Check installation requirements
2. Verify platform compatibility
3. Check firewall/antivirus settings
4. Run as administrator (Windows)
5. Check tool documentation

### Need More Info?
- **Detailed docs:** [TOOLS.md](TOOLS.md)
- **Installation:** [install_tools.sh](install_tools.sh)
- **Examples:** See individual tool sections in [TOOLS.md](TOOLS.md)

### Learning Resources
- **Beginner:** OWASP WebGoat, DVWA
- **Intermediate:** VulnHub VMs, Metasploitable
- **Advanced:** Kali Linux tools, custom labs

---

<div align="center">

**[📖 Full Documentation →](TOOLS.md)** | **[💻 Installation →](install_tools.sh)** | **[🔍 Categories →](CATEGORY_INDEX.md)**

</div>

---

*Last updated: 2025* | *Quick reference for 45+ tools*
