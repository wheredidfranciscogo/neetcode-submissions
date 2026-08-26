class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // return s.length === t.length && s.split('').sort().join('') === t.split('').sort().join('')
        // counting
        // counter key wil be letter, value would be count
        let counter = {}
        for (let i =0; i < s.length; i++ ) {
            counter[s[i]] = (counter[s[i]] || 0) + 1;
        }
        for (let i =0; i < t.length; i++ ) {
            counter[t[i]] = (counter[t[i]] || 0) - 1;
        }
        for (const count of Object.values(counter)) {
            if (count !== 0) return false
        }
        return true
    }
}
