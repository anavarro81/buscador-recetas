"use client";
import { RecipeCard, FilterBox } from "@/Components";
import { Container, Drawer, styled, Typography } from "@mui/material";

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
const drawerWidth = 320;
// const StyledContainer = styled(Container)({
//     border: "1px solid red",
// });
// const MainStyled = styled.main`
//     display: grid;
//     grid-template-columns: 350px 1fr;
// `;
export default function Home() {
    return (
        <PageContainer>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <FilterBox />
            </Drawer>
            <main>
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
                            Usa las etiquetas o el buscador para encontrar lo
                            que necesitas.
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
            </main>
        </PageContainer>
    );
}
