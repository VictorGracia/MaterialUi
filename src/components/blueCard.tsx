import {
    Card,
    CardActions,
    CardMedia,
    Typography, Button, CardActionArea
} from "@mui/material";

export default function BlueCard() {
    return (
        <Card sx={{transition:"0,2s", "&:hover":{transform: "scale(1.05)"}}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image="https://via.placeholder.com/1000x200"
                    alt="una descripcion"
                    height="200"
                    
                />
                <Typography variant="h4" sx={{ p: 2 }}>
                    Product Name
                </Typography>
                <Typography sx={{ p: 2 }}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse error quae modi quos totam animi, ullam saepe rem, sunt iusto aperiam. Enim perspiciatis error quos ad, maxime vel sunt reprehenderit?
                </Typography>
                <CardActions sx={{ justifyContent: 'right' }}>
                    <Button variant='contained'>
                        comprar
                    </Button>
                    <Button variant='outlined' color="error" >
                        eliminar
                    </Button>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}