$(document).ready(function (){
    let queryURL = "https://developers.zomato.com/api/v2.1/search?entity_type=city&q=Austin&count=10&sort=rating&order=desc";
    const APIKey = "cd932dfc82bc08b58c79cefff1fc925a";
    // $.ajax({
    //     url: queryURL,
    //     method: 'GET',
    //     // dataType: 'json',
    //      }).then(function (data) {
    //         // Grab the results from the API JSON return
    //         // let totalresults = data.total;
    //         console.log("is this pulling data?", data)
    //     })
    // }); 
    // console.log("is this pulling data?", response)

    $.ajax({
        dataType: "json",
        url: queryURL,
        headers: {
            "user-key": APIKey
        }
        // method: "GET",
    }).then(function(data) {
        console.log(data)
        });
});