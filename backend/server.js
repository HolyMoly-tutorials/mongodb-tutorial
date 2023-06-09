const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.get('/', (req, res) => res.send('API running'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/post', require('./routes/api/post'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/user', require('./routes/api/user'));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server starts on port ${PORT}`));
