var complicatedtemplate = document.createElement("template"); //<template> </template> //RULE
complicatedtemplate.innerHTML = `
<style>
h1 {
    color:red;
}
</style>
<h1>Hello</h1>
`;

class TheTemplate extends HTMLElement {
    constructor(){ //RULE
        super(); //RULE
        this.attachShadow({mode:"open"})
    }

    connectedCallback(){
        this.shadowRoot.appendChild(complicatedtemplate.content.cloneNode(true)); //RULE
    }
}

customElements.define("the-template", TheTemplate) //RULE