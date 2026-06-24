export type Category = "Todos" | "Tortas" | "Regalos" | "Eventos";
export type ProductCategory = Exclude<Category, "Todos">;

export type Product = {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  pricePrefix?: string;
  image: string;
  description: string;
  stock: number;
  portions: string;
  occasions: string[];
};

export const categories: Category[] = ["Todos", "Tortas", "Regalos", "Eventos"];

export const initialProducts: Product[] = [
  {
    id: 1,
    name: "Torta rosa clasica",
    category: "Tortas",
    price: 15000,
    image: "/images/birthday-pink.jpeg",
    description: "Bizcocho casero con crema suave y terminacion floral en tonos rosados.",
    stock: 4,
    portions: "18 a 20 personas",
    occasions: ["Cumpleanos", "Aniversario"],
  },
  {
    id: 2,
    name: "Torta tematica futbol",
    category: "Tortas",
    price: 25000,
    image: "/images/futboll.jpeg",
    description: "Torta de dos pisos, cubierta en crema y decorada con chocolate.",
    stock: 2,
    portions: "20 a 25 personas",
    occasions: ["Cumpleanos", "Evento deportivo"],
  },
  {
    id: 3,
    name: "Torta celeste elegante",
    category: "Tortas",
    price: 18000,
    image: "/images/torta10.jpeg",
    description: "Decoracion celeste y blanca con perlas, lazos y terminacion delicada.",
    stock: 3,
    portions: "15 a 20 personas",
    occasions: ["Bautizo", "Baby shower"],
  },
  {
    id: 4,
    name: "Torta dos pisos",
    category: "Tortas",
    price: 28000,
    image: "/images/torta7.jpeg",
    description: "Dos niveles de bizcocho artesanal con crema y detalles en lila.",
    stock: 2,
    portions: "25 a 30 personas",
    occasions: ["Celebracion", "Cumpleanos"],
  },
  {
    id: 5,
    name: "Torta coral de cumpleanos",
    category: "Tortas",
    price: 18000,
    image: "/images/torta8.jpeg",
    description: "Torta familiar con crema blanca y decoracion coral hecha a mano.",
    stock: 3,
    portions: "15 a 20 personas",
    occasions: ["Cumpleanos", "Familia"],
  },
  {
    id: 6,
    name: "Mini torta floral",
    category: "Regalos",
    price: 12000,
    image: "/images/torta9.jpeg",
    description: "Formato pequeno y elegante, terminado con flores y cacao.",
    stock: 5,
    portions: "6 a 8 personas",
    occasions: ["Regalo", "Aniversario"],
  },
  {
    id: 7,
    name: "Ramo de cupcakes",
    category: "Regalos",
    price: 15000,
    image: "/images/ramokut.jpeg",
    description: "Siete cupcakes decorados como flores y presentados en formato ramo.",
    stock: 4,
    portions: "7 unidades",
    occasions: ["Regalo", "Cumpleanos"],
  },
  {
    id: 8,
    name: "Ramo pastel de cupcakes",
    category: "Regalos",
    price: 15000,
    image: "/images/torta11.jpeg",
    description: "Cupcakes florales en tonos pastel con envoltorio rosado.",
    stock: 4,
    portions: "7 unidades",
    occasions: ["Regalo", "Dia especial"],
  },
  {
    id: 14,
    name: "Ramo pequeno de cupcakes",
    category: "Regalos",
    price: 12000,
    image: "/images/torta12.jpeg",
    description: "Presentacion compacta de cupcakes florales, lista para regalar.",
    stock: 6,
    portions: "5 unidades",
    occasions: ["Detalle", "Agradecimiento"],
  },
  {
    id: 9,
    name: "Caja de alfajores",
    category: "Regalos",
    price: 8500,
    image: "/images/alfacaja.jpeg",
    description: "Seis alfajores artesanales cubiertos en chocolate y decorados a mano.",
    stock: 10,
    portions: "6 unidades",
    occasions: ["Regalo", "Empresa"],
  },
  {
    id: 10,
    name: "Alfajor individual",
    category: "Regalos",
    price: 1500,
    image: "/images/torta4.jpeg",
    description: "Alfajor relleno de manjar, cubierto en chocolate y sellado individualmente.",
    stock: 24,
    portions: "1 unidad",
    occasions: ["Detalle", "Colacion"],
  },
  {
    id: 11,
    name: "Caja surtida familiar",
    category: "Regalos",
    price: 12000,
    image: "/images/torta5.jpeg",
    description: "Seleccion de alfajores y cuchuflis con cobertura de chocolate.",
    stock: 8,
    portions: "12 unidades",
    occasions: ["Familia", "Regalo"],
  },
  {
    id: 12,
    name: "Caja clasica de seis",
    category: "Regalos",
    price: 8500,
    image: "/images/torta6.jpeg",
    description: "Seis alfajores caseros con decoracion blanca y rosada.",
    stock: 9,
    portions: "6 unidades",
    occasions: ["Regalo", "Cumpleanos"],
  },
  {
    id: 13,
    name: "Mesa dulce para matrimonio",
    category: "Eventos",
    price: 2500,
    pricePrefix: "Desde",
    image: "/images/tortamatrimonio.jpeg",
    description: "Verrines y torta central preparados a medida para matrimonios y eventos.",
    stock: 40,
    portions: "Pedido personalizado",
    occasions: ["Matrimonio", "Evento"],
  },
];

export const reviews = [
  {
    name: "Maria Gonzalez",
    date: "Hace 2 dias",
    text: "Los alfajores se sienten realmente caseros y llegaron impecables.",
    stars: 5,
  },
  {
    name: "Juan Pablo Soto",
    date: "Hace 1 semana",
    text: "La presentacion del regalo fue muy linda y todo estaba fresco.",
    stars: 5,
  },
  {
    name: "Carla R.",
    date: "Hace 2 semanas",
    text: "Buena atencion y una torta preciosa, tal como la imaginamos.",
    stars: 5,
  },
];
