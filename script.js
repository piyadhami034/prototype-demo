function goToPage2() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("page2").style.display = "block";
}

function goToPage1() {
  document.getElementById("page3").style.display = "none";
  document.getElementById("page1").style.display = "block";
}

function analyze() {
  let text = document.getElementById("inputText").value.toLowerCase();

  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "block";

  let result = document.getElementById("result");
  let explanation = document.getElementById("explanation");

  if (text.includes("breaking") || text.includes("shocking")) {
    result.innerText = "❌ Fake News";
    explanation.innerText = "This contains clickbait words like 'breaking' or 'shocking', often used in fake news.";
  } else {
    result.innerText = "✅ Likely Real";
    explanation.innerText = "This appears informational and lacks clickbait indicators.";
  }
}
