document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('file-link')) {
      event.preventDefault(); // Prevent default link behavior
      var fileId = target.dataset.file;
      window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');
    }
  });
});
