function openOverlay(imgSrc, imgLocation, imgTimestamp) {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("fullImage").src=imgSrc;
  document.getElementById("location").innerHTML=imgLocation;
  document.getElementById("timestamp").innerHTML=imgTimestamp;
  document.getElementById("body").style.overflow = "hidden";
}

function closeOverlay() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("body").style.overflow = "auto";
}
