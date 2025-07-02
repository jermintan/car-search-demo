// js/search.js
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const carGrid = document.getElementById('carGrid');

  // Guard clause in case we're not on the home page
  if (!searchInput || !carGrid) {
    return;
  }

  const cards = carGrid.querySelectorAll('.card');

  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    cards.forEach(card => {
      const cardSearchTerm = card.dataset.searchTerm;
      // If the card's searchable text includes the search term, show it. Otherwise, hide it.
      if (cardSearchTerm.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});