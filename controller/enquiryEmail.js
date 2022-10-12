const enquiry = require("../model/contact_model")
const nodemailer = require("nodemailer");

exports.emailSendforEnquiry=async(req,res)=>{
  let data = await enquiry.findOne({Email:req.body.Email});
  console.log(req.body.Email);
  const responseType = {};
  if(data){
      var  transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user:"icaet20@nmiet.edu.in",
          pass:"Bonybaba125@",
        },
      });
    var mailOption = {
        from:"icaet20@nmiet.edu.in",
        to :req.body.Email ,
        subject :"Enquiry",
        text:`Hello ${data.Name} Thanks For Your Enquiry!`
    }
        transporter.sendMail(mailOption, error => {
            error
            ? console.log(`EMAIL NOT SEND ${error}`)
            : console.log("EMAIL SEND");
          
        });
    
      console.log(otpcode);
      responseType.statusText ='Success'
      responseType.message = `Message Successfullly sent `;

  }
  else{
      responseType.statusText ='error'
      responseType.message = 'Email Id not Exit'; 
  }
 res.json(responseType)
 
}