// Formatting Dates:
// You can format dates to display them in a more readable format using various methods.

const date = new Date();

// Convert date to a string representation in different formats
console.log(date.toDateString()); // Output: Mon Jul 25 2023
console.log(date.toISOString()); // Output: 2023-07-25T00:00:00.000Z
console.log(date.toLocaleString()); // Output: 7/25/2023, 12:00:00 AM (based on the user's local timezone)
// ------------------------------------

// ------------------------------------
// Working with Time:
// You can perform operations on dates, such as adding or subtracting time.


// Add 1 day to the current date
date.setDate(date.getDate() + 1);

// Subtract 2 hours from the current time
date.setHours(date.getHours() - 2);

console.log(date);
