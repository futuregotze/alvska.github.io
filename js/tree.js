const folders = {
  type: 'dir',
  name: 'Root',
  children: [
    {
      type: 'dir',
      name: 'Cybersecurity',
      children: [
        {
          type: 'dir',
          name: 'Vulnerability',
          children: [
            {
              type: 'file',
              name: 'Project 1',
              link: 'https://docs.google.com/document/d/your_google_doc_id1'
            },
            {
              type: 'file',
              name: 'Project 2',
              link: 'https://docs.google.com/document/d/your_google_doc_id2'
            },
            {
              type: 'file',
              name: 'Project 3',
              link: 'https://docs.google.com/document/d/your_google_doc_id3'
            }
          ]
        },
        {
          type: 'dir',
          name: 'Identity & Access Management',
          children: [
            {
              type: 'file',
              name: 'Project 1',
              link: 'https://docs.google.com/document/d/your_google_doc_id4'
            },
            {
              type: 'file',
              name: 'Project 2',
              link: 'https://docs.google.com/document/d/your_google_doc_id5'
            },
            {
              type: 'file',
              name: 'Project 3',
              link: 'https://docs.google.com/document/d/your_google_doc_id6'
            }
          ]
        }
      ]
    },
    {
      type: 'dir',
      name: 'Volunteer Work',
      children: [
        {
          type: 'dir',
          name: 'Vulnerability',
          children: [
            {
              type: 'file',
              name: 'Project 1',
              link: 'https://docs.google.com/document/d/your_google_doc_id7'
            },
            {
              type: 'file',
              name: 'Project 2',
              link: 'https://docs.google.com/document/d/your_google_doc_id8'
            },
            {
              type: 'file',
              name: 'Project 3',
              link: 'https://docs.google.com/document/d/your_google_doc_id9'
            }
          ]
        },
        {
          type: 'dir',
          name: 'Identity & Access Management',
          children: [
            {
              type: 'file',
              name: 'Project 1',
              link: 'https://docs.google.com/document/d/your_google_doc_id10'
            },
            {
              type: 'file',
              name: 'Project 2',
              link: 'https://docs.google.com/document/d/your_google_doc_id11'
            },
            {
              type: 'file',
              name: 'Project 3',
              link: 'https://docs.google.com/document/d/your_google_doc_id12'
            }
          ]
        }
      ]
    }
  ]
};

function displayJsonTree(data) {
  var htmlRetStr = "<ul class='folder-container' style='list-style-type:none;'>";
  for (var key in data) {
    if (typeof (data[key]) == 'object' && data[key] != null) {
      htmlRetStr += "<li class='folder-item' onclick='toggleFolder(this)'>" + data["name"] + "</li><li class='folder-wrapper'>";
      htmlRetStr += displayJsonTree(data[key]);
      htmlRetStr += '</li>';
    } else if (data[key].type == 'dir') {
      htmlRetStr += "<li class='folder-item' onclick='toggleFolder(this)'>" + data["name"] + "</li><li class='folder-wrapper'>";
    } else if (key == 'name' && data['type'] != 'dir') {
      htmlRetStr += "<li class='file-item'><a href='" + data.link + "' target='_blank'>" + data['name'] + "</a></li>";
    }
  }
  htmlRetStr += '</ul>';
  return htmlRetStr;
}

function toggleFolder(element) {
  var nextElement = element.nextElementSibling;
  if (nextElement.style.display === 'none' || nextElement.style.display === '') {
    nextElement.style.display = 'block';
  } else {
    nextElement.style.display = 'none';
  }
}

document.getElementById("folders").innerHTML = displayJsonTree(folders);
