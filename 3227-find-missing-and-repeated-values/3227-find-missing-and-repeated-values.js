var findMissingAndRepeatedValues = function(grid) {

    const arr = grid.flat().sort((a,b)=>a-b)
    const res = []

    const dublicate = arr.find((val)=>arr.indexOf(val) != arr.lastIndexOf(val))
    res.push(dublicate)

    const limit = arr[arr.length-1]+1

     for(let i=1; i<=limit; i++){
        if(!arr.includes(i)){
             res.push(i)
             break;
         }
    }
     return res
};