# Security Tools Suite

A collection of Python security tools for hash cracking, SSH brute-forcing, and PDF metadata management. Learn to build practical security tools for penetration testing, security assessments, and privacy protection.

## Project Goal

**Develop practical security tools** for various security tasks:
- **Hash Cracking**: Brute-force and dictionary attacks on hash values
- **SSH Testing**: Automated password testing for SSH authentication
- **Metadata Management**: PDF metadata extraction, manipulation, and cleaning
- **Security Research**: Tools for authorized penetration testing and security assessments

Learn to **build security tools** for authorized security testing and privacy protection.

## Prerequisites

### Required Knowledge
- Python programming skills
- Understanding of hash algorithms and cryptography
- Basic knowledge of network protocols (SSH)
- Understanding of file metadata and privacy concerns

### Required Software
- **Python 3.7+**: For tool development
- **Virtual Environment**: For dependency management
- **External Tools**: exiftool, qpdf (for FakeMetadata)

## Tools Overview

### HashBreaker - Hash Cracking Tool

**Purpose**: Crack hash values using brute-force or dictionary attacks.

**Features:**
- **Hash Algorithms**: MD5, SHA-1, SHA-256, SHA-512
- **Attack Modes**: Brute-force and dictionary attacks
- **Progress Monitoring**: Real-time attempt counting and elapsed time
- **Flexible Input**: Hash values via command line or file

**Usage:**
```bash
# Brute-force attack
python hashbreaker.py -m 0 -a 0 -h <hash> -L 6

# Dictionary attack
python hashbreaker.py -m 0 -a 1 -h <hash> -d wordlist.txt
```

**Technical Details:**
- Supports multiple hash algorithms
- Configurable password length for brute-force
- Progress reporting with status intervals
- Verbose mode for debugging

### ForcePass - SSH Brute-Force Tool

**Purpose**: Test SSH logins via dictionary or brute-force attacks (Hydra-like).

**Features:**
- **Dictionary Attacks**: Test passwords from wordlists
- **Brute-Force**: Generate and test password combinations
- **Custom Charsets**: Configurable character sets
- **Port Configuration**: Support for non-standard SSH ports

**Usage:**
```bash
# Dictionary attack
python forcepass.py -u username -s 10.20.20.53 -w wordlist.txt

# Brute-force (length 3-4, alphanumeric)
python forcepass.py -u username -s 10.20.20.53 --min 3 --max 4

# Custom charset
python forcepass.py -u username -s 10.20.20.53 --min 2 --max 3 -c abc123!
```

**Technical Details:**
- Uses paramiko for SSH connections
- Automatic host key handling
- Configurable timeouts
- Exit codes for automation (0: found, 2: not found)

### FakeMetadata - PDF Metadata Suite

**Purpose**: Extract, manipulate, and clean PDF metadata for privacy protection.

**Tools:**
1. **fakemetadata.py**: Local PDF metadata extraction and manipulation
2. **metascan.py**: Web PDF scanner and metadata extractor
3. **cleanmetadata.py**: Metadata removal for privacy protection

**Features:**
- **Metadata Extraction**: Extract title, author, creation date, etc.
- **Metadata Faking**: Create fake PDF versions with new metadata
- **Web Scraping**: Automatic PDF discovery and download from websites
- **Metadata Cleaning**: Remove metadata using exiftool and qpdf
- **CSV Export**: Structured output for analysis

**Usage:**
```bash
# Extract metadata
python fakemetadata.py -f document.pdf --format

# Create fake PDF
python fakemetadata.py --fake -f original.pdf

# Web scan
python metascan.py -u https://example.com --recursive

# Clean metadata
python cleanmetadata.py -f document.pdf -o cleaned.pdf --backup
```

**Technical Details:**
- Uses PyPDF2/pypdf for PDF processing
- BeautifulSoup4 for web scraping
- exiftool and qpdf for metadata cleaning
- Secure file management with input/output separation

## Learning Outcomes

### Security Tool Development
- **Hash Cracking**: Understanding hash algorithms and cracking techniques
- **Network Security**: SSH protocol and authentication testing
- **Metadata Analysis**: Understanding file metadata and privacy risks
- **Tool Design**: Building practical CLI security tools

### Technical Skills
- **Python Development**: Building command-line security tools
- **Cryptography**: Working with hash algorithms
- **Network Programming**: SSH connections and authentication
- **File Processing**: PDF manipulation and metadata extraction
- **Web Scraping**: Automated PDF discovery and download

### Security Practices
- **Authorized Testing**: Understanding when and how to use these tools
- **Privacy Protection**: Removing sensitive metadata from documents
- **Security Assessment**: Tools for penetration testing
- **Responsible Use**: Ethical boundaries and legal compliance

## Best Practices

### Security Tool Usage
- **Authorization Only**: Only test systems you own or have explicit permission
- **Controlled Environment**: Use isolated test environments
- **Rate Limiting**: Be respectful of target systems
- **Documentation**: Document all testing activities

### Tool Development
- **Error Handling**: Robust error handling and logging
- **Progress Reporting**: User-friendly progress indicators
- **Performance**: Optimize for efficiency
- **Code Quality**: Clean, maintainable code

### Privacy Protection
- **Metadata Awareness**: Understand what metadata reveals
- **Regular Cleaning**: Remove metadata from sensitive documents
- **Backup Strategy**: Always backup before cleaning
- **Verification**: Verify metadata removal

## Security Disclaimer

### Educational Purpose Only

**These tools and all their contents are created exclusively for educational purposes** as part of security research and training. All security testing was performed in controlled, legal environments with proper authorization.

### Ethical Guidelines
- ✅ All activities performed on authorized test systems only
- ✅ No unauthorized access to systems or data
- ✅ Knowledge intended to improve security, not compromise it
- ✅ Responsible disclosure practices followed

### Legal Notice

**Unauthorized access to computer systems is illegal.** These tools should only be used:
- In authorized penetration testing engagements
- On systems you own or have explicit written permission to test
- In designated security training environments
- For legitimate security research with proper authorization

**Never use these tools on production systems or systems you don't own without explicit written authorization.**

## Further References

- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [Hash Algorithm Security](https://csrc.nist.gov/projects/hash-functions)
- [SSH Security Best Practices](https://www.ssh.com/academy/ssh/security)
- [PDF Metadata Privacy](https://cheatsheetseries.owasp.org/cheatsheets/PDF_Security_Cheat_Sheet.html)
