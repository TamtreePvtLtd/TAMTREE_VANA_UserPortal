import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IProduct } from "../../../interface/type";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Props {
  product: IProduct;
}

const CommonProductCard = (props: Props) => {
  const { product } = props;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      sx={{
        position: "relative",
        height: "370px",
        margin: "0 auto",
        textDecoration: "none",
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={`/detail/${product._id}`}
        state={{ product }}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <CardMedia
          component="img"
          height="250px"
          width="auto"
          image={
            isHovered && product.images && product.images.length > 0
              ? product.images[0]
              : product.posterURL
          }
          alt={product.title}
          sx={{
            objectFit: "cover",
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
      </Link>
    </Card>
  );
};

export default CommonProductCard;
