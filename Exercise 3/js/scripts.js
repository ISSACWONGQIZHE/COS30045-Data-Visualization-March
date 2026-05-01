const content = document.getElementById('content');
const navItems = document.querySelectorAll('nav ul li');
const logo = document.getElementById('logo');

// Page contents (placeholder)
const pages = {
    home: `
        <h1>Welcome to Australian Appliance Energy Tracker</h1>
        <p>Discover how different household appliances consume energy and ways to save electricity in Australia.</p>
        <ul>
            <li>Average fridge energy consumption: 300-500 kWh/year</li>
            <li>Average TV energy consumption: 100-250 kWh/year</li>
            <li>Air conditioning: varies widely depending on usage</li>
        </ul>
    `,
    televisions: `
        <h1>Televisions Energy Consumption</h1>
        <p>TVs contribute significantly to household energy usage. Compare different models and energy-saving tips:</p>
        <ul>
            <li>LED TVs: ~80-150 kWh/year</li>
            <li>OLED TVs: ~120-250 kWh/year</li>
            <li>Energy-saving mode reduces consumption by ~20%</li>
        </ul>
    `,
    about: `
        <h1>About Us</h1>
        <p>We provide insights on appliance energy consumption in Australia to help households save money and reduce environmental impact.</p>
        <p>Our goal is to make energy usage transparent and accessible.</p>
    `
};

// Function to load page
function loadPage(page) {
    content.innerHTML = pages[page];

    navItems.forEach(item => {
        item.classList.remove('active');
        if(item.dataset.page === page) item.classList.add('active');
    });
}

// Event listeners for navigation
navItems.forEach(item => {
    item.addEventListener('click', () => {
        loadPage(item.dataset.page);
    });
});

// Logo click returns to home
logo.addEventListener('click', () => {
    loadPage('home');
});

// Load home by default
loadPage('home');