const mongodb=require('mongodb');
const MongoClient=mongodb.MongoClient;
let _db;
const mongoConnect=callback=>{

  MongoClient.connect('mongodb+srv://ishubham803213:Shubham%40903214@cluster0.vem4tbj.mongodb.net/?retryWrites=true&retryReads=true&w=majority')
  .then(client=>{
    _db=client.db();
    callback();
  })
  .catch(err=>console.log(err))
}

const getDb=()=>{
  if(_db){
    return _db;
  }
}


exports.mongoConnect=mongoConnect;
exports.getDb=getDb;