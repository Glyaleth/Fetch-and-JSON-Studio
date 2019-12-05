// TODO: add code here
window.addEventListener("load", function(){
  fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
    response.json().then( function(json) {
      const div = document.getElementById("container");

      let jsonObjects = json;

      for(let i = 0; i <= jsonObjects.length; i++){

        if(jsonObjects[i].active === true){
          div.innerHTML +=
           `<div class ="astronaut">
              <ul>
                <h3>${jsonObjects[i].firstName} ${jsonObjects[i].lastName}</h3>
                 <li>Hours in space: ${jsonObjects[i].hoursInSpace}</li>
                 <li style = "color:green">Active: ${jsonObjects[i].active}</li>
                 <li>Skills: ${jsonObjects[i].skills}</li>
              </ul>
              <img class="avatar" src=${jsonObjects[i].picture}>
          </div>
          `
        }else{
          div.innerHTML +=
                 `<div class ="astronaut">
                   <ul>
                      <h3>${jsonObjects[i].firstName} ${jsonObjects[i].lastName}</h3>
                      <li>Hours in space: ${jsonObjects[i].hoursInSpace}</li>
                 <li style = "color:red">Active: ${jsonObjects[i].active}</li>
                 <li>Skills: ${jsonObjects[i].skills}</li>
              </ul>
              <img class="avatar" src=${jsonObjects[i].picture}>
          </div>`
        }



      }








    });
  });
});
