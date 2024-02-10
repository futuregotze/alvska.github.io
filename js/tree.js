document.addEventListener('DOMContentLoaded', function() {
  var detailsElements = document.querySelectorAll('.tree details');

  // Search functionality
  var searchInput = document.getElementById('tree-search');
  searchInput.addEventListener('input', function() {
    var searchTerm = searchInput.value.toLowerCase();

    detailsElements.forEach(function(detailsElement) {
      var summaryElement = detailsElement.querySelector('summary');
      var summaryText = summaryElement.textContent.toLowerCase();

      if (summaryText.includes(searchTerm)) {
        detailsElement.style.display = 'block';
      } else {
        detailsElement.style.display = 'none';
      }
    });
  });

  detailsElements.forEach(function(detailsElement) {
    detailsElement.addEventListener('toggle', function() {
      var summaryElement = detailsElement.querySelector('summary');
      var iconElement = summaryElement.querySelector('i');

      if (detailsElement.hasAttribute('open')) {
        iconElement.classList.remove('fa-folder-closed');
        iconElement.classList.add('fa-folder-open');
      } else {
        iconElement.classList.remove('fa-folder-open');
        iconElement.classList.add('fa-folder-closed');
      }
    });
  });
});
