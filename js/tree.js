rconst folders =
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
            name: 'Project 1'
          },
          {
            type: 'file',
            name: 'Project 2'
          },
          {
            type: 'file',
            name: 'Project 3'
          },
              }
            ]
          }
        ]
      },
      {
        type: 'dir',
        name: 'Identiy & Access Management',
        children: [
          {
            type: 'file',
            name: 'Project 1'
          },
          {
            type: 'file',
            name: 'Project 2'
          },
          {
            type: 'file',
            name: 'Project 3'
          }
        ]
      }
    ]
  };

function displayJsonTree( data) {
  var htmlRetStr = "<ul class='folder-container'>";
  for (var key in data) {
    if (typeof(data[key])== 'object' && data[key] != null) {
      htmlRetStr += displayJsonTree( data[key] );
      htmlRetStr += '</ul></li>';
    } else if(data[key]=='dir'){
      htmlRetStr += "<li class='folder-item'>" + data["name"]+"</li><li class='folder-wrapper'>";
    }
    else if( key=='name' && data['type']!='dir' ){
      htmlRetStr += "<li class='file-item'>" + data['name']+"</li>";
    }
  }
  return( htmlRetStr );
}
function filterJson(data,string) {
  arr = [];
  for (var key in data)
    if (typeof(data[key]) == 'object' && data[key] != null) {
      if (data['name'].indexOf(string) <= -1) {
        for (var i = 0; i < data.children.length; i++) {
          arr=arr.concat(filterJson(data.children[i], string));
        }
        return arr;
      }
    }
    else {
        if (data['name'].indexOf(string) > -1) {
          arr = arr.concat(data);
          return arr;
        }
    }
}
document.getElementById("folders").innerHTML= displayJsonTree(folders);
function solve() {
  var toSearch=document.getElementById('filterInput').value;
  if(toSearch.length==0){
    document.getElementById("folders").innerHTML= displayJsonTree(folders);
  }
  else {
    var str = "Searching for: " + document.getElementById('filterInput').value + "\n";
    document.getElementById("folders").innerHTML = str + displayJsonTree(filterJson(folders, document.getElementById('filterInput').value));
  }
}
