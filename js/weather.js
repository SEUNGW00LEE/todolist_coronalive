const API_KEY = ("51a56ffebfb070e2d3d4ec467bbfd36b");

function onGeoOk(position){
	const lat = position.coords.latitude;
	const lng = position.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
	fetch(url).then(response=> response.json())
		.then(data=> {
		const city = document.querySelector("#city");
		const weather = document.querySelector("#weather");
		city.innerText = `City : ${data.name}`;
		weather.innerText = `Weather : ${data.weather[0].main}`;
	});
}

			
function onGeoErr(){
	alert("Can't find you. No weather for you")
}

 navigator.geolocation.getCurrentPosition( onGeoOk ,  onGeoErr );