function numJewelsInStones(jewels, stones) {
  const jewelSet = new Set(jewels);
  let count = 0;
  for (let stone of stones) {
    if (jewelSet.has(stone)) {
      count++;
    }
  }
  return count;
}