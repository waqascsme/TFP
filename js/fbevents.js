(function () {
  function load() {
    var s = document.createElement("script");
    s.src = "js/fbevents-body.js";
    document.head.appendChild(s);
  }
  if (typeof fbq !== "undefined") {
    load();
    return;
  }
  var n = 0;
  (function w() {
    if (typeof fbq !== "undefined") {
      load();
      return;
    }
    if (n++ < 400) setTimeout(w, 50);
  })();
})();
