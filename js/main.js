const n = 0
console.log('Same plans = $80 a month')
console.log('Different plans = $100 a month with $60 referral credit x2')
const calcPlans = n => {
    for (i=1;i <= n;i++) {
        let sameResult
        let diffResult
        sameResult = 80 * i
        diffResult = 100 * i - 120
        console.log(`\$${sameResult} after ${i} months for same plans`)
        console.log(`\$${diffResult} after ${i} months for different plans`)
        console.log('------------------------------------------------------')
    }
}