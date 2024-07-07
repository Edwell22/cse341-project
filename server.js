const express = require('');
const connectDB = require('');
const app = express();

connectDB();
app.use(express.json({extended:false}));
app.use('',require('./backend/routes/app'));
const port = process.env.Port || 8080;

app.use('/', require('./routes'));

app.listen(Port, () => console.log('server started'));