export function showSpinner() {
    const spinnerElm = window.spinnerElm;

    if (spinnerElm) {
        spinnerElm.style.display = 'inherit';
    }
}

export function hideSpinner() {
    const spinnerElm = window.spinnerElm;

    if (spinnerElm) {
        setInterval(() => {
            spinnerElm.style.display = 'none';
        }, 2000);
    }
}
