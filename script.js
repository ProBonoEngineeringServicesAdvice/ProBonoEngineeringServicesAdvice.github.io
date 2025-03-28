document.addEventListener("DOMContentLoaded", function () {
    // Policy Modal Handling
    if (!localStorage.getItem("policyAccepted")) {
        document.getElementById("policyModal").style.display = "flex";
    }

    // Open tabs
    window.openTab = function (event, tabName) {
        let tabContents = document.querySelectorAll(".tab-content");
        tabContents.forEach(tab => tab.classList.remove("active"));

        document.getElementById(tabName).classList.add("active");

        let tabs = document.querySelectorAll(".tab");
        tabs.forEach(tab => tab.classList.remove("active"));

        event.currentTarget.classList.add("active");
    };

    // Accept Policy
    window.acceptPolicy = function () {
        document.getElementById("policyModal").style.display = "none";
        localStorage.setItem("policyAccepted", "true");
    };

    // Handle Contact Form Submission
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset();
    }); // <-- Closing bracket was missing here
});
