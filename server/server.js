const express = require('express');
const path = require('path');

let app = express();

/*app.get('/', (req, res) => {
    res.send('Hello from the web server side...')
});
*/

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
*/

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
})

app.use(express.static(path.join(__dirname, '../public')))

app.listen(3000);