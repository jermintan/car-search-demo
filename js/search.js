// js/search.js

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const carGrid = document.getElementById('carGrid');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');
  const pageInfo = document.getElementById('pageInfo');

  if (!carGrid) return; // Exit if we're not on the right page

  const allCards = Array.from(carGrid.querySelectorAll('.card'));
  let filteredCards = [...allCards];
  
  const ITEMS_PER_PAGE = 12;
  let currentPage = 1;

  function renderPage() {
    // Hide all cards first
    allCards.forEach(card => card.style.display = 'none');

    const totalPages = Math.ceil(filteredCards.length / ITEMS_PER_PAGE);
    // Ensure currentPage is valid
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    
    const cardsToShow = filteredCards.slice(startIndex, endIndex);
    cardsToShow.forEach(card => card.style.display = 'block');

    // Update UI elements
    pageInfo.textContent = `Page ${currentPage} of ${totalPages > 0 ? totalPages : 1}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages || totalPages === 0;
  }

  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    filteredCards = allCards.filter(card => {
      return card.dataset.searchTerm.includes(searchTerm);
    });
    currentPage = 1; // Reset to first page after search
    renderPage();
  }

  // Event Listeners
  searchInput.addEventListener('input', handleSearch);
  
  nextButton.addEventListener('click', () => {
    currentPage++;
    renderPage();
  });

  prevButton.addEventListener('click', () => {
    currentPage--;
    renderPage();
  });

  // Initial render on page load
  renderPage();
});