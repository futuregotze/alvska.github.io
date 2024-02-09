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
      if (detailsElement.hasAttribute('open')) {
        summaryElement.innerHTML = '<i class="fa-sharp fa-solid fa-folder-open" style="color: #606060;"></i> ' + summaryElement.textContent;
      } else {
        summaryElement.innerHTML = '<i class="fa-sharp fa-solid fa-folder-closed" style="color: #606060;"></i> ' + summaryElement.textContent;
      }
    });
  });
});
