const contact = require("../model/contact_model")
exports.CreateContactDetails = async(req,res)=>{
try {
    const result = await contact.create({
        ContactId:Math.floor(Math.random()*10000),
        Name:req.body.Name,
        Email:req.body.Email,
        Mobile:req.body.Mobile,
        Message:req.body.Message,

    })
res.json({
    success:true,
    message:"Create Contact Details",
    data:result,
})
} catch (error) {
    res.json({
        success:false,
        message:"Something went worng",
        data:null,
    })
}
}
exports.GetAllContactDetails = async(req,res)=>{
    try {
        const result = await contact.find()
    res.json({
        count:result.length,
        success:true,
        message:"Get All  Contact Details",
        data:result,
    })
    } catch (error) {
        res.json({
            success:false,
            message:"Something went worng",
            data:null,
        })
    }
    }
    exports.deleteContactDetails = async(req,res)=>{
        try {
            const result = await contact.findOneAndDelete({ContactId:req.params.ContactId})
        res.json({
            count:result.length,
            success:true,
            message:"Get All  Contact Details",
            data:result,
        })
        } catch (error) {
            res.json({
                success:false,
                message:"Something went worng",
                data:null,
            })
        }
        }
