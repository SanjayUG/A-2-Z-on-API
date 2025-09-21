// find the longest substring of a sequence of characters in a String

function lengthOfLongestSubString(s) {
    let charSet = new Set();
    let left = 0;
    let max_length = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(s[right]);
        max_length = Math.max(max_length, right - left + 1);
    }
    return max_length;
}

console.log(lengthOfLongestSubString("dvde"));