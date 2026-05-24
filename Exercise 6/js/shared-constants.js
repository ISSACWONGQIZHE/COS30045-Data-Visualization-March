const margin = {
    top: 40,
    right: 30,
    bottom: 70,
    left: 80
};

const width = 900;
const height = 500;

const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const barColor = "#ff8a00";
const barHoverColor = "#a65c1c";
const bodyBackgroundColor = "#fff8e1";

const xScale = d3.scaleLinear();
const yScale = d3.scaleLinear();

const binGenerator = d3.bin()
    .value(d => d.energyConsumption)
    .domain([0, 1800])
    .thresholds(d3.range(0, 1801, 200));

const filters_screen = [
    {
        id: "all",
        label: "All",
        isActive: true
    },
    {
        id: "LED",
        label: "LED",
        isActive: false
    },
    {
        id: "LCD",
        label: "LCD",
        isActive: false
    },
    {
        id: "OLED",
        label: "OLED",
        isActive: false
    }
];

const filters_size = [
    {
        id: "all",
        label: "All Sizes",
        isActive: true
    },
    {
        id: 24,
        label: '24"',
        isActive: false
    },
    {
        id: 32,
        label: '32"',
        isActive: false
    },
    {
        id: 55,
        label: '55"',
        isActive: false
    },
    {
        id: 65,
        label: '65"',
        isActive: false
    },
    {
        id: 98,
        label: '98"',
        isActive: false
    }
];

let currentScreenFilter = "all";
let currentSizeFilter = "all";