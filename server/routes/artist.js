const router = require("express").Router();
const artist=require("../models/artist");


router.post("/save",async (req,res)=>{
    const newArist = artist(
        {
            name : req.body.name,
            imageURL : req.body.imageURL,
            twitter : req.body.twitter,
            instagram : req.body.instagram,
        }
    );
    try {
        const savedArtist=await newArist.save();
        return res.status(200).send({success:true,artist:savedArtist});
    } catch (error) {
        return res.status(400).send({success:false,msg:error});
    }
});

router.get("/getOne/:id",async (req,res)=>{
    // return res.json(req.params.id);
    const filter = {_id :req.params.id};
    const data = await artist.findOne(filter);
    if(data){
        // return res.json(data);
        return res.status(200).send({success:true,artist:data});
    }
    else{
        // return res.json("not available");
        return res.status(400).send({success:false,msg:"data not found"});
    }
})

router.get("/getAll",async (req,res)=>{
    const options = {
        sort : {
            createdAt : 1,
        }
    };
    const data=await artist.find();
    if(data){
        // return res.json(data);
        return res.status(200).send({success:true,artist:data});
    }
    else{
        // return res.json("not available");
        return res.status(400).send({success:false,msg:"data not found"});
    }
});
router.delete("/delete/:id",async (req,res)=>{
    const filter = {_id :req.params.id};
    const result=await artist.deleteOne(filter);
    if(result){
        // return res.json(data);
        return res.status(200).send({success:true,msg:"data deleted successfully",data:result});
    }
    else{
        // return res.json("not available");
        return res.status(400).send({success:false,msg:"data not found"});
    }
});
router.put("/update/:id",async (req,res)=>{
    const filter = {_id:req.params.id};
    const options ={
      upsert : true,
      new : true
    };
    try {
        const result=await artist.findOneAndUpdate(filter,{
            name : req.body.name,
            imageURL : req.body.imageURL,
            twitter : req.body.twitter,
            instagram : req.body.instagram,
        },options);
        return res.status(200).send({success:true,data:result});
    } catch (error) {
        return res.status(400).send({success:false,msg:error});
    }
});

module.exports=router;