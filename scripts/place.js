document.querySelector('#lastModified').innerHTML = `Last Modified: ${document.lastModified}`;
document.querySelector('#currentYear').innerHTML = new Date().getFullYear();


const calculateWindChill = (temperature, windSpeed) => {
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2);
    }
    return 'N/A';
};

const temperature = document.querySelector('#temperature').textContent;
const windSpeed = document.querySelector('#windSpeed').textContent;
const windChill = calculateWindChill(temperature, windSpeed);
document.querySelector('#windChill').textContent = windChill;