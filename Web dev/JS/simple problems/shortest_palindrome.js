function shortestPalindrome(s) {
    for (let i = s.length; i >= 0; i--) {
        let prefix = s.slice(0, i);
        if (palindrome(prefix)) {
            let suffix = s.slice(i);
            let reversed = suffix.split('').reverse().join('');
            return reversed + s;
        }
    }
};

function palindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] != s[right]) {
            return false;
        }
        else {
            left++;
            right--;
        }
    }
    return true;
}


console.log(shortestPalindrome("defe"));     // efedefe
console.log(shortestPalindrome("bob"));      // bob
console.log(shortestPalindrome("abcd"));     // dcbabcd
console.log(shortestPalindrome("aacecaaa")); // aaacecaaa