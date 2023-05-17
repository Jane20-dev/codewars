const mostLikely = (prob1,prob2) => {
  
const [num1, git1] = 
   prob1.split(':').map(Number);
  
const [num2, git2] =
    prob2.split(':').map(Number);
  
  return num1 / git1 > num2 / git2
  

}
