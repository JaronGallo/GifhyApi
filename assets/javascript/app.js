window.onload = function() {
 var sports = ["Baseball", "Football", "Basketball"];
 $("#movingH1").hide();
  $("#movingH1").fadeIn(1000);
  function displaySportInfo() {
      var sport = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        sport + "&api_key=dc6zaTOxFJmzC&limit=24";
        $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) { 
           console.log(response);
              var results = response.data;
           
              $("#sports-view").empty();

             









              for (var i = 0; i < results.length; i++) { 
                var sportDiv = $("<div class='sport'>");
			var whatImg = i;
            var rating = response.data[0].rating;

            var pOne = $("<p>").text("Rating: " + rating);

            sportDiv.prepend(pOne);
            
            var imgURL = response.data[i].images.fixed_height_still.url;

            var image = $("<img>").attr("src", imgURL).attr("id", whatImg);
            sportDiv.prepend(image);
         	
            $("#sports-view").prepend(sportDiv);



          }
 			

			$("img").click(function(){
				// console.log(this);
            
            var check = $(this).attr('id');
            console.log(check);
            var moving = response.data[check].images.fixed_height.url;

            $(this).attr("src", moving);
            var isPlaying = true;




             });


        });
      }
      function renderButtons() {
        $("#buttons-view").empty();
                $("#sport-input").empty();

       // image.empty();
        for (var i = 0; i < sports.length; i++) {

        var a = $("<button type='button' class='btn btn-primary'>");

        a.addClass("sport");

        a.attr("data-name", sports[i]);

        a.text(sports[i]);

        $("#buttons-view").append(a);
        }


      }

        $("#add-sport").on("click", function(event) {
          event.preventDefault();
          var sport = $("#sport-input").val().trim();

if (sport===""){
	return;
} else {

          
          sports.push(sport);
          renderButtons();
      }
      });
        $(document).on("click", ".btn-primary", displaySportInfo);

        renderButtons();

























};




 // counter = 0;
// // Create a button==========================================
 
//     $("#btn1").on("click", function() {
//       event.preventDefault();
      
//        var newBtn = $("input").val().trim();
//         var button = $("<button>").attr("data-sports", newBtn).attr('id', "item");

//         $("#buttons-appear-here").append(button);
//         counter++;
//             button.text(newBtn);
        
//         $("#input-text").val("");
//     });
        
//         $("button[id=item]").on("click", function() {
// // AJAX======================================================
//         var sports = $(this).attr("data-sports");
//         var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
//         sports + "&api_key=dc6zaTOxFJmzC&limit=10";
//         $.ajax({
//           url: queryURL,
//           method: "GET"
//         })
//         .done(function(response) { 

        
//             console.log(response);
//             console.log(queryURL);
//         var results = response.data;
//         // var topic = ["Baseball", "football", "basketball"];
// // LOOP=========================================
//          for (var i = 0; i < results.length; i++) {
//               var image = $("<img>");
//               var div = $("<div>");
//               var p = $("<p>").text("Rating: " + results[i].rating);
//               image.attr("src", results[i].images.fixed_height.url);

//               div.append(p);
//               div.append(image);
//               $("#gifs-appear-here").append(div);
//               }
//     });





// });

//   