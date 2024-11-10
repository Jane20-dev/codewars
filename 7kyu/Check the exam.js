function checkExam(array1, array2) {
    let correctAnsw = 0;
    for(let i = 0; i < array2.length; i++){
      if(array2[i] === array1[i]){
        correctAnsw += 4
      }else if(array2[i] === ""){
        correctAnsw += 0;
      }else{
        correctAnsw -= 1;
      }
    }
    return correctAnsw < 0 ? 0 : correctAnsw
  }