const menu_id         = "m-nav-list",
      btn_on_id       = "on",
      btn_off_id      = "off",
      body_id         = "b";

const displayOn       = "flex",
      displayOff      = "none",
      overflowXHidden = "hidden",
      overflowXAuto   = "auto";

const menu   = document.getElementById(menu_id   ),
      btnOn  = document.getElementById(btn_on_id ),
      btnOff = document.getElementById(btn_off_id),
      body   = document.getElementById(body_id   );

const turnOn = () => {
    console.log("clicked on button!");

    menu.style.display   = displayOn;
    body.style.overflowY = overflowXHidden;
    btnOn.style.display  = displayOff;
    btnOff.style.display = displayOn;
    
    return {
        menu,
        body,
        btnOn,
        btnOff
    };
}

const turnOff = () => {
    console.log("clicked off button!");

    menu.style.display   = displayOff;
    body.style.overflowY = overflowXAuto;
    btnOn.style.display  = displayOn;
    btnOff.style.display = displayOff;

    return {
        menu,
        body,
        btnOn,
        btnOff
    };
}
