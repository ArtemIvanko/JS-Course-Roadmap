const palindrome = (str) => {
    if (!str) {
        return "Set a string as a parameter";
    }

    const reversed = str.split('').reverse().join('');

    return str === reversed;
}

palindrome("радар")
// palindrome("око")
// palindrome("eye")
// palindrome("noon")
// palindrome("15gtytg51")
