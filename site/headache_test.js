document.addEventListener("DOMContentLoaded", function() {
    function getResult() {
        let scores = {
            migraine: 0,
            tension: 0,
            cluster: 0,
            medicationOveruse: 0
        };

        let freq = document.querySelector('input[name="freq"]:checked')?.value;
        if (freq === "daily") scores.medicationOveruse += 2;
        if (freq === "high") scores.migraine += 2;
        if (freq === "mid") scores.tension += 1;

        let pain = document.querySelector('input[name="pain"]:checked')?.value;
        if (pain === "migraine") scores.migraine += 3;
        if (pain === "tension") scores.tension += 3;
        if (pain === "cluster") scores.cluster += 3;

        let symptoms = document.querySelectorAll('input[name="symptom"]:checked');
        symptoms.forEach(symptom => {
            if (symptom.value === "aura") scores.migraine += 2;
            if (symptom.value === "fatigue") scores.tension += 1;
            if (symptom.value === "focus") scores.migraine += 1;
        });

        let medicine = document.querySelector('input[name="medicine"]:checked')?.value;
        if (medicine === "daily") scores.medicationOveruse += 3;
        if (medicine === "frequent") scores.migraine += 1;

        let maxScore = Math.max(...Object.values(scores));
        let headacheType = Object.keys(scores).filter(type => scores[type] === maxScore);

        let resultText = "<strong>あなたの頭痛の特徴に近いものは：</strong><br>";
        if (headacheType.includes("migraine")) resultText += "<a href='./migraine.md'>片頭痛</a><br>";
        if (headacheType.includes("tension")) resultText += "<a href='./tension_headache.md'>緊張型頭痛</a><br>";
        if (headacheType.includes("cluster")) resultText += "<a href='./cluster_headache.md'>群発頭痛</a><br>";
        if (headacheType.includes("medicationOveruse")) resultText += "<a href='./medication_overuse_headache.md'>薬物乱用頭痛</a><br>";

        if (headacheType.length > 1) {
            resultText += "<br>あなたの頭痛は複数のタイプが混ざっている可能性があります。";
        }

        document.getElementById("result").innerHTML = resultText;
    }

    window.getResult = getResult;
});