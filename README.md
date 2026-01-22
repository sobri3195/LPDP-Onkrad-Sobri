# 🛡️ SecGuided - Security & Development Tools Repository

Your comprehensive resource for ethical hacking, security testing, and development tools.

<div align="center">

![Security Tools](https://img.shields.io/badge/Security%20Tools-45-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Last Updated](https://img.shields.io/badge/Last%20Updated-2025-orange) ![Platform](https://img.shields.io/badge/Platform-Cross%20Platform-informational)

</div>

## 📋 Overview

This repository provides curated recommendations for security professionals, ethical hackers, developers, and system administrators. All tools have been carefully selected based on their functionality, reliability, and community support.

## 🗂️ Quick Navigation

| Category | Tools | Description |
|----------|--------|-------------|
| [🛡️ Network Security](TOOLS.md#network-security) | 4 | Port scanning, packet analysis, security auditing |
| [📋 Vulnerability Assessment](TOOLS.md#vulnerability-assessment) | 3 | Vulnerability scanning and assessment |
| [🔐 Password Security](TOOLS.md#password-cracking--hashing) | 3 | Password testing and recovery tools |
| [🌐 Web App Testing](TOOLS.md#web-application-testing) | 3 | Web application security testing |
| [💻 Development Tools](TOOLS.md#development--programming-tools) | 9 | IDEs, version control, database tools |
| [🔧 System Administration](TOOLS.md#system-administration-tools) | 9 | Remote access, monitoring, utilities |
| [🎓 Educational Tools](TOOLS.md#educational--learning-tools) | 8 | Virtual labs and training platforms |
| [📚 Documentation Tools](TOOLS.md#documentation--reference-tools) | 6 | PDF readers, note-taking, communication |

## 🚀 Getting Started

### For Security Professionals

1. **Start with Network Security Tools:**
   ```bash
   # Install Nmap for network discovery
   # Install Wireshark for packet analysis
   # Install Burp Suite Community for web testing
   ```

2. **Set up Your Testing Environment:**
   - Install VirtualBox or VMware Workstation Player
   - Download Kali Linux for a pre-configured security environment
   - Practice on VulnHub VMs or Metasploitable 2

3. **Learn Web Application Security:**
   - Install OWASP ZAP for automated scanning
   - Use SQLMap for SQL injection testing
   - Practice on OWASP WebGoat and DVWA

### For Developers

1. **Set Up Your Development Environment:**
   ```bash
   # Install Visual Studio Code with extensions
   # Configure Git for version control
   # Install DBeaver for database management
   ```

2. **Version Control Setup:**
   - Install Git and GitHub Desktop
   - Configure GitLens extension in VS Code
   - Set up Sourcetree for visual Git management

3. **Database Management:**
   - Use DBeaver for universal database support
   - Install pgAdmin for PostgreSQL
   - Use MongoDB Compass for NoSQL databases

### For System Administrators

1. **Remote Access Tools:**
   ```bash
   # Install Termius for SSH management
   # Use MobaXterm for Windows remote access
   # Set up PuTTY for Windows SSH
   ```

2. **Monitoring and Utilities:**
   - Use TCPView for network connection monitoring
   - Install Process Monitor for system monitoring
   - Use Advanced IP Scanner for network administration

## 📦 Installation Options

### Quick Installation Scripts

We provide automated installation scripts for your convenience:

#### Linux/macOS
```bash
curl -fsSL https://raw.githubusercontent.com/secguided/tools/main/install_tools.sh | bash
```

#### Windows (PowerShell)
```powershell
iwr -useb https://raw.githubusercontent.com/secguided/tools/main/install_tools.ps1 | iex
```

### Manual Installation

1. **Browse the complete tool list:** View [TOOLS.md](TOOLS.md)
2. **Check quick reference guide:** View [QUICK_REFERENCE.md](QUICK_REFERENCE.md)  
3. **Filter by category:** View [CATEGORY_INDEX.md](CATEGORY_INDEX.md)
4. **Use the JSON data:** Programmatically access tools via [tools.json](tools.json)

## 📊 Tool Statistics

- **Total Tools:** 45
- **Open Source:** 38 tools (84%)
- **Cross Platform:** 42 tools (93%)
- **Free Tier Available:** 100% of tools

### By License Type:
- GPL: 12 tools
- MIT/Apache 2.0: 18 tools
- Free (Proprietary): 15 tools

### By Platform:
- Windows: 45 tools (100%)
- Linux: 40 tools (89%)
- macOS: 41 tools (91%)

## 💡 Tool Categories Overview

### 🛡️ Network Security (4 tools)
Essential tools for network discovery, analysis, and security auditing.

**Key Tools:**
- **Nmap:** The industry standard for network discovery and port scanning
- **Wireshark:** Comprehensive packet analysis and network troubleshooting
- **Burp Suite:** Professional web application security testing platform
- **OWASP ZAP:** Automated web application security scanner

**Use Cases:** Network mapping, vulnerability assessment, traffic analysis, web app testing

### 📋 Vulnerability Assessment (3 tools)
Specialized tools for identifying and assessing security vulnerabilities.

**Key Tools:**
- **OpenVAS:** Comprehensive vulnerability scanning and management
- **Nikto:** Web server security scanner
- **Nessus:** Professional vulnerability assessment (free for personal use)

**Use Cases:** Security audits, compliance testing, vulnerability management

### 🔐 Password Security (3 tools)
Tools for testing password strength and recovering lost passwords.

**Key Tools:**
- **Hashcat:** Advanced password recovery with GPU acceleration
- **John the Ripper:** Password security auditing and testing
- **Hydra:** Network login cracker and brute-force tool

**Use Cases:** Password auditing, security testing, recovery operations

### 🌐 Web Application Testing (3 tools)
Essential tools for web application security assessment.

**Key Tools:**
- **SQLMap:** Automatic SQL injection detection and exploitation
- **Metasploit Framework:** Comprehensive penetration testing framework
- **Gobuster:** Directory and file brute-forcing tool

**Use Cases:** Web app security testing, vulnerability exploitation, directory scanning

### 💻 Development Tools (9 tools)
Professional tools for software development and version control.

**Key Tools:**
- **Visual Studio Code:** Versatile code editor with extensive extension ecosystem
- **Git:** Distributed version control system
- **DBeaver:** Universal database management tool

**Use Cases:** Code development, database management, version control

### 🔧 System Administration (9 tools)
Tools for system monitoring, remote access, and administration.

**Key Tools:**
- **Termius:** Modern SSH client with cloud sync
- **Process Monitor:** Real-time system monitoring tool
- **Advanced IP Scanner:** Network discovery and management

**Use Cases:** Remote administration, system monitoring, network management

### 🎓 Educational Tools (8 tools)
Platforms and tools for learning security concepts.

**Key Tools:**
- **Kali Linux:** Complete penetration testing distribution
- **VulnHub:** Vulnerable virtual machines for practice
- **OWASP WebGoat:** Web security training application

**Use Cases:** Security training, practical learning environments, skill development

### 📚 Documentation Tools (6 tools)
Tools for documentation, note-taking, and team collaboration.

**Key Tools:**
- **Notion:** All-in-one workspace for notes and project management
- **Obsidian:** Markdown-based knowledge base system
- **Slack:** Team communication and collaboration platform

**Use Cases:** Documentation, knowledge management, team communication

## 🎯 Tool Usage Examples

### Network Security

**Nmap Network Scan:**
```bash
# Basic network scan
nmap -sV -O target.com

# Scan specific ports
nmap -p 80,443,8080 target.com

# Aggressive scan with OS detection
nmap -A target.com
```

**Wireshark Packet Capture:**
```bash
# Capture on specific interface
wireshark -i eth0

# Filter HTTP traffic
http

# Filter by IP
ip.addr == 192.168.1.1
```

### Web Application Testing

**SQLMap SQL Injection Test:**
```bash
# Basic SQL injection test
sqlmap -u "http://target.com/page.php?id=1" --batch

# Test with specific parameter
sqlmap -u "http://target.com/login" --data="user=admin&pass=admin"

# Get database information
sqlmap -u "http://target.com/page.php?id=1" --dbs
```

**Metasploit Framework:**
```bash
# Start Metasploit
msfconsole

# Search for exploits
search ms17-010

# Use an exploit
use exploit/windows/smb/ms17_010_eternalblue
```

### Development

**Git Workflow:**
```bash
# Initialize repository
git init

# Add changes
git add .

# Commit changes
git commit -m "Initial commit"

# Push to remote
git push origin main
```

### System Administration

**SSH with Termius:**
```bash
# Connect to server
ssh user@server.com -p 22

# With key
cat ~/.ssh/id_rsa.pub | ssh user@server "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
```

**Network Scanning:**
```bash
# Quick network scan
nmap -sn 192.168.1.0/24

# Advanced IP Scanner
advanced_ip_scanner.exe

# TCPView for monitoring
tcpview.exe
```

## 🔍 Finding the Right Tool

### By Skill Level

**Beginner:**
- Start with: OWASP ZAP, Nikto, VirtualBox, Visual Studio Code
- Practice environments: WebGoat, DVWA, VulnHub

**Intermediate:**
- Explore: Nmap, Wireshark, Burp Suite, Metasploit
- Setup: Kali Linux, Docker containers

**Advanced:**
- Master: Hashcat, OpenVAS, Metasploit Framework
- Contribute: Git, GitHub, CI/CD integration

### By Use Case

**Web Application Security:**
- Primary: Burp Suite, OWASP ZAP, SQLMap
- Supporting: Gobuster, Nikto, Metasploit

**Network Security:**
- Primary: Nmap, Wireshark, TCPView
- Supporting: Advanced IP Scanner, Angry IP Scanner

**Password Security:**
- Complete toolkit: Hashcat, John the Ripper, Hydra

**Development Workflow:**
- Essential: Visual Studio Code, Git, DBeaver
- Collaboration: GitHub Desktop, Sourcetree, Slack

**System Administration:**
- Remote access: Termius, MobaXterm, PuTTY
- Monitoring: Process Monitor, Sysinternals Suite

## 📚 Documentation Structure

```
├── README.md                    # Main repository overview
├── TOOLS.md                     # Complete tool documentation
├── QUICK_REFERENCE.md           # Quick reference guide
├── CATEGORY_INDEX.md           # Tools organized by category
├── tools.json                  # Machine-readable tool data
├── install_tools.sh            # Linux/macOS installation script
├── install_tools.ps1           # Windows installation script
├── CONTRIBUTING.md             # Contribution guidelines
├── check_updates.py            # Tool update checker
├── LICENSE                     # MIT License
└── .gitignore                 # Git ignore patterns
```

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### How to Contribute:
1. **Report Issues:** Found outdated information? Open an issue
2. **Suggest Tools:** Recommend new tools for inclusion
3. **Improve Documentation:** Enhance descriptions or add examples
4. **Update Scripts:** Improve installation scripts
5. **Add Tutorials:** Contribute tool usage examples

### Contribution Guidelines:
- Ensure tools are legally available
- Include direct download URLs
- Provide accurate descriptions and use cases
- Follow existing formatting and structure
- Test installation scripts before submission

## ⚖️ Legal & Ethical Guidelines

### ⚠️ Important Notice
These tools are for **educational and authorized testing purposes only**.

### Responsible Use:
- ✓ Use only on systems you own or have explicit written permission to test
- ✓ Obtain proper authorization before any security testing
- ✓ Follow responsible disclosure practices
- ✓ Comply with all applicable laws and regulations
- ✗ Do not use for unauthorized access or malicious purposes
- ✗ Do not use for illegal activities

### Legal Framework:
- Unauthorized computer access is illegal in most jurisdictions
- Always have a written authorization for penetration testing
- Respect scope and boundaries defined in testing agreements
- Document all testing activities and findings

## 📞 Support & Community

### Getting Help:
1. **Check Documentation:** Review tool-specific documentation
2. **Quick Reference:** Use [QUICK_REFERENCE.md](QUICK_REFERENCE.md)
3. **Open Issues:** Report problems via GitHub issues
4. **Community:** Join discussions and share experiences

### Resources:
- **Documentation:** [TOOLS.md](TOOLS.md)
- **Quick Start:** [QUICK_REFERENCE.md](QUICK_REFERENCE.md) 
- **Installation:** [install_tools.sh](install_tools.sh) / [install_tools.ps1](install_tools.ps1)
- **API Data:** [tools.json](tools.json)

## 🔄 Updates & Maintenance

### Regular Updates:
- Tool versions and URLs are regularly reviewed
- New tools are added based on community recommendations
- Installation scripts are tested across platforms
- Documentation is updated with new features and examples

### Update Notifications:
- Watch this repository for updates
- Subscribe to release notifications
- Check [check_updates.py](check_updates.py) for automated updates

## 🙏 Acknowledgments

### Tool Maintainers:
Thanks to all the open source projects and maintainers who create these amazing tools.

### Community Contributors:
Appreciation for the security and development community for continuous feedback and improvements.

### Documentation Standards:
Following industry best practices for tool documentation and recommendation systems.

## 📄 License

This repository is licensed under the MIT License. See [LICENSE](LICENSE) for details.

### Tool Licenses:
Each tool has its own license. Please refer to individual tool documentation for license details.

---

<div align="center">

**[🔧 View All Tools](TOOLS.md)** | **[📖 Quick Reference](QUICK_REFERENCE.md)** | **[📥 Installation](install_tools.sh)**

**Made with ❤️ for the Security & Development Community**

</div>
