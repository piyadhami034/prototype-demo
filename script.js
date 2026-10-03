// 👉 Go from Page 1 → Page 2
function goToPage2() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
}

// 👉 Go back to Page 1 (reset)
function goToPage1() {
  document.getElementById("page3").style.display = "none";
  document.getElementById("page1").style.display = "block";

  // clear input
  document.getElementById("inputText").value = "";
}

// 👉 Analyze News
function analyze() {
  let text = document.getElementById("inputText").value.toLowerCase();

  // switch page
  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "block";

  let result = document.getElementById("result");
  let explanation = document.getElementById("explanation");

  // loading state
  result.innerText = "Analyzing... ⏳";
  explanation.innerText = "";

  setTimeout(() => {

    // empty check
    if (text.trim() === "") {
      result.innerText = "⚠️ Please enter some news";
      explanation.innerText = "Input field cannot be empty.";
      result.style.color = "yellow";
      return;
    }

    // fake detection logic
    if (
      text.includes("breaking") ||
      text.includes("shocking") ||
      text.includes("viral") ||
      text.includes("you won't believe")
    ) {
      result.innerText = "❌ Fake News";
      explanation.innerText =
        "This contains clickbait words often used in fake news.";
      result.style.color = "red";
    }

    // real case
    else {
      result.innerText = "✅ Likely Real";
      explanation.innerText =
        "This appears informational and lacks clickbait indicators.";
      result.style.color = "lightgreen";
    }

  }, 1200);
}
