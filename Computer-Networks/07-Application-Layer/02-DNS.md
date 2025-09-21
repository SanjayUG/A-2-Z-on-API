## 13. DNS (Domain Name System)

### Purpose:
- **Function**: Translate domain names to IP addresses
- **Example**: google.com → 142.250.185.14
- **Necessity**: Humans remember names better than numbers

### DNS Hierarchy:

#### Root Servers:
- **Top level**: Managed by ICANN
- **Function**: Direct queries to TLD servers

#### TLD (Top Level Domain) Servers:
- **Examples**: .com, .org, .net, .in
- **Function**: Direct to authoritative servers

#### Authoritative Servers:
- **Function**: Contain actual IP address mappings
- **Responsibility**: Specific domains

### DNS Resolution Process:
1. **User query**: Browser requests google.com
2. **Local cache**: Check local DNS cache
3. **Recursive resolver**: ISP's DNS server
4. **Root query**: If not cached, query root servers
5. **TLD query**: Root directs to .com servers
6. **Authoritative query**: TLD directs to google.com servers
7. **Response**: IP address returned through chain
8. **Connection**: Browser connects to IP address

### DNS Record Types:
- **A Record**: Maps domain to IPv4 address
- **AAAA Record**: Maps domain to IPv6 address
- **CNAME**: Canonical name (alias)
- **MX**: Mail exchange servers
- **NS**: Name servers for domain
