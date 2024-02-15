import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { httpWithoutCredentials } from "../services/http";
import { ISearchProduct } from "../interface/type";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Card, CardMedia, Divider, Grid, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { paths } from "../routes/path";

interface SearchDrawerProps {
  open: boolean;
  onClose: () => void;
}

const SearchDrawer = ({ open, onClose }: SearchDrawerProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState<ISearchProduct[]>([]);
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
  };
  const fetchSearchProduct = async () => {
    try {
      const response = await httpWithoutCredentials.get<ISearchProduct[]>(
        `/JewelleryItem/searchJewelleryCollectionItem?searchTerm=${searchTerm}`
      );
      if (response && response.data.length > 0) {
        setProducts(response.data || []);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    if (searchTerm && searchTerm.trim() !== "") {
      fetchSearchProduct();
    }

    if (!open) {
      setSearchTerm("");
      setProducts([]);
    }
  }, [searchTerm, open]);

 const handleProductClick = (productId: string) => {
  navigate(`${paths.PRODUCTDETAIL}/${productId}`);
};

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
        width: { xs: "100%", sm: "350px" },
          display: "flex",
          alignItems: "center",
          p: 3,
          justifyContent: "space-between",
        }}
      >
        <IconButton>
          <SearchIcon sx={{ fontSize: 32 }} />
        </IconButton>
        <input
          type="text"
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            padding: "8px",
            width: "100%",
            fontFamily: '"Crimson Text", serif',
            fontSize: "17px",
          }}
          value={searchTerm}
          onChange={(event) => handleInputChange(event)}
          placeholder="What are you looking for?"
          autoComplete="new"
          autoFocus
        />

        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      {searchTerm.trim() !== "" && products.length > 0 ? (
        products.map((product, index) => (
          <Box key={index}>
            <Box onClick={() => handleProductClick(product._id)}>
              <Card sx={{ padding: 1 }} elevation={0}>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid item xs={3}>
                    <CardMedia
                      sx={{
                        overflow: "hidden",
                        objectFit: "contain",
                        height: "60px",
                        width: "100%",
                      }}
                      image={product.posterURL}
                      component={"img"}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Box>
                      <Typography sx={{ fontSize: "0.9rem" }}>
                        {product.title}
                      </Typography>
                      <Typography sx={{ fontSize: "0.9rem" }}>
                        &#8377; {product.price}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Card>
              <Divider />
            </Box>
          </Box>
        ))
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            paddingTop: "160px",
          }}
        >
          <SearchOffIcon
            sx={{ fontSize: "5rem", opacity: 0.5 }}
          ></SearchOffIcon>
          <Typography sx={{ opacity: 0.5 }}>No Result Found</Typography>
        </Box>
      )}
    </Drawer>
  );
};

export default SearchDrawer;
