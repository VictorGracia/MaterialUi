import styled from "@emotion/styled";
import { Box, Grid, Paper, Typography, Button } from "@mui/material";

export default function Product() {

    const Img = styled("img")({
        width: 200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
    });

    return (
        <Paper
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                overflow: "hidden",
                mt: 5
            }}>
            <Img src="https://via.placeholder.com/200" />
            <Box>
                <Typography variant='h4'>
                    Product Name
                </Typography>
                <Typography >
                    Product description
                </Typography>
                <Button>
                </Button>
            </Box>
        </Paper>
    );
}