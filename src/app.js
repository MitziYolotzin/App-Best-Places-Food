

//
  
const dataView  = document.getElementById('places-data');
const searchName = document.getElementById('search-name');
const order = document.getElementById('order');

//

    fetch('https://app-food-83580.firebaseio.com/appfood.json')
    .then(response => response.json())
    .then(dataRestaurant => {
        console.log(dataRestaurant)
      localStorage.dataRestaurant = JSON.stringify(dataRestaurant.appfood);
     showList(dataRestaurant);
      //return dataRestaurant
    });
  
 
  
  //Print the data
  const printPlacesFood = (appfood) => {
    let namePlaceFood = `
    <div id="restaurant-info">
    <h3>Restaurant</h3>
    <h3></h3>
    <p>${appfood.name}</p>
    <h3>Rating</h3>
    <p>${appfood.rating}</p>
    <h3>Address</h3>
    <p>${appfood.address.street}</p>
    <p> ${appfood.address.city}, ${appfood.address.state}</p>
    <h3>Contact</h3>
    <p>${appfood.contact.phone}</p>
    <p>${appfood.contact.email}</p>
    <a href=${appfood.contact.site} target="_blank">${appfood.contact.site}</a>
    <br></br>
    </div>
    `;
    dataView.insertAdjacentHTML("beforeend", namePlaceFood);
  };
 
  //Show List Data
  const showList = (dataPlaceList) => {
    dataView.innerHTML = "";
    dataPlaceList.forEach(element => {
      printPlacesFood(element);
    });
  };

  //Filter coincidence 
const filterCoincidence = () => {
    searchName.addEventListener('keyup', () => {
      let searchValue = document.getElementById('search-name').value;
      showList(window.data.filterByLetter(JSON.parse(localStorage.dataRestaurant), searchValue));
    });
  }
  

  const getOrderPlace = () => {
   
      order.addEventListener("click", (event) => {
        
        showList(window.data.sortData(JSON.parse(localStorage.getItem("dataRestaurant")), event.target.name));
      });
    
  }
  getOrderPlace()