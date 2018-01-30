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
