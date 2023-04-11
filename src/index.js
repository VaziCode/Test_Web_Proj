import express from 'express'

const port = process.env.PORT || 3000;
const app = express();

//defin end point
app.get('/', (request,response) => {
    console.log('A new request has arraived to index.js');
    response.send('< Hello from the server main page!</h1>');
});

app.listen(port,()=>{
    console.log(`Server is up and runing at port: ${port}`);
});
