



const btnElist = document.querySelectorAll('.btn');


btnElist.forEach(btnEl => {
btnEl.addEventListener('click', () => {
    document.querySelector('.special')?.classList.remove('special');
    btnEl.classList.add('special');
});
});


const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');
   

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
       
	});







// fetch("https://planets-api.vercel.app/api/v1/planets")
// .then((data)=>{
// return data.json();
// }).then((objectData=>{
//     console.log(objectData[0].name);
//     let tableData="";
//     objectData.map((values)=>{
//         tableData +=`<a>${values.name}</a><a>${values.color}</a><a>${values.rotation}</a>`;
//     });
//     document.getElementById("venus").
//     innerHTML=tableData;
// }))










//     // console.log(data);
//     return data.json();
// }).then((objectData)=>{
//     console.log(objectData(0).overview);
//     let nameData="";
//     objectData.map((values)=>{
//        nameData+=`<a>${values.overview}</a>`;
//     });
//     document.getElementById("venus").
//     innerHTML=nameData;
// })
  const api_url ='https://planets-api.vercel.app/api/v1/planets';
  const mainText = document.querySelector("#mainText");
  const mainImage =document.querySelector("#image");

  const mercury =document.querySelector("#venus");
  
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
  
    mainText.textContent=Object.name;
    console.log(data);
    

}


getData();


mercury.addEventListener("click", () => {
    getData();
});

  function change_text() {
    document.getElementById("demo").innerHTML="Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density."
    ;


  }

  
  function change_first() {
    document.getElementById("demo").innerHTML="Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
    
  }

    
  function change_third() {
    document.getElementById("demo").innerHTML="Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
    
  }


 


  function change_image_one() {
    var img = document.getElementById('image');
    img.src = 'planet-mercury1.svg';
    
  }

  
  function change_image_two() {
    var img = document.getElementById('image');
    img.src = 'planet-mercury-internal.svg';
    
  }
  
  function change_image_three() {
    var img = document.getElementById('image');
    img.src = 'geology-mercury.png'; 
  }


  function other_image() {
    var img = document.getElementById('image');
    img.src = 'planet-mercury1.svg';
  }
 