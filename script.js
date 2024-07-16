document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#show-login").addEventListener("click", function(){
        document.querySelector(".popup").classList.add("active");
        document.querySelector(".overlay").classList.add("show_overlay");
    });

    document.querySelectorAll(".popup .close-btn").forEach(function(element) {
        element.addEventListener("click", function(){
            document.querySelector(".popup").classList.remove("active");
            document.querySelector(".overlay").classList.remove("show_overlay");
        });
    });

    document.querySelector("#contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        if (validateForm()) {
            let formData = new FormData(this);
            console.log("Form submitted successfully!");
            this.reset();
            document.querySelector(".popup").classList.remove("active");
            document.querySelector(".overlay").classList.remove("show_overlay");
        }
    });

    function validateForm() {
        let isValid = true;
        const phonePattern = /^[0-9\s\-\+\(\)]*$/;

        document.querySelectorAll("#contact-form input").forEach(function(input) {
            if (!input.checkValidity()) {
                isValid = false;
                document.querySelector(".input_email").classList.add("invalid");
                console.log(input.validationMessage);
            } else if (input.name === 'phone' && !phonePattern.test(input.value)) {
                isValid = false;
                document.querySelector(".input_email").classList.add("invalid");
                console.log("Phone number contains invalid characters.");
            } else {
                document.querySelector(".input_email").classList.remove("invalid");
            }
        });

        return isValid;
    }
});
