import { useEffect, useState } from "react";
import {
  Icommonpage,
  IProduct,
  ISortingOptionLabel,
} from "../../../interface/type";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ScrollToTop from "./ScroolToTop";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import CommonProductCard from "../commonCard/CommonProductCard";
import { SortingOption } from "../sortingOption";
import { Button } from "@mui/material";


const sortingOptions: ISortingOptionLabel[] = [
  { value: SortingOption.Default, label: "Default" },
  { value: SortingOption.PriceLowToHigh, label: "Price: Low to High" },
  { value: SortingOption.PriceHighToLow, label: "Price: High to Low" },
  { value: SortingOption.NameAZ, label: "Name: A-Z" },
  { value: SortingOption.NameZA, label: "Name: Z-A" },
];

const CommonPage = (props: Icommonpage) => {
  const jewelleryItemWithCollection = props;

  const [expandDescription, setExpandDescription] = useState(false);
  const [sortProductOption, setSortProductOption] = useState<SortingOption>(
    SortingOption.NameAZ
  );
  const [sortedProducts, setSortedProducts] = useState<IProduct[]>([]);
  const [visibleProducts, setVisibleProducts] = useState<number>(20);
  const productsPerPage = 20;

  useEffect(() => {
    const sortedProducts = sortProducts(
      jewelleryItemWithCollection?.jewelleryItems || []
    );
    setSortedProducts(sortedProducts);
  }, [jewelleryItemWithCollection?.jewelleryItems, sortProductOption]);

  const handleExpandClick = () => {
    setExpandDescription(!expandDescription);
  };

  const handleSortChange = (e: SelectChangeEvent<SortingOption>) => {
    setSortProductOption(e.target.value as SortingOption);
  };

  const sortProducts = (products: IProduct[]): IProduct[] => {
    switch (sortProductOption) {
      case SortingOption.PriceLowToHigh:
        return products.slice().sort((a, b) => a.price - b.price);
      case SortingOption.PriceHighToLow:
        return products.slice().sort((a, b) => b.price - a.price);
      case SortingOption.NameAZ:
        return products.slice().sort((a, b) =>
          a.title.localeCompare(b.title, undefined, {
            sensitivity: "base",
            usage: "sort",
          })
        );
      case SortingOption.NameZA:
        return products.slice().sort((a, b) =>
          b.title.localeCompare(a.title, undefined, {
            sensitivity: "base",
            usage: "sort",
          })
        );
      default:
        return products;
    }
  };

  const handleShowMoreImages = () => {
    // Calculate the next number of visible products
    const nextVisibleProducts = Math.min(
      visibleProducts + productsPerPage,
      sortedProducts.length
    );
    setVisibleProducts(nextVisibleProducts);
  };

  const decreaseVisibleProducts = () => {
    setVisibleProducts(Math.max(visibleProducts - productsPerPage, 20));
  };

  return (
    <>
    <Container sx={{ marginY: "15px" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            {jewelleryItemWithCollection?.JewelleryCollectionName}
          </Typography>
          {jewelleryItemWithCollection?.JewelleryCollectionDescription && (
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expandDescription}
              size="medium"
              sx={{
                width: "30px",
                height: "30px",
                "&:hover": { backgroundColor: "transparent" },
                transform: expandDescription
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease",
              }}
            >
              <ExpandMoreIcon />
            </IconButton>
          )}
        </Box>
        <Collapse
          in={expandDescription}
          timeout="auto"
          unmountOnExit
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            margin: "25px",
          }}
        >
          <Typography>
            {jewelleryItemWithCollection?.JewelleryCollectionDescription}
          </Typography>
        </Collapse>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Typography variant="body1" color="textSecondary">
            Products: {sortedProducts.length}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "40px",
          }}
        >
          <FormControl fullWidth>
            <Select
              value={sortProductOption}
              onChange={handleSortChange}
              displayEmpty
              renderValue={(value) => value || "Sort by"}
              sx={{
                boxShadow: "none",
                ".MuiOutlinedInput-notchedOutline": { border: 0 },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
              }}
            >
              {sortingOptions.map((option: ISortingOptionLabel) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {sortedProducts.slice(0, visibleProducts).map((product: IProduct) => (
          <Grid item key={product._id} xs={6} sm={6} md={4} lg={3} >
              <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Box mx={2} width="100%"> 
          <CommonProductCard product={product} />
        </Box>
      </Box>
          </Grid>
        ))}
      </Grid>
      {sortedProducts.length > visibleProducts && (
        <Box
          sx={{ display: "flex", justifyContent: "right", marginTop: "20px" }}
        >
          <Button variant="contained" onClick={handleShowMoreImages}>
            View More
          </Button>
        </Box>
      )}
      <Box>
      <ScrollToTop scrollFunction={decreaseVisibleProducts} /></Box>
    </Container>
    </>
  );
};

export default CommonPage;
