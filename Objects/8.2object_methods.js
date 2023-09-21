const mycountry =
{
    country: "Naimibia",
    capital: "windhoek",
    language: "German",
    population: 2500000,
    neighbours:["Angola", "Zambia", "Botswana"],
    describe: 
    function () 
    {
        console.log(`${this.country} has 
                     ${this.population} million people, their mother tongue is 
                     ${this.language}, they have 
                     ${this.neighbours.length} neighbouring countries and a capital called 
                     ${this.capital}`
                    );
    } //end of function
}//end object scope      




// Calling the describe method to log the description
mycountry.describe();


function hasNoNeighbours(country) {
    return country.neighbours.length === 0;
  }

  mycountry.IsIsland = hasNoNeighbours(mycountry);

  console.log(mycountry);