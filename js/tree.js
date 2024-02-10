document.addEventListener('DOMContentLoaded', function() {
  var detailsElements = document.querySelectorAll('.tree details');

  detailsElements.forEach(function(detailsElement) {
    detailsElement.addEventListener('toggle', function() {
      var summaryElement = detailsElement.querySelector('summary');
      var iconElement = summaryElement.querySelector('i');

      if (detailsElement.hasAttribute('open')) {
        iconElement.className = 'fa-sharp fa-solid fa-folder-open'; // Change the class to the open folder icon
      } else {
        iconElement.className = 'fa-sharp fa-solid fa-folder-closed'; // Change the class to the closed folder icon
      }
    });
  });
});
