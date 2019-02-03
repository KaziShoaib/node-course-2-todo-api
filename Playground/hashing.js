const {SHA256} =  require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = 'abcdef';
// bcrypt.genSalt(10, (err, salt)=>{
//   bcrypt.hash(password, salt, (err, hash)=>{
//     console.log(hash);
//   });
// });

let hashedPassword = "$2a$10$HgykDl99wrmSMwGe5yup3.21LPI0EOzT69qmTv9ZyN0oIAw/EG1DS";

bcrypt.compare(password, hashedPassword, (err, res)=>{
  console.log(res);
});

// let data = {
//   id: 10
// }
//
// let token = jwt.sign(data, '123');
// console.log(token);
//
// let decoded = jwt.verify(token, '123');
// console.log('decoded : ',decoded);

// let message = 'I am user number 3';
// let hash = SHA256(message).toString();
//
// console.log(`Message : ${message}`);
// console.log(`Hash : ${hash}`);
//
// let data = {
//   id: 4
// };
//
// let token = {
//   data,
//   hash : SHA256(JSON.stringify(data)+'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// let resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString();
//
// if(resultHash === token.hash){
//   console.log('data not changed');
// }else {
//   console.log('data was changed. do not trust');
// }
