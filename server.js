const path = require('path');
const express = require('express');
const app = express();
// const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 3000;

// app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//    res.sendFile(path.join(publicPath, 'index.html'));
// });

//Serve static assets REACT in production
if (process.env.NODE_ENV === 'production') { //check environment, if in production
    app.use(express.static('build')); //load static react build folder
    //if we hit homepage, load index.html
    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    );
}

app.listen(port, () => {
   console.log('Server is up!');
});