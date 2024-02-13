import { useState } from "react";
import { Collection } from "../../../interface/type";
import { useNavigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse"; 
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from "@mui/material/MenuItem";

interface Props {
  collection: Collection;
}

const CollectionPage = (props: Props) => {
  const { collection } = props;
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [sortOption, setSortOption] = useState<string>('');

  const navigate = useNavigate();

  const handleMouseEnter = (productId: string) => {
    setHoveredProductId(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleCardClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value as string);
  };

  return (
    <Container sx={{ marginY: "15px" }}>
      <Box>
   <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
  <Typography variant="h5" gutterBottom>
    {collection.name}
  </Typography>
  <IconButton
    onClick={handleExpandClick}
    aria-expanded={expanded}
    size="medium"
    sx={{ padding: 0, width: "30px", height: "30px", "&:hover": { backgroundColor: "transparent" } }}
  >
    <ExpandMoreIcon />
  </IconButton>
</Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit sx={{marginBottom: "16px"}}>
        <Typography>{collection.description}</Typography>
      </Collapse>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography variant="body2" color="textSecondary">
            Products:({collection.products.length})
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center",width:"120px",height:"40px"}}>
          <FormControl fullWidth >
            <InputLabel id="sort-by-label">Sort by</InputLabel>
            <Select
            value={sortOption}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'Sort by' }}
            sx={{
              color: 'inherit',
              borderBottom: 'none',
              boxShadow: 'none',
              '& .MuiSelect-icon': { color: 'inherit' },
            }}
          >
              <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
              <MenuItem value="nameAscending">Name: A-Z</MenuItem>
              <MenuItem value="nameDescending">Name: Z-A</MenuItem>
            </Select>
          </FormControl>
        </Box>
        </Box>
      <Grid container spacing={3}>
        {collection.products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                position: "relative",
                height: "370px",
                margin: "0 auto",
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(product._id)}
              onMouseEnter={() => handleMouseEnter(product._id)}
              onMouseLeave={handleMouseLeave}
            >
              <CardMedia
                component="img"
                height="250px"
                width="auto"
                image={
                  hoveredProductId === product._id
                    ? product.images[0]
                    : product.posterUrl
                }
                alt={product.title}
                sx={{
                  objectFit: "contain",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography
                  variant="h6"
                  title={product.title}
                  sx={{
                    cursor: "pointer",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                  gutterBottom
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  title={product.description}
                  color="textSecondary"
                  sx={{
                    cursor: "pointer",
                    flex: "1",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 2,
                    textOverflow: "ellipsis",
                    whiteSpace: "normal",
                  }}
                >
                  {product.description}
                </Typography>

                <Typography variant="h6" color="textPrimary">
                  ${product.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CollectionPage;
