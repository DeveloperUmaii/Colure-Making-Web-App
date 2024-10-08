function mixColors() {
    const colorCode = document.getElementById("colorCode").value;
    const volume = parseFloat(document.getElementById("volume").value);
    const resultElement = document.getElementById("mixtureDetails");
    const colorDisplay = document.getElementById("colorDisplay");

    // Convert Hex to RGB if necessary
    let rgbColor;
    if (colorCode.startsWith('#')) {
        rgbColor = hexToRgb(colorCode);
    } else if (colorCode.startsWith('rgb')) {
        rgbColor = colorCode.match(/\d+/g).map(Number);
    } else {
        resultElement.textContent = "Invalid color code!";
        return;
    }

    const [red, green, blue] = rgbColor;
    
    // Calculate the amount of each color
    const redVolume = (red / 255) * volume;
    const greenVolume = (green / 255) * volume;
    const blueVolume = (blue / 255) * volume;

    // Display the mixture instructions
    resultElement.textContent = `
        Mix the following:
        - Red: ${redVolume.toFixed(2)} liters
        - Green: ${greenVolume.toFixed(2)} liters
        - Blue: ${blueVolume.toFixed(2)} liters
    `;

    // Display the color
    colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return [r, g, b];
}
