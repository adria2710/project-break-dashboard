



const apiKey = "2ed06b849d6f49f2a24181421241112";
        const city = "Madrid"; 
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

        async function fetchWeather() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data)
                // Mostrar información general del clima
                const location = `${data.location.name}, ${data.location.country}`;
                const temperature = `${data.current.temp_c} °C`;
                const condition = data.current.condition.text;
                const icon = data.current.condition.icon;
                const details = `Precipitaciones: ${data.current.precip_mm} mm | Humedad: ${data.current.humidity}% | Viento: ${data.current.wind_kph} km/h`;

                document.getElementById("location").textContent = location;
                document.getElementById("temperature").textContent = temperature;
                document.getElementById("condition").textContent = condition;
                document.getElementById("weather-icon").src = icon;
                document.getElementById("details").textContent = details;

                // prevision por horas
                const forecastContainer = document.getElementById("forecast");
                forecastContainer.innerHTML = "";

                data.forecast.forecastday[0].hour.forEach(hour => {
                    const time = new Date(hour.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
                    const temp = `${hour.temp_c} °C`;
                    const icon = hour.condition.icon;

                    const forecastItem = document.createElement("div");
                    forecastItem.className = "forecast-item";
                    forecastItem.innerHTML = `
                        <p>${time}</p>
                        <img src="${icon}" alt="forecast icon">
                        <p>${temp}</p>
                    `;

                    forecastContainer.appendChild(forecastItem);
                });
            } catch (error) {
                console.error("Error al obtener los datos del clima", error);
            }
        }

        fetchWeather();