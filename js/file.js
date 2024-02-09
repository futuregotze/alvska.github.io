document.addEventListener('DOMContentLoaded', function() {
  var fileLinks = document.querySelectorAll('.file-link');

  fileLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      var fileId = link.dataset.file;
      window.open(`https://drive.google.com/file/d/${fileId}/view`, '_blank');
    });
  });
});
