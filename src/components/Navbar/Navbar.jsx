import AdbIcon from '@mui/icons-material/Adb';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BasicSelect from '../BasicSelect';
import SearchBar from './SearchBar';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';


// export const theme = createTheme({
//     palette: {
//         mode: 'light',
//         primary: {
//             main: '#3f51b5',
//         },
//         secondary: {
//             main: '#00C6D7',
//         },
//     },
//     typography: {
//         fontFamily: 'Roboto',
//         h5: {
//             fontWeight: 700,
//         },
//     },
// })

const Navbar = () => {
    return (
        <div>
                <Container sx={{ display: "flex", gap: 4, minHeight: "5rem", alignItems: "center", justifyContent: 'space-between' }}>
                    <Box alignItems={"center"} sx={{ minWidth: "8rem", display: "flex" }}>
                        <Typography color='primary' sx={{pr:1}}>
                        <AdbIcon />
                        </Typography>
                        <Typography  sx={{fontWeight:700,color:" #4D4D4D"}} variant='h5'>
                            logoipsum
                        </Typography>
                    </Box>
                    <Box alignItems={"center"} sx={{ gap: 2, display: "flex" }}>
                        <BasicSelect />
                        <SearchBar />
                    </Box>
                    <Box gap={3} display={'flex'}>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="favourites">
                            <FavoriteBorderIcon />
                        </IconButton>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="favourites">
                            <Badge badgeContent={4} color='primary'>
                                <ShoppingBasketIcon />
                            </Badge>
                        </IconButton>
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="favourites">
                            <AccountCircleIcon />
                        </IconButton>
                    </Box>
                    <Box>
                        <div className='custom-shadow'>
                            <Button  color='primary'
                                size="medium"
                                variant="contained"
                                sx={{ borderRadius:"12px",height:"3rem" ,paddingX: 2, paddingY: 1, background: "#00C6D7",
                                }}
                            >
                                <Typography varient={'h5'} color={'#fff'}>
                                    Classifieds
                                </Typography>
                            </Button>
                            </div>
                    </Box>

                </Container>
        </div >
    )
}

export default Navbar