//1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

//a.Get all the countries from Asia continent /region using Filter function
import fetch from "node-fetch";
fetch("http://restcountries.com/v3.1/all").
then((res) => res.json()).
then((data)=>{
   
    let region=data.filter((country)=>{
        return country.region=="Asia"
    })
     region.map((country)=>{
        console.log(country.name.common);
   });
});
//b.Get all the countries with a population of less than 2 lakhs using Filter function
import fetch from "node-fetch";
fetch("http://restcountries.com/v3.1/all").
then((res) => res.json()).
then((data)=>{
   
    let population=data.filter((country)=>{
        return country.population<200000
    })
     population.map((country)=>{
        console.log(country.name.common);
   });
});
//c.Print the following details name, capital, flag using forEach function
import fetch from "node-fetch";
fetch("http://restcountries.com/v3.1/all").
then((res) => res.json()).
then((data)=>{
     data.forEach((country)=>{
        console.log(country.name);
        console.log(country.capital);
        console.log(country.flag)
   });
});
//d.Print the total population of countries using reduce function
import fetch from "node-fetch";
fetch("http://restcountries.com/v3.1/all").
then((res) => res.json()).
then((data)=>{
    
     data.map((country)=>{
        let totalpop =[]
     totalpop.push(country.population)
        let sum=totalpop.reduce((acc,curr)=>{
            return acc+curr
        })
        console.log(sum)
        
    })
});
//e.Print the country which uses US Dollars as currency.

import fetch from "node-fetch";
fetch("http://restcountries.com/v3.1/all").
then((res) => res.json()).
then((data)=>{
    let doller=data.filter((country)=>{
               return country.currencies="USD"
               
     })
    
     doller.map((country)=>{
        console.log(country.name.common)
     })     
   
});

