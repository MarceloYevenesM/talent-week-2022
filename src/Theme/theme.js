import { extendTheme, theme } from "@chakra-ui/react";
import "@fontsource/open-sans";

export default extendTheme(theme, {
    styles: {
        global: {
            "html, body, #root": {
                height: "100%",
                bgColor: "brand.100",
                margin: 0,
                boxSizing: "border-box",
                fontSize: "62.5%",
            },
        },
    },
    shadows: {
        desktop: "12px 12px 0px rgba(255, 255, 255, 1)",
        mobile: "6px 6px 0px rgba(255, 255, 255, 1)",
        desktopN: "12px 12px 0px rgba(19, 19, 19, 1)",
        mobileN: "6px 6px 0px rgba(19, 19, 19, 1)",
    },
    borders: {
        border: ".5rem solid",
        borderMobile: ".35rem solid",
    },
    colors: {
        brand: {
            100: "#131313",
            200: "#FFFFFF",
            300: "#E0FF00",
        },
    },

    textStyles: {
        h1: {
            fontFamily: "Gobold, sans-serif",
            fontSize: { base: "2.5rem", sm: "4rem" },
            fontStyle: "italic",
            lineHeight: { base: "1.2", sm: "1.4" },
        },
        h2: {
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.6rem",
        },
        h3: { 
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "2rem",
        },
        p: {
            fontFamily: "Open Sans, sans-serif",
            fontSize: "1.6rem",
            fontWeight: "semi-bold",
        },
        p2: {
            fontFamily: "Open Sans, sans-serif",
            fontSize: { base: "1rem", sm: "1.8rem" },
            fontWeight: "black",
            fontStyle: "italic",
        },
        p3: {
            fontFamily: "Open Sans, sans-serif",
            fontSize: { base: "1.2rem", sm: "1.6rem" },
            // fontWeight: "black",
            color: "brand.200",
        },
    },
    components: {
        Link: {
            baseStyle: {
                color: "brand.200",
                fontSize: "1.8rem",
                "&:hover": {
                    color: "brand.300",
                    textDecoration: "none",
                    transition: "all .2s ease-in-out",
                },
            },
        },
        Button: {
            baseStyle: {
                borderRadius: "0px",
                fontWeight: "bold",
                transition: "all .2s ease-in-out",
                "&:hover": {
                    transform: "scale(1.02)",
                },
            },
            variants: {
                "coder-house": {
                    bgColor: "brand.300",
                    color: "brand.100",
                },
            },

            sizes: {
                xl: {
                    fontSize: "1.6rem",
                    padding: "2rem",
                    height: "36px",
                },
            },
        },
    },
});
