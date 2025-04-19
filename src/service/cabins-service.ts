import { Cabin } from "../model/cabin";
import cabin1 from '../assets/cabins/cabin1.png';
import cabin2 from '../assets/cabins/cabin2.png';
import cabin3 from '../assets/cabins/cabin3.png';
import cabin4 from '../assets/cabins/cabin4.png';
import cabin5 from '../assets/cabins/cabin5.png';
import cabin6 from '../assets/cabins/cabin6.png';
import cabin7 from '../assets/cabins/cabin7.png';
import cabin8 from '../assets/cabins/cabin8.png';
import cabin9 from '../assets/cabins/cabin9.png';
import cabin10 from '../assets/cabins/cabin10.png';

export const cabins: Cabin[] = [
    {
        id: 'cabin-001',
        images: [cabin1],
        categories: ['Skog', 'Avsides'],
        title: 'Skogro Hytte',
        description: 'En koselig tømmerhytte dypt inne i skogen – perfekt for en rolig helg unna byen.',
        maxGuests: 4,
        location: 'Trysil, Innlandet',
        amenities: ['Peis', 'Vedovn', 'Terrasse'],
        pricePerNight: 950,
      },
      {
        id: 'cabin-002',
        images: [cabin2],
        categories: ['Fjell', 'Familie'],
        title: 'Fjellheimen',
        description: 'Romslig fjellhytte med panoramautsikt, ideell for familieferier.',
        maxGuests: 6,
        location: 'Hemsedal, Viken',
        amenities: ['Badstu', 'Kjøkken', 'Wifi'],
        pricePerNight: 1200,
      },
      {
        id: 'cabin-003',
        images: [cabin3],
        categories: ['Innsjø', 'Romantisk'],
        title: 'Vannkanten',
        description: 'Sjarmerende liten hytte rett ved vannet – perfekt for to.',
        maxGuests: 2,
        location: 'Seljord, Telemark',
        amenities: ['Bålplass', 'Robåt', 'Solnedgang'],
        pricePerNight: 850,
      },
      {
        id: 'cabin-004',
        images: [cabin4],
        categories: ['Luksus', 'Avsides'],
        title: 'Nordlys Retreat',
        description: 'Eksklusiv hytte i nord med store vinduer – perfekt for å se nordlyset.',
        maxGuests: 5,
        location: 'Alta, Troms og Finnmark',
        amenities: ['Jacuzzi', 'Peis', 'Fullt kjøkken'],
        pricePerNight: 2000,
      },
      {
        id: 'cabin-005',
        images: [cabin5],
        categories: ['Skog', 'Enkel'],
        title: 'Granly',
        description: 'Enkel og sjarmerende hytte omringet av grantrær – tilbake til naturen.',
        maxGuests: 3,
        location: 'Eidsvoll, Akershus',
        amenities: ['Vedovn', 'Utetoalett', 'Natursti'],
        pricePerNight: 600,
      },
      {
        id: 'cabin-006',
        images: [cabin6],
        categories: ['Fjell', 'Avsides'],
        title: 'Høgfjellbu',
        description: 'Tradisjonell hytte høyt til fjells med fantastisk utsikt og fredelig atmosfære.',
        maxGuests: 4,
        location: 'Rondane, Innlandet',
        amenities: ['Peis', 'Turstier', 'Kjøkken'],
        pricePerNight: 1100,
      },
      {
        id: 'cabin-007',
        images: [cabin7],
        categories: ['Innsjø', 'Familie'],
        title: 'Sjøgløtt',
        description: 'Familievennlig hytte ved innsjø med god plass og kort vei til badestrand.',
        maxGuests: 6,
        location: 'Norefjell, Viken',
        amenities: ['Båt', 'Grillplass', 'Wifi'],
        pricePerNight: 1250,
      },
      {
        id: 'cabin-008',
        images: [cabin8],
        categories: ['Romantisk', 'Luksus'],
        title: 'Eventyrhytta',
        description: 'Eksklusiv og romantisk hytte med jacuzzi og utsikt over fjellene.',
        maxGuests: 2,
        location: 'Geiranger, Møre og Romsdal',
        amenities: ['Jacuzzi', 'Peis', 'Privat terrasse'],
        pricePerNight: 2200,
      },
      {
        id: 'cabin-009',
        images: [cabin9],
        categories: ['Skog', 'Familie'],
        title: 'Tretopphytten',
        description: 'Unik tretopphytte midt i skogen – en spennende opplevelse for hele familien.',
        maxGuests: 5,
        location: 'Hurdal, Akershus',
        amenities: ['Tretopptur', 'Kjøkken', 'Terrasse'],
        pricePerNight: 1350,
      },
      {
        id: 'cabin-010',
        images: [cabin10],
        categories: ['Avsides', 'Enkel'],
        title: 'Stillhet',
        description: 'Minimalistisk hytte uten strøm og vann – perfekt for å koble helt av.',
        maxGuests: 2,
        location: 'Setesdal, Agder',
        amenities: ['Vedovn', 'Utetoalett', 'Stjernehimmel'],
        pricePerNight: 500,
      }
];

export function findCabinsByLocation(location: string) {
  let matchingLocations: Cabin[] = [];

  for (let i = 0; i < cabins.length; i++) {
    const currentCabin: Cabin = cabins[i];
    
    if (currentCabin.location.toLowerCase().includes(location.toLowerCase())) {
      matchingLocations.push(currentCabin);
    }
  }

  return matchingLocations;
}

export function getCabinById(id: string): any {
  for (let i = 0; i < cabins.length; i++) {
    const currentCabin: Cabin = cabins[i];

    if (currentCabin.id === id) {
      return currentCabin;
    }
  }
}