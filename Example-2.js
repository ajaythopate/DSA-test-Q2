function firstUniqChar(s) {
    const charCount = new Map();


    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        charCount.set(char, charCount.has(char) ? charCount.get(char) + 1 : 1);
    }


    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (charCount.get(char) === 1) {
            return i;
        }
    }

    return -1;
}


const s = "loveleetcode";
const result = firstUniqChar(s);
console.log(result);
