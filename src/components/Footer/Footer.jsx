import { Container, Typography, styled, Button } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    const quickLinks = ['Products', "Classified", "Contact Us", "Login", "Sign Up"]
    const customerArea = ['My Account', 'Orders', 'Tracking list', 'Terms', 'Privacy Policy', 'Return Policy', 'My Cart']
    const vendorArea = ['Partner with us', 'Training', 'Procedures', 'Terms', 'Privacy Policy']

    const CustomComponent = (props) => {
        return (
            <Flexcolumn sx={{ gap: .5 }} >
                <Typography sx={{ fontWeight: 700, mb: 1 }} variant='subtitle2'>
                    {props.title}
                </Typography>
                {
                    props.list.map((element) => {

                        return (<Typography sx={{ color: 'var(--text-light, #8D8D8D)' }}>{element}</Typography>)

                    })
                }

            </Flexcolumn>
        )
    }
    const FlexBox = styled('div')({
        display: "flex"
    });
    const Flexcolumn = styled('div')({
        display: "flex",
        flexDirection: 'column'
    });
    return (
        <>
            <Container>
                <FlexBox sx={{ my: 8, gap: 6 }}>
                    <Flexcolumn sx={{ width: '22%', gap: 2 }}>
                        <FlexBox >
                            <Typography color='primary' sx={{ pr: 1 }}>
                                <AdbIcon />
                            </Typography>
                            <Typography sx={{ fontWeight: 700 }} variant='h5'>
                                logoipsum
                            </Typography>
                        </FlexBox>
                        <FlexBox sx={{ color: 'var(--text-light, #8D8D8D)' }}>
                            <Typography fontSize={15}>
                                Lorem Quis minim do commodo velit voluptate adipisicing ut do ut enim tempor proident.
                            </Typography>
                        </FlexBox>
                        <FlexBox sx={{ color: 'var(--text-light, #8D8D8D)', justifyContent: "space-between", pr: 8 }}>
                            <YouTubeIcon />
                            <LinkedInIcon />
                            <TwitterIcon />
                            <FacebookIcon />
                            <InstagramIcon />
                        </FlexBox>
                    </Flexcolumn>

                    <CustomComponent title='QUICK LINKS' list={quickLinks} />
                    <CustomComponent title='CUSTOMER AREA' list={customerArea} />
                    <CustomComponent title='VENDOR AREA' list={vendorArea} />

                    <Flexcolumn sx={{ width: "33%", gap: 2 }}>
                        <Typography sx={{ fontWeight: 700, }} variant='subtitle2' >CONTACT</Typography>
                        <Typography sx={{ color: 'var(--text-light, #8D8D8D)' }}>
                            Esse qui do exercitation dolore culpa in officia minim ad laborum.Nostrud pariatur sint ad
                        </Typography>
                        <FlexBox sx={{ gap: 3 }}>
                            <HeadsetMicIcon sx={{ fontSize: '50px', color: 'var(--text-light, #8D8D8D)' }} />
                            <Flexcolumn sx={{ gap: 1 }}>
                                <Typography variant='subtitle1'>Have any questions?</Typography>
                                <Typography color={"primary"}>+ 123456789</Typography>
                            </Flexcolumn>
                            <Button sx={{ minWidth: '100px', maxHeight: "50px" }} variant="outlined" color="primary">
                                chat
                            </Button>  
                        </FlexBox>
                        <FlexBox sx={{ color: "#fff", justifyContent: "space-between" }}>
                            <FlexBox sx={{ p: 1.2, alignItems: "center", bgcolor: "black", borderRadius: "10px" }}>
                                <AppleIcon fontSize='large' sx={{ color: "#fff" }} />
                                <Flexcolumn sx={{ pl: 1 }}>
                                    <Typography variant='subtitle2'>Download on the</Typography>
                                    <Typography variant={'h6'}>App Store</Typography>
                                </Flexcolumn>
                            </FlexBox>
                            <FlexBox sx={{ p: 1.2, alignItems: "center", bgcolor: "black", borderRadius: "10px" }}>
                                <PlayArrowIcon fontSize='large' sx={{ color: "#fff" }} />
                                <Flexcolumn sx={{ pl: 1 }}>
                                    <Typography variant='subtitle2'>Download on the</Typography>
                                    <Typography variant={'h6'}>Play Store</Typography>
                                </Flexcolumn>
                            </FlexBox>
                        </FlexBox>
                    </Flexcolumn>

                </FlexBox>
            </Container>
        </>
    )
}

export default Footer