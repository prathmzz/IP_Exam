const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Load contacts from a JSON file
const getContacts = () => {
  const data = fs.readFileSync(path.join(__dirname, 'contacts.json'));
  return JSON.parse(data);
};

// Save contacts to a JSON file
const saveContacts = (contacts) => {
  fs.writeFileSync(path.join(__dirname, 'contacts.json'), JSON.stringify(contacts, null, 2));
};

// GET request to retrieve contacts
app.get('/api/contacts', (req, res) => {
  const contacts = getContacts();
  res.json(contacts);
});

// POST request to add a new contact
app.post('/api/contacts', (req, res) => {
    const { name, phone } = req.body;
  
    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ error: 'Phone number must be exactly 10 digits long.' });
    }
  
    const contacts = getContacts();
    contacts.push({ name, phone });
    saveContacts(contacts);
    res.status(201).json({ name, phone });
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
