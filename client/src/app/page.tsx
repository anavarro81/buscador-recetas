"use client";
import { RecipeCard, FilterBox } from "@/Components";
import theme from "@/theme/theme";
import SearchIcon from "@mui/icons-material/Search";
import RestaurantRoundedIcon from "@mui/icons-material/RestaurantRounded";
import {
    Box,
    Container,
    Drawer,
    styled,
    TextField,
    Typography,
} from "@mui/material";

const PageContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "100%",
    minHeight: "100vh",
    backgroundColor: "whitesmoke",
});

const recetas = [
    {
        title: "Arroz con pollito",
        description:
            "Arroz con pollo hecho con arroz y pollo, tambien se puede hacer con pollo y arroz pero no es lo mismo",
        rate: 3.5,
        totalRate: 49,
        steps: 12,
        ingredients: 7,
    },
    {
        title: "Carne al horno",
        description:
            "Carne cocinada al horno, si no tenes carne no la podes hacer",
        rate: 5,
        totalRate: 49,
        steps: 7,
        ingredients: 2,
    },
    {
        title: "Jugo de naranja",
        description:
            "Jugo hecho con naranjas, si usas otra fruta ya no es de naranjas",
        rate: 2.5,
        totalRate: 10,
        steps: 2,
        ingredients: 1,
    },
];

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

export default function Home() {
    return (
        <PageContainer>
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
                        Icon={
                            require("@mui/icons-material/CategoryRounded")
                                .default
                        }
                    />
                </Box>
            </Drawer>

            {
                <>
                    <Typography
                        variant="h1"
                        sx={{
                            textAlign: "center",
                            margin: "5% 15% 2% 15%",
                        }}
                    >
                        ¡Empieza a crear tu combinacion perfecta!
                    </Typography>
                    <Typography variant="h3" sx={{ textAlign: "center" }}>
                        Usa las etiquetas o el buscador para encontrar lo que
                        necesitas.
                    </Typography>
                </>
            }

            {recetas
                ? recetas.map((receta) => (
                      <RecipeCard
                          key={receta.title}
                          title={receta.title}
                          description={receta.description}
                          rate={receta.rate}
                          totalRate={receta.totalRate}
                          steps={receta.steps}
                          ingredients={receta.ingredients}
                      />
                  ))
                : ""}
        </PageContainer>
    );
}
