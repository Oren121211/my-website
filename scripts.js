
document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const currencySelector = document.getElementById('currency-selector');

    const translations = {
        en: {
            title: "Welcome to Our Store",
            "home-link": "Home",
            "about-link": "About Us",
            "contact-link": "Contact Us",
            "products-link": "Products",
            "intro-title": "Discover Our Premium Products",
            "intro-description": "Experience the best shopping with hand-picked products.",
            "products-title": "Our Products",
            "footer-text": "&copy; 2024 Your Store"
        },
        he: {
            title: "ברוכים הבאים לחנות שלנו",
            "home-link": "דף הבית",
            "about-link": "אודות",
            "contact-link": "צור קשר",
            "products-link": "מוצרים",
            "intro-title": "גלו את המוצרים האיכותיים שלנו",
            "intro-description": "חווית קנייה מושלמת עם מוצרים נבחרים בקפידה.",
            "products-title": "המוצרים שלנו",
            "footer-text": "&copy; 2024 החנות שלכם"
        }
    };

    const priceConversionRate = 3.5; // Conversion rate USD to ILS

    languageSelector.addEventListener('change', () => {
        const selectedLang = languageSelector.value;
        for (const key in translations[selectedLang]) {
            const element = document.getElementById(key);
            if (element) {
                element.innerHTML = translations[selectedLang][key];
            }
        }
    });

    currencySelector.addEventListener('change', () => {
        const selectedCurrency = currencySelector.value;
        const prices = document.querySelectorAll('.product-price');
        prices.forEach(price => {
            const usdPrice = parseFloat(price.dataset.usdPrice);
            if (selectedCurrency === 'ILS') {
                price.textContent = `₪${(usdPrice * priceConversionRate).toFixed(2)}`;
            } else {
                price.textContent = `$${usdPrice.toFixed(2)}`;
            }
        });
    });
});

