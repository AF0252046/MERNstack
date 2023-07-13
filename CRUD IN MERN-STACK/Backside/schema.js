const mongoose=require('mongoose');
let dataschema=mongoose.Schema(
    {
        fname:String,
        lname:String,
        email:String,
        number:Number,
        edu:String
    }
)
module.exports=mongoose.model('data',dataschema);