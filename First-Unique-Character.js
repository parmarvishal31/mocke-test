function firstUniqChar(s) {
    // Create a map to store the frequency of each character
    const charMap = new Map();

    // Count the frequency of each character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    // Find the first non-repeating character in the string
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charMap.get(char) === 1) {
            return i;
        }
    }

    // If no non-repeating character found, return -1
    return -1;
}

// Test case 1
const s1 = "leetcode";
console.log(firstUniqChar(s1)); // Output: 0

// Test case 2
const s2 = "loveleetcode";
console.log(firstUniqChar(s2)); // Output: 2

// Test case 3
const s3 = "aabb";
console.log(firstUniqChar(s3)); // Output: -1
