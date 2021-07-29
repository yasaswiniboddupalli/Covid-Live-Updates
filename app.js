
const search_btn=document.querySelector('.search-btn');
const country=document.querySelector('.search');
const feedback=document.querySelector('.feedback');
const name=document.querySelector('h1');
const total_cases=document.querySelector('.cases');
const deaths=document.querySelector('.death');

//geting user input
const res=search_btn.addEventListener('click',e=>{
    e.preventDefault();
    const country_name = country.value.toLowerCase();
    const name_ver=/^[a-z]{3,}$/;

    if(name_ver.test(country_name)){
        //feedback good
        feedback.textContent='';
        //console.log(country_name.toLowerCase());
        name.textContent=country_name;
    
    }else{
        //help info
        feedback.textContent='Please enter country name only';
    }

    //set local storage
    localStorage.setItem('location',country.value);
});

console.log(location.textContent);


const getQuote=async()=>{
    const res = await fetch('https://api.covid19api.com/summary');
    const quotes=await res.json();
   // console.log(quotes);
    countries=quotes.Countries;
    const target = name.textContent.toLowerCase();
    // TotalConfirmed: 142414
//TotalDeaths: 6266
//TotalRecovered: 82586
    for (let i=0; i<countries.length;i++){
            if ((countries[i].Country).toLowerCase() === target){
               // console.log(countries[i].Country,countries[i].TotalConfirmed);
                total_cases.textContent=countries[i].TotalConfirmed;
                deaths.textContent=countries[i].TotalDeaths;
                recovery.textContent=countries[i].TotalRecovered;
            }
    }

}
getQuote();

