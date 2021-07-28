/* scripts.js */

// Tabs
var instance = M.Tabs.init(document.getElementById("tabs"), {});

// Select
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, {});
});

// Sidenav
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

// Video Container
document.addEventListener('DOMContentLoaded', function() {
  var template = document.getElementById("video-card-template");
  for (var i = 0; i < 11; i++) {
    template.parentElement.appendChild(template.cloneNode(true));
  }
});