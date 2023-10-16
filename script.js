function verificarFrase() {
    const fraseCorreta = "Esta é a frase correta"; // Defina sua frase correta aqui
    const inputFrase = document.getElementById("fraseInput").value;

    if (inputFrase === fraseCorreta) {
        document.getElementById("mensagem").textContent = "Frase correta!";
    } else {
        document.getElementById("mensagem").textContent = "Frase errada. Tente novamente.";
    }
}