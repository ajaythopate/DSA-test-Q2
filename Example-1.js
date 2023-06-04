function firstUniqChar(s) {
    const charCount = {};


    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }


    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount[char] === 1) {
            return i;
        }
    }

    return -1;
}


const s = "leetcode";
const result = firstUniqChar(s);
console.log(result);
