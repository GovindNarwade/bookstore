const BookStore = require("../model/bookStore_model")

exports.AddBookInStore = async(req,res)=>{
try {
    const result = await BookStore.create({
        BookId:Math.floor(Math.random()*10000),
        NameofBook :req.body.NameofBook,
        BookPrice :req.body.BookPrice,
        BookAuthor :req.body.BookAuthor,
        BookSummary :req.body.BookSummary,
        BookISBNNumber :req.body.BookISBNNumber,
        DateofPublication :req.body.DateofPublication,
        Booklanguage :req.body.Booklanguage ,
        Numberofpages :req.body.Numberofpages ,
        BookCategory :req.body.BookCategory ,
        BookImage :req.body.BookImage ,
       
    })
    res.json({
        success:true,
        message:"Create BookStore Details",
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
exports.GetAllBookInBookStore = async(req,res)=>{
    try {
        const result = await BookStore.find()
        res.json({
            count:result.length,
            success:true,
            message:"get All BookStore Details",
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
exports.deleteBookInStore = async(req,res)=>{
        try {
            const result = await BookStore.findOneAndDelete({BookId:req.params.BookId})
            res.json({
                success:true,
                message:"delete BookStore Details",
                data:null,
            })
        } catch (error) {
            res.json({
                success:false,
                message:"Something went worng",
                data:null,
            })
        }
        }
        exports.updateBookInStoreDetails = async(req,res)=>{
            try {
                const result = await BookStore.findOneAndUpdate({BookId:req.body.BookId} , req.body , {
                    new: true,
                    runValidators: true,})
                res.json({
                    success:true,
                    message:"update BookStore Details",
                    data:result
                })
            } catch (error) {
                res.json({
                    success:false,
                    message:"Something  went wrong"+Error,
                    data:null
                })  
            }
        }
