
document.addEventListener('DOMContentLoaded', function () {
    const languageSelector = document.getElementById('language-selector');
    const currencySelector = document.getElementById('currency-selector');
    const priceElements = document.querySelectorAll('.price');

    // Load saved preferences
    const savedLanguage = localStorage.getItem('language') || 'en';
    const savedCurrency = localStorage.getItem('currency') || 'USD';

    languageSelector.value = savedLanguage;
    currencySelector.value = savedCurrency;

    // Update prices based on saved currency
    updatePrices(savedCurrency);

    // Update language based on saved preference
    updateLanguage(savedLanguage);

    // Event listeners for selectors
    languageSelector.addEventListener('change', function () {
        const selectedLanguage = languageSelector.value;
        localStorage.setItem('language', selectedLanguage);
        updateLanguage(selectedLanguage);
    });

    currencySelector.addEventListener('change', function () {
        const selectedCurrency = currencySelector.value;
        localStorage.setItem('currency', selectedCurrency);
        updatePrices(selectedCurrency);
    });

    function updatePrices(currency) {
        priceElements.forEach(priceElement => {
            const usdPrice = parseFloat(priceElement.getAttribute('data-usd-price'));
            if (currency === 'ILS') {
                priceElement.textContent = (usdPrice * 3.5).toFixed(2) + ' ₪';
            } else {
                priceElement.textContent = usdPrice.toFixed(2) + ' $';
            }
        });
    }

    function updateLanguage(language) {
        const elements = document.querySelectorAll('[data-lang]');
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-lang-${language}`);
        });
    }
});
