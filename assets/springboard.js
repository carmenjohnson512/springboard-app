$(document).ready(function () {
  let cuisineOptionIDs = [1035, 6, 152, 1, 954, 151, 175, 3, 131, 201, 193, 955, 5, 227, 132, 270, 159, 182, 133, 247, 168,
    22, 30, 491, 956, 111, 381, 121, 158, 202, 229, 25, 161, 287, 928, 881, 153, 203, 192, 100, 411, 541, 958, 959, 268, 651,
    316, 149, 38, 40, 112, 298, 318, 45, 501, 274, 205, 134, 156, 181, 521, 143, 228, 233, 148, 114, 154, 140, 135, 218, 55,
    207, 60, 265, 164, 178, 67, 901, 136, 66, 69, 70, 73, 137, 74, 147, 75, 117, 996, 995, 961, 962, 321, 963, 139, 209, 183,
    162, 82, 970, 219, 87, 983, 361, 320, 84, 998, 601, 304, 691, 210, 83, 128, 119, 611, 461, 267, 972, 471, 966, 89, 86, 141,
    177, 211, 190, 179, 150, 95, 93, 761, 142, 451, 264, 308, 641, 99, 965];

  let cuisineOptions =
  {
    cuisines:
      [
        {
          cuisine: {
            cuisine_id: 1035,
            cuisine_name: "Afghan"
          }
        },
        {
          cuisine: {
            cuisine_id: 6,
            cuisine_name: "Afghani"
          }
        },
        {
          cuisine: {
            cuisine_id: 152,
            cuisine_name: "African"
          }
        },
        {
          cuisine: {
            cuisine_id: 1,
            cuisine_name: "American"
          }
        },
        {
          cuisine: {
            cuisine_id: 954,
            cuisine_name: "Amish"
          }
        },
        {
          cuisine: {
            cuisine_id: 151,
            cuisine_name: "Argentine"
          }
        },
        {
          cuisine: {
            cuisine_id: 175,
            cuisine_name: "Armenian"
          }
        },
        {
          cuisine: {
            cuisine_id: 3,
            cuisine_name: "Asian"
          }
        },
        {
          cuisine: {
            cuisine_id: 131,
            cuisine_name: "Australian"
          }
        },
        {
          cuisine: {
            cuisine_id: 201,
            cuisine_name: "Austrian"
          }
        },
        {
          cuisine: {
            cuisine_id: 193,
            cuisine_name: "BBQ"
          }
        },
        {
          cuisine: {
            cuisine_id: 955,
            cuisine_name: "Bagels"
          }
        },
        {
          cuisine: {
            cuisine_id: 5,
            cuisine_name: "Bakery"
          }
        },
        {
          cuisine: {
            cuisine_id: 227,
            cuisine_name: "Bar Food"
          }
        },
        {
          cuisine: {
            cuisine_id: 132,
            cuisine_name: "Belgian"
          }
        },
        {
          cuisine: {
            cuisine_id: 270,
            cuisine_name: "Beverages"
          }
        },
        {
          cuisine: {
            cuisine_id: 159,
            cuisine_name: "Brazilian"
          }
        },
        {
          cuisine: {
            cuisine_id: 182,
            cuisine_name: "Breakfast"
          }
        },
        {
          cuisine: {
            cuisine_id: 133,
            cuisine_name: "British"
          }
        },
        {
          cuisine: {
            cuisine_id: 247,
            cuisine_name: "Bubble Tea"
          }
        },
        {
          cuisine: {
            cuisine_id: 168,
            cuisine_name: "Burger"
          }
        },
        {
          cuisine: {
            cuisine_id: 22,
            cuisine_name: "Burmese"
          }
        },
        {
          cuisine: {
            cuisine_id: 30,
            cuisine_name: "Cafe"
          }
        },
        {
          cuisine: {
            cuisine_id: 491,
            cuisine_name: "Cajun"
          }
        },
        {
          cuisine: {
            cuisine_id: 956,
            cuisine_name: "California"
          }
        },
        {
          cuisine: {
            cuisine_id: 111,
            cuisine_name: "Cambodian"
          }
        },
        {
          cuisine: {
            cuisine_id: 381,
            cuisine_name: "Canadian"
          }
        },
        {
          cuisine: {
            cuisine_id: 121,
            cuisine_name: "Cantonese"
          }
        },
        {
          cuisine: {
            cuisine_id: 158,
            cuisine_name: "Caribbean"
          }
        },
        {
          cuisine: {
            cuisine_id: 202,
            cuisine_name: "Central Asian"
          }
        },
        {
          cuisine: {
            cuisine_id: 229,
            cuisine_name: "Chilean"
          }
        },
        {
          cuisine: {
            cuisine_id: 25,
            cuisine_name: "Chinese"
          }
        },
        {
          cuisine: {
            cuisine_id: 161,
            cuisine_name: "Coffee and Tea"
          }
        },
        {
          cuisine: {
            cuisine_id: 287,
            cuisine_name: "Colombian"
          }
        },
        {
          cuisine: {
            cuisine_id: 928,
            cuisine_name: "Creole"
          }
        },
        {
          cuisine: {
            cuisine_id: 881,
            cuisine_name: "Crepes"
          }
        },
        {
          cuisine: {
            cuisine_id: 153,
            cuisine_name: "Cuban"
          }
        },
        {
          cuisine: {
            cuisine_id: 203,
            cuisine_name: "Danish"
          }
        },
        {
          cuisine: {
            cuisine_id: 192,
            cuisine_name: "Deli"
          }
        },
        {
          cuisine: {
            cuisine_id: 100,
            cuisine_name: "Desserts"
          }
        },
        {
          cuisine: {
            cuisine_id: 411,
            cuisine_name: "Dim Sum"
          }
        },
        {
          cuisine: {
            cuisine_id: 541,
            cuisine_name: "Diner"
          }
        },
        {
          cuisine: {
            cuisine_id: 958,
            cuisine_name: "Dominican"
          }
        },
        {
          cuisine: {
            cuisine_id: 959,
            cuisine_name: "Donuts"
          }
        },
        {
          cuisine: {
            cuisine_id: 268,
            cuisine_name: "Drinks Only"
          }
        },
        {
          cuisine: {
            cuisine_id: 651,
            cuisine_name: "Eastern European"
          }
        },
        {
          cuisine: {
            cuisine_id: 316,
            cuisine_name: "Ecuadorian"
          }
        },
        {
          cuisine: {
            cuisine_id: 149,
            cuisine_name: "Ethiopian"
          }
        },
        {
          cuisine: {
            cuisine_id: 38,
            cuisine_name: "European"
          }
        },
        {
          cuisine: {
            cuisine_id: 40,
            cuisine_name: "Fast Food"
          }
        },
        {
          cuisine: {
            cuisine_id: 112,
            cuisine_name: "Filipino"
          }
        },
        {
          cuisine: {
            cuisine_id: 298,
            cuisine_name: "Fish and Chips"
          }
        },
        {
          cuisine: {
            cuisine_id: 318,
            cuisine_name: "Fondue"
          }
        },
        {
          cuisine: {
            cuisine_id: 45,
            cuisine_name: "French"
          }
        },
        {
          cuisine: {
            cuisine_id: 501,
            cuisine_name: "Frozen Yogurt"
          }
        },
        {
          cuisine: {
            cuisine_id: 274,
            cuisine_name: "Fusion"
          }
        },
        {
          cuisine: {
            cuisine_id: 205,
            cuisine_name: "Georgian"
          }
        },
        {
          cuisine: {
            cuisine_id: 134,
            cuisine_name: "German"
          }
        },
        {
          cuisine: {
            cuisine_id: 156,
            cuisine_name: "Greek"
          }
        },
        {
          cuisine: {
            cuisine_id: 181,
            cuisine_name: "Grill"
          }
        },
        {
          cuisine: {
            cuisine_id: 521,
            cuisine_name: "Hawaiian"
          }
        },
        {
          cuisine: {
            cuisine_id: 143,
            cuisine_name: "Healthy Food"
          }
        },
        {
          cuisine: {
            cuisine_id: 228,
            cuisine_name: "Hungarian"
          }
        },
        {
          cuisine: {
            cuisine_id: 233,
            cuisine_name: "Ice Cream"
          }
        },
        {
          cuisine: {
            cuisine_id: 148,
            cuisine_name: "Indian"
          }
        },
        {
          cuisine: {
            cuisine_id: 114,
            cuisine_name: "Indonesian"
          }
        },
        {
          cuisine: {
            cuisine_id: 154,
            cuisine_name: "International"
          }
        },
        {
          cuisine: {
            cuisine_id: 140,
            cuisine_name: "Iranian"
          }
        },
        {
          cuisine: {
            cuisine_id: 135,
            cuisine_name: "Irish"
          }
        },
        {
          cuisine: {
            cuisine_id: 218,
            cuisine_name: "Israeli"
          }
        },
        {
          cuisine: {
            cuisine_id: 55,
            cuisine_name: "Italian"
          }
        },
        {
          cuisine: {
            cuisine_id: 207,
            cuisine_name: "Jamaican"
          }
        },
        {
          cuisine: {
            cuisine_id: 60,
            cuisine_name: "Japanese"
          }
        },
        {
          cuisine: {
            cuisine_id: 265,
            cuisine_name: "Jewish"
          }
        },
        {
          cuisine: {
            cuisine_id: 164,
            cuisine_name: "Juices"
          }
        },
        {
          cuisine: {
            cuisine_id: 178,
            cuisine_name: "Kebab"
          }
        },
        {
          cuisine: {
            cuisine_id: 67,
            cuisine_name: "Korean"
          }
        },
        {
          cuisine: {
            cuisine_id: 901,
            cuisine_name: "Laotian"
          }
        },
        {
          cuisine: {
            cuisine_id: 136,
            cuisine_name: "Latin American"
          }
        },
        {
          cuisine: {
            cuisine_id: 66,
            cuisine_name: "Lebanese"
          }
        },
        {
          cuisine: {
            cuisine_id: 69,
            cuisine_name: "Malaysian"
          }
        },
        {
          cuisine: {
            cuisine_id: 70,
            cuisine_name: "Mediterranean"
          }
        },
        {
          cuisine: {
            cuisine_id: 73,
            cuisine_name: "Mexican"
          }
        },
        {
          cuisine: {
            cuisine_id: 137,
            cuisine_name: "Middle Eastern"
          }
        },
        {
          cuisine: {
            cuisine_id: 74,
            cuisine_name: "Mongolian"
          }
        },
        {
          cuisine: {
            cuisine_id: 147,
            cuisine_name: "Moroccan"
          }
        },
        {
          cuisine: {
            cuisine_id: 75,
            cuisine_name: "Mughlai"
          }
        },
        {
          cuisine: {
            cuisine_id: 117,
            cuisine_name: "Nepalese"
          }
        },
        {
          cuisine: {
            cuisine_id: 996,
            cuisine_name: "New American"
          }
        },
        {
          cuisine: {
            cuisine_id: 995,
            cuisine_name: "New Mexican"
          }
        },
        {
          cuisine: {
            cuisine_id: 961,
            cuisine_name: "New Zealand"
          }
        },
        {
          cuisine: {
            cuisine_id: 962,
            cuisine_name: "Nicaraguan"
          }
        },
        {
          cuisine: {
            cuisine_id: 321,
            cuisine_name: "Pacific"
          }
        },
        {
          cuisine: {
            cuisine_id: 963,
            cuisine_name: "Pacific Northwest"
          }
        },
        {
          cuisine: {
            cuisine_id: 139,
            cuisine_name: "Pakistani"
          }
        },
        {
          cuisine: {
            cuisine_id: 209,
            cuisine_name: "Pan Asian"
          }
        },
        {
          cuisine: {
            cuisine_id: 183,
            cuisine_name: "Patisserie"
          }
        },
        {
          cuisine: {
            cuisine_id: 162,
            cuisine_name: "Peruvian"
          }
        },
        {
          cuisine: {
            cuisine_id: 82,
            cuisine_name: "Pizza"
          }
        },
        {
          cuisine: {
            cuisine_id: 970,
            cuisine_name: "Po'Boys"
          }
        },
        {
          cuisine: {
            cuisine_id: 219,
            cuisine_name: "Polish"
          }
        },
        {
          cuisine: {
            cuisine_id: 87,
            cuisine_name: "Portuguese"
          }
        },
        {
          cuisine: {
            cuisine_id: 983,
            cuisine_name: "Pub Food"
          }
        },
        {
          cuisine: {
            cuisine_id: 361,
            cuisine_name: "Puerto Rican"
          }
        },
        {
          cuisine: {
            cuisine_id: 320,
            cuisine_name: "Ramen"
          }
        },
        {
          cuisine: {
            cuisine_id: 84,
            cuisine_name: "Russian"
          }
        },
        {
          cuisine: {
            cuisine_id: 998,
            cuisine_name: "Salad"
          }
        },
        {
          cuisine: {
            cuisine_id: 601,
            cuisine_name: "Salvadorean"
          }
        },
        {
          cuisine: {
            cuisine_id: 304,
            cuisine_name: "Sandwich"
          }
        },
        {
          cuisine: {
            cuisine_id: 691,
            cuisine_name: "Scandinavian"
          }
        },
        {
          cuisine: {
            cuisine_id: 210,
            cuisine_name: "Scottish"
          }
        },
        {
          cuisine: {
            cuisine_id: 83,
            cuisine_name: "Seafood"
          }
        },
        {
          cuisine: {
            cuisine_id: 128,
            cuisine_name: "Sichuan"
          }
        },
        {
          cuisine: {
            cuisine_id: 119,
            cuisine_name: "Singaporean"
          }
        },
        {
          cuisine: {
            cuisine_id: 611,
            cuisine_name: "Somali"
          }
        },
        {
          cuisine: {
            cuisine_id: 461,
            cuisine_name: "Soul Food"
          }
        },
        {
          cuisine: {
            cuisine_id: 267,
            cuisine_name: "South African"
          }
        },
        {
          cuisine: {
            cuisine_id: 972,
            cuisine_name: "South American"
          }
        },
        {
          cuisine: {
            cuisine_id: 471,
            cuisine_name: "Southern"
          }
        },
        {
          cuisine: {
            cuisine_id: 966,
            cuisine_name: "Southwestern"
          }
        },
        {
          cuisine: {
            cuisine_id: 89,
            cuisine_name: "Spanish"
          }
        },
        {
          cuisine: {
            cuisine_id: 86,
            cuisine_name: "Sri Lankan"
          }
        },
        {
          cuisine: {
            cuisine_id: 141,
            cuisine_name: "Steak"
          }
        },
        {
          cuisine: {
            cuisine_id: 177,
            cuisine_name: "Sushi"
          }
        },
        {
          cuisine: {
            cuisine_id: 211,
            cuisine_name: "Swedish"
          }
        },
        {
          cuisine: {
            cuisine_id: 190,
            cuisine_name: "Taiwanese"
          }
        },
        {
          cuisine: {
            cuisine_id: 179,
            cuisine_name: "Tapas"
          }
        },
        {
          cuisine: {
            cuisine_id: 150,
            cuisine_name: "Tex-Mex"
          }
        },
        {
          cuisine: {
            cuisine_id: 95,
            cuisine_name: "Thai"
          }
        },
        {
          cuisine: {
            cuisine_id: 93,
            cuisine_name: "Tibetan"
          }
        },
        {
          cuisine: {
            cuisine_id: 761,
            cuisine_name: "Tunisian"
          }
        },
        {
          cuisine: {
            cuisine_id: 142,
            cuisine_name: "Turkish"
          }
        },
        {
          cuisine: {
            cuisine_id: 451,
            cuisine_name: "Ukrainian"
          }
        },
        {
          cuisine: {
            cuisine_id: 264,
            cuisine_name: "Uruguayan"
          }
        },
        {
          cuisine: {
            cuisine_id: 308,
            cuisine_name: "Vegetarian"
          }
        },
        {
          cuisine: {
            cuisine_id: 641,
            cuisine_name: "Venezuelan"
          }
        },
        {
          cuisine: {
            cuisine_id: 99,
            cuisine_name: "Vietnamese"
          }
        },
        {
          cuisine: {
            cuisine_id: 965,
            cuisine_name: "Welsh"
          }
        }
      ]
  };


  var cuisineSelected = '';
  var cuisineID;
  let searchInput = " ";
  var cityInfo = " ";

  const APIKey = "cd932dfc82bc08b58c79cefff1fc925a";
  const APIKey2 = "1092a507c481907491fcd43ea457fbd9";

  //function to take city name input and populate city name & city-based restaurant and event recommendations 

  $(".search-button").on("click", function currentCity() {
    event.preventDefault();
    console.log(event);
    console.log(searchInput);
    searchInput = event.target.parentElement.parentElement.children[0].children[0].value;
    // if ($(".search-input")[0].value === '') {
    /*  searchInput = $(".search-input")[1].value; event.target.parentElement.parentElement.children[0].children[0].value;
   } else {
     searchInput = $(".search-input").val(); event.target.parentElement.parentElement.children[0].children[0].value;
   } */
    //we also need to check differences 
    getEvents(page);
    getWeather(weatherCity);

    let citiesURL = "https://developers.zomato.com/api/v2.1/cities?q=" + searchInput;

    // let corsUrl = 'https://cors-anywhere.herokuapp.com/' + citiesURL

    console.log("this is what we typed", searchInput);
    $.ajax({
      dataType: "json",
      url: citiesURL,
      method: "GET",
      // crossDomain: true,
      // async: true,
      headers: {
        "user-key": APIKey,
        "x-requested-with": "xhr"
      },
    }).then(function (data) {

      console.log(data)

      let cityID = data.location_suggestions[0].id;
      let cityName = data.location_suggestions[0].name;
      console.log("city ID from API? ", cityID);
      $("#cityTitle").text("Welcome to " + cityName);
      //   console.log("is city name working?", cityName)

        cityInfo = {
            name: cityName,
            cityId: cityID
      }
      
      let strCityInfo = JSON.stringify(cityInfo);
      localStorage.setItem('cityInfo', strCityInfo)

      restaurantRecs(cityID);
      getEvents(page);
    }).catch(function (err) {
      console.log("ERR FOR AJAX CALL", err)
    })
  });

  //RESTAURANT PAGE
  //function to populate cuisine dropdown
  for (let i = 0; i < cuisineOptions.cuisines.length; i++) {
    console.log("looping?")
    let cuisineName = cuisineOptions.cuisines[i].cuisine.cuisine_name;
    let dropdownItem = $("<div>").addClass("dropdown-item");
    dropdownItem.text(cuisineName);
    $(".dropdown-content").append(dropdownItem);
    // console.log("appending cuisines?")
  };

//   let parseCityInfo = JSON.parse(localStorage.getItem('cityInfo'))
//   restaurantRecs(parseCityInfo.cityId)

  if (window.location.href.split("/").slice(-1)[0] === "restaurants.html") {
    var parseCityInfo = JSON.parse(localStorage.getItem('cityInfo'))
    restaurantRecs(parseCityInfo.cityId)

    $("#cityTitle").text("Welcome to " + parseCityInfo.name);
    console.log("currently on restaurants page");
  }

  // on click funciton to add is-active class to dropdown to show cuisine options
  $('#cuisineDropdown').on('click', function () {
    $('.dropdown').addClass('is-active');
  })

  // onclick function to add select (pointer) functionality to cuisine choice & collapse dropdown
  $(".dropdown-item").on("click", function () {
    $("#cuisine-choice").text($(this).text())
    cuisineSelected = $(this).text()
    $('.dropdown').removeClass('is-active');
    $(".box").empty();

    var parseCityInfo = JSON.parse(localStorage.getItem('cityInfo'))
    restaurantRecs(parseCityInfo.cityId)

  })

  //function to populate restaurant recommendations by cityID
  function restaurantRecs(cityId) {
    for (let i = 0; i < cuisineOptions.cuisines.length; i++) {
      // console.log('this is the cuisine selected', cuisineSelected, 'comparing tooooo',cuisineOptions.cuisines[i].cuisine.cuisine_name )
      if (cuisineSelected === cuisineOptions.cuisines[i].cuisine.cuisine_name) {
        cuisineID = cuisineOptions.cuisines[i].cuisine.cuisine_id;
      }
    };


    let restaurantsURL = "https://developers.zomato.com/api/v2.1/search?entity_id=" + cityId + "&entity_type=city&start=0&count=20&cuisines=" + cuisineID + "&sort=rating&order=desc";

    $.ajax({
      dataType: "json",
      url: restaurantsURL,
      method: "GET",
      crossDomain: true,
      async: true,
      headers: {
        "user-key": APIKey,
      },
    }).then(function (data) {
      console.log("recommendation data!!!!", data);

      let restaurantName = $("<div>").addClass("restName");
      let restaurantEstab = $("<div>").addClass("restEstab");
      let restaurantCuisine = $("<div>").addClass("restCuisine");
      let restaurantRating = $("<div>").addClass("restRating");
      let restaurantURL = $("<div>").addClass("restURL");
      let restaurantPhone = $("<div>").addClass("restPhone");
      let restaurantAddress = $("<div>").addClass("restAddress");
      let restaurantHours = $("<div>").addClass("restHours");

      restaurantName.text(data.restaurants[0].restaurant.name)
      restaurantEstab.text(data.restaurants[0].restaurant.establishment)
      restaurantCuisine.text(data.restaurants[0].restaurant.cuisines)
      restaurantRating.text(data.restaurants[0].restaurant.user_rating.aggregate_rating)
      restaurantURL.text(data.restaurants[0].restaurant.url)
      restaurantPhone.text(data.restaurants[0].restaurant.phone_numbers)
      restaurantAddress.text(data.restaurants[0].restaurant.location.address)
      restaurantHours.text(data.restaurants[0].restaurant.timings)

      $("#restOneBox").append(restaurantName)
      $("#restOneBox").append("Establishment Type: ", restaurantEstab)
      $("#restOneBox").append("Cuisine Type: ", restaurantCuisine)
      $("#restOneBox").append("Rating: ", restaurantRating)
      $("#restOneBox").append("Website: ", restaurantURL)
      $("#restOneBox").append("Phone Number: ", restaurantPhone)
      $("#restOneBox").append("Address: ", restaurantAddress)
      $("#restOneBox").append("Hours of Operation: ", restaurantHours)

      let restaurantName1 = $("<div>").addClass("restName");
      let restaurantEstab1 = $("<div>").addClass("restEstab");
      let restaurantCuisine1 = $("<div>").addClass("restCuisine");
      let restaurantRating1 = $("<div>").addClass("restRating");
      let restaurantURL1 = $("<div>").addClass("restURL");
      let restaurantPhone1 = $("<div>").addClass("restPhone");
      let restaurantAddress1 = $("<div>").addClass("restAddress");
      let restaurantHours1 = $("<div>").addClass("restHours");

      restaurantName1.text(data.restaurants[1].restaurant.name)
      restaurantEstab1.text(data.restaurants[1].restaurant.establishment)
      restaurantCuisine1.text(data.restaurants[1].restaurant.cuisines)
      restaurantRating1.text(data.restaurants[1].restaurant.user_rating.aggregate_rating)
      restaurantURL1.text(data.restaurants[1].restaurant.url)
      restaurantPhone1.text(data.restaurants[1].restaurant.phone_numbers)
      restaurantAddress1.text(data.restaurants[1].restaurant.location.address)
      restaurantHours1.text(data.restaurants[1].restaurant.timings)

      $("#restTwoBox").append(restaurantName1)
      $("#restTwoBox").append("Establishment Type: ", restaurantEstab1)
      $("#restTwoBox").append("Cuisine Type: ", restaurantCuisine1)
      $("#restTwoBox").append("Rating: ", restaurantRating1)
      $("#restTwoBox").append("Website: ", restaurantURL1)
      $("#restTwoBox").append("Phone Number: ", restaurantPhone1)
      $("#restTwoBox").append("Address: ", restaurantAddress1)
      $("#restTwoBox").append("Hours of Operation: ", restaurantHours1)

      let restaurantName2 = $("<div>").addClass("restName");
      let restaurantEstab2 = $("<div>").addClass("restEstab");
      let restaurantCuisine2 = $("<div>").addClass("restCuisine");
      let restaurantRating2 = $("<div>").addClass("restRating");
      let restaurantURL2 = $("<div>").addClass("restURL");
      let restaurantPhone2 = $("<div>").addClass("restPhone");
      let restaurantAddress2 = $("<div>").addClass("restAddress");
      let restaurantHours2 = $("<div>").addClass("restHours");

      restaurantName2.text(data.restaurants[2].restaurant.name)
      restaurantEstab2.text(data.restaurants[2].restaurant.establishment)
      restaurantCuisine2.text(data.restaurants[2].restaurant.cuisines)
      restaurantRating2.text(data.restaurants[2].restaurant.user_rating.aggregate_rating)
      restaurantURL2.text(data.restaurants[2].restaurant.url)
      restaurantPhone2.text(data.restaurants[2].restaurant.phone_numbers)
      restaurantAddress2.text(data.restaurants[2].restaurant.location.address)
      restaurantHours2.text(data.restaurants[2].restaurant.timings)

      $("#restThreeBox").append(restaurantName2)
      $("#restThreeBox").append("Establishment Type: ", restaurantEstab2)
      $("#restThreeBox").append("Cuisine Type: ", restaurantCuisine2)
      $("#restThreeBox").append("Rating: ", restaurantRating2)
      $("#restThreeBox").append("Website: ", restaurantURL2)
      $("#restThreeBox").append("Phone Number: ", restaurantPhone2)
      $("#restThreeBox").append("Address: ", restaurantAddress2)
      $("#rrestThreeBox").append("Hours of Operation: ", restaurantHours2)

      let restaurantName3 = $("<div>").addClass("restName");
      let restaurantEstab3 = $("<div>").addClass("restEstab");
      let restaurantCuisine3 = $("<div>").addClass("restCuisine");
      let restaurantRating3 = $("<div>").addClass("restRating");
      let restaurantURL3 = $("<div>").addClass("restURL");
      let restaurantPhone3 = $("<div>").addClass("restPhone");
      let restaurantAddress3 = $("<div>").addClass("restAddress");
      let restaurantHours3 = $("<div>").addClass("restHours");

      restaurantName3.text(data.restaurants[3].restaurant.name)
      restaurantEstab3.text(data.restaurants[3].restaurant.establishment)
      restaurantCuisine3.text(data.restaurants[3].restaurant.cuisines)
      restaurantRating3.text(data.restaurants[3].restaurant.user_rating.aggregate_rating)
      restaurantURL3.text(data.restaurants[3].restaurant.url)
      restaurantPhone3.text(data.restaurants[3].restaurant.phone_numbers)
      restaurantAddress3.text(data.restaurants[3].restaurant.location.address)
      restaurantHours3.text(data.restaurants[3].restaurant.timings)

      $("#restFourBox").append(restaurantName3)
      $("#restFourBox").append("Establishment Type: ", restaurantEstab3)
      $("#restFourBox").append("Cuisine Type: ", restaurantCuisine3)
      $("#restFourBox").append("Rating: ", restaurantRating3)
      $("#restFourBox").append("Website: ", restaurantURL3)
      $("#restFourBox").append("Phone Number: ", restaurantPhone3)
      $("#restFourBox").append("Address: ", restaurantAddress3)
      $("#restFourBox").append("Hours of Operation: ", restaurantHours3)

    });


  };

  //events function start
  var page = 0;
  var localStorageCityInfo = JSON.parse(localStorage.getItem('cityInfo'));
  console.log(localStorageCityInfo)
  var eventCity = localStorageCityInfo.name;
  // var fileName = location.href.split("/").slice(-1); 
  //document.currentURL
  console.log(window.location.href.split("/").slice(-1)[0]);
  if (window.location.href.split("/").slice(-1)[0] === "events.html") {
    $("#cityTitle").text("Welcome to " + eventCity);
    getEvents(page);
    console.log("currently on events page");
  }

  function getEvents(page) {
    // let parseCityInfo = JSON.parse(localStorage.getItem('cityInfo'));
    // let eventCity = parseCityInfo.name;
    $('#events-panel').show();
    $('#attraction-panel').hide();

    if (page < 0) {
      page = 0;
      return;
    }
    if (page > 0) {
      if (page > getEvents.json.page.totalPages - 1) {
        page = 0;
      }
    }
    console.log();
    $.ajax({
      type: "GET",
      url: "https://app.ticketmaster.com/discovery/v2/events.json?apikey=Zm5ycfcSybGtmXIn4dDXF1fCqr8xTo2A&locale=*&sort=date,asc&city=" + eventCity + "&size=4&page=" + page,
      async: true,
      dataType: "json",
      success: function (json) {
        getEvents.json = json;
        showEvents(json);
      },
      error: function (xhr, status, err) {
        console.log(err);
      }
    });
  }

  function showEvents(json) {
    var items = $('#events .list-group-item');
    items.hide();
    var events = json._embedded.events;
    var item = items.first();
    for (var i = 0; i < events.length; i++) {
      item.children('.list-group-item-heading').text(events[i].name);
      item.children('.list-group-item-text').text(events[i].dates.start.localDate);
      try {
        item.children('.venue').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
      } catch (err) {
        console.log(err);
      }
      item.show();
      item.off("click");
      item.click(events[i], function (eventObject) {
        console.log(eventObject.data);
        try {
          getAttraction(eventObject.data._embedded.attractions[0].id);
        } catch (err) {
          console.log(err);
        }
      });
      item = item.next();
    }
  }

  $('#prev').click(function () {
    getEvents(--page);
  });

  $('#next').click(function () {
    getEvents(++page);
  });

  function getAttraction(id) {
    $.ajax({
      type: "GET",
      url: "https://app.ticketmaster.com/discovery/v2/attractions/" + id + ".json?apikey=Zm5ycfcSybGtmXIn4dDXF1fCqr8xTo2A&locale=*&sort=date,asc&city=" + eventCity,
      async: true,
      dataType: "json",
      success: function (json) {
        showAttraction(json);
      },
      error: function (xhr, status, err) {
        console.log(err);
      }
    });
  }

  function showAttraction(json) {
    $('#events-panel').hide();
    $('#attraction-panel').show();

    $('#attraction-panel').click(function () {
      getEvents(page);
    });

    $('#attraction .list-group-item-heading').first().text(json.name);
    $('#attraction img').first().attr('src', json.images[0].url);
    $('#classification').text(json.classifications[0].segment.name + " - " + json.classifications[0].genre.name + " - " + json.classifications[0].subGenre.name);
  }






  //Just brainstorming here. Up to the JS team to review it
  /* function getCity(){
     //Check if local storage has any city stored
     let x = localStorage.getitem(city,value)
     if (x === null){
       set modal to display block
       modal.style.display = "block"
     } 
     else {
       set modal to display none
       variable city accross all pages is set to x
     }
  }//End of function




  // $.ajax({
  // type: "GET",
  // url:
  // "https://app.ticketmaster.com/discovery/v2/events.json?size=20&apikey=Zm5ycfcSybGtmXIn4dDXF1fCqr8xTo2A&locale=*&city=Austin&countryCode=US",
  // async: true,
  // dataType: "json",
  // success: function (json) {
  // console.log(json);
  // Parse the response.
  // Do other things.
  // },
  // error: function (xhr, status, err) {
  // This time, we do not end up here!
  /*     },
    }); */


  // Weather API




  
  var weatherCity = localStorageCityInfo.name;
  // var fileName = location.href.split("/").slice(-1); 
  //document.currentURL
  console.log(window.location.href.split("/").slice(-1)[0]);
  if (window.location.href.split("/").slice(-1)[0] === "weather.html") {
    $("#cityTitle").text("Welcome to " + weatherCity)
    getWeather(weatherCity);
    //console.log("currently on events page");
  }

  function clear(ids) {
    for (const id of ids) {
      $("#" + id).empty();
    }
  }

  function writeHTML(obj, method) {
    for (const id in obj) {
      $("#" + id)[method](obj[id]);
    }
  }


  // Call the API
  // $("#sBar").on("click", function () {
  //console.log("here")
  //event.preventDefault();

  // Declare a variable for any city inserted into the search bar
  
  //let city = $("#weather-input").val();

  // Save recent searches to local storage
  //localStorage.setItem("savedCity", JSON.stringify(city));

  // Grab city from local storage
  //let recentCity = $("<p>").text(JSON.parse(localStorage.getItem("savedCity")));

  // Append the most recent searched city into Recent Container in HTML
  //$("#cityTitle").text(city);

  // OpenWeather API URL & API Key
  
  

 

function getWeather(){
  let queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${weatherCity}&appid=def8b41b43fe3f2e5dff96db885a6932`;
  // AJAX Call for the API
  $.ajax({
    url: queryURL,
    method: "GET",
  })
    .then(function (response) {
      let weatherCity = $("<h1>").text(response.name);

      // Moment.js
      let m = moment();

      let forecastMoment1 = moment().add(1, "days");
      let forecastMoment2 = moment().add(2, "days");
      let forecastMoment3 = moment().add(3, "days");
      let forecastMoment4 = moment().add(4, "days");
      let forecastMoment5 = moment().add(5, "days");

      let weatherDate = $("<h1>").text(m.format("L"));

      let weatherTemp = $("<h4>").text(
        "Temperature: " +
        Math.round(((response.main.temp - 273.15) * 9) / 5 + 32) +
        " °F"
      );

      let weatherHumidity = $("<h4>").text(
        `Humidity: ${response.main.humidity}%`
      );

      let weatherWind = $("<h4>").text(
        `Wind Speed: ${response.wind.speed} MPH`
      );


      // Moment.js
      let foreCast = $("<h2>").text("5-Day Forecast");

      let forecastDate1 = $("<h5>").text(forecastMoment1.format("L"));
      let forecastDate2 = $("<h5>").text(forecastMoment2.format("L"));
      let forecastDate3 = $("<h5>").text(forecastMoment3.format("L"));
      let forecastDate4 = $("<h5>").text(forecastMoment4.format("L"));
      let forecastDate5 = $("<h5>").text(forecastMoment5.format("L"));

      // Append Each API object into HTML

      const callObj = {
        city: weatherCity,
        date: weatherDate,
        temp: weatherTemp,
        humid: weatherHumidity,
        wind: weatherWind,
        forecast: foreCast,
        dayOneDate: forecastDate1,
        dayTwoDate: forecastDate2,
        dayThreeDate: forecastDate3,
        dayFourDate: forecastDate4,
        dayFiveDate: forecastDate5,
      };

      clear(Object.keys(callObj));
      writeHTML(callObj, "append");
    })

    // Catch Errors if API doesn't run
    .catch(function (err) {
      console.log(err);
    });

  // OpenWeather 5-Day Forecast API URL & API Key
  let queryURL2 = `https://api.openweathermap.org/data/2.5/forecast?q=${weatherCity}&appid=def8b41b43fe3f2e5dff96db885a6932`;

  // AJAX call for the API
  $.ajax({
    url: queryURL2,
    method: "GET",
  })
    .then(function (response) {
      console.log(response);
      // Day 1
      let forecastMaxTemp1 = $("<p>").text(
        "High: " +
        Math.round(((response.list[3].main.temp_max - 273.15) * 9) / 5 + 32) +
        " °F"
      );

      let forecastMinTemp1 = $("<p>").text(
        "Low: " +
        Math.round(((response.list[3].main.temp_min - 273.15) * 9) / 5 + 32) +
        " °F"
      );

      let forecastHumidity1 = $("<p>").text(
        "Humidity: " + response.list[3].main.humidity + "%"
      );

      let forecastWind1 = $("<p>").text(
        "Wind Speed: " + response.list[3].wind.speed + "MPH"
      );

      let forecastWeather1 = $("<p>").text(response.list[3].weather[0].main);

      let icon1 = $("<p>").text(response.list[3].weather[0].icon);

      // Day 2
      let forecastMaxTemp2 = $("<p>").text(
        "High: " +
        Math.round(
          ((response.list[11].main.temp_max - 273.15) * 9) / 5 + 32
        ) +
        " °F"
      );

      let forecastMinTemp2 = $("<p>").text(
        "Low: " +
        Math.round(
          ((response.list[11].main.temp_min - 273.15) * 9) / 5 + 32
        ) +
        " °F"
      );

      let forecastHumidity2 = $("<p>").text(
        "Humidity: " + response.list[11].main.humidity + "%"
      );

      let forecastWind2 = $("<p>").text(
        "Wind Speed: " + response.list[11].wind.speed + "MPH"
      );

      let forecastWeather2 = $("<p>").text(response.list[11].weather[0].main);

      let icon2 = $("<p>").text(response.list[11].weather[0].icon);

      // Day 3
      let forecastMaxTemp3 = $("<p>").text(
        "High: " +
        Math.round(
          ((response.list[19].main.temp_max - 273.15) * 9) / 5 + 32
        ) +
        " °F"
      );

      let forecastMinTemp3 = $("<p>").text(
        "Low: " +
        Math.round(
          ((response.list[19].main.temp_min - 273.15) * 9) / 5 + 32
        ) +
        " °F"
      );

      let forecastHumidity3 = $("<p>").text(
        "Humidity: " + response.list[19].main.humidity + "%"
      );

      let forecastWind3 = $("<p>").text(
        "Wind Speed: " + response.list[19].wind.speed + "MPH"
      );

      let forecastWeather3 = $("<p>").text(response.list[19].weather[0].main);

      let icon3 = $("<p>").text(response.list[19].weather[0].icon);

      // Day 4
      let forecastMaxTemp4 = $("<p>").text(
        "High: " +
        Math.round(
          ((response.list[27].main.temp_max - 273.15) * 9) / 5 + 32
        ) +
        " °F"
      );

      let forecastMinTemp4 = $("<p>").text(
        "Low: " +
        Math.round(
          ((response.list[27].main.temp_min - 273.15) * 9) / 5 + 32
        ) +
        " °F"
      );

      let forecastHumidity4 = $("<p>").text(
        "Humidity: " + response.list[27].main.humidity + "%"
      );

      let forecastWind4 = $("<p>").text(
        "Wind Speed: " + response.list[27].wind.speed + "MPH"
      );

      let forecastWeather4 = $("<p>").text(response.list[27].weather[0].main);

      let icon4 = $("<p>").text(response.list[27].weather[0].icon);

      // Day 5
      let forecastMaxTemp5 = $("<p>").text(
        "High: " +
        Math.round(
          ((response.list[35].main.temp_max - 273.15) * 9) / 5 + 32
        ) +
        " °F"
      );

      let forecastMinTemp5 = $("<p>").text(
        "Low: " +
        Math.round(
          ((response.list[35].main.temp_min - 273.15) * 9) / 5 + 32
        ) +
        " °F"
      );

      let forecastHumidity5 = $("<p>").text(
        "Humidity: " + response.list[35].main.humidity + "%"
      );

      let forecastWind5 = $("<p>").text(
        "Wind Speed: " + response.list[35].wind.speed + "MPH"
      );

      let forecastWeather5 = $("<p>").text(response.list[35].weather[0].main);

      let icon5 = $("<p>").text(response.list[35].weather[0].icon);

      const forecastObj = {
        dayOneMax: forecastMaxTemp1,
        dayOneMin: forecastMinTemp1,
        dayOneHumidity: forecastHumidity1,
        dayOneWind: forecastWind1,
        dayOneWeather: forecastWeather1,
        // dayOneIcon: icon1,
        dayTwoMax: forecastMaxTemp2,
        dayTwoMin: forecastMinTemp2,
        dayTwoHumidity: forecastHumidity2,
        dayTwoWind: forecastWind2,
        dayTwoWeather: forecastWeather2,
        // dayTwoIcon: icon2,
        dayThreeMax: forecastMaxTemp3,
        dayThreeMin: forecastMinTemp3,
        dayThreeHumidity: forecastHumidity3,
        dayThreeWind: forecastWind3,
        dayThreeWeather: forecastWeather3,
        // dayThreeIcon: icon3,
        dayFourMax: forecastMaxTemp4,
        dayFourMin: forecastMinTemp4,
        dayFourHumidity: forecastHumidity4,
        dayFourWind: forecastWind4,
        dayFourWeather: forecastWeather4,
        // dayFourIcon: icon4,
        dayFiveMax: forecastMaxTemp5,
        dayFiveMin: forecastMinTemp5,
        dayFiveHumidity: forecastHumidity5,
        dayFiveWind: forecastWind5,
        dayFiveWeather: forecastWeather5,
        // dayFiveIcon: icon5,
      };

      clear(Object.keys(forecastObj));
      writeHTML(forecastObj, "append");
    })

    .catch(function (err) {
      console.log(err);
    });
}

});