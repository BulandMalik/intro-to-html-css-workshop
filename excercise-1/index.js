import "./styles.css";
let templateFn = Handlebars.compile(document.getElementById('card-template').innerHTML);
document.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  let imageUrl = document.getElementById("imageUrl").value;

  document.getElementById('images').innerHTML += templateFn({title, description, imageUrl})
});

function loadImages(images) {
  document.getElementById('images').innerHTML = images.map(image => templateFn(image)).join('')
}

loadImages([
  {
    title: 'Rainbow',
    description: 'Rainbow over a field',
    imageUrl: 'https://images.unsplash.com/photo-1593362831502-5c3ad1c05f57?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbmJvd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
  },
  {
    title: 'Rainbow Smoke',
    description: 'The colors of the rainbow outlined in smoke',
    imageUrl: 'https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbmJvd3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
  },
  {
    title: 'Basketball Arena',
    description: 'Birds eye view of basketball arena',
    imageUrl: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGJhc2tldGJhbGx8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'
  },
  { 
    title: 'Pomeranian Puppy',
    description: 'cutest of the cute',
    imageUrl: 'https://images.unsplash.com/photo-1587678541881-475f92031f8b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fHBvbWVyYW5pYW4lMjBwdXBweXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  { 
    title: 'Sunset in the tropics',
    description: 'palms sparking in the sunset by the beach',
    imageUrl: 'https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNldHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
  { 
    title: 'Bringing the Heat',
    description: 'man pitching',
    imageUrl: 'https://images.unsplash.com/photo-1524626795941-2c5338f1666f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGJhc2ViYWxsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
  },
])
