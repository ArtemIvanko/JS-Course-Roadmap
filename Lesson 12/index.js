const palindrome = (str) => {
    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

palindrome("радар")
// palindrome("око")
// palindrome("eye")
// palindrome("noon")
// palindrome("15gtytg51")
