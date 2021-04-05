
const skada = () => {
    const host = window.location.hostname;
    if (!host || host != "campus.skillstruck.com") {

        return false;
    }


    const _run = ()=> {

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

      return true;
    };
    return _run();

};

export default skada;

