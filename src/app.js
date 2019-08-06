//

const dataView = document.getElementById("places-data");
const searchName = document.getElementById("search-name");
const order = document.getElementById("order");

//

fetch("https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json")
  .then(response => response.json())
  .then(dataRestaurant => {
    console.log(dataRestaurant);
    localStorage.dataRestaurant = JSON.stringify(dataRestaurant.data_melp);
    showList(dataRestaurant);
    //return dataRestaurant
  });

//Print the data
const printPlacesFood = data_melp => {
  let namePlaceFood = `
    <div id="restaurant-info">
    <i class="fas fa-utensils"></i><h3>Restaurant</h3> 
    <p>${data_melp.name}</p>
    <i class="fas fa-star"></i>
    <h3>Rating</h3>
    <p>${data_melp.rating}</p>
    <i class="fas fa-map-marker-alt"></i>
    <h3>Address</h3>
    <p>${data_melp.address.street}</p>
    <p> ${data_melp.address.city}, ${data_melp.address.state}</p>
    <h3>Contact</h3>
    <i class="fas fa-mobile-alt"></i>
    <p>${data_melp.contact.phone}</p>
    <i class="fas fa-at"></i>
    <p>${data_melp.contact.email}</p>
    <a href=${data_melp.contact.site} target="_blank">${data_melp.contact.site}</a>
    <br></br>
    <br></br>
    </div>
    `;
  dataView.insertAdjacentHTML("beforeend", namePlaceFood);
};

//Show List Data
const showList = dataPlaceList => {
  dataView.innerHTML = "";
  dataPlaceList.forEach(element => {
    printPlacesFood(element);
  });
};

//Filter coincidence
const filterCoincidence = () => {
  searchName.addEventListener("keyup", () => {
    let searchValue = document.getElementById("search-name").value;
    showList(
      window.data.filterByLetter(
        JSON.parse(localStorage.dataRestaurant),
        searchValue
      )
    );
  });
};

const getOrderPlace = () => {
  order.addEventListener("click", event => {
    showList(
      window.data.sortData(
        JSON.parse(localStorage.getItem("dataRestaurant")),
        event.target.name
      )
    );
  });
};
getOrderPlace();
