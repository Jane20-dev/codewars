const findAverage = function (nums) {
    const numsLength = nums.length
    let sum = 0
    for (let index = 0; index < nums.length; index++) {
        sum = sum + nums[index]
    } 
     const result = sum/numsLength
     return result
   
}

 const numbers = [5,5,5,5]
 findAverage(numbers)