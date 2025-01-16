import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
} from "@mui/material";

type RecipeCardProps = {
  title: string;
  description: string;
  rate: number;
  totalRate: number;
  steps: number;
  ingredients: number;
};

export const RecipeCard: React.FC<RecipeCardProps> = ({
  title,
  description,
  rate,
  totalRate,
  steps,
  ingredients,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#f3f3f3",
        margin: "10px 0",
      }}
    >
      <CardMedia
        sx={{ width: "300px", height: "auto" }}
        component="img"
        image="/arroz-pollo.jpg"
        alt="foto ilustrativa de arroz con pollo"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "700px",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px 12px",
          }}
        >
          <Typography variant="h4">{title}</Typography>
          <Rating value={rate} precision={0.5} /> ({totalRate})
        </CardContent>

        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "10px 12px",
          }}
        >
          <Typography variant="body2">📋 {steps} pasos</Typography>
          <Typography variant="body2">🍴 {ingredients} ingredientes</Typography>
        </CardContent>
        <CardContent sx={{ padding: "10px 12px" }}>
          <Typography variant="body1">{description}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
