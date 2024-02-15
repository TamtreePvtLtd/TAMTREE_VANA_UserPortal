import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";  
import IconButton from "@mui/material/IconButton";
import { httpWithoutCredentials } from "../services/http";
import { ISearchProduct } from "../interface/type";
import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { useNavigate } from "react-router";
import { Card, CardMedia, Divider, Grid, Typography } from "@mui/material";
import SearchOffIcon from "@mui/icons-material/SearchOff";

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
  ;
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
    navigate(`productDetail/${productId}`);
  };
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          p: 2,
          justifyContent: "space-between",
        }}
      >
        <DebounceInput
          element={TextField}
          debounceTimeout={1000}
          fullWidth
          sx={{
            "& .MuiInputBase-input": {
              padding: 1,
            },
          }}
          value={searchTerm}
          onChange={(event) => handleInputChange(event)}
          placeholder="Search product"
          autoComplete="new"
          autoFocus
        />
        <IconButton onClick={onClose}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
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
                  <Grid item xs={8} sm={9}>
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
