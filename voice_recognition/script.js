
const voiceRecognition = () => {
    const rec = new webkitSpeechRecognition();
    rec.interimResults = true;
    rec.continuous = true;
    rec.lang = "es-ES";
    rec.addEventListener("result", e=>{
        let text = e.results[0][0].transcript;
        document.querySelector(".final-text").textContent = text;
    })
    rec.start();
}

document.getElementById("start_recognition").addEventListener("click", voiceRecognition);