function validateInput(country){
    const country_name = country.value.toLowerCase();
    const name_ver=/^[a-z]{3,}$/;
    if(name_ver.test(country_name)){
        return true;
    }

}
module.exports = validateInput;