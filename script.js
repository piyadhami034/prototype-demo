function goToPage2() {
  document.getElementById("page1").classList.add("hidden");
  document.getElementById("page2").classList.remove("hidden");
}

function goToPage1() {
  document.getElementById("page3").classList.add("hidden");
  document.getElementById("page1").classList.remove("hidden");
}

function analyze() {

  let text = document.getElementById("inputText").value.toLowerCase();

  document.getElementById("page2").classList.add("hidden");
  document.getElementById("page3").classList.remove("hidden");

  let result = document.getElementById("result");
  let explanation = document.getElementById("explanation");
  let loader = document.getElementById("loader");
  let progress = document.getElementById("progressBar");
  let confidenceText = document.getElementById("confidenceText");
  let sources = document.getElementById("sources");

  loader.style.display = "block";
  result.innerText = "";
  explanation.innerText = "";
  confidenceText.innerText = "";
  sources.innerHTML = "";
  progress.style.width = "0%";

  setTimeout(() => {

    loader.style.display = "none";

    let fakeWords = ["breaking", "shocking", "viral", "you won't believe"];
    let isFake = fakeWords.some(word => text.includes(word));

    let confidence = Math.floor(Math.random() * 20) + 80;

    if (isFake) {
      result.innerText = "❌ Fake News";
      result.className = "fake";
      explanation.innerText = "Detected sensational or clickbait language.";
    } else {
      result.innerText = "✅ Likely Real";
      result.className = "real";
      explanation.innerText = "Content looks informational and structured.";
    }

    confidenceText.innerText = "Confidence: " + confidence + "%";
    progress.style.width = confidence + "%";

    // fake sources (for demo)
    sources.innerHTML = `
      <b>Sources:</b><br>
      <a href="#">Reuters</a><br>
      <a href="#">BBC News</a><br>
      <a href="#">FactCheck.org</a>
    `;

  }, 1500);
}
