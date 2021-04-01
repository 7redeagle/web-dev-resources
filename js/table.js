buildTable = (objects, container) => {
  var tbl = document.createElement("table");

  for (var i = 0; i < objects.length; i++) {
    var row = document.createElement("tr");
    for (var j = 0; j < objects.length; j++) {
      var tableTitle = document.createElement('td');
      var tableLink = document.createElement('a');
      var link = document.createTextNode(`${objects[i].title}`);

      tableLink.appendChild(link);
      tableLink.title = `${objects[i].title}`;
      tableLink.href = `${objects[i].url}`;
      tableLink.target = `_blank`;
      tableLink.rel = `noopener`;
      tableTitle.appendChild(tableLink);

      var tableDesc = document.createElement('td');
      tableDesc.textContent = `${objects[i].description}`
    }
    row.appendChild(tableTitle);
    row.appendChild(tableDesc);
    tbl.appendChild(row);
  }
  container.appendChild(tbl);
}

buildTable(frameworks, document.getElementById('tab-frame'));
buildTable(colors, document.getElementById('tab-colors'));
buildTable(images, document.getElementById('tab-images'));
buildTable(icons, document.getElementById('tab-icons'));
buildTable(useful, document.getElementById('tab-useful'));