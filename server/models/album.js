const mongoose=require('mongoose');
const albumSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        imageURL:{
            type:String,
            required:true,
        },
    },
    {timeStamps:true}
);

module.exports=mongoose.model("album",albumSchema)