import React from 'react';
import { Box, styled, Typography } from "@mui/material";
//img
import headerImg from '../../src/assets/images/car.png';
import kintoLogo from '../../src/assets/images/kinto.png'; // Import the Kinto logo
import playStoreImg from '../../src/assets/images/playstore2.png'; // Import Play Store image
import appStoreImg from '../../src/assets/images/appstore2.png'; // Import App Store image

const Header = () => {
    const CustomBox = styled(Box)(({ theme }) => ({
        minHeight: '60vh',
        display: 'flex',
        justifyContent: 'center',
        gap: theme.spacing(2),
        paddingTop: theme.spacing(),
        backgroundColor: '#00708d',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        }
    }));

    const BoxText = styled(Box)(({ theme }) => ({
        flex: '1',
        paddingLeft: theme.spacing(8),
        [theme.breakpoints.down('md')]: {
            flex: '2',
            textAlign: 'center',
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
    }));

    const storeButtonContainerStyle = {
        width: 150, // Set the width
        height: 50, // Set the height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    };

    const storeButtonImageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
    };

    return (
        <CustomBox component='header'>
            <BoxText component='section'>
                <img
                    src={kintoLogo}
                    alt="KINTO Logo"
                    style={{
                        height: 'auto',
                        maxWidth: '100%',
                        // border: '2px solid white',
                    }}
                />

                <Typography
                    variant='p'
                    component='p'
                    sx={{
                        py: 3,
                        lineHeight: 2,
                        color: '#fff',
                    }}
                >
                    Servicio alquier de modalidad de corto plazo de Toyota que te permite movilizarte de manera fácil y
                    rápida pagando solo por uso del vehículo.
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                    <a href="https://play.google.com/store/apps/details?id=com.goodtravelsoftware.sharecar.toyotaargentina&hl=es&gl=US&pli=1" target="_blank" rel="noopener noreferrer" style={storeButtonContainerStyle}>
                        <img
                            src={playStoreImg}
                            alt="Play Store"
                            style={storeButtonImageStyle}
                        />
                    </a>
                    <a href="https://apps.apple.com/cr/app/kinto-share-latam/id1436690858" target="_blank" rel="noopener noreferrer" style={storeButtonContainerStyle}>
                        <img
                            src={appStoreImg}
                            alt="App Store"
                            style={storeButtonImageStyle}
                        />
                    </a>
                </Box>
            </BoxText>

            <Box sx={theme => ({
                [theme.breakpoints.down('md')]: {
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]: {
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}>
                <img
                    src={headerImg}
                    alt="headerImg"
                    style={{
                        width: "100%",
                        marginBottom: -15,
                    }}
                />
            </Box>
        </CustomBox>
    );
}

export default Header;
