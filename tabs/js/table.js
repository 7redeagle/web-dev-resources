const labels = ["Title", "Link", "Description"]

const frameworks = [{
  "title": "Bootstrap",
  "url": "https://getbootstrap.com/",
  "description": "The most popular HTML, CSS, and JS library in the world."
}, {
  "title": "Bulma",
  "url": "https://bulma.io/",
  "description": "Bulma is a free, open source CSS framework based on Flexbox and used by more than 200,000 developers."
}, {
  "title": "Spectre",
  "url": "https://picturepan2.github.io/spectre/index.html",
  "description": "A Lightweight, Responsive and Modern CSS Framework"
}, {
  "title": "Pure.css",
  "url": "https://purecss.io/",
  "description": "A set of small, responsive CSS modules that you can use in every web project."
}, {
  "title": "Foundation",
  "url": "https://get.foundation/",
  "description": "A Framework for any device, medium, and accessibility."
}]

const colors = [{
  "title": "Bootstrap",
  "url": "https://getbootstrap.com/",
  "description": "The most popular HTML, CSS, and JS library in the world."
}, {
  "title": "Bulma",
  "url": "https://bulma.io/",
  "description": "Bulma is a free, open source CSS framework based on Flexbox and used by more than 200,000 developers."
}, {
  "title": "Spectre",
  "url": "https://picturepan2.github.io/spectre/index.html",
  "description": "A Lightweight, Responsive and Modern CSS Framework"
}, {
  "title": "Pure.css",
  "url": "https://purecss.io/",
  "description": "A set of small, responsive CSS modules that you can use in every web project."
}, {
  "title": "Foundation",
  "url": "https://get.foundation/",
  "description": "A Framework for any device, medium, and accessibility."
}]

buildTable = (objects, container) => {
  let table = document.createElement('table');
  for (j = 0; j < objects.length; j++) {
    let tableRow = document.createElement('tr')
    for (i = 0; i < objects.length; j++) {
      let tableTitle = document.createElement('td');

      let tableLink = document.createElement('a');
      let link = document.createTextNode(`${objects[i].title}`);
      tableLink.appendChild(link);
      tableLink.title = `${objects[i].title}`;
      tableLink.href = `${objects[i].url}`;
      tableLink.target = `_blank`;
      tableTitle.appendChild(tableLink);

      let tableDesc = document.createElement('td');
      tableDesc.textContent = `${objects[i].description}`
    }
    tableRow.appendChild(tableTitle);
  }
  table.appendChild(tableRow);
  container.appendChild(table);
}


buildTable(frameworks, document.getElementById('tab-frame'));