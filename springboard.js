$(document).ready(function (){
    // let queryURL = "https://api.yelp.com/v3/businesses/search?term=" + searchTerm + "location=" + 
    // let queryURL = "https://api.yelp.com/v3/businesses/search?term=restaurant&location=austin";
    let queryURL = "https://api.yelp.com/v3/businesses/search?latitude=30.266666&longitude=-97.733330";
    const APIKey = "FIqyatRT2sz3MsOquVZv3HJd1bh2RtuN-JP6V_ADbNiSow9bqL9t71SBR-caoL4-nnpKh1GiKo_bFouKePzwKdfjNRXg5qq4r47qcGkhDxZ_LaD5AD4pdrPnPBXMXnYx";
    $.ajax({
        url: queryURL,
        header:
         "Authorization: Bearer " + APIKey,
        method: 'GET',
        // dataType: 'json',
         }).then(function (response) {
            // Grab the results from the API JSON return
            // let totalresults = data.total;
            console.log("is this pulling data?", response)
        })
    }); 
    // console.log("is this pulling data?", response)
