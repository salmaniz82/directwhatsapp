let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Show the install button (log for debugging)
  console.log("Install prompt is ready");
  document.querySelector("#installButton").style.display = "block";
});

document.querySelector("#installButton").addEventListener("click", (e) => {
  // Hide the install button
  e.target.style.display = "none";
  // Show the prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult) => {
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the A2HS prompt");
    } else {
      console.log("User dismissed the A2HS prompt");
    }
    deferredPrompt = null;
  });
});

var triggerButton = document.getElementById("triggerButton");

var inputTel = document.getElementById("contactnumber");

var anchorButton = document.getElementById("anchorButton");

const updateFloatLabels = () => {
  if (inputTel.value.trim() !== "") {
    inputTel.classList.add("pull-active");
  } else {
    inputTel.classList.remove("pull-active");
  }
};

inputTel.addEventListener("keyup", function (e) {
  e.target.value;

  var inputvalue = e.target.value;

  if (inputvalue.length > 10) {
    /*
			https://api.whatsapp.com/send?phone=923121006348
			*/
    var basePath = "https://api.whatsapp.com/send?phone=";
    var targetNumber = inputvalue;
    var targetPathUrl = basePath + targetNumber;
    anchorButton.setAttribute("href", targetPathUrl);

    anchorButton.style.display = "inline-block";
  } else {
    anchorButton.style.display = "none";
  }
});

// Listen for the input event
inputTel.addEventListener("input", function () {
  let sanitizedValue = inputTel.value.replace(/[^0-9]/g, "");
  // Update the input field value with the sanitized value
  inputTel.value = sanitizedValue;
  updateFloatLabels();
});
