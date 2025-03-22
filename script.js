
// Accept Policy Function
function acceptPolicy() {
    document.getElementById('policyModal').style.display = 'none';
}
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
   <div class="expandable-box">
    Hover to Expand
</div>
}
    });

                          
.expandable-box {
    width: 200px;
    height: 200px;
    background-color: #3498db;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    text-align: center;
    margin: 20px auto; /* Centers the box */
}

.expandable-box:hover {
    width: 300px;
    height: 300px;
    background-color: #2980b9;
    font-size: 22px;
}
    
});
