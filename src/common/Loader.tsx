import useAxiosLoader from "../services/http";
import { Box } from "@mui/material";
import { memo } from "react";


const Spinner = () => <div className="spinner"></div>;

function Loader() {
    const [loading] = useAxiosLoader();

    console.log("Loader Rendering. Loading:", loading);

    return (
        <>
            {loading && (
                <Box className="overlay">
                    <Spinner />
                    <img
                        style={{
                            borderRadius: "50%",
                        }}
                        className="spinner-image"
                        src="public/assets/Images to Shruthi/logo/Jewellery By Vana LOGO.png"
                        alt=""
                    />
                </Box>
            )}
        </>
    );
}

export default memo(Loader);
