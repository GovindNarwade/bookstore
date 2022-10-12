const mongoose = require("mongoose")

const bookStoreSchema = mongoose.Schema({
    BookId:{
        type:Number
    },
    NameofBook:{
        type:String,
       
    },
    BookPrice:{
        type:Number,
        
    },
    BookAuthor:{
        type:String,
        
    },
    BookSummary:{
        type:String
    },
    BookISBNNumber:{
        type:Number
    },
    DateofPublication:{
        type:String
    },
    Booklanguage:{
        type:String
    },
    Numberofpages:{
        type:Number
    },
    BookCategory:{
        type:String
    },
    BookImage:{
        type:String
    }

},{
timestamps:true
})
module.exports = mongoose.model("book",bookStoreSchema)