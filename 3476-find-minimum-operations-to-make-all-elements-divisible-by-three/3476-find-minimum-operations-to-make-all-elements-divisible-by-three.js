var minimumOperations = function(nums) {
    let operation = 0;
    for (let num of nums){
        let rem = num % 3;
        if (rem !== 0){
            operation += Math.min(rem, 3 - rem);
        }
    }
    return operation;
}