export type ArrayProps = {
  id: number;
  name: string;
  description: string;
  precio: number;
  nominacion: string;
  imagen: string;
};

export const productsArray: ArrayProps[] = [
  {
    id: 1,
    name: "Gorra",
    description:
      "Gorra que uso el pirata de culiacan antes de que lo paletearan",
    precio: 1200,
    nominacion: "Dlls",
    imagen:
      "https://merxstore.mx/cdn/shop/files/076415V-R01_38fc9d7b-c8e7-4f82-99bb-12c0c9fbd164.jpg?v=1696960812&width=1100",
  },
  {
    id: 2,
    name: "Camisa",
    description: "Camisa que uso Valentino antes de la chinga",
    precio: 2000,
    nominacion: "Dlls",
    imagen:
      "https://img.freepik.com/psd-gratis/maqueta-camiseta-hombre-negro-simple_53876-57893.jpg?t=st=1719874584~exp=1719878184~hmac=2df392e4b7b04b81d0916c9206f838e341d5a2495c0838b480a7b81b3bd3d72a&w=740",
  },
  {
    id: 3,
    name: "Balon",
    description: "balon que uso lebron en los ultimos juegos",
    precio: 500,
    nominacion: "Dlls",
    imagen:
      "https://img.freepik.com/vector-gratis/pelota-baloncesto-aislada_1284-42545.jpg?t=st=1719874887~exp=1719878487~hmac=faa86251e3835afe41e099fc052327b47bba046e6f5dde16d6e8e827dbf83138&w=740",
  },
  {
    id: 4,
    name: "Celular",
    description: "Celular hecho de vibranium",
    precio: 6000,
    nominacion: "Dlls",
    imagen:
      "https://img.freepik.com/psd-premium/maqueta-pantalla-telefono-inteligente-realista_173626-22.jpg?w=1380",
  },
];
