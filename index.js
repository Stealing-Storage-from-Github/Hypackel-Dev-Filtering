const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Define the function to create an issue
async function createIssue(title, body) {
    const token = process.env.API_KEY; // Replace with your GitHub token 
    const repo = 'Stealing-Storage-from-Github/Hypackel-Dev-Filtering';
  const issue = {
    title,
    body,
  };

  try {
    const response = await axios.post(`https://api.github.com/repos/${repo}/issues`, issue, {
      headers: {
        Authorization: `token ${token}`,
      },
    });

    return 'Issue created successfully';
  } catch (error) {
    return 'Error creating issue';
  }
}

createIssue("issue_test_5", "testing... ENV added");
