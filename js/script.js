const userNum = +prompt(`Введите число`);

function isPrime() {
    for (let i = 2; i < userNum; i++) {
        if (userNum % 2 === 0) {
            return false
        }
    }
    return userNum > 1;
}
const result = isPrime();
console.log(result);