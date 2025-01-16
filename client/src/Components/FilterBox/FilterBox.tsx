import styled from "styled-components";
//card
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardActions from "@mui/material/CardActions";

import { orange } from "@mui/material/colors";
//buttons

import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import { Chip } from "@mui/material";

const StyledIcon = styled(RestaurantRoundedIcon)`
    font-size: 30px;
    color: ${orange[500]};
    background-color: ${orange[100]};
    border-radius: 50%;
    padding: 9px;
`;
const TagsStyle = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 8px 6px;
    padding: 12px;
`;
const CardContainerStyle = styled.div`
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    gap: 24px;
    flex-direction: column;
    /* background-color: whitesmoke; */
    width: fit-content;
    padding: 12px;
    margin: 0;
`;
const ChipStyle = styled(Chip)`
    border-color: ${orange[400]};
    color: ${orange[400]};
`;
const mexicanIngredients = [
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
        <CardContainerStyle>
            <Card sx={{ maxWidth: 330 }}>
                <CardHeader
                    avatar={<StyledIcon />}
                    title="Busca tus ingredientes"
                    subheader="0/40 Ingredientes"
                />

                <TagsStyle>
                    {mexicanIngredients.map(({ id, name }) => (
                        <ChipStyle
                            key={id}
                            color="warning"
                            className="mt-5"
                            variant="outlined"
                            label={name}
                            onClick={() => {}}
                            onDelete={() => {}}
                        ></ChipStyle>
                    ))}
                </TagsStyle>

                <CardActions disableSpacing></CardActions>
            </Card>
            <Card sx={{ maxWidth: 330 }}>
                <CardHeader
                    avatar={<StyledIcon />}
                    title="Busca tus ingredientes"
                    subheader="0/40 Ingredientes"
                />

                <TagsStyle>
                    {mexicanIngredients.map(({ id, name }) => (
                        <ChipStyle
                            key={id}
                            color="warning"
                            className="mt-5"
                            variant="outlined"
                            label={name}
                            onClick={() => {}}
                            onDelete={() => {}}
                        ></ChipStyle>
                    ))}
                </TagsStyle>

                <CardActions disableSpacing></CardActions>
            </Card>
            <Card sx={{ maxWidth: 330 }}>
                <CardHeader
                    avatar={<StyledIcon />}
                    title="Busca tus ingredientes"
                    subheader="0/40 Ingredientes"
                />

                <TagsStyle>
                    {mexicanIngredients.map(({ id, name }) => (
                        <ChipStyle
                            key={id}
                            color="warning"
                            className="mt-5"
                            variant="outlined"
                            label={name}
                            onClick={() => {}}
                            onDelete={() => {}}
                        ></ChipStyle>
                    ))}
                </TagsStyle>

                <CardActions disableSpacing></CardActions>
            </Card>
        </CardContainerStyle>
    );
};
