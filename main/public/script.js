if (location !== parent.location) {
  alert("You must open this in a new tab to make this work")
  document.body.addEventListener("click", () => alert(`You must open this in a new tab to make this work. Please open up "https://HTML-to-Markdown-Download-File.goodnessdavid.repl.co" in a new browser tab.`))
  window.open("https://HTML-to-Markdown-Download-File.goodnessdavid.repl.co");
}