
const search_btn=document.querySelector('.search-btn');
const country=document.querySelector('.search');
const feedback=document.querySelector('.feedback');
const name=document.querySelector('h1');
const total_cases=document.querySelector('.cases');
const deaths=document.querySelector('.death');
const recovery=document.querySelector('.recovery');

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

        //fetching API
        const url="https://api.covid19api.com/summary";
        fetch(url)
        .then((res)=>res.json())
        .then((res)=>{
            //console.log(res);
            countries=res.Countries;
            //console.log(countries);
            for (let i=0; i<countries.length;i++){
                if ((countries[i].Country).toLowerCase() === country_name){
                    console.log(countries[i].Country,countries[i].TotalConfirmed);
                    total_cases.textContent=countries[i].TotalConfirmed;
                    deaths.textContent=countries[i].TotalDeaths;
                    recovery.textContent=countries[i].TotalRecovered;
                }
                /*else{
                    total_cases.textContent='Not listed';
                    deaths.textContent='Not listed';
                    recovery.textContent='Not listed';
                }*/
        }
        })
    
    }else{
        //help info
        feedback.textContent='Please enter country name only';
    }
    
});
