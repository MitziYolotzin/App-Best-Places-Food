//

const dataView = document.getElementById("places-data");
const searchName = document.getElementById("search-name");
const order = document.getElementById("order");

//

fetch("https://app-food-83580.firebaseio.com/appfood.json")
  .then(response => response.json())
  .then(dataRestaurant => {
    console.log(dataRestaurant);
    localStorage.dataRestaurant = JSON.stringify(dataRestaurant.appfood);
    showList(dataRestaurant);
    //return dataRestaurant
  });

//Print the data
const printPlacesFood = appfood => {
  let namePlaceFood = `
    <div id="restaurant-info">
    <i class="fas fa-utensils"></i><h3>Restaurant</h3> 
    <p>${appfood.name}</p>
    <i class="fas fa-star"></i>
    <h3>Rating</h3>
    <p>${appfood.rating}</p>
    <i class="fas fa-map-marker-alt"></i>
    <h3>Address</h3>
    <p>${appfood.address.street}</p>
    <p> ${appfood.address.city}, ${appfood.address.state}</p>
    <h3>Contact</h3>
    <i class="fas fa-mobile-alt"></i>
    <p>${appfood.contact.phone}</p>
    <i class="fas fa-at"></i>
    <p>${appfood.contact.email}</p>
    <a href=${appfood.contact.site} target="_blank">${appfood.contact.site}</a>
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
