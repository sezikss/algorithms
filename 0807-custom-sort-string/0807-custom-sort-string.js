/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, str) {
    const map = new Map();
    for(let i=0;i<str.length;i++){
        map.set(str[i],map.get(str[i])+1||1);
    }
    let res=''
    for(let i=0;i<order.length;i++){
        res += order[i].repeat(map.get(order[i]))
        map.delete(order[i])
    }
        for(let [key,value] of map){
        if(value>0){
            res+= key.repeat(value);
            map.delete(key)
        }        
    }
    return res;
};