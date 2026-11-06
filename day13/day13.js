//Day13 exercise
// Function exercise


function calculateRentalDays(startDate, endDate) {
    return endDate - startDate;
}


function calculateSubtotal(days, dailyRate) {
    return days * dailyRate;
}   

function calculateDiscount(days) {
    if (days >= 15) {
        return 15;
    } 
    else if (days >= 8) {
        return 10;
    } 
    else {
        return 0;
    }
}

function calculateGst(amount) {
    return amount *0.18;
}

function calculateTotal(subtotal, discountAmount, gst) {
    return subtotal - discountAmount + gst;
}

function calculateDiscountAmount(subtotal, discountPercentage) {
    return subtotal * (discountPercentage / 100);
}

function calculateGst(amount) { 
    return amount * 0.18; 
}


function calculateTotal(subtotal, discountAmount, gst) { 
    return subtotal - discountAmount + gst;
}

function summary( client, vehicle, days, rate, subtotal, discountAmount, gst, totalamt ) { 
    return `
      Booking Summary
     ----------------
     Client: ${client} 
     Vehicle: ${vehicle} 
     Rental days: ${days} 
     Daily rate: ₹${rate} 
     Subtotal: ₹${subtotal} 
     Discount: ₹${discountAmount} 
     GST: ₹${gst} 
     Final Total: ₹${totalamt} `; 
    }


// Test the functions
console.log("Rental days:", calculateRentalDays(1, 4));

console.log("Subtotal:", calculateSubtotal(3, 12000));

console.log("Discount:", calculateDiscount(8));

console.log("GST:", calculateGst(36000));

console.log("Total:", calculateTotal(36000, 10, 5832));

console.log("Discount Amount:", calculateDiscountAmount(36000, 10));

console.log(
    summary(
        "Greenery Media",
        "Toyota Innova",
        8,
        12000,
        96000,
        10,
        15552,
        101952
    )
);