const express = require("express");
const cors= require("cors");
const app = express();
require("dotenv/config");
const {default : mongoose} = require("mongoose");

app.use(cors({origin : true}));
app.use(express.json());

app.get("/",(req,res)=>{
    return res.json("hi there");
})

//user autentication route
const userRoute=require("./routes/auth");
app.use("/api/users/",userRoute);

//artist routes
const artistRoutes = require("./routes/artist");
app.use("/api/artists/",artistRoutes);
//album routes
const albumRoutes=require("./routes/album");
app.use("/api/albums/",albumRoutes);
//song routes
const songRoutes=require("./routes/song");
app.use("/api/songs/",songRoutes);


mongoose.connect(process.env.DB_STRING,{useNewUrlParser : true});
mongoose.connection
.once("open",()=>console.log("connected"))
.on("error",(error)=>console.log(error))


app.listen(4000, () => {
    console.log("Server running on port 4000")
})