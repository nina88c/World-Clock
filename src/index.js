function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
   
        let losAngelesDateElement = losAngelesElement.querySelector(".date");
        let lostAngelesTimeElement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
        //hour:minute:second:millisecond(SS)
        lostAngelesTimeElement.innerHTML = `${losAngelesTime.format("h:mm:ss")} 
        <small>${losAngelesTime.format("A")}</small>`;
    
  //paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM	Do YYYY");
  //hour:minute:second:millisecond
  parisTimeElement.innerHTML = `${parisTime.format("h:mm:ss")}
        <small>${parisTime.format("A")}</small>`;

//Dubai 
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiTime = moment().tz("Asia/Dubai");

  dubaiDateElement.innerHTML = dubaiTime.format("MMMM	Do YYYY");
  //hour:minute:second:millisecond
  dubaiTimeElement.innerHTML = `${dubaiTime.format("h:mm:ss")}
        <small>${dubaiTime.format("A")}</small>`;

//Canada
  let canadaElement = document.querySelector("#canada");
  let canadaDateElement = canadaElement.querySelector(".date");
  let canadaTimeElement = canadaElement.querySelector(".time");
  let canadaTime = moment().tz("Canada/Central");

  canadaDateElement.innerHTML = canadaTime.format("MMMM	Do YYYY");
  //hour:minute:second:millisecond
  canadaTimeElement.innerHTML = `${canadaTime.format("h:mm:ss")}
        <small>${canadaTime.format("A")}</small>`;

}



//select cities
function updateCity(event) {
  let cityTimeZone = event.target.value;
    //curent location select
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
}
//update time live
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

