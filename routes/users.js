const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here

  res.send(users);
  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here

  var found = users.filter((user)=> user.email === req.params.email);
  if (found.length>0){
    res.send(found[0]);
  }else{
    res.send("No se encontraron resultados");
  }

  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  let DOB       = req.query.DOB;
  let firstName = req.query.firstName;
  let lastName  = req.query.lastName;
  let toUpd;
  let found = users.filter((user)=> user.email != req.params.email);
  if (found.length>0){

    toUpd = found[0];
    if(firstName){
      toUpd.firstName = firstName;
    }
    if(DOB){
      toUpd.dob = DOB;
    }
    if(lastName){
      toUpd.lastName = lastName;
    }
    users = users.filter((user) => user.email != email);
    users.push(toUpd);
    console.log(toUpd);
    console.log(users);
    res.send( `User with the email ${email} updated.`)

  }else{
    res.send("No se encontraron resultados");
  }

  //res.send("Yet to be implemented")//This line is to be replaced with actual return value
});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented")//This line is to be replaced with actual return value
});

module.exports=router;
