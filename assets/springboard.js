$(document).ready(function () {
  let cuisineOptionIDs = [1035, 6, 152, 1, 954, 151, 175, 3, 131, 201, 193, 955, 5, 227, 132, 270, 159, 182, 133, 247, 168,
    22, 30, 491, 956, 111, 381, 121, 158, 202, 229, 25, 161, 287, 928, 881, 153, 203, 192, 100, 411, 541, 958, 959, 268, 651,
    316, 149, 38, 40, 112, 298, 318, 45, 501, 274, 205, 134, 156, 181, 521, 143, 228, 233, 148, 114, 154, 140, 135, 218, 55,
    207, 60, 265, 164, 178, 67, 901, 136, 66, 69, 70, 73, 137, 74, 147, 75, 117, 996, 995, 961, 962, 321, 963, 139, 209, 183,
    162, 82, 970, 219, 87, 983, 361, 320, 84, 998, 601, 304, 691, 210, 83, 128, 119, 611, 461, 267, 972, 471, 966, 89, 86, 141,
    177, 211, 190, 179, 150, 95, 93, 761, 142, 451, 264, 308, 641, 99, 965];

  let cuisineOptionsObject =
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
  let queryURL = "https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&start=0&count=100&cuisines=1%2C151%2C3%2C193&sort=rating&order=desc";
  const APIKey = "cd932dfc82bc08b58c79cefff1fc925a";

  $.ajax({
    dataType: "json",
    url: queryURL,
    method: "GET",
    crossDomain: true,
    async: true,
    headers: {
      "user-key": APIKey
    }
  }).then(function (data) {
    console.log(data)
  });
 
  //function to take city name input and populate city name & city-based restaurant and event recommendations 
  $("#searchBtn").on("click", function () {
    let searchInput = $("#search-bar").val();
    let citiesURL = "https://developers.zomato.com/api/v2.1/cities?q=" + searchInput;
    console.log("this is what we typed", searchInput);
    $.ajax({
      dataType: "json",
      url: citiesURL,
      method: "GET",
      crossDomain: true,
      async: true,
      headers: {
        "user-key": APIKey,
      },
    }).then(function (data) {
      let cityID = data.location_suggestions[0].id;
      let cityName = data.location_suggestions[0].name;
      console.log("city id stufff!! from api!!! ", cityID);
      $("#cityTitle").text("Welcome to " + cityName);
      console.log("is city name working?", cityName)
      
      restaurantRecs(cityID);
    });
  });

  //function to populate restaurant recommendations by cityID
  function restaurantRecs(cityId) {
    let queryURL =
      "https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&start=0&count=100&cuisines=83&sort=rating&order=desc";

    $.ajax({
      dataType: "json",
      url: queryURL,
      method: "GET",
      crossDomain: true,
      async: true,
      headers: {
        "user-key": APIKey,
      },
    }).then(function (data) {
      console.log("recommendation data!!!!", data);
    });
  }

  $.ajax({
    type: "GET",
    url:
      "https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=Zm5ycfcSybGtmXIn4dDXF1fCqr8xTo2A",
    async: true,
    dataType: "json",
    success: function (json) {
      console.log(json);
      // Parse the response.
      // Do other things.
    },
    error: function (xhr, status, err) {
      // This time, we do not end up here!
    },
  });
});
