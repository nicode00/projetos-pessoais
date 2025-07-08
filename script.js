document.getElementById("messageButton").addEventListener("click", function() {
    const message = "Bem-vindo ao meu site! Espero que você tenhas um ótimo dia!";
    document.getElementById("message").innerText = message;
    document.getElementById("message").style.display = "block"; 
});