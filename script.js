function checkNews() {
  let text = document.getElementById("inputText").value;

  if (text.length < 20) {
    document.getElementById("result").innerText = "Enter more content";
  } else {
    document.getElementById("result").innerText = "This might be Fake ❌";
  }
}
