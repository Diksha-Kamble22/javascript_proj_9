console.log('Hello World!');

var num_oF_month = 2;
var month ;
switch (num_oF_month) {
  case 0:
    month = "Jan";
    break;
  case 1:
    month = "Feb";
    break;
  case 2:
  month = "March";
    break;
  case 3:
    month = "June";
    break;
  case 4:
    month = "july";
    break;
}

console.log(num_oF_month);

// block scope

console.log(planet2); 
for (var i = 0; i < 5; i++) {
  let planet1 = "surya"; 
  var planet2 = "chandra";
  const planet3 = "mangal";
  
  console.log(planet1); 
  console.log(planet2); 
  console.log(planet3);
  console.log(i);
  
}
 
  console.log(planet2); 

// function scope

function scope(jk = 0) {
  let numA = 2;
  var numB = 4;
  const numC = 6;
  console.log(numA);
  console.log(numB);
  console.log(numC);
  return jk = jk + 3;
}

var output = scope();
console.log(output);

// global scope

let gravity = "Sri Hari";
    gravity = 27;

for ( var i = 1; i < 6; i++) {
  var name2 = "Gayatri";
  const name3 = "Diksha";
  
  console.log(name2);
  console.log(name3);

  console.log(gravity); 
}
  
  function earth (c) {
    console.log(gravity);
    
  }
  
    console.log(gravity);
  





