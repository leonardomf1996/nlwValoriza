import express from 'express';

const app = express();

app.get('/', (request, response) => {
   return response.send('Olá');
});

app.post('/', (request, response) => {

});

app.listen(3000, () => {
   console.log('Server is running on port 3000!!');
});