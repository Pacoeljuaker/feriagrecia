const FIN_CALLE  = [-33.467032, -70.560823]; // Inicio del tramo
const INICIO_CALLE     = [-33.471722, -70.562747]; // Fin del tramo
const FIN_NUEVA_CALLE = [-33.471666, -70.562910]; // Punto inicial (Norte)
const INICIO_NUEVA_CALLE    = [-33.466970, -70.560980]; // Punto final (Sur)

// Función que calcula las coordenadas automáticamente para N puestos
function generarCoordenadasCalle(inicio, fin, puestos) {
  const total = puestos.length;
  
  return puestos.map((puesto, index) => {
    // Calcula la posición proporcional (de 0 a 1) a lo largo de la línea
    const t = total > 1 ? index / (total - 1) : 0;
    
    // Calcula la latitud y longitud exacta
    const lat = inicio[0] + t * (fin[0] - inicio[0]);
    const lng = inicio[1] + t * (fin[1] - inicio[1]);

    return {
      ...puesto,
      lat: Number(lat.toFixed(6)),
      lng: Number(lng.toFixed(6))
    };
  });
}

// ======================================================
// BASE DE DATOS DE PUESTOS
// ======================================================
const PUESTOS_BASE1 = [
  {
    id: 1,
    numero: "Puesto 01",
    nombre: "David",
    categoria: "Snacks & Dulces",
    icono: "fa-cookie-bite",
    color: "#f97316", // Naranjo
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Más Calugon", precio: 5500, unidad: "80 unidades" },
      { nombre: "Tableton", precio: 3000, unidad: "750 gramos" },
      { nombre: "Palomitas", precio: 3000, unidad: "20 unidades" }
    ]
  },
  {
    id: 2,
    numero: "Puesto 02",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b", // Gris
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 3,
    numero: "Puesto 03",
    nombre: "Magda",
    categoria: "Abarrotes & Mascota",
    icono: "fa-store",
    color: "#3b82f6", // Azul
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Huevos", precio: 4500, unidad: "30 unidades" },
      { nombre: "Huevos de campo", precio: 9000, unidad: "30 unidades" },
      { nombre: "Alimento para mascotas", precio: 1100, unidad: "kg" }
    ]
  },
  {
    id: 4,
    numero: "Puesto 04",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 5,
    numero: "Puesto 05",
    nombre: "Pescadería Luis Loyola",
    categoria: "Pescadería",
    icono: "fa-fish",
    color: "#0284c7", // Celeste/Azul mar
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Merluza", precio: 4000, unidad: "kg" },
      { nombre: "Reineta", precio: 10000, unidad: "kg" },
      { nombre: "Salmon", precio: 18000, unidad: "kg" }
    ]
  },
  {
    id: 6,
    numero: "Puesto 06",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 7,
    numero: "Puesto 07",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 8,
    numero: "Puesto 08",
    nombre: "Los Andes",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981", // Verde
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Lechuga", precio: 1000, unidad: "1 unidad" },
      { nombre: "Alcachofas", precio: 2000, unidad: "5 unidades" },
      { nombre: "Zapallo", precio: 1000, unidad: "1/2 kg" }
    ]
  },
  {
    id: 9,
    numero: "Puesto 09",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 10,
    numero: "Puesto 10",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 11,
    numero: "Puesto 11",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 12,
    numero: "Puesto 12",
    nombre: "Héctor Luis",
    categoria: "Frutería",
    icono: "fa-apple-whole",
    color: "#ef4444", // Rojo
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Frutilla", precio: 1000, unidad: "kg" },
      { nombre: "Mandarina", precio: 2000, unidad: "kg" },
      { nombre: "Plátano", precio: 2000, unidad: "kg" }
    ]
  },
  {
    id: 13,
    numero: "Puesto 13",
    nombre: "Fernando Morales",
    categoria: "Plantas & Jardín",
    icono: "fa-seedling",
    color: "#84cc16", // Verde claro / Lima
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Planta interior y de jardín", precio: 2000, unidad: "1 unidad" },
      { nombre: "Plantas chicas", precio: 800, unidad: "1 unidad" }
    ]
  },
  {
    id: 14,
    numero: "Puesto 14",
    nombre: "Los Montecinos",
    categoria: "Abarrotes & Limpieza",
    icono: "fa-store",
    color: "#3b82f6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Swan", precio: 2200, unidad: "1 unidad" },
      { nombre: "Like", precio: 2500, unidad: "1 unidad" },
      { nombre: "Servilletas bezella", precio: 2000, unidad: "1 unidad" }
    ]
  },
  {
    id: 15,
    numero: "Puesto 15",
    nombre: "Huevos Kika",
    categoria: "Abarrotes",
    icono: "fa-store",
    color: "#3b82f6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Huevo tercera blanca", precio: 3800, unidad: "30 unidades" },
      { nombre: "Huevo extra blanco", precio: 5800, unidad: "30 unidades" },
      { nombre: "Huevo super extra blanco", precio: 6900, unidad: "30 unidades" }
    ]
  },
  {
    id: 16,
    numero: "Puesto 16",
    nombre: "Isidora Olivera",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Palta hass", precio: 3000, unidad: "kg" },
      { nombre: "Tomate", precio: 1500, unidad: "kg" },
      { nombre: "Chirimoya", precio: 3000, unidad: "kg" }
    ]
  },
  {
    id: 17,
    numero: "Puesto 17",
    nombre: "Javier Benitez",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Espárragos", precio: 2000, unidad: "kg" },
      { nombre: "Zapallo", precio: 2500, unidad: "kg" },
      { nombre: "Brócoli", precio: 1500, unidad: "kg" }
    ]
  },
  {
    id: 18,
    numero: "Puesto 18",
    nombre: "Los Montecinos",
    categoria: "Abarrotes & Limpieza",
    icono: "fa-store",
    color: "#3b82f6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Wyn lavalozas", precio: 1500, unidad: "750ml" },
      { nombre: "Detergente omo (rinde 3L)", precio: 1000, unidad: "3l" },
      { nombre: "Suavizante soft", precio: 2000, unidad: "1l" }
    ]
  },
  {
    id: 19,
    numero: "Puesto 19",
    nombre: "Del mundo a su mesa",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Jengibre", precio: 6000, unidad: "kg" },
      { nombre: "Cebolla morada", precio: 1600, unidad: "kg" },
      { nombre: "Ají chileno", precio: 15000, unidad: "kg" }
    ]
  },
  {
    id: 20,
    numero: "Puesto 20",
    nombre: "Mai",
    categoria: "Bazar & Utensilios",
    icono: "fa-utensils",
    color: "#a855f7", // Morado
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Cuchillo", precio: 2000, unidad: "1 unidad" },
      { nombre: "Tijeras", precio: 2500, unidad: "1 unidad" },
      { nombre: "Tostadores", precio: 2000, unidad: "1 unidad" }
    ]
  },
  {
    id: 21,
    numero: "Puesto 21",
    nombre: "Diconga flores",
    categoria: "Plantas & Jardín",
    icono: "fa-seedling",
    color: "#84cc16",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Ramos de flores", precio: 3000, unidad: "1 unidad" },
      { nombre: "Almacius", precio: 1500, unidad: "1 unidad" },
      { nombre: "Tierra", precio: 1000, unidad: "kg" }
    ]
  },
  {
    id: 22,
    numero: "Puesto 22",
    nombre: "Juana Gonzáles",
    categoria: "Abarrotes",
    icono: "fa-store",
    color: "#3b82f6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Mote", precio: 1800, unidad: "kg" },
      { nombre: "Cochayullo", precio: 2500, unidad: "1 unidad" },
      { nombre: "Aceitunas (cuarto)", precio: 1800, unidad: "cuarto" }
    ]
  },
  {
    id: 23,
    numero: "Puesto 23",
    nombre: "Juan Guillermo",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Alcachofas", precio: 2000, unidad: "4 unidades" },
      { nombre: "Zapallo (medio kilo)", precio: 1200, unidad: "0.5kg" },
      { nombre: "Espárragos", precio: 2000, unidad: "kg" }
    ]
  },
  {
    id: 24,
    numero: "Puesto 24",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 25,
    numero: "Puesto 25",
    nombre: "Abarrotes Gaspar",
    categoria: "Abarrotes",
    icono: "fa-store",
    color: "#3b82f6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Azúcar", precio: 1000, unidad: "kg" },
      { nombre: "Arroz", precio: 990, unidad: "kg" },
      { nombre: "Fideos", precio: 990, unidad: "2 unidades" }
    ]
  },
  {
    id: 26,
    numero: "Puesto 26",
    nombre: "Adelaida Araya",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Cebolla", precio: 2000, unidad: "5 unidades" },
      { nombre: "Cilantro", precio: 1000, unidad: "1 unidad" },
      { nombre: "Betarraga", precio: 1500, unidad: "kg" }
    ]
  },
  {
    id: 27,
    numero: "Puesto 27",
    nombre: "Marlene",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Pepino", precio: 1000, unidad: "2 unidades" },
      { nombre: "Espárragos", precio: 1600, unidad: "kg" },
      { nombre: "Limón", precio: 500, unidad: "kg" }
    ]
  },
  {
    id: 28,
    numero: "Puesto 28",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 29,
    numero: "Puesto 29",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 30,
    numero: "Puesto 30",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 31,
    numero: "Puesto 31",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 32,
    numero: "Puesto 32",
    nombre: "Fruta con sanitos",
    categoria: "Frutería",
    icono: "fa-apple-whole",
    color: "#ef4444",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Plátano", precio: 1700, unidad: "kg" },
      { nombre: "Frutilla", precio: 1000, unidad: "kg" },
      { nombre: "Palta", precio: 3000, unidad: "kg" }
    ]
  },
  {
    id: 33,
    numero: "Puesto 33",
    nombre: "papas y cereales",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Semillón", precio: 800, unidad: "kg" },
      { nombre: "Papa sucia", precio: 1000, unidad: "kg" },
      { nombre: "Papa lavada", precio: 1400, unidad: "kg" }
    ]
  },
  {
    id: 34,
    numero: "Puesto 34",
    nombre: "Fanny Guajardo",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Espárragos", precio: 1000, unidad: "kg" },
      { nombre: "Ensalada", precio: 1000, unidad: "2 unidades" },
      { nombre: "Chapsui", precio: 1000, unidad: "1 unidad" }
    ]
  },
  {
    id: 35,
    numero: "Puesto 35",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 36,
    numero: "Puesto 36",
    nombre: "Botica Bethesdalem",
    categoria: "Fitoterapia & Salud",
    icono: "fa-pills",
    color: "#14b8a6", // Turquesa
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Hierba", precio: 1000, unidad: "kg" },
      { nombre: "Pomadas", precio: 1000, unidad: "1 unidad" },
      { nombre: "Shampoo", precio: 6000, unidad: "1l" }
    ]
  },
  {
    id: 37,
    numero: "Puesto 37",
    nombre: "Viajo Nilo",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Papá la serena", precio: 1500, unidad: "kg" },
      { nombre: "Semillón", precio: 1000, unidad: "kg" },
      { nombre: "Papá sureña", precio: 4000, unidad: "3 unidades" }
    ]
  },
  {
    id: 38,
    numero: "Puesto 38",
    nombre: "Leonor",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Espárragos", precio: 2000, unidad: "kg" },
      { nombre: "Poroto blanco", precio: 3000, unidad: "kg" },
      { nombre: "Bandejas de verdura", precio: 1000, unidad: "1 unidad" }
    ]
  },
  {
    id: 39,
    numero: "Puesto 39",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 40,
    numero: "Puesto 40",
    nombre: "Sucasero",
    categoria: "Pescadería",
    icono: "fa-fish",
    color: "#0284c7",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Merluza austral", precio: 8000, unidad: "kg" },
      { nombre: "Albacora", precio: 12000, unidad: "kg" },
      { nombre: "Reineta", precio: 8000, unidad: "kg" }
    ]
  },
  {
    id: 41,
    numero: "Puesto 41",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 42,
    numero: "Puesto 42",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 43,
    numero: "Puesto 43",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 44,
    numero: "Puesto 44",
    nombre: "Barbara Ortega",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Rúcula", precio: 1000, unidad: "150gr" },
      { nombre: "Champiñón", precio: 2500, unidad: "0.25kg" },
      { nombre: "Berro", precio: 1000, unidad: "100gr" }
    ]
  },
  {
    id: 45,
    numero: "Puesto 45",
    nombre: "Fresia",
    categoria: "Frutería",
    icono: "fa-apple-whole",
    color: "#ef4444",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Naranja", precio: 6000, unidad: "kg" },
      { nombre: "Sandía", precio: 2000, unidad: "kg" },
      { nombre: "Manzana", precio: 800, unidad: "kg" }
    ]
  },
  {
    id: 46,
    numero: "Puesto 46",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 47,
    numero: "Puesto 47",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 48,
    numero: "Puesto 48",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 49,
    numero: "Puesto 49",
    nombre: "Pendiente",
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#64748b",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 50,
    numero: "Puesto 50",
    nombre: "Alexandra Vergara",
    categoria: "Verdulería",
    icono: "fa-leaf",
    color: "#10b981",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    productos: [
      { nombre: "Espárragos", precio: 1000, unidad: "0.5kg" },
      { nombre: "Cebolla", precio: 400, unidad: "1 unidad" },
      { nombre: "Costina", precio: 1500, unidad: "1 unidad" }
    ]
  }
]

