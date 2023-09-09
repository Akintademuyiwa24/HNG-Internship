function updateDynamicContent() {
  // Update current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  document.getElementById("dayOfWeek").textContent = dayOfWeek;

  // Function to update the UTC time
  function updateUTCTime() {
    const utcTime = Date.now();
    document.getElementById("utcTime").textContent = utcTime;
  }

  // Updating UTC time initially
  updateUTCTime();

  // Setting an interval to update UTC time every second (adjust as needed)
  setInterval(updateUTCTime, 1000); // Update every 1 second
}

// Calling the function to update dynamic content when the page loads
window.onload = function () {
  updateDynamicContent();
};
