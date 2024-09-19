//fetch the country data from REST API
//https://restcountries.com/v3.1/all
        (
            function countryPhoneCodes(){
            fetch("https://restcountries.com/v3.1/all?fields=name,flags")
            .then(response=>response.json())
            .then(data=>{
            const countryDropDown=document.getElementById('countrySelect');
            //populate the dropdown with countrie
            data.forEach(country=>{
                const option=document.createElement('option');
                option.value=country.cca2;
                option.textContent=country.name.common;
                countryDropDown.appendChild(option);
            });
            })
            .catch(error=>console.error("error fetching country data",error));
        }
        )()