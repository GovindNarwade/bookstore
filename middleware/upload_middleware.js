const multer = require("multer")
const path = require("path");
const storage = multer.diskStorage({
    destination : function (req , BookImage, cb){
        cb(null , "public/uploads")
    },
    filename : function(req , BookImage, cb){
        // const ext = path.extname(file.originalname)
        console.log(BookImage);
        const fn = "book-" + Date.now() +  path.extname(BookImage.originalname);
        req.body.BookImage = "uploads/" + fn;
        cb(null , fn );
    }
})
const upload = multer({storage : storage})
module.exports = upload