import makeStyles from "@mui/styles/makeStyles";

export const useCommonFontStyle = makeStyles(() => ({
   commonFontStyle: {
    '& .MuiTypography-root': {
      fontFamily: 'cursive',
    },
  },
}));
