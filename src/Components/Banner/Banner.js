import { Stack, Text, chakra } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Banner = ({ bgColor, textStyle, span, emoji, textColor }) => {
    const settings = {
        infinite: true,
        slidesToShow: 6,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        centerMode: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    centerMode: true,
                    centerPadding: "0px",
                    dots: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    centerMode: true,
                    centerPadding: "0px",
                    dots: false,
                },
            },
        ],
    };

    return (
        <Stack
            bgColor={bgColor}
            height={"40px"}
            justifyContent={"center"}
            paddingBlock={12}
            width={"100%"}
        >
            <Slider {...settings}>
                <Text color={textColor} textStyle={textStyle}>
                    talent<chakra.span color={span}>week</chakra.span> {emoji}
                </Text>
                <Text color={textColor} textStyle={textStyle}>
                    talent<chakra.span color={span}>week</chakra.span> {emoji}
                </Text>
                <Text color={textColor} textStyle={textStyle}>
                    talent<chakra.span color={span}>week</chakra.span> {emoji}
                </Text>
                <Text color={textColor} textStyle={textStyle}>
                    talent<chakra.span color={span}>week</chakra.span> {emoji}
                </Text>
                <Text color={textColor} textStyle={textStyle}>
                    talent<chakra.span color={span}>week</chakra.span> {emoji}
                </Text>
                <Text color={textColor} textStyle={textStyle}>
                    talent<chakra.span color={span}>week</chakra.span> {emoji}
                </Text>
                <Text color={textColor} textStyle={textStyle}>
                    talent<chakra.span color={span}>week</chakra.span> {emoji}
                </Text>
                <Text color={textColor} textStyle={textStyle}>
                    talent<chakra.span color={span}>week</chakra.span> {emoji}
                </Text>
                <Text color={textColor} textStyle={textStyle}>
                    talent<chakra.span color={span}>week</chakra.span> {emoji}
                </Text>
            </Slider>
        </Stack>
    );
};

export default Banner;
