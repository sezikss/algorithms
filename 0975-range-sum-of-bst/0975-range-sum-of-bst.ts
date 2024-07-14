
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
    const dfs = (root: TreeNode | null): number => {
        if (!root) {
            return 0;
        }
        const { val, left, right } = root;
        let ans = low <= val && val <= high ? val : 0;
        if (val > low) {
            ans += dfs(left);
        }
        if (val < high) {
            ans += dfs(right);
        }
        return ans;
    };
    return dfs(root);
}