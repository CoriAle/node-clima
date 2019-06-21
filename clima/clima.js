

const axios = require('axios'); //Peticiones http



const getClima = async (lat, lng)=>{
	const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3e6ae42bed4df40507255092d74aed97&units=metric`)
	return resp.data.main.temp; 
}

module.exports = {
	getClima
}
//api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=55558d00499c9a841312153ce6bf4608&units=metric