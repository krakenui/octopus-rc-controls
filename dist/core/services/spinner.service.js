"use strict";

exports.__esModule = true;
exports.showSpinner = showSpinner;
exports.hideSpinner = hideSpinner;

function showSpinner() {
  var spinnerElm = window.spinnerElm;

  if (spinnerElm) {
    spinnerElm.style.display = 'inherit';
  }
}

function hideSpinner() {
  var spinnerElm = window.spinnerElm;

  if (spinnerElm) {
    setInterval(function () {
      spinnerElm.style.display = 'none';
    }, 2000);
  }
}