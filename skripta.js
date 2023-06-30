$(document).ready(function() {
    // Selektirajte gumb hamburgera
    var hamburgerButton = $('.header__hamburger');
  
    // Selektirajte izbornik
    var headerMenu = $('#headerNav');
  
    // Dodajte događaj na klik gumba hamburgera
    hamburgerButton.on('click', function() {
      // Provjerite stanje izbornika
      if (headerMenu.is(':visible')) {
        // Ako je izbornik vidljiv, sakrijte ga
        headerMenu.slideUp();
      } else {
        // Ako je izbornik skriven, prikažite ga
        headerMenu.slideDown();
      }
    });
  });
  