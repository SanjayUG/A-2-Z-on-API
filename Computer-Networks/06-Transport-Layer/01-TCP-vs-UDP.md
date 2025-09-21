## 14. TCP vs UDP

### TCP (Transmission Control Protocol):

#### Characteristics:
- **Connection-oriented**: Three-way handshake
- **Reliable**: Guaranteed delivery
- **Ordered**: Packets arrive in sequence
- **Error correction**: Automatic retransmission
- **Flow control**: Prevents overwhelming receiver

#### Three-Way Handshake:
1. **SYN**: Client sends synchronize packet
2. **SYN-ACK**: Server acknowledges and synchronizes
3. **ACK**: Client acknowledges, connection established

#### Use Cases:
- Web browsing (HTTP/HTTPS)
- File transfer (FTP)
- Email (SMTP, POP3, IMAP)

### UDP (User Datagram Protocol):

#### Characteristics:
- **Connectionless**: No handshake required
- **Unreliable**: No delivery guarantee
- **Fast**: Low overhead
- **No ordering**: Packets may arrive out of order

#### Use Cases:
- Video streaming
- Online gaming
- DNS queries
- DHCP

### Comparison:
| Feature | TCP | UDP |
|---------|-----|-----|
| Connection | Yes | No |
| Reliability | High | Low |
| Speed | Slower | Faster |
| Overhead | High | Low |
| Error Correction | Yes | No |
