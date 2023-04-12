const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a5ee383c56msh89b69ce70bf7995p1ff267jsnef2bb173a6b6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));