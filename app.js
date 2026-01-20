// import express module
import express from 'express';

//define a port number where the server will listen
const PORT = 3000;

//create an epress application
const app = express();


//define a "root" path 
app.get('/',(req, res) => {

    // send a message to the clietn
    res.send('Hello, World');
});

//start the server 
//this is a annonymous function 
app.listen(PORT, () => {
    console.log(`Server is running at
        http://localhost:${PORT}`);
    });