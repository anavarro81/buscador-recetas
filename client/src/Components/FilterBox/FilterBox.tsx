// import styled from "styled-components";
//card

import { Box, Card, CardHeader, Chip, styled } from "@mui/material";
// import styled from "@emotion/styled";

//buttons

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import theme from "@/theme/theme";
// import { Chip } from "@mui/material";

const StyledIcon = styled(RestaurantRoundedIcon)`
    font-size: 40px;
    color: ${theme.palette.primary.main};
    background-color: ${theme.palette.secondary.main};
    border-radius: 50%;
    padding: 7px;
`;
const TagsStyle = styled(Box)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 8px 6px;
    padding: 12px;
`;

const ChipStyle = styled(Chip)`
    border-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.main};
    padding: 0px 10px;
`;

const Ingredients = [
    { id: 1, name: "Corn" },
    { id: 2, name: "Chili" },
    { id: 3, name: "Bean" },
    { id: 4, name: "Avocado" },
    { id: 5, name: "Nopal" },
    { id: 6, name: "Tomato" },
    { id: 7, name: "Onion" },
    { id: 8, name: "Garlic" },
    { id: 9, name: "Cilantro" },
    { id: 10, name: "Lime" },
    { id: 11, name: "Cheese" },
    { id: 12, name: "Pumpkin Seed" },
    { id: 13, name: "Chocolate" },
    { id: 14, name: "Epazote" },
    { id: 15, name: "Tortilla" },
];
export const FilterBox = () => {
    return (
        <Card sx={{ maxWidth: 330 }}>
            <CardHeader
                avatar={<StyledIcon />}
                title="Busca tus ingredientes"
                subheader="0/40 Ingredientes"
            />

            <TagsStyle>
                {Ingredients.map(({ id, name }) => (
                    <ChipStyle
                        key={id}
                        className="mt-5"
                        variant="outlined"
                        label={name}
                        onClick={() => {}}
                    ></ChipStyle>
                ))}
            </TagsStyle>
        </Card>
    );
};
