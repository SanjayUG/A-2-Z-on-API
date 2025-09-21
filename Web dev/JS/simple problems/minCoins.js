function minCoins(no_coins, coins, amount) {
    let i;
    let count = 0;
    let sum = 0;

    coins.sort((a, b) => a - b);
    for (i = no_coins - 1; i >= 0;) {
        if (coins[i] > (amount - sum)) {
            i--;
        } else if (coins[i] == (amount - sum)) {
            count++;
            sum += coins[i];
            return count;
        } else {
            sum += coins[i];
            count++;
        }
        if (sum == amount) {
            return count;
        }
    }
    return -1;
}

console.log(minCoins(3, [1, 2, 5], 6));
console.log(minCoins(5, [1, 2, 5, 10, 20], 28));
console.log(minCoins(5, [20, 3, 10, 5, 1], 58));
// console.log(minCoins([5, 10], 34));