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

    exercise4: `
        <section class="content-section">
            <h1>Exercise 4.1 - Draw SVGs</h1>

            <p class="intro-text">
                This exercise demonstrates how SVG shapes can be used to create a house and garden scene.
                It also shows the SVG coordinate system, grouped elements, transforms, annotation, and DOM inspection.
            </p>

            <div class="story-card">
                <h2>Step 1 - Create a picture with SVG shapes</h2>

                <p>
                    The house and garden scene below was created directly with SVG elements such as rectangles,
                    circles, ellipses, polygons, lines, paths, and text.
                </p>

                <svg width="1000" height="650" viewBox="0 0 1000 650" class="exercise-svg">
                    <rect x="0" y="0" width="1000" height="650" fill="#cfeeff"></rect>

                    <circle cx="850" cy="90" r="48" fill="#ffd966" stroke="#e0a800" stroke-width="4"></circle>
                    <line x1="850" y1="18" x2="850" y2="8" stroke="#e0a800" stroke-width="4"></line>
                    <line x1="850" y1="172" x2="850" y2="162" stroke="#e0a800" stroke-width="4"></line>
                    <line x1="778" y1="90" x2="765" y2="90" stroke="#e0a800" stroke-width="4"></line>
                    <line x1="935" y1="90" x2="922" y2="90" stroke="#e0a800" stroke-width="4"></line>

                    <ellipse cx="150" cy="105" rx="65" ry="30" fill="white"></ellipse>
                    <ellipse cx="220" cy="90" rx="80" ry="38" fill="white"></ellipse>
                    <ellipse cx="295" cy="110" rx="70" ry="30" fill="white"></ellipse>

                    <ellipse cx="600" cy="95" rx="55" ry="25" fill="white"></ellipse>
                    <ellipse cx="655" cy="80" rx="70" ry="32" fill="white"></ellipse>
                    <ellipse cx="715" cy="98" rx="60" ry="26" fill="white"></ellipse>

                    <rect x="0" y="440" width="1000" height="210" fill="#79b354"></rect>
                    <line x1="0" y1="440" x2="1000" y2="440" stroke="#3e7d33" stroke-width="6"></line>

                    <rect x="45" y="370" width="18" height="85" fill="#c68642" stroke="#8b5a2b" stroke-width="5"></rect>
                    <rect x="95" y="370" width="18" height="85" fill="#c68642" stroke="#8b5a2b" stroke-width="5"></rect>
                    <rect x="145" y="370" width="18" height="85" fill="#c68642" stroke="#8b5a2b" stroke-width="5"></rect>
                    <rect x="195" y="370" width="18" height="85" fill="#c68642" stroke="#8b5a2b" stroke-width="5"></rect>
                    <line x1="35" y1="400" x2="225" y2="400" stroke="#8b5a2b" stroke-width="5"></line>
                    <line x1="35" y1="430" x2="225" y2="430" stroke="#8b5a2b" stroke-width="5"></line>

                    <rect x="785" y="370" width="18" height="85" fill="#c68642" stroke="#8b5a2b" stroke-width="5"></rect>
                    <rect x="835" y="370" width="18" height="85" fill="#c68642" stroke="#8b5a2b" stroke-width="5"></rect>
                    <rect x="885" y="370" width="18" height="85" fill="#c68642" stroke="#8b5a2b" stroke-width="5"></rect>
                    <rect x="935" y="370" width="18" height="85" fill="#c68642" stroke="#8b5a2b" stroke-width="5"></rect>
                    <line x1="775" y1="400" x2="965" y2="400" stroke="#8b5a2b" stroke-width="5"></line>
                    <line x1="775" y1="430" x2="965" y2="430" stroke="#8b5a2b" stroke-width="5"></line>

                    <path d="M460 440 C430 500, 390 560, 360 650 L640 650 C610 560, 570 500, 540 440 Z" fill="#d8b384" stroke="#8b6f47" stroke-width="4"></path>

                    <rect x="310" y="255" width="380" height="190" fill="#f2b27f" stroke="#333" stroke-width="5"></rect>

                    <polygon points="270,255 500,95 730,255" fill="#b94a3a" stroke="#333" stroke-width="5"></polygon>
                    <line x1="270" y1="255" x2="730" y2="255" stroke="#333" stroke-width="8"></line>

                    <rect x="610" y="135" width="55" height="95" fill="#86512c" stroke="#333" stroke-width="5"></rect>
                    <rect x="603" y="125" width="69" height="15" fill="#6f3f22" stroke="#333" stroke-width="4"></rect>

                    <rect x="465" y="340" width="80" height="105" fill="#8b5a2b" stroke="#333" stroke-width="5"></rect>
                    <circle cx="530" cy="395" r="7" fill="#ffd966" stroke="#333" stroke-width="2"></circle>

                    <g id="windows" fill="#9fd5f5" stroke="#333" stroke-width="5">
                        <g transform="translate(355, 305)">
                            <rect x="0" y="0" width="75" height="75"></rect>
                            <line x1="37.5" y1="0" x2="37.5" y2="75"></line>
                            <line x1="0" y1="37.5" x2="75" y2="37.5"></line>
                        </g>

                        <g transform="translate(570, 305)">
                            <rect x="0" y="0" width="75" height="75"></rect>
                            <line x1="37.5" y1="0" x2="37.5" y2="75"></line>
                            <line x1="0" y1="37.5" x2="75" y2="37.5"></line>
                        </g>
                    </g>

                    <line x1="365" y1="315" x2="420" y2="370" stroke="white" stroke-width="3" opacity="0.7"></line>
                    <line x1="580" y1="315" x2="635" y2="370" stroke="white" stroke-width="3" opacity="0.7"></line>

                    <text x="397" y="225" font-size="30" fill="#ffffff" stroke="#333" stroke-width="1">
                        SVG House
                    </text>

                    <rect x="170" y="410" width="28" height="100" fill="#8b5a2b"></rect>
                    <circle cx="185" cy="370" r="55" fill="#65ab5b" stroke="#2f6d31" stroke-width="5"></circle>
                    <circle cx="145" cy="390" r="35" fill="#70bb66" stroke="#2f6d31" stroke-width="4"></circle>
                    <circle cx="225" cy="390" r="35" fill="#70bb66" stroke="#2f6d31" stroke-width="4"></circle>

                    <rect x="810" y="410" width="28" height="100" fill="#8b5a2b"></rect>
                    <circle cx="825" cy="370" r="55" fill="#65ab5b" stroke="#2f6d31" stroke-width="5"></circle>
                    <circle cx="785" cy="390" r="35" fill="#70bb66" stroke="#2f6d31" stroke-width="4"></circle>
                    <circle cx="865" cy="390" r="35" fill="#70bb66" stroke="#2f6d31" stroke-width="4"></circle>

                    <line x1="110" y1="540" x2="110" y2="590" stroke="#2f6d31" stroke-width="4"></line>
                    <circle cx="110" cy="530" r="9" fill="#ffd966"></circle>
                    <circle cx="95" cy="540" r="9" fill="#ff5c8a"></circle>
                    <circle cx="125" cy="540" r="9" fill="#8fd3ff"></circle>

                    <line x1="890" y1="540" x2="890" y2="590" stroke="#2f6d31" stroke-width="4"></line>
                    <circle cx="890" cy="530" r="9" fill="#ffd966"></circle>
                    <circle cx="875" cy="540" r="9" fill="#ff5c8a"></circle>
                    <circle cx="905" cy="540" r="9" fill="#8fd3ff"></circle>

                    <ellipse cx="280" cy="455" rx="45" ry="25" fill="#4f9a45"></ellipse>
                    <ellipse cx="720" cy="455" rx="45" ry="25" fill="#4f9a45"></ellipse>

                    <path d="M120 210 Q135 195 150 210 Q165 195 180 210" fill="none" stroke="#333" stroke-width="3"></path>
                    <path d="M690 190 Q705 175 720 190 Q735 175 750 190" fill="none" stroke="#333" stroke-width="3"></path>
                </svg>
            </div>

            <div class="story-card">
                <h2>Step 2 - SVG Coordinate System</h2>

                <p>
                    SVG uses a coordinate system where the origin <strong>(0,0)</strong> starts at the top-left corner.
                    The x value increases when moving to the right, and the y value increases when moving downward.
                </p>

                <table>
                    <tr>
                        <th>SVG shape</th>
                        <th>Example from my code</th>
                        <th>How the coordinates work</th>
                    </tr>
                    <tr>
                        <td>Rectangle</td>
                        <td><code>&lt;rect x="310" y="255" width="380" height="190"&gt;</code></td>
                        <td>The x and y values place the top-left corner of the house body. Width and height control the size.</td>
                    </tr>
                    <tr>
                        <td>Circle</td>
                        <td><code>&lt;circle cx="850" cy="90" r="48"&gt;</code></td>
                        <td>cx and cy place the centre of the sun. r controls the radius.</td>
                    </tr>
                    <tr>
                        <td>Ellipse</td>
                        <td><code>&lt;ellipse cx="220" cy="90" rx="80" ry="38"&gt;</code></td>
                        <td>cx and cy place the centre. rx controls horizontal radius and ry controls vertical radius.</td>
                    </tr>
                    <tr>
                        <td>Polygon</td>
                        <td><code>&lt;polygon points="270,255 500,95 730,255"&gt;</code></td>
                        <td>Each pair of numbers is a point. The three points join together to form the roof.</td>
                    </tr>
                    <tr>
                        <td>Line</td>
                        <td><code>&lt;line x1="392.5" y1="305" x2="392.5" y2="380"&gt;</code></td>
                        <td>x1 and y1 are the starting point. x2 and y2 are the ending point.</td>
                    </tr>
                    <tr>
                        <td>Path</td>
                        <td><code>&lt;path d="M460 440 C430 500..."&gt;</code></td>
                        <td>The d attribute contains drawing commands that create curved or custom shapes.</td>
                    </tr>
                    <tr>
                        <td>Text</td>
                        <td><code>&lt;text x="397" y="225"&gt;SVG House&lt;/text&gt;</code></td>
                        <td>The x and y values position the text inside the SVG canvas.</td>
                    </tr>
                    <tr>
                        <td>Group</td>
                        <td><code>&lt;g id="windows"&gt;</code></td>
                        <td>The two windows are grouped so shared styles like fill, stroke, and stroke width can be applied together.</td>
                    </tr>
                    <tr>
                        <td>Transform</td>
                        <td><code>&lt;g transform="translate(355, 305)"&gt;</code></td>
                        <td>The translate value moves the whole window group to a new position without changing every shape manually.</td>
                    </tr>
                </table>
            </div>

            <div class="story-card">
                <h2>Step 3 - Customise the picture</h2>

                <p>
                    The SVG was customised by changing colours, adding strokes, adding a chimney, trees,
                    flowers, fences, bushes, birds, clouds, sun rays, and a curved path.
                </p>
            </div>

            <div class="story-card">
                <h2>Step 4 - Use group and transform</h2>

                <p>
                    The two windows are placed inside a <code>&lt;g id="windows"&gt;</code> group.
                    Shared styles are applied to the whole group, and each window is positioned using
                    <code>transform="translate(...)"</code>.
                </p>
            </div>

            <div class="story-card">
                <h2>Step 5 - Annotated screenshot and DOM inspection</h2>

                <p>
                    The annotated screenshot shows how SVG coordinates match the drawing. The DOM screenshot
                    shows the SVG elements inspected in browser Developer Tools.
                </p>

                <img class="chart-image" src="images/svg-annotation.png" alt="Annotated screenshot of SVG coordinate system">

                <img class="chart-image" src="images/dom-screenshot.png" alt="Screenshot of SVG elements in browser DOM">
            </div>

            <div class="story-card">
                <h2>Exercise 4.3 - D3 Setup</h2>

                <p>
                    This step sets up D3 by adding a responsive SVG container to the webpage.
                    D3 is then used to create an SVG element and draw a test rectangle.
                </p>

                <div class="responsive-svg-container"></div>
            </div>

            <div class="story-card">
                <h2>Exercise 4.4 - Load Data from CSV</h2>

                <p>
                    This step loads the brand count CSV file using <code>d3.csv()</code>.
                    The brand column is kept as text, while the count column is converted into a number
                    so it can be used for drawing a chart later.
                </p>

                <p>
                    The loaded data, number of rows, maximum count, minimum count, and extent are printed
                    in the browser console.
                </p>
            </div>
                        <div class="story-card">
                <h2>Exercise 4.5 - Bind and Draw Bars with Data</h2>

                <p>
                    This step binds the loaded CSV data to SVG rectangle elements.
                    Each brand creates one bar, and each bar width is based on the count value from the CSV.
                </p>

                <p>
                    At this stage, the raw count values are used directly for the bar widths.
                    Scaling will be added in Exercise 4.6.
                </p>

                <div class="bar-chart-container"></div>
            </div>
                        <div class="story-card">
                <h2>Exercise 4.6 - Scaling the Bar Chart</h2>

                <p>
                    This step improves the bar chart by using D3 scales.
                    A linear scale is used to make the count values fit within the SVG width,
                    and a band scale is used to space the brand bars evenly on the y-axis.
                </p>

                <p>
                    This makes the chart more adaptable because the bars are no longer drawn using raw pixel values directly.
                </p>

                <div class="scaled-bar-chart-container"></div>
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

function createD3SetupDemo() {
    const container = d3.select(".responsive-svg-container");

    container.selectAll("*").remove();

    const svg = container
        .append("svg")
        .attr("viewBox", "0 0 1200 1600")
        .style("border", "1px solid black");

    svg
        .append("rect")
        .attr("x", 10)
        .attr("y", 10)
        .attr("width", 414)
        .attr("height", 16)
        .attr("fill", "blue");
}

function loadBrandData() {
    d3.csv("data/tv-brand-count.csv", d => {
        console.log(d);

        const columns = Object.keys(d);

        return {
            brand: d[columns[0]],
            count: +d[columns[1]]
        };
    }).then(data => {
        data.sort((a, b) => b.count - a.count);

        console.log(data);
        console.log(data.length);
        console.log(d3.max(data, d => d.count));
        console.log(d3.min(data, d => d.count));
        console.log(d3.extent(data, d => d.count));

        createBarChart(data);
    });
}

function createBarChart(data) {
    console.log("Data passed to createBarChart:", data);

    const width = 500;
    const height = 500;

    const container = d3.select(".bar-chart-container");

    container.selectAll("*").remove();

    const svg = container
        .append("svg")
        .attr("viewBox", "0 0 1200 2000")
        .style("border", "1px solid black");

    const barHeight = 18;
    const barSpacing = 5;

    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => {
            return `bar bar-${d.count}`;
        })
        .attr("x", 0)
        .attr("y", (d, i) => {
            return i * (barHeight + barSpacing);
        })
        .attr("width", d => {
            return d.count;
        })
        .attr("height", barHeight)
        .attr("fill", "blue");

    createScaledBarChart(data);
}

function createScaledBarChart(data) {
    const width = 500;
    const height = 500;

    const container = d3.select(".scaled-bar-chart-container");

    container.selectAll("*").remove();

    const svg = container
        .append("svg")
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("border", "1px solid black");

    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.count)])
        .range([0, width]);

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.brand))
        .range([0, height])
        .padding(0.2);

    svg
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => {
            return `bar bar-${d.count}`;
        })
        .attr("x", 0)
        .attr("y", d => {
            return yScale(d.brand);
        })
        .attr("width", d => {
            return xScale(d.count);
        })
        .attr("height", yScale.bandwidth())
        .attr("fill", "blue");
}

function loadPage(page) {
    content.innerHTML = pages[page];

    navItems.forEach(item => {
        item.classList.toggle('active', item.dataset.page === page);
    });

    if (page === 'exercise4') {
        createD3SetupDemo();
        loadBrandData();
    }
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