const PUESTOS_BASE2 = [
  {
    id: 31,
    numero: "Puesto 31",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 32,
    numero: "Puesto 32",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 33,
    numero: "Puesto 33",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 34,
    numero: "Puesto 34",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 35,
    numero: "Puesto 35",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 36,
    numero: "Puesto 36",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 37,
    numero: "Puesto 37",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 38,
    numero: "Puesto 38",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 39,
    numero: "Puesto 39",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 40,
    numero: "Puesto 40",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 41,
    numero: "Puesto 41",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 42,
    numero: "Puesto 42",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 43,
    numero: "Puesto 43",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 44,
    numero: "Puesto 44",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 45,
    numero: "Puesto 45",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 46,
    numero: "Puesto 46",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 47,
    numero: "Puesto 47",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 48,
    numero: "Puesto 48",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 49,
    numero: "Puesto 49",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 50,
    numero: "Puesto 50",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 51,
    numero: "Puesto 51",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 52,
    numero: "Puesto 52",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 53,
    numero: "Puesto 53",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 54,
    numero: "Puesto 54",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 55,
    numero: "Puesto 55",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 56,
    numero: "Puesto 56",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 57,
    numero: "Puesto 57",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 58,
    numero: "Puesto 58",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 59,
    numero: "Puesto 59",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  },
  {
    id: 60,
    numero: "Puesto 60",
    nombre: "Pendiente",
  
    categoria: "Pendiente",
    icono: "fa-basket-shopping",
    color: "#8b5cf6",
    imagen: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
    
    productos: [{ nombre: "1", precio: 1000, unidad: "kg" }]
  }
];

