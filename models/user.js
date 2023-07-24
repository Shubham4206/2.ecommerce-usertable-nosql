const mongodb=require('mongodb');
const getDb = require('../util/database').getDb;


class Product {
  constructor(name,email){
    this.name=name;
    this.email=email;
    
  }

  save(){
    const db=getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userId){
    const db=getDb();
    return db.collection('users').find({_id: new ObjectId(userId)});
  }

}

module.exports = User;
