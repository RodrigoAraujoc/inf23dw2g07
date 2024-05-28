# inf23dw2g07



# Broken Object Property Level Authorization

- Mass Assignment
  - Vulnerable Endpoints
    - POST /api/users
- Excessive Data Exposure
  - Vulnerable Endpoints
    - GET /api/authors
    - GET /api/books

# Broken Object Level Authorization

- Vulnerable Endpoints
  - GET /api/users/:name
  - PUT /api/users/:id
    - Get the id from the following endpoints
      - POST /api/auth (Add invalid password for a valid username and check the API response)
      - POST /api/otp (Add username and check the API response)

# Broken Function Level Authorization

- Vulnerable Endpoints
  - POST /api/books
  - PUT /api/books/:bookId
  - DELETE /api/books/:bookId
  - POST /api/authors
  - PUT /api/authors/:authorId
  - DELETE /api/authors/:authorId

# Server-Side Request Forgery

- Vulnerable Endpoint
  - PUT /api/users/:id

# Improper Inventory Management

- localhost:3001/api/users: 
- dev.localhost:3001/api/users: 

# Unsafe Consumption of APIs

The API Does not properly validate and sanitize data gathered from other APIs. The API sends the following request to store email in a third-party API.


- Navigate to /about. Add your XSS payload in email and subscribe. The subscribed email will be returned from the third-party API to the application.


# Broken Authentication

- JWT Key Confusion

  - GET /api/system/key: public key

- Weak Password
  - Admin Login: http://localhost:3000/admin/login
  - Vulnerable Endpoint: POST /api/adminAuth
    - Credentials:
      - Username: admin
      - Password: admin1234
- Weak Implementation of Reset Password (Account Takeover)
  - POST /api/users/verify

# Security Misconfiguration

- The logging is enabled in this application. Send a request to the following endpoint to access the log file
  - Vulnerable Endpoint
    - GET /api/logs

# Unrestricted Resource Consumption

- ReDOS
  - Vulnerable Endpoint
    - GET /api/users/:name

# Unrestricted Access to Sensitive Business Flows

Users can invite their friends and gain credit for each friend who has joined the app. This credit can be later used as cash to get a free book. An attacker exploits this flow by writing a script to automate the registration process, with each new user adding credit to the attacker's account.

- Automation Process
  GET /profile/{YourUsername}: Get ref link from your profile
  POST /api/users + ref link



# Injection

- NOSQL injection
  - Vulnerable Endpoint
    - GET /api/me?id={payload}
- XSS
  - Vulnerable Endpoint
    - PUT /api/users/:id

# Web Cache Deception

- Vulnerable Endpoint: GET /api/me


# Sudents

Guilherme Almeida A040435

Rodrigo Araujo A043595
