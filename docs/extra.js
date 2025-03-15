document.addEventListener("DOMContentLoaded", function() {
    let backButton = document.createElement("a");
    backButton.href = "/";
    backButton.textContent = "🏠 ホームに戻る";

    // スタイルをHIT-6のデザインに統一
    backButton.style.display = "block";
    backButton.style.padding = "12px 20px";
    backButton.style.marginTop = "30px";
    backButton.style.marginBottom = "20px";
    backButton.style.backgroundColor = "#5AA897";  // HIT-6の緑に変更
    backButton.style.color = "white";
    backButton.style.textAlign = "center";
    backButton.style.borderRadius = "8px";
    backButton.style.fontWeight = "bold";
    backButton.style.fontSize = "18px";  // 文字を大きく
    backButton.style.textDecoration = "none";
    backButton.style.width = "220px";  // 幅を少し広げる
    backButton.style.marginLeft = "auto";
    backButton.style.marginRight = "auto"; // 中央揃え

    // ホバー時のスタイル変更
    backButton.addEventListener("mouseover", function() {
        backButton.style.backgroundColor = "#4B8F86"; // 濃い緑
    });
    backButton.addEventListener("mouseout", function() {
        backButton.style.backgroundColor = "#5AA897"; // 元の緑
    });

    let content = document.querySelector(".md-content");
    if (content) {
        content.appendChild(backButton); // ページの最後に追加
    }
});
