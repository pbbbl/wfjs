
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.easyFormPersist = factory());
}(this, (function () { 'use strict';

  var index = (function () {
    var host = window.location.hostname;

    if (!host || host != "campus.skillstruck.com") {
      return false;
    }

    if (!launched) {
      (function () {
        launched = true;
        var s = document.createElement("script"),
            e = !document.body ? document.querySelector("head") : document.body;
        s.src = "https://acsbapp.com/apps/app/dist/js/app.js";
        s.async = true;

        s.onload = function () {
          acsbJS.init({
            statementLink: "",
            footerHtml: "",
            hideMobile: false,
            hideTrigger: false,
            language: "en",
            position: "left",
            leadColor: "#146ff8",
            triggerColor: "#146ff8",
            triggerRadius: "50%",
            triggerPositionX: "right",
            triggerPositionY: "bottom",
            triggerIcon: "people",
            triggerSize: "medium",
            triggerOffsetX: 20,
            triggerOffsetY: 20,
            mobile: {
              triggerSize: "small",
              triggerPositionX: "right",
              triggerPositionY: "bottom",
              triggerOffsetX: 20,
              triggerOffsetY: 20,
              triggerRadius: "50%"
            }
          });
        };

        e.appendChild(s);
        console.log('acsb on');
        return true;
      })();

      return true;
    }
  });

  return index;

})));
