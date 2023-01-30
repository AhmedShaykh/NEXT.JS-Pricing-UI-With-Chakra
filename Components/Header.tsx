"use client";
import { FC } from 'react';
import { Box, Heading, Text } from "@chakra-ui/react";

const Header: FC = () => {
    return (
        <Box
            as="section"
            color="gray.50"
            bg="purple.700"
            pt={["60px", "60px", "90px"]}
            pb="198px"
            px={["1.4rem", "auto"]}
            textAlign={["left", "left", "center"]}
        >
            <Heading
                fontWeight="extrabold"
                fontSize={["3xl", "4xl", "5xl"]}
            >
                Simple Pricing for your Business
            </Heading>
            <Text
                fontWeight="medium"
                fontSize={["lg", "xl", "2xl"]}
                pt={{base: "2", md: "4"}}
            >
                Plans that are carefully crafted to suit your business.
            </Text>
        </Box>
    )
};

export default Header;