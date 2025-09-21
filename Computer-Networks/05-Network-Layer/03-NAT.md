## 18. Network Address Translation (NAT)

### Purpose:
- **IP conservation**: Multiple devices share one public IP
- **Security**: Hide internal network structure
- **Cost reduction**: Fewer public IP addresses needed

### How NAT Works:
1. **Internal request**: Device sends packet with private IP
2. **Translation**: Router replaces private IP with public IP
3. **Port mapping**: Router remembers which internal device
4. **External communication**: Packet sent with public IP
5. **Response handling**: Router forwards response to correct device

### Types of NAT:
- **Static NAT**: One-to-one mapping
- **Dynamic NAT**: Pool of public addresses
- **PAT (Port Address Translation)**: Many-to-one with port numbers
