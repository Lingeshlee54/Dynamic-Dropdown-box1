function getStates(states){
    let districtDropDown = document.querySelector("#districts");

    districtDropDown.innerHTML="";

    fetch("states.json")
    .then(function(response){
       return response.json();
    })
    .then(function(data){
       let districts = data[states];
       let select = "";
       select += `<option value="">Choose a District</option>`;
       for(let city of districts){
          select += `<option value="${city}">${city}</option>`;
       }
       districtDropDown.innerHTML = select;
    });
 }
