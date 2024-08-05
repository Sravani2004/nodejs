const express = require('express')
const app = express();
app.use(express.json());

app.get('/abc',(req,res)=>{
console.log('recieved');
res.send('response sent');
});
app.post('/abc/:d',(req,res)=>{
var input1 = req.params.d;
console.log('recieved');
res.send('response sent'+ input1);
});
app.post('/abc/:d/:e',(req,res)=>{
var input1 = req.params.d;
var input2 = req.params.e;
console.log('recieved');
res.send('response sent'+ input1 + input2);
});
app.post('/abc',(req,res)=>{
var input1 = req.body.username;    
console.log('recieved');
res.json({
    a: 'Data received successfully',
    b:input1 
 });
});
app.listen(3000);

