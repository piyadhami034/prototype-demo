async function analyze() {
  let text = document.getElementById("inputText").value;

  document.getElementById("page2").style.display = "none";
  document.getElementById("page3").style.display = "block";

  let result = document.getElementById("result");
  let explanation = document.getElementById("explanation");

  result.innerText = "Checking with AI... ⏳";
  explanation.innerText = "";

  try {
    const res = await fetch("https://real-check.org/api/factcheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer YOUR_API_KEY"
      },
      body: JSON.stringify({
        claim: text,
        mode: "auto"
      })
    });

    const data = await res.json();

    // verdict
    if (data.verdict === "false") {
      result.innerText = "❌ Fake News";
      result.style.color = "red";
    } else if (data.verdict === "true") {
      result.innerText = "✅ Real News";
      result.style.color = "lightgreen";
    } else {
      result.innerText = "⚠️ Unverified";
      result.style.color = "yellow";
    }

    // explanation
    explanation.innerText = data.summary;

  } catch (err) {
    result.innerText = "Error fetching AI result";
  }
}
