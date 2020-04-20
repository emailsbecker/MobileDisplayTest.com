// source https://jsfiddle.net/onury/vrnf7u4c/
document.addEventListener('DOMContentLoaded', (event) => {
    // on DOM ready...
    var form = document.getElementById('form');
    form.addEventListener('submit', onSubmit, false);
    form.submit = onSubmit;

    /**
     * sources:
     * - https://pawelgrzybek.com/loop-through-a-collection-of-dom-elements/
     * - https://www.dyn-web.com/tutorials/iframes/load/
     */
    function onSubmit(event) {
        if (event) {
            event.preventDefault(); 
        }

        const iframe = document.querySelectorAll('iframe');
        const target_uri = document.getElementById('url').value

        // loop every iframe and load target URI
        for (let i = 0; i < iframe.length; i++) {
            console.log(iframe[i].id)
            iframe[i].src = target_uri
        }
    }
})