function animal(obj){
    return "This " + obj.color + " " + obj.name + " has " + obj.legs + " legs.";
  } 
  
  var myPet = {name:"dog",legs:4,color:"white"};
  console.log(animal(myPet))