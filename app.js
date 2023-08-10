// const {john , peter} = require('./names') ;
// require('./add')
// const sayHi = require('./utils');

// const persons = require('./persons')

// sayHi(john);
// sayHi(peter);
// console.log(persons.items[1])
//////////////////////////////////////////////////////

// const os = require('os') ;

// const user = os.userInfo() ;

// // console.log(user)

// console.log(`The time is ${os.uptime()/(60*60)}`) ;

// const currentos = {
//     name : os.type(),
//     release : os.release(),
//     totalmem : os.totalmem(),
//     freeMem : os.freemem(),

// }

// console.log(currentos)

/////////////////////////////////////////////////////////////////

// const path = require('path');

// console.log(path.sep) ;
// console.log(path.relative)

// console.log(path.basename(filePath))

// const path = require('path');

// path1 = path.relative("geeks/website", "geeks/index.html"); // geeks website,index.html
// console.log(path1)

// path2 = path.relative("users/admin", "admin/files/website"); // users admin  files  website
// console.log(path2)

// const absolute = path.resolve(__dirname , 'content' , 'content1' , 'test.txt');
// console.log(absolute)

// const filePath = path.join(__dirname,'/content/content1/test.txt');
// console.log(filePath)

///////////////////////////////////////////////////////////////


// const fs = require("fs");
// const { readFile,writeFile } = require("fs");

// const first = fs.readFileSync("./content/first.txt", "utf8");
// console.log(first);
// const second = fs.readFileSync("./content/second.txt", "utf8");
// console.log(second);

// const result = fs.writeFileSync(
//   "./content/result.txt",
//   `Hello from result : ${first} , ${second}`,
//   { flag: "a" }
// );

// readFile("./content/first.txt", "utf8", (err, result) => {
//   if (err) console.log(err);
//   const first = result;
//   readFile("./content/second.txt", "utf8", (err, result) => {
//     if (err) console.log(err);
//     const second = result;
//     writeFile(
//       "./content/result-async.txt",
//       `here is the result-async ${first} , ${second}`,
//       (err, result) => {
//         if (err) console.log(err);
//         console.log(result);
//       }
//     );
//   });
// });

//////////////////////////////////////////////////////////////////////////////

// const http = require('http') ; 

// const server = http.createServer((req,res)=>{

//   if(req.url === '/'){

//     res.write('Hello to my homepage');
//     res.end()
//   }

//   else if(req.url === '/about'){

//     res.write('Hello to my about page');
//     res.end()
//   }

//   else {
//     res.write(`<h1>Not right request</h1>`);
//     res.end()
//   }
  
// })

// server.listen(5000,()=>console.log(`App listen to port 5000`))

////////////////////////////////////////////////////////////////////////

const _ = require('lodash')
const items = [1,[2,3,[4]]]
const newItems = _.flattenDeep(items)
console.log(newItems);