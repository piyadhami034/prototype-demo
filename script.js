function checkNews() {
  let text = document.getElementById("inputText").value.toLowerCase();
  let result = document.getElementById("result");

  result.innerText = "Analyzing... ⏳";

  setTimeout(() => {

    if (text.length < 20) {
      result.innerText = "⚠️ Please enter more detailed news.";
      result.style.color = "yellow";
    }

    else if (
      text.includes("breaking") ||
      text.includes("shocking") ||
      text.includes("viral") ||
      text.includes("you won't believe")
    ) {
      result.innerText = "❌ Likely Fake News";
      result.style.color = "red";
    }

    else {
      result.innerText = "✅ Seems Real";
      result.style.color = "lightgreen";
    }

  }, 1200);
}
