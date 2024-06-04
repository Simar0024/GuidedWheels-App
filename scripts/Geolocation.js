const locationResult = document.querySelector('#locationResult');
document.querySelector('#getLocation').addEventListener('click', () => {

const options = {
  enableHighAccuracy: true, 
  timeout: 400000, 
};
  
function success(position) {
  console.log(position);
  let {coords}  = position;
  locationResult.href = `https://www.openstreetmap.org?mlat=${coords.latitude}&mlon=${coords.longitude}`;
}
  
function error(error) {
  console.log(error);
}
  
navigator.geolocation.getCurrentPosition(
  success,
  error,
  options
);
  
navigator.geolocation.watchPosition(success);
});