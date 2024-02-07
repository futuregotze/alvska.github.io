function toggleCategory(categoryId) {
  var category = document.getElementById(categoryId);
  var projects = category.getElementsByClassName('project');
  for (var i = 0; i < projects.length; i++) {
    projects[i].style.display = (projects[i].style.display === 'none' || projects[i].style.display === '') ? 'block' : 'none';
  }
}

function toggleDetails(projectId) {
  var projectDetails = document.getElementById(projectId);
  if (projectDetails.style.display === 'none' || projectDetails.style.display === '') {
    projectDetails.style.display = 'block';
  } else {
    projectDetails.style.display = 'none';
  }
}
