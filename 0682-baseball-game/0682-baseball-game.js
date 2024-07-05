var calPoints = function(ops) {
    let sum = 0, op_arr = [];
    for(let i=0;i<ops.length;i++){
        switch(ops[i]){
            case '+':
                sum += op_arr[op_arr.push(op_arr[op_arr.length-1] + op_arr[op_arr.length-2])-1];;
                break;
            case 'C':
                sum -= op_arr.pop();
                break;
            case 'D':
                sum += op_arr[op_arr.push(op_arr[op_arr.length-1] * 2)-1];
                break;
            default:
                sum += op_arr[op_arr.push(parseInt(ops[i]))-1];
        }
    }
    return sum;
};