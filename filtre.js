// Récupérer les éléments du DOM
var buttons = document.querySelectorAll('.filter-button');
var items = document.querySelectorAll('#vin');

// Ajouter un écouteur d'événements pour chaque bouton
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', filterItems);
}

function filterItems() {
  var filter = this.getAttribute('data-filter');

  // Boucler sur chaque élément de la liste
  for (var i = 0; i < items.length; i++) {
    var item = items[i];

    // Vérifier si l'élément correspond au filtre
    if (filter === 'all' || item.classList.contains(filter)) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  }
}


