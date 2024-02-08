// tree.js
document.addEventListener('DOMContentLoaded', function () {
  var treeItems = document.querySelectorAll('.tree details summary');

  treeItems.forEach(function (item) {
    item.addEventListener('click', function () {
      item.classList.toggle('open');
    });
  });
});
