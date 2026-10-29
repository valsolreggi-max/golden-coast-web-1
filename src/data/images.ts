// Exact brand photography generated and mapped from user's assets
import photoArquitecturaCasa from '../assets/images/arquitectura_casa_1786745851264.jpg';
import photoCasaInteriorCocina from '../assets/images/casa_interior_cocina_1786745865467.jpg';

// 7 Original user-uploaded photographs
import photoCafeZonas from '../assets/images/Cafe contemplar mar zonas.png';
import photoEstatuaSitges from '../assets/images/Estatua Sitges.png';
import photoBiciVilanova from '../assets/images/bici Vilanova.png';
import photoPetFriendlyCubelles from '../assets/images/Pet friendly Cubelles.png';
import photoHuellasCunit from '../assets/images/Huellas playa (Cunit).png';
import photoBarcoSegur from '../assets/images/Barco playa Segur.png';
import photoPaseoCalafell from '../assets/images/Paseo Calafell.png';
import photoSobreMi from '../assets/images/Sobre mi.jpeg';

export interface BrandPhoto {
  id: string;
  title: string;
  caption: string;
  category: string;
  url: string;
}

export const BRAND_IMAGES = {
  // Photo 1: Hero Architecture Living Room (Arquitectura casa.png)
  arquitecturaCasa: photoArquitecturaCasa,
  // Photo 2: Descubre la Costa Dorada y el Garraf (Casa interior cocina.png)
  casaInteriorCocina: photoCasaInteriorCocina,

  // Territorio General (Cafe contemplar mar zonas.png)
  zonasGeneral: photoCafeZonas,
  zonasCafeMar: photoCafeZonas,

  // Localidades (Fotos específicas asignadas)
  sitges: photoEstatuaSitges,
  vilanova: photoBiciVilanova,
  cubelles: photoPetFriendlyCubelles,
  cunit: photoHuellasCunit,
  segurDeCalafell: photoBarcoSegur,
  calafell: photoPaseoCalafell,

  // Specific aliases
  estatuaSitges: photoEstatuaSitges,
  biciVilanova: photoBiciVilanova,
  perrosCubelles: photoPetFriendlyCubelles,
  huellasCunit: photoHuellasCunit,
  barcoSegur: photoBarcoSegur,
  paseoCalafell: photoPaseoCalafell,

  // Fallback aliases for legacy references if any
  mediterraneanVillaLiving: photoArquitecturaCasa,
  beachTerraceCafeJuice: photoCasaInteriorCocina,
  sitgesPromenadeStatue: photoEstatuaSitges,
  vilanovaBeachPromenade: photoBiciVilanova,
  sitgesCastleOverSea: photoEstatuaSitges,
  traditionalWoodenBoat: photoBarcoSegur,
  valeriaPortrait: photoSobreMi,
};

export const GALLERY_PHOTOS: BrandPhoto[] = [
  {
    id: 'photo-1',
    title: 'Arquitectura y Luz en el Garraf',
    caption: 'Salón mediterráneo con ventanales en arco y suelos de toba.',
    category: 'interior',
    url: photoArquitecturaCasa,
  },
  {
    id: 'photo-2',
    title: 'Estilo de Vida Mediterráneo',
    caption: 'Cocina con azulejo artesanal y luz natural en la Costa Dorada.',
    category: 'interior',
    url: photoCasaInteriorCocina,
  },
  {
    id: 'photo-3',
    title: 'Vivir frente al Mediterráneo',
    caption: 'Terraza sobre el mar entre el Garraf y la Costa Dorada.',
    category: 'territory',
    url: photoCafeZonas,
  },
  {
    id: 'photo-4',
    title: 'Sitges · Paseo & Cultura',
    caption: 'Escultura frente a la bahía y el casco antiguo.',
    category: 'territory',
    url: photoEstatuaSitges,
  },
  {
    id: 'photo-5',
    title: 'Vilanova i la Geltrú · Calles con vida',
    caption: 'Paseos peatonales, arquitectura y ambiente local.',
    category: 'territory',
    url: photoBiciVilanova,
  },
  {
    id: 'photo-6',
    title: 'Cubelles · Playa & Naturaleza',
    caption: 'Espacios costeros abiertos y estilo de vida familiar.',
    category: 'territory',
    url: photoPetFriendlyCubelles,
  },
  {
    id: 'photo-7',
    title: 'Cunit · Tranquilidad junto al mar',
    caption: 'Playas apacibles y calma en el litoral.',
    category: 'territory',
    url: photoHuellasCunit,
  },
  {
    id: 'photo-8',
    title: 'Segur de Calafell · Tradición marinera',
    caption: 'Barca clásica sobre la arena dorada.',
    category: 'territory',
    url: photoBarcoSegur,
  },
  {
    id: 'photo-9',
    title: 'Calafell · Paseo Marítimo',
    caption: 'Palmeras, gastronomía y vida costera activa.',
    category: 'territory',
    url: photoPaseoCalafell,
  },
];

