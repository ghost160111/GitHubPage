class Nav {
    #on;
    #off;
    #menu;
    #display_on;
    #display_off;

    static #inputMessage;

    constructor(on_id, off_id, menu_id, d_on_style_v, d_off_style_v) {
        this.#on           = on_id;
        this.#off          = off_id;
        this.#menu         = menu_id;
        this.#display_on   = d_on_style_v;
        this.#display_off  = d_off_style_v;
    }

    get #On         ()      { return this.#on;           }
    get #Off        ()      { return this.#off;          }
    get #Menu       ()      { return this.#menu;         }
    get #DisplayOn  ()      { return this.#display_on;   }
    get #DisplayOff ()      { return this.#display_off;  }

    set #On         (value) { this.#on   = value;        }
    set #Off        (value) { this.#off  = value;        }
    set #Menu       (value) { this.#menu = value;        }
    set #DisplayOn  (value) { this.#display_on = value;  }
    set #DisplayOff (value) { this.#display_off = value; }

    turnOn() {
        Nav.#inputMessage = "clicked on button";
        console.log(Nav.#inputMessage);

        let turn_on_btn_id = document.getElementById(this.#on);
        let turn_off_btn_id = document.getElementById(this.#off);
        let menu_id = document.getElementById(this.#menu);

        turn_on_btn_id.style.display = this.#display_off;
        turn_off_btn_id.style.display = this.#display_on;
        menu_id.style.display = this.#display_on;

        return { 
            turn_on_btn_id,
            turn_off_btn_id,
            menu_id
        };
    }

    turnOff() {
        Nav.#inputMessage = "clicked off button";
        console.log(Nav.#inputMessage);

        let turn_on_btn_id = document.getElementById(this.#on);
        let turn_off_btn_id = document.getElementById(this.#off);
        let menu_id = document.getElementById(this.#menu);

        turn_on_btn_id.style.display = this.#display_on;
        turn_off_btn_id.style.display = this.#display_off;
        menu_id.style.display = this.#display_off;

        return { 
            turn_on_btn_id,
            turn_off_btn_id,
            menu_id
        };
    }
}

let on_id       = "on",
    off_id      = "off",
    menu_id     = "menu",
    display_on  = "flex",
    display_off = "none";

let nav = new Nav(on_id, off_id, menu_id, display_on, display_off);

const On  = () => nav.turnOn();
const Off = () => nav.turnOff();
