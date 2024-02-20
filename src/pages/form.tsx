import { Avatar, Box, Button, FormControl, Grid, IconButton, InputLabel, MenuItem, Paper, Select, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import NavBar from '../components/navBar/navBar';

function Form()
{
    const [age, setAge] = useState("");

    const handleChange = (event:any) => {
      setAge(event.target.value);
    };
    const categories = [
        "science",
        "sports",
        "business",
        "politics",
        "entertainment",
        "technology",
        "world",
        "all"
      ];
    return(
        <Paper elevation={3} sx={{ marginRight: "15%", marginLeft: "15%" }}>
        <Box sx={{ padding: 5 }}>
          <Typography variant="h6" gutterBottom sx={{ paddingBottom: 5 }}>
            Krunch Media
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Title
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="title"
                name="title"
                label="Title"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Content
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                id="outlined-multiline-static"
                label="Content"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                URL
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                id="url"
                name="url"
                label="URL"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Category
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  {categories.map((item) => (
                    <MenuItem value={item}>{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Author
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                id="author"
                name="author"
                label="Author"
                fullWidth
                size="small"
                autoComplete="off"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <InputLabel
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  fontWeight: 700
                }}
              >
                Img Upload
              </InputLabel>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Button>
                <UploadFileIcon />
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} />
            <Grid item xs={12} sm={5} />
            <Grid item xs={12} sm={4}>
              <Button variant="contained" sx={{ color: "#fffff" }}>
                Save
              </Button>
            </Grid>
            <Grid item xs={12} sm={5} />
          </Grid>
        </Box>
      </Paper>
    );
}





function FormBody() {
    const FlexContainer = styled(Box)({
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
    });

    const ContentContainer = styled(Box)({
        flex: 1,
        marginLeft: '250px',
        padding: '20px',
    });
    return (
        <FlexContainer>
            <NavBar />
            <ContentContainer sx={{ backgroundColor: '#eef2f6' }}>
                <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center' }}>
                    <IconButton>
                        <Avatar sx={{ bgcolor: '#045cb7' }}>VG</Avatar>
                    </IconButton>
                </Box>
                <Box>
                    <Typography variant="h4" color='primary'>Formulario</Typography>
                </Box>
                <Box sx={{ flexGrow: 1, pt: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box style={{ padding: 5, width: '100%'}}>
                               <Form/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </ContentContainer>
        </FlexContainer>
    );
}

export default FormBody;
