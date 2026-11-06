function calculateRentaldays(startDay, endDay){
    return endDay-startDay+1
}

function calculateSubtotal(days, dailyRate){  
    return days * dailyRate;
}

function calculateDiscount(days){
    if (days >= 14) {
        return 10;
    } 
    else if (days > 7) {
        return 5; 
    } 
    else {
        return 0; 
    }
}

console.log(calculateRentaldays(1,5))

console.log(calculateSubtotal(5,1000)

console.log(calculateDiscount(8))
)