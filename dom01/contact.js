(function (){
    document.addEventListener('DOMContentLoaded', () => {
        init_app();
    });    
})();

function init_app(){
     const form = document.getElementById('contact-form');

    const { username, email, userphone, usermessage } = form.elements;       

     form.addEventListener('submit', (event) => {
        username.setCustomValidity('');
        if (username.value.length < 3) {
            username.setCustomValidity('Username must be at least 3 characters');
        }

        if (!form.checkValidity()) {
            event.preventDefault();
            form.reportValidity();
            console.log("Error en formulario");
            return;
        }

        console.log("Send to server");
        console.log({
            username: username.value,
            email: email.value,
            phone: userphone.value,
            usermessage: usermessage.value});
    });

}