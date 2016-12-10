(function(){
      emailjs.init("user_nyJW29D1RhTsLGyZCqxnm");
})();
var myCenter = new google.maps.LatLng(40.741895, -73.989308);

function initialize() {
  var mapProp = {
    center: myCenter,
    zoom: 12,
    scrollwheel: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP
    };

  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

  var marker = new google.maps.Marker({
    position: myCenter,
  });

  marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = "";
  var githubLink = "";
  var liveSiteLink = "";
  if (element.alt == 'Living Story Book') {
    captionText = "A fun application for building digital story books...";
    githubLink = "https://github.com/nasser85/Living-Story-Book";
    liveSiteLink = "https://radicalreads.herokuapp.com";
  } else if (element.alt == 'Regex Race') {
    captionText = "A tool that aims to make learning and practicing JavaScript regular expressions fun...";
    githubLink = "https://github.com/nasser85/RegEx-Game";
    liveSiteLink = "https://regexrace.herokuapp.com";
  } else if (element.alt == 'Virtual Tarot') {
    captionText = "An application for learning about tarot cards and getting divinatory readings...";
    githubLink = "https://github.com/nasser85/Tarot";
    liveSiteLink = "https://virtualtarot.herokuapp.com";
  } else if (element.alt == 'Karaoke Songbird') {
    captionText = "A lightweight application for fetching lyrics to just about any song...";
    githubLink = "https://github.com/nasser85/songbird";
    liveSiteLink = "https://songbird.herokuapp.com";
  } else if (element.alt == 'Circles and Skulls') {
    captionText = "A concept for a game similar to Agar.io...";
    githubLink = "https://github.com/nasser85/CircleGame";
    liveSiteLink = "https://circlesandskulls.herokuapp.com";
  }
  document.getElementById("caption").innerHTML = captionText;
  document.getElementById("project-title").innerHTML = element.alt;
  document.getElementById("github").setAttribute('href', githubLink);
  document.getElementById("live-site").setAttribute('href', liveSiteLink);
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-navbar" + " w3-card-2" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-white", "");
    }
}

function submit() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  console.log(name, email, message);
  emailjs.send("default_service","my_template",{from_name: name, from_email: email, message_html: message});
  document.getElementById('name').value = "";
  document.getElementById('email').value = "";
  document.getElementById('message').value = "";
  alert('Your message has been sent.  Thanks for reaching out!');
}