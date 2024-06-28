// Implemente a classe ClimaDasCidades 
class ClimaDasCidades {
  constructor(cidades){
    this.cidades = cidades;
    }
    obterPrimeiraCidade(){
      return this.cidades[0]
    }
    obterUltimaCidade(){
      return this.cidades[this.cidades.length - 1]
    }
    exportarCSV(){
       return this.cidades.map(cidade => `${cidade.location.name} ${cidade.current.temperature}`).join(', ')
    }
  }

let dados = [{
  "request": {
    "type": "Cidade",
    "query": "Florianópolis, Brasil",
    "language": "pt",
    "unit": "m"
  },
  "location": {
    "name": "Florianópolis",
    "country": "Brasil",
    "region": "Santa Catarina",
    "lat": "37.775",
    "lon": "-122.418",
    "timezone_id": "Brasil/Brasília",
    "localtime": "2020-11-25 09:46",
    "localtime_epoch": 1606297560,
    "utc_offset": "-8.0"
  },
  "current": {
    "observation_time": "05:46 PM",
    "temperature": 14,
    "weather_code": 116,
    "weather_icons": [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
    ],
    "weather_descriptions": [
      "Partly cloudy"
    ],
    "wind_speed": 13,
    "wind_degree": 330,
    "wind_dir": "NNW",
    "pressure": 1024,
    "precip": 0,
    "humidity": 67,
    "cloudcover": 25,
    "feelslike": 14,
    "uv_index": 1,
    "visibility": 16,
    "is_day": "no"
  }
  }, 

  {
    "request": {
      "type": "Cidade",
      "query": "São Paulo",
      "language": "pt",
      "unit": "m"
    },
    "location": {
      "name": "São Paulo",
      "country": "Brasil",
      "region": "São Paulo",
      "lat": "52.374",
      "lon": "4.890",
      "timezone_id": "Brasil/Brasília",
      "localtime": "2020-11-25 09:11",
      "localtime_epoch": 1606295460,
      "utc_offset": "1.0"
    },
    "current": {
      "observation_time": "08:11 AM",
      "temperature": 4,
      "weather_code": 113,
      "weather_icons": [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
      ],
      "weather_descriptions": [
        "Clear"
      ],
      "wind_speed": 17,
      "wind_degree": 160,
      "wind_dir": "SSE",
      "pressure": 1014,
      "precip": 0,
      "humidity": 87,
      "cloudcover": 0,
      "feelslike": 1,
      "uv_index": 1,
      "visibility": 10,
      "is_day": "yes"
    }
  }, 

  {
    "request": {
      "type": "Cidade",
      "query": "Sydney, Austrália",
      "language": "en",
      "unit": "m"
    },
    "location": {
      "name": "Sydney",
      "country": "Austrália",
      "region": "New South Wales",
      "lat": "-33.883",
      "lon": "151.217",
      "timezone_id": "Australia/Sydney",
      "localtime": "2020-11-26 04:47",
      "localtime_epoch": 1606366020,
      "utc_offset": "11.0"
    },
    "current": {
      "observation_time": "05:47 PM",
      "temperature": 19,
      "weather_code": 113,
      "weather_icons": [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0008_clear_sky_night.png"
      ],
      "weather_descriptions": [
        "Clear"
      ],
      "wind_speed": 11,
      "wind_degree": 10,
      "wind_dir": "N",
      "pressure": 1010,
      "precip": 0,
      "humidity": 73,
      "cloudcover": 0,
      "feelslike": 19,
      "uv_index": 1,
      "visibility": 10,
      "is_day": "no"
    }
  }, 

  {
    "request": {
      "type": "Cidade",
      "query": "Hanoi, Vietnã",
      "language": "en",
      "unit": "m"
    },
    "location": {
      "name": "Hanoi",
      "country": "Vietnã",
      "region": "",
      "lat": "21.033",
      "lon": "105.850",
      "timezone_id": "Asia/Ho_Chi_Minh",
      "localtime": "2020-11-26 00:47",
      "localtime_epoch": 1606351620,
      "utc_offset": "7.0"
    },
    "current": {
      "observation_time": "05:47 PM",
      "temperature": 23,
      "weather_code": 116,
      "weather_icons": [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png"
      ],
      "weather_descriptions": [
        "Partly cloudy"
      ],
      "wind_speed": 6,
      "wind_degree": 140,
      "wind_dir": "SE",
      "pressure": 1018,
      "precip": 0,
      "humidity": 78,
      "cloudcover": 75,
      "feelslike": 25,
      "uv_index": 1,
      "visibility": 6,
      "is_day": "no"
    }
  }, 

  {
    "request": {
      "type": "Cidade",
      "query": "beirute",
      "language": "en",
      "unit": "m"
    },
    "location": {
      "name": "Beirute",
      "country": "Líbano",
      "region": "Beyrouth",
      "lat": "33.872",
      "lon": "35.510",
      "timezone_id": "Asia/Beirut",
      "localtime": "2020-11-25 19:48",
      "localtime_epoch": 1606333680,
      "utc_offset": "2.0"
    },
    "current": {
      "observation_time": "05:48 PM",
      "temperature": 20,
      "weather_code": 389,
      "weather_icons": [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0024_thunderstorms.png"
      ],
      "weather_descriptions": [
        "Rain With Thunderstorm"
      ],
      "wind_speed": 11,
      "wind_degree": 240,
      "wind_dir": "WSW",
      "pressure": 1009,
      "precip": 0.5,
      "humidity": 78,
      "cloudcover": 75,
      "feelslike": 20,
      "uv_index": 5,
      "visibility": 8,
      "is_day": "yes"
    }
  }
]


