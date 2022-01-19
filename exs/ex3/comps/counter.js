var heytemplate = document.createElement("template"); //<template> </template> //RULE
heytemplate.innerHTML = `
<style>
            #counter {
                background-color: rgb(238, 115, 141);
                display: flex;
            }

            #counter > button {
                width: 40px;
                height: 40px;
                font-size: 20px;
                background-color: rgb(255, 215, 177);
                border: none;
                border-radius: 5px;
                margin: 5px;
            }

            #counter > div {
                flex: 1;
                font-size: 20px;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            // #bar {
            //     height: 20px;
            //     background-color: aquamarine;
            // }
            #refresh {
                width: 30px;
                height: 30px;
                position: absolute;
                top: 60%;
                left: 50%;
            }
        </style>
        <div id="counter">
            <button id="i_but">+</button>
            <div id="number">1</div>
            <button id="d_but">-</button>
        </div>
        <div id="bar"></div>
`;

class TheCounter extends HTMLElement {
    constructor(){ //RULE
        super(); //RULE
        this.num = 1;
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.shadowRoot.appendChild(heytemplate.content.cloneNode(true)); //RULE
        this.shadowRoot.querySelector("#i_but").onclick = () => this.buttonPlus()
        this.shadowRoot.querySelector("#d_but").onclick = () => this.buttonMinus()
    }

    buttonPlus(){
        // debugger
        if (this.num < 10) {
            this.num = this.num+1;
            this.shadowRoot.querySelector("#number").innerText = this.num;
        }
    }

    buttonMinus(){
        if (this.num > 0) {
            this.num = this.num-1;
            this.shadowRoot.querySelector("#number").innerText = this.num;
        }
    }
}

customElements.define("the-counter", TheCounter) //RULE