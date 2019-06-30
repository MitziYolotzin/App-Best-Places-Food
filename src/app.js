
/*
//test req 
const http = new XMLHttpRequest()

http.open("GET", "https://app-food-83580.firebaseio.com/appfood.json")
http.send()

http.onload = () => console.log(http.responseText)
*/



//funcion req
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://app-food-83580.firebaseio.com/appfood.json', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            //console.log(xhr.responseText);
        }
    }
};

xhr.send(null);


