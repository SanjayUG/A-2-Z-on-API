function getWorkoutSuggestion(timeStr) {
    let [time, period] = timeStr.split(" ");
    // let num_time = Number(time);
    let [hours, minutes] = time.split(":").map(Number);

    if (period === "PM" && hours !== 12) hours += 12;
    if (period === "AM" && hours === 12) hours = 0;
    
    let totalMinutes = hours * 60 + minutes;

    if (totalMinutes > 5 * 60 && totalMinutes <= 9 * 60) {
        return "cardio session";
    }
    else if (totalMinutes > 9 * 60 && totalMinutes <= 12 * 60) {
        return "strength training";
    }
    else if (totalMinutes > 12 * 60 && totalMinutes <= 17 * 60) {
        return "yoga and flexibility";
    }
    else if (totalMinutes > 17 * 60 && totalMinutes <= 20 * 60) {
        return "high-intensity interval training";
    }
    else {
        return "light stretching and cool down";
    }
}

console.log(getWorkoutSuggestion("06:30 AM"));
console.log(getWorkoutSuggestion("10:15 AM"));
console.log(getWorkoutSuggestion("03:00 PM"));
console.log(getWorkoutSuggestion("05:45 PM"));
console.log(getWorkoutSuggestion("09:10 PM")); 




// Workout Suggestion Rules:
// After 05:00 AM till 09:00 AM -  cardio session 
// After 09:00 AM till 12:00 PM -  strength training 
// After 12:00 PM till 05:00 PM -  yoga and flexibility 
// After 05:00 PM till 08:00 PM -  high-intensity interval training 
// After 08:00 PM -  light stretching and cool down 
// The output should