document.write(`
<div style="font-family: Verdana, Geneva, Tahoma, sans-serif;">
    <button id="dv-mostre-primeira-cidade">Mostrar Clima <small>(primeira localização)</small></button>
    <button id="dv-mostre-ultima-cidade">Mostrar Clima <small>(última localização)</small></button>
    <button id="dv-exportar-clima">Exportar clima</button>

    <div>
        <h2>Previsão do tempo</h2>
    <div><hr />
        <h3 id="dv-cidade-pais"></h3>
        <div style="display:flex; margin-left:1.5em" 
             class="icon-temp">
            <img src="" alt="Ícone do clima" id="dv-icone" />
            <h3 style="margin-left:1.5em" 
            id="dv-temperatura"></h3>
        </div>
    </div>
    <hr />
    <div id="dv-exportar-saida"></div>
</div>
`);

let mostreAPrimeiraCidade = document.querySelector("#dv-mostre-primeira-cidade");
let mostreAUltimaCidade = document.querySelector("#dv-mostre-ultima-cidade");
let dvExportarClima = document.querySelector("#dv-exportar-clima");

let dvCidadePais = document.querySelector("#dv-cidade-pais");
let dvIcone = document.querySelector("#dv-icone");
let dvTemperatura = document.querySelector("#dv-temperatura");
let dvExportarSaida = document.querySelector("#dv-exportar-saida");

let climaDasCidades = new ClimaDasCidades(dados);

function formatar(cidade) {
    dvCidadePais.textContent = `${cidade.location.name}, ${cidade.location.country}`;
    dvIcone.src = cidade.current.weather_icons[0];
    dvTemperatura.innerHTML = cidade.current.temperature + "&deg;C";
}

mostreAPrimeiraCidade.addEventListener("click", function() {
    let cidade = climaDasCidades.obterPrimeiraCidade();
    console.log(cidade);
    formatar(cidade);
});

mostreAUltimaCidade.addEventListener("click", function() {
    let cidade = climaDasCidades.obterUltimaCidade();
    formatar(cidade);
});

dvExportarClima.addEventListener("click", function() {
    let csv = climaDasCidades.exportarCSV();
    dvExportarSaida.textContent = csv;
});
