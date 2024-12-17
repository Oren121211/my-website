
document.addEventListener("DOMContentLoaded", () => {
    const languageSwitcher = document.getElementById("language-switcher");
    const currencySwitcher = document.getElementById("currency-switcher");
    const prices = document.querySelectorAll(".product-card p");
    const texts = document.querySelectorAll("[data-lang]");

    const productPrices = {
        "usd": [120, 40, 60], // Prices in USD
        "ils": [432, 144, 216] // Converted to ILS (~3.6 rate)
    };

    function updateCurrency(currency) {
        prices.forEach((price, index) => {
            price.textContent = currency === "usd" ? `$${productPrices[currency][index]}.00` : `₪${productPrices[currency][index]}`;
        });
    }

    function updateLanguage(language) {
        texts.forEach((el) => {
            el.textContent = el.dataset[language];
        });
    }

    currencySwitcher.addEventListener("change", (e) => {
        updateCurrency(e.target.value);
    });

    languageSwitcher.addEventListener("change", (e) => {
        updateLanguage(e.target.value);
    });

    // Default to USD and English
    updateCurrency("usd");
    updateLanguage("en");
});
