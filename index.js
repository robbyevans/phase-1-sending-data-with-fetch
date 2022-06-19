// Add your code here
function submitData(username,useremail){

  const userData={
    name:username,
    email:useremail,
  }

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userData), 
  };
  
   fetch("http://localhost:3000/users", configurationObject)
   .then(function (response) {
    return response.json();
  })
  .then(function (object) {
    const header=document.createElement('h1')
    header.innerHTML=(object.id)
  document.querySelector('body').appendChild(header)

  })
  
  .catch( function ( error ) {
    document.body.innerHTML = error.message
  } )
    // document.querySelector('body').innerHTML=(error.message)
    // console.log("Bad things! Ragnarők!");
    // console.log(error.message);
  };
  



submitData('robby','robbyevans@gmail.com')