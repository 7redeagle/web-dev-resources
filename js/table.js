const labels = ["title", "url", "description"]

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
  "title": "Flat UI Colors",
  "url": "https://flatuicolors.com/",
  "description": "Flat UI Colors 2 features 13 more color palettes. Collaborating with 13 designers around the world, a total set of 280 colors are on your command for COPY / PASTE for your next project, design, presentation."
}, {
  "title": "Color Hunt",
  "url": "https://colorhunt.co/",
  "description": "Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes."
}, {
  "title": "Coolors",
  "url": "https://coolors.co/",
  "description": "Create the perfect palette or get inspired by thousands of beautiful color schemes."
}, {
  "title": "Open Color",
  "url": "https://yeun.github.io/open-color/",
  "description": "Open color is an open-source color scheme optimized for UI like font, background, border, etc."
}]

const images = [{
  "title": "Hero Patterns",
  "url": "https://www.heropatterns.com/",
  "description": "A collection of repeatable SVG background patterns for you to use on your web projects."
}, {
  "title": "Vector Creator",
  "url": "https://icons8.com/vector-creator",
  "description": "Create engaging custom illustrations, no design team required."
}, {
  "title": "Pixabay",
  "url": "https://pixabay.com/",
  "description": "Stunning free images & royalty free stock."
}, {
  "title": "Unsplash",
  "url": "https://unsplash.com/",
  "description": "The internet’s source of freely-usable images. Powered by creators everywhere."
}, {
  "title": "Pexels",
  "url": "https://www.pexels.com/",
  "description": "The best free stock photos & videos shared by talented creators."
}, {
  "title": "OpenGameArt.org",
  "url": "https://opengameart.org/",
  "description": "Open Game Art is a media repository intended for use with free and open source software game projects, offering open content assets."
}]

const icons = [{
  "title": "Tabler Icons",
  "url": "https://tablericons.com/",
  "description": "976 Fully customizable free SVG icons. (MIT license)"
}, {
  "title": "iconmonstr",
  "url": "https://iconmonstr.com/",
  "description": "Discover 4496+ free icons in 313 collections."
}, {
  "title": "Boxicons",
  "url": "https://boxicons.com/",
  "description": "Boxicons is a simple vector icons set carefully crafted for designers and developers to use in your next project. No attribution required."
}, {
  "title": "Worldvectorlogo",
  "url": "https://worldvectorlogo.com/",
  "description": "Download vector logos of brands you love."
}, {
  "title": "Font Awesome",
  "url": "https://fontawesome.com/",
  "description": "Get vector icons and social logos on your website with Font Awesome, the web's most popular icon set and toolkit."
}, {
  "title": "Feather",
  "url": "https://feathericons.com/",
  "description": "Simply beautiful open source icons."
}]

const useful = [{
  "title": "UI Coach",
  "url": "https://uicoach.io/app",
  "description": "UI Design Challenge."
}, {
  "title": "30 seconds of code",
  "url": "https://www.30secondsofcode.org/",
  "description": "Short code snippets for all your development need."
}, {
  "title": "Custom Shape Dividers",
  "url": "https://www.shapedivider.app/",
  "description": "A ree tool to make it easier for designers and developers to export a beautiful SVG shape divider for their latest project."
}, {
  "title": "Dev Hints",
  "url": "https://devhints.io/",
  "description": "A modest collection of cheatsheets."
}]

buildTable = (objects, container) => {
  let table = document.createElement('table');
  let tableRow = document.createElement('tr');

  for (i = 0; i < objects.length; i++) {
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

    tableRow.appendChild(tableTitle);
  }
  table.appendChild(tableRow);
  container.appendChild(table);
}

buildTable(frameworks, document.getElementById('tab-frame'));
buildTable(colors, document.getElementById('tab-colors'));
buildTable(images, document.getElementById('tab-images'));
buildTable(icons, document.getElementById('tab-icons'));
buildTable(useful, document.getElementById('tab-useful'));