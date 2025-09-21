## 5. IP Addresses and Port Numbers

### IP Addresses:

#### What is an IP Address?
- **Definition**: Unique identifier for devices on network
- **Format**: Four numbers (0-255) separated by dots (e.g., 192.168.1.1)
- **Purpose**: Route data to correct destination

#### Types of IP Addresses:

**Global IP Address**:
- Assigned by Internet Service Provider (ISP)
- Unique across entire internet
- Used for external communication

**Local IP Address**:
- Assigned by router/modem within local network
- Used for internal network communication
- Assigned via DHCP (Dynamic Host Configuration Protocol)

#### IP Address Classes:
- **Class A**: 1-126 (Network: 8 bits, Host: 24 bits)
- **Class B**: 128-191 (Network: 16 bits, Host: 16 bits)  
- **Class C**: 192-223 (Network: 24 bits, Host: 8 bits)

### Port Numbers:

#### Purpose:
- **Application identification**: Determines which application receives data
- **16-bit numbers**: Range 0-65535 (2^16 possibilities)

#### Port Categories:
- **Well-known ports (0-1023)**: Reserved for system services
  - HTTP: 80
  - HTTPS: 443
  - SSH: 22
  - FTP: 21
- **Registered ports (1024-49151)**: Used by applications
  - MongoDB: 27017
  - MySQL: 3306
- **Dynamic ports (49152-65535)**: Available for general use
