export function scrollToElement() {
    const hash = window.location.hash;
    if (!hash) return;

    let element = document.getElementById(hash.substring(1));
    if (!element) return;

    element.scrollIntoView();
}
