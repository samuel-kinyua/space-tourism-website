function handleClick() {
    let menu = document.getElementsByClassName("nav-bar")[0]; // Assuming there is only one element with class "nav-bar"
    let menuIcon = document.getElementById('hamburger-menu');
  
    menuIcon.onclick = function() {
      if (menu.style.display === 'none') {
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    };
  
    menu.onclick = function() {
      if (menuIcon.style.display === 'flex') {
        menuIcon.style.display = 'none';
      } else {
        menuIcon.style.display = 'flex';
      }
    };
  }
  
  
  