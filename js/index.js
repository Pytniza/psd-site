let quote_1 = document.getElementById('quote-1');
let quote_2 = document.getElementById('quote-2');
let quote_3 = document.getElementById('quote-3');
let slide_1 = document.getElementById('slide-1');
let slide_2 = document.getElementById('slide-2');
let slide_3 = document.getElementById('slide-3');
quote_1.onclick = function() {
  slide_1.style.display = "inline";
  slide_2.style.display = "none";
  slide_3.style.display = "none";
  quote_1.style.background = "#fff";
  quote_2.style.background = "#424241";
  quote_3.style.background = "#424241";
}
quote_2.onclick = function() {
  slide_2.style.display = "inline";
  slide_1.style.display = "none";
  slide_3.style.display = "none";
  quote_2.style.background = "#fff";
  quote_1.style.background = "#424241";
  quote_3.style.background = "#424241";
}
quote_3.onclick = function() {
  slide_3.style.display = "inline";
  slide_1.style.display = "none";
  slide_2.style.display = "none";
  quote_3.style.background = "#fff";
  quote_2.style.background = "#424241";
  quote_1.style.background = "#424241";
}