// Genera la lista final 'STALLS' con las coordenadas asignadas automáticamente
const calle1 = generarCoordenadasCalle(INICIO_CALLE, FIN_CALLE, PUESTOS_BASE1);
const calle2 = generarCoordenadasCalle(INICIO_NUEVA_CALLE, FIN_NUEVA_CALLE, PUESTOS_BASE2);

const STALLS = [...calle1, ...calle2];
// ======================================================
// CONFIGURACIÓN DEL MAPA
// ======================================================
let map;

document.addEventListener('DOMContentLoaded', () => {
  // Coordenadas exactas del cruce Av. Grecia / Av. Ictinos (Peñalolén)
  const centerIctinos = [-33.471744, -70.562851];

  // Inicializar mapa
  map = L.map('map', {
    center: centerIctinos,
    zoom: 17,
    zoomControl: true
  });

  // Capa exclusiva: GOOGLE MAPS RELIEVE (Terrain)
  L.tileLayer('https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    maxZoom: 20,
    attribution: '&copy; Google Maps Relieve'
  }).addTo(map);

  // Cargar Puestos
  cargarPuestos();
});

// ======================================================
// RENDERIZAR ICONOS Y EVENTOS
// ======================================================
function cargarPuestos() {
  STALLS.forEach(stall => {
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div class="marker-pin" style="background-color: ${stall.color};">
          <i class="fa-solid ${stall.icono}"></i>
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const marker = L.marker([stall.lat, stall.lng], { icon: customIcon }).addTo(map);

    marker.on('click', () => {
      openModal(stall);
    });
  });
}

