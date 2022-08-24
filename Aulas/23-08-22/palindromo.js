let str = 'Natan'
let isPalindrome = (str) => {
    str = str.toLowerCase()
    isPalindrome = str == str.split('').reverse().join('') ? true : false
    console.log(str)
    return isPalindrome
}
console.log(isPalindrome(str))

let str2 = 'Rivaildo'
let isPalindrome2 = (str2) => {
    str2 = str2.toLowerCase()
    isPalindrome2 = str2 == str2.split('').reverse().join('') ? true : false
    console.log(str2)
    return isPalindrome2
}
console.log(isPalindrome2(str2))