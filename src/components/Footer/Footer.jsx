import React from 'react';
import { Box, Stack, styled, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FooterTitle from './FooterTitle';
import FooterLink from './FooterLink';

const Footer = () => {
  const StackColumn = styled(Stack)(({ theme }) => ({
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
    gap: 8,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      alignItems: 'center',
    },
  }));

  const BoxRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ededed',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      gap: 30,
    },
  }));

  return (
    <BoxRow
      component='footer'
      sx={{
        py: 4,
        px: 2,
      }}
    >
      <StackColumn>
        <FooterTitle text={'Contacto'} />
        <Typography>Casa Matriz (+505) 2266-6555</Typography>
        <Typography>Centroamérica (+505) 2278-8888</Typography>
        <Typography>Montoya (+505) 2268-4556</Typography>
        <Typography>Pista SubUrbana (+505) 2254-3616</Typography>
        <Typography>Chinandega (+505) 2341-2222</Typography>
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Autos'} />
        <FooterLink text={'Autos Nuevos'} href='https://www.autonica.com/autos/' />
        <FooterLink text={'Autos híbridos'} href='https://www.autonica.com/autos_hibridos/' />
        <FooterLink text={'Encuentra tu vehículo'} href='https://www.autonica.com/autos_buqueda/?data=Ingrese%20Datoss' />
        <FooterLink text={'Toyota Safety Sense'} href='https://www.autonica.com/autos/toyota-safety-sense/' />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Repuestos'} />
        <FooterLink text={'Repuestos'} href='https://www.autonica.com/repuesto/' />
        <FooterLink text={'Accesorios'} href='https://www.autonica.com/accesorios/' />
        <FooterLink text={'Llantas'} href='https://www.autonica.com/llantas/' />
        <FooterLink text={'Baterías'} href='https://www.autonica.com/baterias/' />
        <FooterLink text={'Aceites'} href='https://www.autonica.com/aceites/' />
        <FooterLink text={'GPS'} href='https://www.autonica.com/gps/' />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Talleres'} />
        <FooterLink text={'Reparaciones Generales'} href='https://www.autonica.com/taller_general/' />
        <FooterLink text={'Mantenimiento Preventivo'} href='https://www.autonica.com/taller_preventivo/' />
        <FooterLink text={'Taller Móvil'} href='https://www.autonica.com/taller_movil/' />
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Quienes Somos'} />
        <FooterLink text={'Historia'} href='https://www.autonica.com/historia/' />
        <FooterLink text={'Valores'} href='https://www.autonica.com/valores/' />
        <FooterLink text={'RSE'} href='https://www.autonica.com/rse/' />
        
      </StackColumn>

      <StackColumn>
        <FooterTitle text={'Redes Sociales'} />
        <Stack direction='row' spacing={2}>
          <Link href="https://www.facebook.com/share/HbdtyevPbocWmYQw/?mibextid=qi2Omg" color="inherit">
            <FacebookIcon />
          </Link>
          {/* <Link href="#" color="inherit">
            <TwitterIcon />
          </Link>
          <Link href="#" color="inherit">
            <YouTubeIcon />
          </Link>
          <Link href="#" color="inherit">
            <WhatsAppIcon />
          </Link> */}
          <Link href="https://www.instagram.com/toyotanicaragua?igsh=aTl4MzJzcHlxMHNv" color="inherit">
            <InstagramIcon />
          </Link>
        </Stack>
      </StackColumn>
    </BoxRow>
  );
};

export default Footer;
