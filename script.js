function goToPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function goToPage1() {
  document.getElementById("page3").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");

  document.getElementById("inputText").value = "";
  document.getElementById("progressBar").style.width = "0%";
}

function analyze() {
  let text = document.getElementById("inputText").value.toLowerCase();

  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");

  let result = document.getElementById("result");
  let explanation = document.getElementById("explanation");
  let loader = document.getElementById("loader");
  let progress = document.getElementById("progressBar");

  result.innerText = "";
  explanation.innerText = "";
  progress.style.width = "0%";

  loader.style.display = "block";

  setTimeout(() => {

    loader.style.display = "none";

    let confidence = Math.floor(Math.random() * 30) + 70;

    if (
      text.includes("breaking") ||
      text.includes("shocking") ||
      text.includes("viral") ||
      text.includes("you won't believe")
    ) {
      result.innerText = "❌ Fake News";
      result.className = "fake";
      explanation.innerText =
        "Detected clickbait-style language often used in fake news.";
    } else {
      result.innerText = "✅ Likely Real";
      result.className = "real";
      explanation.innerText =
        "Content appears informational and lacks misleading patterns.";
    }

    progress.style.width = confidence + "%";

  }, 1500);
}
