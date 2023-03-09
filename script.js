// var title = $('.title-input');
var searchBtn = document.querySelector('#search-button');
var firstName = document.querySelector('#actor-search-FN');
var lastName = document.querySelector('#actor-search-LN');


var actorChoice = function (event) {
  event.preventDefault();
  
  var actorChoice = encodeURIComponent(firstName.value + ' ' + lastName.value);
  
  console.log('this is my actor choice:', actorChoice);
  
  fetchActorInfo(actorChoice);
  
}

function fetchActorInfo(actor) {
  
  var actorFile = 'https://api.themoviedb.org/3/search/person?api_key=259f0ac86de32db902f004c2142dde73&language=en-US&query=' + actor + '&page=1&include_adult=false'; //, options)
	fetch(actorFile)
  .then(function (response) {
    return response.json();
    })

    .then(function(actorID) {

      console.log(actorID);
      
      var idNumber = actorID.results[0].id;
      
      console.log('this is the actor id #:', idNumber);

      var film = 'https://api.themoviedb.org/3/person/' + idNumber + '/combined_credits?api_key=259f0ac86de32db902f004c2142dde73&language=en-US'
      fetch(film)
      .then(function (response) {
        return response.json();
      })

      .then(function(filmList) {

        for (var i = 0; i < filmList.cast[i].original_title.length; i++) {

          console.log('the actor was in this film:', filmList.cast[i].original_title);
        }
      })

      // var actorBio = 'https://api.themoviedb.org/3/person/' + idNumber + '?api_key=259f0ac86de32db902f004c2142dde73&append_to_response=movies'
      // fetch(actorBio)
      // .then(function (response) {
      //   return response.json();
      // })

      // .then(function(actorDetails) {
      //   console.log(actorDetails);
      // })
    })  
}

searchBtn.addEventListener('click', actorChoice);
         
  //        function getAPI(){
  //         var titlename = title.val();
         
  //        var watchmodeUrl = 'https://api.watchmode.com/v1/search/?apiKey=iFKylfiC00oJqw4wYLbiOn1fBNMNabxVwSBGNmaR&search_field=name&search_value=' +titlename;
  //        fetch(watchmodeUrl)
         
  //        .then(function (response) {
  //          return response.json();
  //        })
  //        .then(function (data) {
  //  console.log(data);
  //      })
  //     };

  //     searchBtn.addEventListener("click",function(){
  //       event.preventDefault();
  //       getAPI();
  //     });