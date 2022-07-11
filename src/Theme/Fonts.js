import { Global } from "@emotion/react";

const Fonts = () => (
    <Global
        styles={`
            @font-face {
                font-family: "Gobold-Bold-Italic";
                font-weight: bold;
                font-style: italic;
                src: url('./fonts/Gobold Bold Italic.woff') format('woff');
            }
            @font-face {
                font-family: "Gobold-Hollow";
                font-weight: bold;
                font-style: italic;
                src: url('./fonts/Gobold Hollow Bold Italic.woff') format('woff');
            }

        `}
    />
);

export default Fonts;
