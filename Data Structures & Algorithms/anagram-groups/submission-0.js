class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const master = new Map;
        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split("").sort().join();

            if (!master.has(key)) {
                master.set(key, []); // empty array is key here
            }
            master.get(key).push(strs[i]);
        }
        return Array.from(master.values());
    }
}
