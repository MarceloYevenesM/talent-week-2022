import { extendTheme, theme } from "@chakra-ui/react";
import "@fontsource/open-sans";

export default extendTheme(theme, {
    styles: {
        global: {
            "html, body, #root": {
                height: "100%",
                bgColor: "brand.100",
            },
        },
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
            fontSize: "4rem",
            fontStyle: "italic",
        },
        h2: {
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "1.6rem",
        },
        p: {
            fontFamily: "Open Sans, sans-serif",
            fontSize: "1.6rem",
            fontWeight: "semi-bold",
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
                    padding: "24px",
                    height: "34px",
                },
            },
        },
    },
});
