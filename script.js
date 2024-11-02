function openmenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0"; // Affiche le menu
}

function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px"; // Cache le menu
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

document.addEventListener("DOMContentLoaded", function() {

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission classique du formulaire

        // Validation des champs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        let formIsValid = true;

        // Vérifie si tous les champs sont remplis
        if (!name || !email || !message) {
            alert("Tous les champs sont requis.");
            formIsValid = false;
        }

        // Vérifie le format de l'email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailPattern.test(email)) {
            alert("Veuillez entrer une adresse email valide.");
            formIsValid = false;
        }

        console.log("Form Is Valid:", formIsValid); // Debug

        // Si le formulaire est valide, appel à sendMail()
        if (formIsValid) {
            sendMail();
        }
    });

    function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value,
        };

        const serviceID = "service_bs7bl99"; // Remplacez par votre ID de service EmailJS
        const templateID = "template_sjtn0u5"; // Remplacez par votre ID de modèle EmailJS

        emailjs.send(serviceID, templateID, params)
            .then((res) => {
                // Réinitialise le formulaire et affiche un message de confirmation
                document.getElementById("confirmationMessage").style.display = 'block';
                document.getElementById("contactForm").reset();
                console.log(res);
            })
            .catch(err => {
                console.error(err);
                alert("Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.");
            });
    }
});
