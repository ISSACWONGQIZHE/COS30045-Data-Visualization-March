const content = document.getElementById('content');
const navItems = document.querySelectorAll('nav ul li');
const logo = document.getElementById('logo');

const pages = {
    home: `
        <section class="hero-section">
            <h1>Australian Appliance Energy Tracker</h1>
            <p class="intro-text">
                Explore how household appliances use energy and how better choices can help Australian households save electricity.
            </p>

            <div class="info-grid">
                <div class="info-card">
                    <h2>Fridges</h2>
                    <p>Average fridge energy consumption is around 300–500 kWh per year.</p>
                </div>

                <div class="info-card">
                    <h2>Televisions</h2>
                    <p>TV energy use changes depending on screen size, screen technology, and efficiency rating.</p>
                </div>

                <div class="info-card">
                    <h2>Air Conditioning</h2>
                    <p>Air conditioning energy use varies widely depending on household behaviour and usage time.</p>
                </div>
            </div>
        </section>
    `,

    televisions: `
        <section class="content-section">
            <h1>Television Energy Consumption</h1>
            <p>
                Televisions are common household appliances, but their energy consumption can vary depending on their size,
                screen technology, and energy efficiency rating.
            </p>

            <div class="highlight-box">
                <h2>Key Factors</h2>
                <ul>
                    <li>Screen size affects power consumption.</li>
                    <li>Screen technology can change average energy use.</li>
                    <li>Star rating helps compare energy efficiency between models.</li>
                </ul>
            </div>
        </section>
    `,

    dataStory: `
        <section class="content-section">
            <h1>Bigger Screens, Bigger Power Use?</h1>
            <p class="intro-text">
                This data story is designed for Australian consumers who are planning to buy a television and want to understand
                how screen size, screen technology, and energy efficiency relate to power consumption.
            </p>

            <div class="story-card">
                <h2>Audience</h2>
                <p>
                    The audience is Australian TV buyers who want to compare TVs based on energy use, screen size, and energy rating
                    before making a purchase decision.
                </p>
            </div>

            <div class="story-card">
            <h2>Storyboard</h2>
            <p>
                    This storyboard outlines the planned flow of the website, starting from the issue,
                    then moving through the audience, key visualisations, and final recommendation.
            </p>
                    <img class="story-image" src="images/storyboard.png" alt="Storyboard for the TV energy consumption data story">
            </div>

            <div class="story-card">
                <h2>The Issue</h2>
                <p>
                    Many consumers choose televisions based mainly on screen size, brand, or price. However, energy consumption is
                    also important because it affects long-term electricity use.
                </p>
            </div>

                        <div class="story-card">
                <h2>Screen Technology</h2>
                <p>
                    LCD (LED) is the most common screen technology in the dataset, followed by LCD and OLED.
                    This shows that LCD (LED) models are the most widely available among the TVs analysed.
                </p>
                <img class="chart-image" src="images/screen-technology-chart.png" alt="Bar chart showing counts of TV screen technologies">
            </div>

            <div class="story-card">
                <h2>Power Use by Screen Technology</h2>
                <p>
                    LCD has the lowest average power consumption, while OLED has the highest average power consumption.
                    This suggests that screen technology can influence how much power a television uses.
                </p>
                <img class="chart-image" src="images/screen-tech-power-chart.png" alt="Bar chart showing average power consumption by screen technology">
            </div>

            <div class="story-card">
                <h2>Screen Size and Power Use</h2>
                <p>
                    Screen sizes were grouped into categories before plotting. The scatter plot shows that larger screen
                    sizes, especially 65-inch and 75-inch models, generally consume more power than smaller models.
                </p>
                <img class="chart-image" src="images/screen-size-power-chart.png" alt="Scatter plot showing screen size categories and power use">
            </div>

            <div class="story-card">
                <h2>Star Rating and Screen Size</h2>
                <p>
                    Star ratings are spread across all screen size categories without a clear pattern. This shows that
                    screen size alone does not strongly determine energy efficiency.
                </p>
                <img class="chart-image" src="images/star-rating-screen-size-chart.png" alt="Scatter plot showing star ratings across screen size categories">
            </div>

            <div class="recommendation-box">
                <h2>Recommendation</h2>
                <p>
                    Consumers should not choose a TV based only on size or brand. They should compare screen size, power consumption,
                    and star rating together before buying a television.
                </p>
            </div>
        </section>
    `,

    about: `
        <section class="content-section">
            <h1>About This Website</h1>
            <p>
                This website presents energy consumption insights to help Australian households make more informed appliance choices.
            </p>
            <p>
                The goal is to make energy usage easier to understand through clear explanations and simple visual storytelling.
            </p>
        </section>
    `
};

function loadPage(page) {
    content.innerHTML = pages[page];

    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        loadPage(item.dataset.page);
    });
});

logo.addEventListener('click', () => {
    loadPage('home');
});

loadPage('home');