import React, { useState } from 'react'
import { Typography, Grid, Button, CardMedia, CardActions, CardContent, Card, Box } from '@mui/material';



function Main() {
    const [livros, setLivros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,]);
    return (
        <Box display="flex" alignItems="center" sx={{ width: "100%" }} >
            <Grid container spacing={1} sx={{ paddingLeft: "30px" }}>
                {livros && livros.map(livro =>

                    <Card sx={{ width: "280px", margin: "10px" }} item xs={12} sm={6} md={3} lg={2}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Titulo
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                resumo
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                )
                }
            </Grid>

        </Box>

    )
}

export default Main
