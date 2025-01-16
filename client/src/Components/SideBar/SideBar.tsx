import { Box, Drawer, TextField } from "@mui/material";
import theme from "@/theme/theme";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import { FilterBox } from "@/components";
import { CategoryRounded } from "@mui/icons-material";
const ingredientes = [
    { id: 1, name: "Maíz" },
    { id: 2, name: "Chile" },
    { id: 3, name: "Frijol" },
    { id: 4, name: "Aguacate" },
    { id: 5, name: "Aceitunas" },
    { id: 6, name: "Jitomate" },
    { id: 7, name: "Cebolla" },
    { id: 8, name: "Ajo" },
    { id: 9, name: "Cilantro" },
    { id: 10, name: "Limón" },
];

const categorias = [
    { id: 1, name: "vegetariana" },
    { id: 2, name: "vegana" },
    { id: 3, name: "sin gluten" },
    { id: 4, name: "bebidas" },
    { id: 5, name: "saludable" },
    { id: 6, name: "comida rapida" },
];

export function SideBar () {
    return (
        <Drawer
            sx={{
                width: 370,
                flexShrink: 0,
                boxShadow: "2px 2px 2px black",
                my: 0,
                "& .MuiBox-root": {
                    my: 0,
                },
                "& .MuiDrawer-paper": {
                    width: 370,
                    boxSizing: "border-box",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <Box
                sx={{
                    m: 2,
                    my: 5,
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "flex-end",
                        backgroundColor: "white",
                        padding: 1,
                        borderRadius: 2,
                    }}
                >
                    <SearchIcon
                        sx={{
                            color: theme.palette.primary.main,
                            mx: 1,
                            // my: 0.5,
                            fontSize: 30,
                        }}
                    />
                    <TextField
                        id="input-with-sx"
                        label="Buscar..."
                        variant="standard"
                    />
                </Box>

                <FilterBox
                    title="Ingredientes"
                    subtitle="0/10 ingredientes"
                    items={ingredientes} // Pasamos los ingredientes aquí
                    Icon={RestaurantRoundedIcon}
                />

                <FilterBox
                    title="Categorías"
                    subtitle="0/6 categorías"
                    items={categorias} // Pasamos las categorías aquí
                    Icon={CategoryRounded}
                />
            </Box>
        </Drawer>
    );
}
