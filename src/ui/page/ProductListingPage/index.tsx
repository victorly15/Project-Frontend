import {Box, Container ,Grid} from "@mui/material";
import TopNavBar from "../../component/TopNavBar.tsx";
import ProductCard from "../../component/ProductCard.tsx";
import {useEffect, useState} from "react";
import {GetAllProductDto} from "../../../data/product/GetAllProductDto.ts";
import * as ProductApi from "../../../api/ProductApi.ts";
import LoadingContainer from "../../component/LoadingContainer.tsx";
import {useNavigate} from "react-router-dom";
import BackgroundImage from "../../component/BackgroundImage.tsx";
import Button from "@mui/material/Button";

export default function ProductListingPage() {

    const [getAllProductDtoList, setGetAllProductDtoList] = useState<GetAllProductDto[] | undefined>(undefined);
    const navigate = useNavigate();
    const scrollToMiddle = () => {
        // Find the target element you want to scroll to (e.g., by ID or ref)
        const middlePosition = window.innerHeight * 1.2; // Calculate the middle of the viewport
        window.scrollTo({
            top: middlePosition,
            behavior: 'smooth',
        });
    };
    const [filter, setFilter] = useState<string>('');

    const filteredList = getAllProductDtoList?.filter(item => {
        if (filter === 'FG') {
            return item.name.startsWith('FG');
        } else if (filter === 'MB') {
            return item.name.startsWith('MB');
        }
        return true; // No filter applied or cleared filter
    });


    const handleFilter = (newFilter: string) => {
        setFilter(newFilter);
    };

    const handleClearFilter = () => {
        setFilter('');
    };

    const fetchAllProducts = async () => {
        try {
            const responseDtoList = await ProductApi.getAllProducts();
            setGetAllProductDtoList(responseDtoList);
        } catch (error) {
            navigate("/error")
        }
    }


    useEffect(() => {
        fetchAllProducts();
        document.title = "Aqualeaf - Homepage"
    }, []);

    return (
        <Box>
            <TopNavBar/>
            <BackgroundImage scrollButton={scrollToMiddle}/>
            <Box my={3} display={"flex"}
                 justifyContent="right"
                 alignItems="center"
                 width={"95%"}>
                <Button size={"small"}
                    sx={{
                        mx: 1, fontWeight: "bold", borderWidth: "2px", borderRadius:"20px",
                        boxShadow: filter === '' ? '0 0 0 0.2rem rgba(64, 64, 64, 0.8)' : 'none',
                        borderColor: "black", // Set the border color to black
                        color: "black", // Set the text color to black
                        '&:hover': {
                            backgroundColor: 'black', // Set hover background color to black
                            color: 'white'}, // Set hover text color to white},
                    }}
                    variant="outlined"  onClick={handleClearFilter}>
                    All
                </Button>
                <Button variant="outlined" size={"small"}
                        sx={{
                            mx: 1, fontWeight: "bold", borderWidth: "2px",borderRadius:"20px",
                            boxShadow: filter === 'FG' ? '0 0 0 0.2rem rgba(64, 64, 64, 0.8)' : 'none',
                            borderColor: "black", // Set the border color to black
                            color: "black", // Set the text color to black
                            '&:hover': {
                                backgroundColor: 'black', // Set hover background color to black
                                color: 'white'},
                        }}
                        onClick={() => handleFilter('FG')}>
                    Foreground
                </Button>
                <Button size={"small"}
                        sx={{
                            mx: 1, fontWeight: "bold", borderWidth: "2px",borderRadius:"20px",
                            boxShadow: filter === 'MB' ? '0 0 0 0.2rem rgba(64, 64, 64, 0.8)' : 'none',
                            borderColor: "black", // Set the border color to black
                            color: "black", // Set the text color to black
                            '&:hover': {
                                backgroundColor: 'black', // Set hover background color to black
                                color: 'white'},
                        }}
                        variant="outlined" onClick={() => handleFilter('MB')}>
                    Back/Midground
                </Button>

            </Box>

            <Container sx={{marginBottom: 5}}>
                <Grid container id={'cards'} spacing={3}>
                    {
                        filteredList
                            ? filteredList.map((dto) => (
                                <Grid key={dto.pid} item xs={12} sm={6} md={4} lg={3}>
                                    <ProductCard dto={dto}/>
                                </Grid>
                            ))
                            : <LoadingContainer/>

                    }
                </Grid>
            </Container>
        </Box>
    )
}
