const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Kinshasa Democratic Republic of the Congo Temple",
    location: "Kinshasa, DR Congo",
    dedicated: "2011, October, 1",
    area: 12000,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"  
  },
  {
    templeName: "Sapporo Japan",
    location: "Sapporo, Japan",
    dedicated: "2009, October, 4",
    area: 48480,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
  }

];

document.querySelector('#lastModified').innerHTML = `Last Modified: ${document.lastModified}`;
document.querySelector('#currentYear').innerHTML = new Date().getFullYear();

const hamburgerBtn = document.querySelector("#hamburger");
const header = document.querySelector("header");
const albumContenair = document.querySelector('#album');
const navFilters = document.querySelectorAll('nav .item');

hamburgerBtn.addEventListener("click", function (event) {
    header.classList.toggle('open')
})


const displayTemples = function(temples){
    albumContenair.innerHTML = '';
    temples.forEach((temple) => {
        albumContenair.innerHTML += `<figure class="temple-card">
            <h2 class="temple-card__title">${temple.templeName}</h2>
            <div class="temple-card__info">
                <p><span>Location:</span> ${temple.location}</p>
                <p><span>Dedicated:</span> ${temple.dedicated}</p>
                <p><span>Size:</span> ${temple.area.toLocaleString()} sq ft</p>
            </div>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" width="400" height="250">
        </figure>`
    })
}

navFilters.forEach(filter => {
  filter.addEventListener('click', e => {
    e.preventDefault();
    let filterSelected = e.target.getAttribute('href');
    switch(filterSelected)
    {
      case '#old': displayTemples(temples.filter(temple => {
        let dedicatedYear = temple.dedicated.split(',')[0];
        return dedicatedYear < 1900;
      }))
      break;
      case '#new': displayTemples(temples.filter(temple => {
        let dedicatedYear = temple.dedicated.split(',')[0];
        return dedicatedYear > 2000;
      }))
      break;
      case '#large': displayTemples(temples.filter(temple => {
        return temple.area > 90000;
      }))
      break;
      case '#small': displayTemples(temples.filter(temple => {
        return temple.area < 10000;
      }))
      break;
      default: displayTemples(temples)
    }

  })
})

displayTemples(temples);
