import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export default function ServiciosPage() {
  return (
    <section id='servicios'>
    <h1 id='tittle'>Servicios</h1>
    <p>El mundo digital es cada vez más importante para las empresas y proyectos de todo tipo, y contar con una presencia online es fundamental para llegar a un público amplio y diverso. En este contexto, es esencial contar con un sitio web atractivo, funcional y fácil de usar, así como con otras herramientas digitales que permitan a los usuarios interactuar con tu marca de manera efectiva.</p>
    <p>Si estás buscando mejorar tu presencia en línea, ya sea a través de un sitio web, una aplicación móvil u otro tipo de solución digital, has llegado al lugar indicado. Aquí encontrarás una amplia variedad de servicios y soluciones digitales que te ayudarán a crear la presencia en línea que tu proyecto o negocio necesita para alcanzar el éxito.</p>
    <p>Por eso en esta sección se presentan los servicios que Francisco puede proporcionar a su empresa:</p>
      <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}

const itemData = [
  {
    img: 'https://wallpapercave.com/wp/wp7420966.jpg',
    title: 'Diseño y creación de páginas webs',
    author: 'Diseño y programación de páginas webs con diferentes lenguajes de programación y con sistemas de gestión de contenidos',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.slinkywebdesign.com.au/file/why-is-responsive-web-design-so-important.jpg',
    title: 'Responsive Web Design',
    author: 'Diseño adaptable a diferentes pantallas de dispositivos incluyendo moviles, tablets, escritorio...',
  },
  {
    img: 'https://c0.wallpaperflare.com/preview/345/723/808/search-engine-optimization-seo-digital-marketing-laptop.jpg',
    title: 'Posicionamiento en SEO',
    author: 'Páginas Web optimizadas para facilitar su indexación en los motores de búsqueda son la base del buen posicionamiento',
  },
  {
    img: 'https://i.pinimg.com/originals/6d/fd/c0/6dfdc015089a0809eda60e0a4281588f.jpg',
    title: 'Mantemiento de Redes Sociales',
    author: 'Mantenimiento y gestión de redes sociales para una mayor administración de las mismas y rapidez de soporte a particualares',
    cols: 2,
  },
  {
    img: 'https://p4.wallpaperbetter.com/wallpaper/464/547/794/logo-laptop-microsoft-windows-10-wallpaper-preview.jpg',
    title: 'Gestión de sistemas Windows',
    author: 'Alta capacidad de gestión, administración y solución de errores en entornos windows tanto clientes como servidor',
    cols: 2,
  },
  {
    img: 'https://www.crucial.com//content/dam/ballistix/brand-assets/photography/builds/team-ballistix-memorial-pc-build/041019_Ballistix_Team_Ballistix_Memorial_Build_Image_02.PSD.transform/large-jpg/img.jpg',
    title: 'Reparación de equipos',
    author: 'Montaje, reparación, realización de presupuestos de equipos a informáticos a clientes para obtener el mejor ordenador a un precio asequible',
    rows: 2,
    cols: 2,
    featured: true,
  }
];