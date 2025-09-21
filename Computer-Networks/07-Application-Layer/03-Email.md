## 12. How Email Works

### Email Protocols:

#### SMTP (Simple Mail Transfer Protocol):
- **Function**: Sending emails
- **Port**: 25 (standard), 587 (secure)
- **Process**: Client to server, server to server

#### POP3 (Post Office Protocol v3):
- **Function**: Downloading emails from server
- **Port**: 110 (standard), 995 (secure)
- **Characteristic**: Downloads and deletes from server

#### IMAP (Internet Message Access Protocol):
- **Function**: Accessing emails on server
- **Port**: 143 (standard), 993 (secure)
- **Characteristic**: Emails remain on server

### Email Sending Process:
1. **Compose**: User writes email in client
2. **SMTP**: Client sends to SMTP server
3. **DNS Lookup**: Find recipient's mail server
4. **Transfer**: SMTP server sends to recipient's server
5. **Storage**: Email stored in recipient's mailbox
6. **Retrieval**: Recipient downloads via POP3/IMAP
