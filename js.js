function checkSpam(str) {
    let newStr = str.toLowerCase();
    document.write(newStr+'\n');

    return (newStr.search("xxx") != -1 || newStr.search("viagra") != -1);

}

function random(min, max) {
    return min + Math.random() * (max - min);
}

function palindrome(str) {
    let newStr = str.toLowerCase();
    let ln = newStr.length;
    for (i = 0; i < Math.floor(ln/2); ++i) {
        if (newStr[i] != newStr[ln - i - 1]) {
            return false;
        }
    }

    return true;

}

function FizzBuzz(number) {
    for (num = 1; num < number + 1; ++num) {
        if (num % 15 == 0) {
            console.log("fizzbuzz");
        } else if (num % 5 == 0) {
            console.log("buzz");
        } else if (num % 3 == 0) {
            console.log("fizz");
        } else {
            console.log(num);
        }
    }
}

function findVowels1(str) {
    let newStr = str.toLowerCase();
    let letters = "aeiou";
    let ln = newStr.length;
    let count = 0;

    for (i = 0; i < ln; ++i) {
        for (j = 0; j < 5; ++j) {
            if (newStr[i] == letters[j]) {
                count += 1;
            }
        }
    }

    return count;

}

function findVowels(str) {
    let newStr = str.toLowerCase();
    let reLets = [/a/g, /e/g, /i/g, /o/g, /u/g]
    let ln = newStr.length;
    let count = 0;
    let re = null;
    let arr = null;

    for (i = 0; i < 5; ++i) {
        re = reLets[i];
        arr = newStr.match(re);
        if (arr != null) {
            count += arr.length;
        }
    }

    return count;

}

function main() {
}