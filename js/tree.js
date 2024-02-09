// tree.js
document.addEventListener('DOMContentLoaded', function() {
  var detailsElements = document.querySelectorAll('.tree details');

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
