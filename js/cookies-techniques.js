document.addEventListener("DOMContentLoaded", function () {
    const banner = document.querySelector(".cookie-banner");
    const button = document.querySelector(".cookie-accept");

    if (!banner || !button) return;

    const storageKey = "joshua_cookie_technical_notice_accepted";

    if (localStorage.getItem(storageKey) !== "true") {
        banner.classList.add("is-visible");
    }

    button.addEventListener("click", function () {
        localStorage.setItem(storageKey, "true");
        banner.classList.remove("is-visible");
    });
});
