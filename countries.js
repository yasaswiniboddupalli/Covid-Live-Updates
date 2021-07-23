
let countries_string="Afghanistan1Albania1Algeria1Andorra1Angola1Antigua and Barbuda1Argentina1Armenia1Australia1Austria1Azerbaijan1Bahamas1Bahrain1Bangladesh1Barbados1Belarus1Belgium1Belize1Benin1Bhutan1Bolivia1Bosnia and Herzegovina1Botswana1Brazil1Brunei Darussalam1Bulgaria1Burkina Faso1Burundi1Cambodia1Cameroon1Canada1Cape Verde1Central African Republic1Chad1Chile1China1Colombia1Comoros1Congo (Brazzaville)1Congo (Kinshasa)1Costa Rica1Croatia1Cuba1Cyprus1Czech Republic1Côte d'Ivoire1Denmark1Djibouti1Dominica1Dominican Republic1Ecuador1Egypt1El Salvador1Equatorial Guinea1Eritrea1Estonia1Ethiopia1Fiji1Finland1France1Gabon1Gambia1Georgia1Germany1Ghana1Greece1Grenada1Guatemala1Guinea1Guinea-Bissau1Guyana1Haiti1Holy See (Vatican City State)1Honduras1Hungary1Iceland1India1Indonesia1Iran, Islamic Republic of1Iraq1Ireland1Israel1Italy1Jamaica1Japan1Jordan1Kazakhstan1Kenya1Kiribati1Korea (South)1Kuwait1Kyrgyzstan1Lao PDR1Latvia1Lebanon1Lesotho1Liberia1Libya1Liechtenstein1Lithuania1Luxembourg1Macedonia, Republic of1Madagascar1Malawi1Malaysia1Maldives1Mali1Malta1Marshall Islands1Mauritania1Mauritius1Mexico1Micronesia, Federated States of1Moldova1Monaco1Mongolia1Montenegro1Morocco1Mozambique1Myanmar1Namibia1Nepal1Netherlands1New Zealand1Nicaragua1Niger1Nigeria1Norway1Oman1Pakistan1Palau1Palestinian Territory1Panama1Papua New Guinea1Paraguay1Peru1Philippines1Poland1Portugal1Qatar1Republic of Kosovo1Romania1Russian Federation1Rwanda1Saint Kitts and Nevis1Saint Lucia1Saint Vincent and Grenadines1Samoa1San Marino1Sao Tome and Principe1Saudi Arabia1Senegal1Serbia1Seychelles1Sierra Leone1Singapore1Slovakia1Slovenia1Solomon Islands1Somalia1South Africa1South Sudan1Spain1Sri Lanka1Sudan1Suriname1Swaziland1Sweden1Switzerland1Syrian Arab Republic (Syria)1Taiwan, Republic of China1Tajikistan1Tanzania, United Republic of1Thailand1Timor-Leste1Togo1Trinidad and Tobago1Tunisia1Turkey1Uganda1Ukraine1United Arab Emirates1United Kingdom1United States of America1Uruguay1Uzbekistan1Vanuatu1Venezuela (Bolivarian Republic)1Viet Nam1Yemen1Zambia1Zimbabwe1";
let countries_list=countries_string.split('1');
//console.log(countries_list);
document.querySelector('.search').addEventListener('input',e=>{
    let country_arr =[];
    //console.log(e.target.value);
    if(e.target.value){
        country_arr=countries_list.filter(country=>country.toLowerCase().includes(e.target.value));
        country_arr=country_arr.map(country=>`<li>${country}</li>`);
    }
    showCountryArray(country_arr);
  // console.log(country_arr);
});


function showCountryArray(country_arr){
    const html=!country_arr.length?'':country_arr.join('');
    document.querySelector('ul').innerHTML = html;
}
