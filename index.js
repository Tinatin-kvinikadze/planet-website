




const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');
   

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
       
	});
  const menu_buttons = mobile_menu.querySelectorAll('.planet-name');
menu_buttons.forEach(button => {
    button.addEventListener('click', function() {
        
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    });
});





    const website_URL = "https://planets-api.vercel.app/api/v1/planets/"
   
    
    const planetName =document.querySelector("#mainText")
    const planetImage = document.querySelector("#imageContainer")
    const planetDescription = document.querySelector("#demo")
    const planets = document.querySelectorAll(".planet-name") 
    const rotation = document.querySelector("#rotationNumb")
    const revolution = document.querySelector("#revolutionNumb")
    const radius = document.querySelector("#radiusNumb")
    const temperature = document.querySelector("#tempNumb")
    const overviewButton = document.querySelector("#info-first")
    const planetsButton = document.querySelectorAll(".planet-name")
    const structureButton = document.querySelector("#info-two")
    const geologyButton = document.querySelector("#info-three")
    const btnElist = document.querySelectorAll('.btn')

    const wikiURL= "https://en.wikipedia.org/wiki/"
    const wikipediaSource = document.querySelector("#wikiUrl")


  
    async function getPlanets(user) {
  try {
    const response = await fetch(website_URL + user);
    const data = await response.json();
    rotation.innerHTML = data.rotation;
    revolution.innerHTML = data.revolution;
    radius.innerHTML = data.radius;
    temperature.innerHTML = data.temperature;
    overviewButton.style.backgroundColor = 'transparent';
    structureButton.style.backgroundColor = 'transparent';
    geologyButton.style.backgroundColor = 'transparent';

   
    overviewButton.addEventListener('click', () => {
        overviewButton.style.backgroundColor = data.color;
    });
    structureButton.addEventListener('click', () => {
        structureButton.style.backgroundColor = data.color;
    });
    geologyButton.addEventListener('click', () => {
        geologyButton.style.backgroundColor = data.color;
    });
   








    planetImage.innerHTML = `
        <img class="image-box" src = ${data.images.planet} />`;
    planetDescription.innerHTML = `
        <p class="aboutMe"> ${data.overview.content} </p>`;

    planetName.innerHTML = `<h1 class="main-text">${data.name} </h1>`;
    








    overviewButton.addEventListener("click", () => {
      planetImage.innerHTML = `
          <img class="image-box" src = ${data.images.planet} />`;
      planetDescription.innerHTML = `
        <p class="aboutMe"> ${data.overview.content} </p>`;
      overviewButton.style.backgroundColor = `<div class="info-first">${data.overview.color}</div>`;
      overviewButton.target.style.backgroundColor = `${data.overview.color}`;

    });



    structureButton.addEventListener("click", () => {
      planetImage.innerHTML = `
        <img class="image-box" src=${data.images.internal} />`;
      planetDescription.innerHTML = `
        <p class="aboutMe"> ${data.structure.content} </p>`;
      structureButton.style.backgroundColor = `<div class="info-first">${data.structure.color}</div>`;

    });
    geologyButton.addEventListener("click", () => {
      planetImage.innerHTML = `
           <img class="image-box" src=${data.images.planet} />
            <img class="geologyImg" src=${data.images.geology} />
            `;
      planetDescription.innerHTML = `
            <p class="aboutMe"> ${data.geology.content} </p>`;
      geologyButton.style.backgroundColor = `<div class="info-first">${data.geology.color}</div>`;

    });

    rotation.innerHTML = `
          <p class="rotationNumb">${data.rotation}</p>`;

          wikipediaSource.addEventListener('click', () => {
            wikipediaSource.href = data.overview.source
        });

  }

  catch (error) {
    console.log(error);
  }
}
  

    getPlanets("mercury")

    for (let i=0; i<planets.length; i++) {
      planets[i].addEventListener('click', () => {
          getPlanets(planets[i].textContent)
                      })

                    
                  
                      
                              
                                btnElist.forEach(btnEl => {
                                  btnEl.addEventListener("click", () => {
                                      
                                      btnElist.forEach(btn => {
                                          btn.style.backgroundColor = 'transparent';
                                          btn.classList.remove("active");
                                      });
                                     
                                      btnEl.style.backgroundColor = '#419EBB'; 
                                      btnEl.classList.add("active");

                                    })

                                  });
                              };
                            
                              btnElist.forEach(btnEl => {
                                btnEl.addEventListener("click", () => {
                                    if (window.innerWidth <= 375) {
                                        
                                        btnElist.forEach(btn => {
                                            btn.style.backgroundColor = 'transparent';
                                            btn.classList.remove("active");
                                        });
                                    }
                                    
                                    btnEl.style.backgroundColor = 'transparent'; 
                                    btnEl.classList.add("active");
                                });
                            });


                    







    




 


 