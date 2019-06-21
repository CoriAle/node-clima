const argv = require('yargs').options({
	direccion:{
		alias: "d",
		desc: "Dirección de la ciudad para obtener el clima",
		demand: true
	}
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


/*lugar.getLugarLatLng(argv.direccion).then(console.log); //Imprimir la respuesta
clima.getClima(35,139)
		.then(console.log)
		.catch(console.log)*/
//console.log(argv.direccion);
//55558d00499c9a841312153ce6bf4608
//
const getInfo = async (direccion)=>{
	try {
		let coords = await lugar.getLugarLatLng(direccion);
		let temp = await clima.getClima(coords.lat, coords.lng);
		return `El clima de ${coords.direccion } es de ${temp}`;
		// statements
	} catch(e) {
		// statements
		`No se pudo determinar el clima de ${direccion}`;
	}
}


getInfo(argv.direccion).then(console.log).catch(console.log)