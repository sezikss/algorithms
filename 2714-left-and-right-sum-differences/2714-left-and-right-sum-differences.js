/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let lArray = [];
    let rArray = [];

    for(let i=0; i < nums.length;i++) {
        let lSum = 0;
        let rSum = 0;
        for(let j=0; j<i; j++) {
            lSum = lSum + nums[j];
        }
        lArray.push(lSum);
        lArray[0] = 0;

        for(let k=i+1; k < nums.length; k++) {
            rSum = rSum + nums[k];
        }
        rArray.push(rSum);
    }
    let ans = [];
    rArray[nums.length -1] = 0;

    for (let p = 0; p< nums.length; p++) {
        ans[p]= Math.abs(lArray[p]- rArray[p]);
    }
    return ans;
};