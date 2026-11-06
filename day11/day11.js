//Discount exercise

    function getDiscount(days) {
        if (days>=15) {
            return 15;
        }
        else if (days>=8) {
            return 10;
        }
        else {
            return 0;
        }
    }

    console.log(getDiscount(10));
    console.log(getDiscount(15));
    console.log(getDiscount(16));
    console.log(getDiscount(4));

//Vehicle booking exercise

// Nested version

function canBookVehicleNested(status, startDate, endDate, today) {

    if (status !== "maintenance") {

        if (startDate >= today) {

            if (endDate >= startDate) {

                return "Vehicle can be booked";

            } else {
                return "End date cannot be before start date";
            }

        } else {
            return "Start date is in the past";
        }

    } else {
        return "Vehicle is under maintenance";
    }
}

//Guard clause version
function canBookVehicle(status,startDate, endDate,today) 
{
   if (status === "maintenance") {
    return "Vehicle is under maintenance";
}

if (startDate < today) {
    return "Start date is in the past";
}

if (endDate < startDate) {
    return "End date cannot be before start date";
}

return "Vehicle can be booked";
}

console.log(canBookVehicle("available", "2026-10-05", "2026-10-10", "2026-09-29"));

console.log(canBookVehicle("maintenance", "2026-10-05", "2026-10-10", "2026-09-29"));

console.log(canBookVehicle("available", "2026-09-20", "2026-10-10", "2026-09-29"));

console.log(canBookVehicle("available", "2026-10-10", "2026-10-05", "2026-09-29"));

//day12 exercise
//Booking list
const vehicles = [
    { id: 1, name: "Van" },
    { id: 2, name: "Car" },
    { id: 3, name: "Bus" }
];
const bookings=[
    {
        clientName: "ABC Company",
        vehicleId: 1,
        dailyRate: 10000,
        status: "confirmed"
    },
    {
        clientName: "XYZ Company",
        vehicleId: 2,
        dailyRate: 15000,
        status: "tentative"
    },
    {
        clientName: "DEF Company",
        vehicleId: 3,
        dailyRate: 20000,
        status: "confirmed"
    }
];

for(const booking of bookings){
    console.log("Bookings are: "+booking.clientName);    
}

//Count confirmed bookings

let confirmedCount=0;

for (const booking of bookings) {

    if (booking.status === "confirmed") {
        confirmedCount++;
    }

}

console.log("Confirmed count: "+confirmedCount);

//To find the highest daily rate
let highestRate = 0;

for (const booking of bookings) {

    if (booking.dailyRate > highestRate) {
        highestRate = booking.dailyRate;
    }

}

console.log("Highest rate: " +highestRate);

//To calculate total value
let total = 0;

for (const booking of bookings) {
    total = total + booking.dailyRate;
}

console.log("Total value: " + total);

//To find bookings for one vehicle
for (const booking of bookings) {

    if (booking.vehicleId === 2) {
        console.log("Bookings for Car: " + booking.clientName);
    }

}

//Timing using nested looping
console.time("nested");

for (const vehicle of vehicles) {

    for (const booking of bookings) {

        if (booking.vehicleId === vehicle.id) {
            // match found
        }

    }

}

console.timeEnd("nested");



