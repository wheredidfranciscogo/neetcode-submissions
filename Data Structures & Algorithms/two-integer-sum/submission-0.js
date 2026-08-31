class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {
        let store = new Map;
        // key:value
        // number:index

        for (let i = 0; i < nums.length; i++) {
            let value = target - nums[i];

            if (store.has(value)) {
                return [i, store.get(value) ]
            }
            store.set(nums[i], i)
        }
    }
}
