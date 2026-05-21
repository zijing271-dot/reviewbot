/**
 * ReviewBot Waitlist API Server
 * Simple Express backend for collecting waitlist emails.
 *
 * Usage:
 *   node waitlist-server.js
 *   # Runs on http://localhost:3100
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3100;
const DATA_FILE = path.join(__dirname, 'waitlist-emails.json');

// Load existing emails
let emails = [];
try {
  if (fs.existsSync(DATA_FILE)) {
    emails = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  }
} catch (e) {
  console.log('Could not load existing emails, starting fresh');
}

function saveEmails() {
  fs.writeFileSync(DATA_FILE, JSON.stringify(emails, null, 2));
}

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // POST /api/waitlist — add email
  if (req.method === 'POST' && req.url === '/api/waitlist') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        const email = data.email?.trim().toLowerCase();

        if (!email || !email.includes('@')) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid email' }));
          return;
        }

        if (emails.find(e => e.email === email)) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ status: 'already_registered', position: emails.findIndex(e => e.email === email) + 1, total: emails.length }));
          return;
        }

        const entry = {
          email,
          source: data.source || 'landing_page',
          timestamp: data.timestamp || new Date().toISOString(),
          ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        };
        emails.push(entry);
        saveEmails();

        console.log(`[WAITLIST] ${email} (${emails.length} total)`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'registered', position: emails.length, total: emails.length }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid request' }));
      }
    });
    return;
  }

  // GET /api/waitlist/count — get current count
  if (req.method === 'GET' && req.url === '/api/waitlist/count') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ count: emails.length, remaining: Math.max(0, 50 - emails.length) }));
    return;
  }

  // GET /api/waitlist — list all (admin)
  if (req.method === 'GET' && req.url === '/api/waitlist') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ total: emails.length, emails: emails.map(e => ({ email: e.email, source: e.source, timestamp: e.timestamp })) }));
    return;
  }

  // Health check
  if (req.method === 'GET' && req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
    return;
  }

  res.writeHead(404);
  res.end('Not Found');
});

server.listen(PORT, () => {
  console.log(`ReviewBot Waitlist API running on http://localhost:${PORT}`);
  console.log(`  POST /api/waitlist — register email`);
  console.log(`  GET  /api/waitlist/count — get count`);
  console.log(`  GET  /api/waitlist — list all`);
  console.log(`  ${emails.length} emails on file`);
});