// ======================================================
// MODAL DETALLADO DEL PUESTO
// ======================================================
function openModal(stall) {
  const modal = document.getElementById('stall-modal');
  const content = modal.querySelector('div');

  content.innerHTML = `
    <!-- Cabecera con Imagen -->
    <div class="relative h-44 overflow-hidden border-b border-slate-700 shrink-0">
      <img src="${stall.imagen}" class="w-full h-full object-cover">
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
      
      <!-- Botón Cerrar -->
      <button onclick="closeModal()" class="absolute top-3 right-3 bg-slate-900/80 hover:bg-slate-900 text-slate-300 w-9 h-9 rounded-full flex items-center justify-center border border-slate-700 transition">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <!-- Título de Puesto -->
      <div class="absolute bottom-3 left-4 right-4">
        <span class="text-xs font-bold px-2.5 py-0.5 rounded-md text-slate-950 mb-1 inline-block" style="background-color: ${stall.color}">
          ${stall.numero} • ${stall.categoria}
        </span>
        <h2 class="text-xl font-bold text-slate-100">${stall.nombre}</h2>
      </div>
    </div>

    <!-- Cuerpo del Modal -->
    <div class="p-5 overflow-y-auto space-y-4 flex-1">

      <!-- Lista de Productos y Precios -->
      <div>
        <h3 class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-2">
          <i class="fa-solid fa-tag text-emerald-400"></i> Productos y Precios Destacados
        </h3>
        <div class="space-y-2">
          ${stall.productos.map(p => `
            <div class="bg-slate-900/80 border border-slate-700/80 p-3 rounded-xl flex items-center justify-between">
              <span class="font-medium text-slate-200 text-sm">${p.nombre}</span>
              <span class="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                $${p.precio.toLocaleString('es-CL')} / ${p.unidad}
              </span>
            </div>
          `).join('')}
        </div>
      </div>

    </div>

    <!-- Pie del Modal -->
    <div class="p-4 border-t border-slate-700/80 bg-slate-900/60 text-center">
      <button onclick="closeModal()" class="w-full bg-slate-700 hover:bg-slate-600 text-slate-200 py-2.5 rounded-xl font-bold text-sm transition">
        Cerrar Ficha
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeModal() {
  document.getElementById('stall-modal').classList.add('hidden');
}

document.getElementById('stall-modal').addEventListener('click', (e) => {
  if (e.target.id === 'stall-modal') {
    closeModal();
  }
});
