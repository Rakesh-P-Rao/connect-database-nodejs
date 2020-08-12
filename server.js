let monogoDb = require("mongodb").MongoClient;
//console.log(monogoDb);


////// connecting mongodb database ""locally"""
// let local_MongoDb = "mongodb://127.0.0.1:27017/mernstack";

//     monogoDb.connect(local_MongoDb, { useUnifiedTopology: true }, (err, db) => {
//       if (err) throw err;
//       console.log("Mongodb successfully connected");
//       let dbname = db.db("mernstack");

//       // create collection
//       // dbname.createCollection("users", (err) => {
//       //     if (err) throw err;
//       //     console.log("successfully created dbname and collections created");
//       //     db.close();
//       // });

//       //insert data
//     let UserCollections = [{
//         name: "shashi",
//         age: "20",
//         company: "Capgemini",
//         designation: "node developer",
//         city: "bengaluru",
//         education: "btech",
//     },
//     {
//         name: "opiu",
//         age: "24",
//         company: "Capgemini",
//         designation: "node developer",
//         city: "bengaluru",
//         education: "btech",
//     },
//     {
//         name: "lkjh",
//         age: "27",
//         company: "Capgemini",
//         designation: "node developer",
//         city: "bengaluru",
//         education: "btech",
//     },
//         ];
        
//       dbname.collection("users").insertMany(UserCollections, (err) => {
//         if (err) throw err;
//         console.log("successfully data inerted in user collections");
//       });
//     });










////// connecting mongodb database through ""cloud"""
// let cloud_MongoDb =
//   "mongodb+srv://js_fullstack:js_fullstack@cluster0.dqyt4.mongodb.net/js_fullstack?retryWrites=true&w=majority";

// //connecting mongodb database
// monogoDb.connect(cloud_MongoDb,{useUnifiedTopology:true} ,(err,db) => {
//     if (err) throw err;
//     console.log("Mongodb successfully connected");
//         let dbname = db.db("mernstack");
      
//      // create collection
//     // dbname.createCollection("users", (err) => {
//     //     if (err) throw err;
//     //     console.log("successfully created dbname and collections created");
//     //     db.close();
//     // });

//     //insert data
//     let UserCollections = [{
//         name: "shashi",
//         age: "20",
//         company: "Capgemini",
//         designation: "node developer",
//         city: "bengaluru",
//         education: "btech",
//     },
//     {
//         name: "opiu",
//         age: "24",
//         company: "Capgemini",
//         designation: "node developer",
//         city: "bengaluru",
//         education: "btech",
//     },
//     {
//         name: "lkjh",
//         age: "27",
//         company: "Capgemini",
//         designation: "node developer",
//         city: "bengaluru",
//         education: "btech",
//     },
//     ];
        
//         dbname.collection("users").insertMany(UserCollections, (err) => {
//           if (err) throw err;
//           console.log("successfully data inerted in user collections");
//         });
// });

    

