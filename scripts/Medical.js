let info = document.querySelector('.displayInfo');

let locationLink = document.querySelector('.location-link');

function getLocation(){
    let locationInput = document.querySelector('.location-input').value;

    if(locationInput === '')
        document.querySelector('.show').textContent = 'The location field is empty';
    else{    
    fetch(`https://api.geoapify.com/v1/geocode/search?text=${locationInput}&format=json&apiKey=6688ef88daa147eb8a077d89b1193c8c`)
    .then(response => response.json())
    .then(result => document.querySelector('.show').textContent = `${result.results[0].city},${result.results[0].county},${result.results[0].postcode}`)
    .catch(error => console.log('error', error)); 
    }
} 

function showPosition(position) {
    var lat =  position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat);
    console.log(long);
}

document.querySelector('.js-location-input').addEventListener('keydown',()=>{
    if(event.key === "Enter"){
        getLocation();
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else
        document.querySelector('.show').textContent = 'Typing...';
});

document.querySelector('.location-btn').addEventListener('click',()=>{

    if(document.querySelector('.location-input').value === '')
        alert('Enter the location');
    else{
        var requestOptions = {
            method: 'GET',
          };
    
          fetch("https://api.geoapify.com/v2/places?categories=healthcare,healthcare.hospital,healthcare.clinic_or_praxis&conditions=wheelchair.yes,wheelchair&filter=circle:76.3853971,30.625015,50000&bias=proximity:76.3853971,30.625015&limit=10&apiKey=6688ef88daa147eb8a077d89b1193c8c", requestOptions)
          .then(response => response.json())
          .then(result => {
            let infoLon = result.features[0].properties.lon;
            let infoLat = result.features[0].properties.lat;
    
            locationLink.href = `https://www.openstreetmap.org?mlat=${infoLat}&mlon=${infoLon}`;
            })
            .catch(error => console.log('error', error));  
    }
});
