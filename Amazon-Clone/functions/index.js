
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express =require("express");
const cors = require("cors");
const { default: Stripe } = require("stripe");
const { json } = require("express");
// const {setGlobalOptions} =require("firebase-functions");
const dotenv = require("dotenv").config();

const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express()
app.use(cors({origin:true}));

app.use(express.json());

app.get("/", (req, res) =>{
    res.status(200).json({
        message: "Success",
    });

});
app.post("/payment/create", async (req,res)=>{
    const total=req.query.total;
    if(total > 0){
        const paymentIntent=await stripe.paymentIntents.create({
            amount:total,
            currency:"usd"
        })
        // console.log("the payment received",total)
    
     res.send(paymentIntent)
     res.status(201),json({
        clientSecret:paymentIntent.client_secret})
}
     else{
        res.status(404),JSON({
            message:"payment is greater than 0"
        })
     }
});

app.listen(4000,(err)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log('http://localhost:4000')
    }
})




