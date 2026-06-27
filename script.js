const apiKey = "df5415c461cbb9a55f39927f559b98ba";

document.getElementById("btn").addEventListener("click", function () {
  const city = document.getElementById("city").value;

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      if (data.cod === "404") {
        document.getElementById("result").innerText = "City not found ❌";
      } else {
        const temp = data.main.temp;
        const weather = data.weather[0].description;

        document.getElementById("result").innerText =
          `Temperature: ${temp}°C | Weather: ${weather}`;
      }
    })
    .catch(error => {
      console.log("Error:", error);
    });
});