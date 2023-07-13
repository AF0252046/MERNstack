const express=require('express');
require('./Connection');
const data=require('./schema');
const cors=require('cors');
const app=express();

app.use(express.json());
app.use(cors());

app.get('/single',async (req,resp)=>{
    let result= await data.find({email:(req.params)});
    resp.send(result);
})

app.get('/',async (req,resp)=>{
    let result=await data.find({});
    resp.send(result);
});
app.post('/',async (req,resp)=>{
    let datat= await new data(req.body);
    let result= await datat.save();
    resp.send(result);
});

app.put('/update/email', async (req,resp)=>{
    let result= await data.updateOne({email:(req.body.email)} , {$set: {email:(req.body.uemail)}});
    resp.send(result);
});
app.put('/update/fname', async (req,resp)=>{
    let result= await data.updateOne({email:(req.body.email)} , {$set: {fname:(req.body.ufname)}});
    resp.send(result);
});
app.put('/update/lname', async (req,resp)=>{
    let result= await data.updateOne({email:(req.body.email)} , {$set: {lname:(req.body.ulname)}});
    resp.send(result);
});
app.put('/update/contact', async (req,resp)=>{
    let result= await data.updateOne({number:(req.body.contact)} , {$set: {number:(req.body.ucontact)}});
    resp.send(result);
});
app.put('/update/qualification', async (req,resp)=>{
    let result= await data.updateOne({email:(req.body.email)} , {$set: {edu:(req.body.uedu)}});
    resp.send(result);
});

app.delete('/delete',async (req,resp)=>{
    let result= await data.deleteOne({email:(req.body.email)});
    resp.send(result);
})

app.listen(5000);