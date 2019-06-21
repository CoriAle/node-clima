
const axios = require('axios'); //Peticiones http


const getLugarLatLng = async ( dir )=>{
	const encodedUrl = encodeURI(dir);
	console.log("encodedUrl", encodedUrl);


	const instance = axios.create({
	  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl}`,
	  headers: {'X-RapidAPI-Key': '972b1813efmshfd292f94e14a3d3p1bcafdjsn9fc4a5fe35ee'}
	});

	const resp = await instance.get();

	if( resp.data.Results.length ===0)
		throw  new Error(`No hay resultados para ${direccion}`);

	const data 		= resp.data.Results[0];
	const direccion = data.name;
	const lat 		= data.lat;
	const lng 		= data.lon;
			

	return {
		direccion,
		lat,
		lng
	}
}


module.exports = {
	getLugarLatLng,
}


