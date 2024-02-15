const colorThemes = [
    {
        name: "orange",
        light: {
            primaryColor: "#ff8c00",
            secondaryColor: "#ffcc80",
            tertiaryColor: "#ff8c00e3",
            darkPrimary: "#e07e00",
            lightTransparent: "#ffcc80a8",
            text: "#f0f0f0",
            background: "#ffe5b4",
            darkText: "#131313",
            backgroundLight: "#fff8eb",
            darkGray: "#2a2a2a",
            backgroundGradientMask: "linear-gradient(to bottom, #ffcc80 15%, transparent 85%)",
        },
        dark: {
            primaryColor: "#ff8c00",
            secondaryColor: "#ffa54f",
            tertiaryColor: "#ff8c00a5",
            darkPrimary: "#ff7200",
            lightTransparent: "#ffa54fa8",
            text: "#ececec",
            background: "#1a1a1a", // Dark gray background
            darkText: "#f0f0f0",
            backgroundLight: "#222",
            darkGray: "#7f8c9b",
            backgroundGradientMask: "linear-gradient(to bottom, #ffa54f 15%, transparent 85%)",
        },
    },
    {
        name: "green",
        light: {
            primaryColor: "#4caf50",
            secondaryColor: "#8bc34a",
            tertiaryColor: "#4caf50e3",
            darkPrimary: "#388e3c",
            lightTransparent: "#8bc34aa8",
            text: "#f0f0f0",
            background: "#c8e6c9",
            darkText: "#131313",
            backgroundLight: "#f1f8e9",
            darkGray: "#2a2a2a",
            backgroundGradientMask: "linear-gradient(to bottom, #8bc34a 15%, transparent 85%)",
        },
        dark: {
            primaryColor: "#4caf50",
            secondaryColor: "#66bb6a",
            tertiaryColor: "#4caf50a5",
            darkPrimary: "#43a047",
            lightTransparent: "#66bb6aa8",
            text: "#ececec",
            background: "#1a1a1a", // Dark gray background
            darkText: "#f0f0f0",
            backgroundLight: "#222",
            darkGray: "#7f8c9b",
            backgroundGradientMask: "linear-gradient(to bottom, #66bb6a 15%, transparent 85%)",
        },
    },
    {
        name: "red",
        light: {
            primaryColor: "#e53935",
            secondaryColor: "#f44336",
            tertiaryColor: "#e53935e3",
            darkPrimary: "#c62828",
            lightTransparent: "#f44336a8",
            text: "#f0f0f0",
            background: "#ffcdd2",
            darkText: "#131313",
            backgroundLight: "#ffebee",
            darkGray: "#2a2a2a",
            backgroundGradientMask: "linear-gradient(to bottom, #f44336 15%, transparent 85%)",
        },
        dark: {
            primaryColor: "#e53935",
            secondaryColor: "#f44336",
            tertiaryColor: "#e53935a5",
            darkPrimary: "#c62828",
            lightTransparent: "#f44336a8",
            text: "#ececec",
            background: "#1a1a1a", // Dark gray background
            darkText: "#f0f0f0",
            backgroundLight: "#222",
            darkGray: "#7f8c9b",
            backgroundGradientMask: "linear-gradient(to bottom, #f44336 15%, transparent 85%)",
        },
    },
    {
        name: "brown",
        light: {
            primaryColor: "#795548",
            secondaryColor: "#8d6e63",
            tertiaryColor: "#795548e3",
            darkPrimary: "#5d4037",
            lightTransparent: "#8d6e63a8",
            text: "#f0f0f0",
            background: "#d7ccc8",
            darkText: "#131313",
            backgroundLight: "#efebe9",
            darkGray: "#2a2a2a",
            backgroundGradientMask: "linear-gradient(to bottom, #8d6e63 15%, transparent 85%)",
        },
        dark: {
            primaryColor: "#795548",
            secondaryColor: "#8d6e63",
            tertiaryColor: "#795548a5",
            darkPrimary: "#5d4037",
            lightTransparent: "#8d6e63a8",
            text: "#ececec",
            background: "#1a1a1a", // Dark gray background
            darkText: "#f0f0f0",
            backgroundLight: "#222",
            darkGray: "#7f8c9b",
            backgroundGradientMask: "linear-gradient(to bottom, #8d6e63 15%, transparent 85%)",
        },
    },
    {
        name: "purple",
        light: {
            primaryColor: "#673ab7",
            secondaryColor: "#9c27b0",
            tertiaryColor: "#673ab7e3",
            darkPrimary: "#512da8",
            lightTransparent: "#9c27b0a8",
            text: "#f0f0f0",
            background: "#b39ddb",
            darkText: "#131313",
            backgroundLight: "#f3e5f5",
            darkGray: "#2a2a2a",
            backgroundGradientMask: "linear-gradient(to bottom, #9c27b0 15%, transparent 85%)",
        },
        dark: {
            primaryColor: "#673ab7",
            secondaryColor: "#9575cd",
            tertiaryColor: "#673ab7a5",
            darkPrimary: "#512da8",
            lightTransparent: "#9575cda8",
            text: "#ececec",
            background: "#1a1a1a", // Dark gray background
            darkText: "#f0f0f0",
            backgroundLight: "#222",
            darkGray: "#7f8c9b",
            backgroundGradientMask: "linear-gradient(to bottom, #9575cd 15%, transparent 85%)",
        },
    },
    {
        name: "blue",
        light: {
            primaryColor: "#3b57f4",
            secondaryColor: "#80b3ff",
            tertiaryColor: "#3b57f4e3",
            darkPrimary: "#687eff",
            lightTransparent: "#5b73fba8",
            text: "#f0f0f0",
            background: "#a0e6ff",
            darkText: "#131313",
            backgroundLight: "#f9f9f9",
            darkGray: "#2a2a2a",
            backgroundGradientMask: "linear-gradient(to bottom, #80b3ff 15%, transparent 85%)",
        },
        dark: {
            primaryColor: "#7f8c9b", // Lighter primary color
            secondaryColor: "#a5b5c4", // Lighter secondary color
            tertiaryColor: "#7f8c9ba5", // Lighter tertiary color
            darkPrimary: "#6e7d8f", // Lighter dark primary color
            lightTransparent: "#a5b5c466", // Lighter light transparent color
            text: "#f0f0f0", // Lighter text color
            background: "#2c3e50", // Same background color as previous
            darkText: "#131313", // Darker dark text color
            backgroundLight: "#0585b3", // Same background light color as previous
            darkGray: "#2a2a2a", // Same dark gray color as previous
            backgroundGradientMask: "linear-gradient(to bottom, #a5b5c4 15%, transparent 85%)", // Lighter gradient start color
        }
    },
];

export default colorThemes;
