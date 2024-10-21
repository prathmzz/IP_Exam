const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/movies', (req, res) => {
    res.json([
        { id: 1, title: 'Inception', year: 2010, genre: 'Sci-Fi', description: 'A thief who steals corporate secrets ...' },
        { id: 2, title: 'The Matrix', year: 1999, genre: 'Action', description: 'A computer hacker learns from mysterious rebels ...' },
        { id: 3, title: 'Interstellar', year: 2014, genre: 'Sci-Fi', description: 'A team of explorers travel through a wormhole ...' },
        { id: 4, title: 'The Dark Knight', year: 2008, genre: 'Action', description: 'Batman faces the Joker in this crime thriller ...' },
      // Add more movie data here
    ]);
  });


app.listen(5000, () => {
    console.log('Server is running on port 5000');
  });
