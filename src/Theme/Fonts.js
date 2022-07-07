import { Global } from "@emotion/react";
const Fonts = () => {
    <Global
        styles={`
        @font-face {
            font-family: 'Gobold';
            src: url('/fonts/Gobold-Regular.ttf') format('truetype');
        }
    `}
    />;
};

export default Fonts;
