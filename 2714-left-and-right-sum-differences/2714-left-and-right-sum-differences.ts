function leftRightDifference(nums: number[]): number[] {
    let leftSum = 0;
    let rightSum = nums.reduce((total, currentValue) => total + currentValue);
      const differences: number[] = [];
      for (const num of nums) {
        rightSum -= num;
        differences.push(Math.abs(leftSum - rightSum));
        leftSum += num;
    }
    return differences;
}