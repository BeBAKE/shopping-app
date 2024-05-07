const products2 = [
  {
    image:
      "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Renaissance Writing Desk",
    brand: "Majestic Creations",
    price: 4499.99,
    color: "Antique Oak",
    about:
      "Inspire creativity and elegance with the Renaissance Writing Desk from Majestic Creations. Crafted with exquisite oak wood and adorned with intricate carvings, this desk is a testament to timeless craftsmanship.",
  },
  {
    image:
      "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Victorian Velvet Armchair",
    brand: "Elegance Emporium",
    price: 2799.99,
    color: "Emerald Green",
    about:
      "Make a statement in any room with the Victorian Velvet Armchair from Elegance Emporium. Featuring rich velvet upholstery and ornate detailing, this armchair combines comfort with classic luxury.",
  },
  {
    image:
      "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Louis XIV Sideboard",
    brand: "Royal Heritage",
    price: 5999.99,
    color: "Walnut",
    about:
      "Add a touch of royal elegance to your dining room with the Louis XIV Sideboard from Royal Heritage. Crafted with fine walnut wood and embellished with intricate carvings, this sideboard is both functional and luxurious.",
  },
  {
    image:
      "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Château Chandelier",
    brand: "Noble Illuminations",
    price: 699.99,
    color: "Crystal",
    about:
      "Illuminate your home with the Château Chandelier from Noble Illuminations. Featuring dazzling crystal accents and an elegant design inspired by French châteaux, this chandelier adds a touch of grandeur to any space.",
  },
  {
    image:
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Imperial Throne Chair",
    brand: "Regency Luxe",
    price: 7899.99,
    color: "Royal Purple",
    about:
      "Channel the grandeur of royalty with the Imperial Throne Chair from Regency Luxe. Crafted with exquisite velvet upholstery and adorned with gilded accents, this chair is a symbol of opulence and power.",
  },
  {
    image:
      "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Baroque Bedside Table",
    brand: "Elysian Estates",
    price: 1499.99,
    color: "Antique Gold",
    about:
      "Add a touch of Baroque elegance to your bedroom with the Baroque Bedside Table from Elysian Estates. Featuring intricate carvings and a lustrous gold finish, this table is the perfect complement to luxurious interiors.",
  },
  {
    image:
      "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Sultan's Ottoman Pouf",
    brand: "Ottoman Opulence",
    price: 999.99,
    color: "Sapphire Blue",
    about:
      "Experience the luxury of the Ottoman Empire with the Sultan's Ottoman Pouf from Ottoman Opulence. Handcrafted with sumptuous velvet and embellished with exquisite embroidery, this pouf adds a touch of exotic elegance to any space.",
  },
  {
    image:
      "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Palace Mirror",
    brand: "Majesty Mirrors",
    price: 3299.99,
    color: "Silver",
    about:
      "Reflect timeless elegance with the Palace Mirror from Majesty Mirrors. Featuring a majestic silver frame and intricate detailing, this mirror is a statement piece that enhances the beauty of any room.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Empire Console Table",
    brand: "Monarch Designs",
    price: 1899.99,
    color: "Ebony",
    about:
      "Make a bold statement in your entryway with the Empire Console Table from Monarch Designs. Crafted with sleek ebony wood and adorned with luxurious accents, this table exudes regal sophistication.",
  },
  {
    image:
      "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Rococo Vanity Mirror",
    brand: "Opulence Artistry",
    price: 2499.99,
    color: "Rose Gold",
    about:
      "Elevate your beauty routine with the Rococo Vanity Mirror from Opulence Artistry. Featuring a romantic rose gold frame and intricate rococo-inspired detailing, this mirror adds glamour to any dressing room.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Château Chaise Lounge",
    brand: "Nouveau Luxe",
    price: 4299.99,
    color: "Bordeaux",
    about:
      "Relax in style with the Château Chaise Lounge from Nouveau Luxe. Crafted with sumptuous velvet upholstery and adorned with elegant cabriole legs, this lounge is a luxurious addition to any living space.",
  },
  {
    image:
      "https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Gilded Throne Chair",
    brand: "Regal Emporium",
    price: 6899.99,
    color: "Gilded Gold",
    about:
      "Embrace the splendor of royalty with the Gilded Throne Chair from Regal Emporium. Featuring opulent gilded detailing and plush velvet upholstery, this chair is fit for a king or queen.",
  },
  {
    image:
      "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Noble Canopy Bed",
    brand: "Palace Furnishings",
    price: 7999.99,
    color: "Royal Ivory",
    about:
      "Create a luxurious bedroom sanctuary with the Noble Canopy Bed from Palace Furnishings. Crafted with ornate detailing and draped in luxurious fabrics, this bed is a testament to timeless elegance and refinement.",
  },
  {
    image:
      "https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name: "Grandeur Grandfather Clock",
    brand: "Estate Timepieces",
    price: 5299.99,
    color: "Walnut Brown",
    about:
      "Add a touch of old-world charm to your home with the Grandeur Grandfather Clock from Estate Timepieces. Crafted with fine walnut wood and featuring intricate carving, this clock is a masterpiece of horology.",
  },
  {
    image:
      "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Neo-Baroque Armchair",
    brand: "Artisan Elegance",
    price: 3499.99,
    color: "Antique Rose",
    about:
      "Infuse your home with timeless elegance with the Neo-Baroque Armchair from Artisan Elegance. Featuring a luxurious velvet upholstery and ornate detailing, this armchair is a work of art.",
  },
  {
    image:
      "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Sapphire Sofa Set",
    brand: "Regency Jewels",
    price: 9499.99,
    color: "Sapphire Blue",
    about:
      "Make a statement in your living room with the Sapphire Sofa Set from Regency Jewels. Crafted with sumptuous velvet upholstery and adorned with jewel-toned accents, this set exudes luxury and sophistication.",
  },
  {
    image:
      "https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Victorian Vanity Table",
    brand: "Elysium Interiors",
    price: 3799.99,
    color: "Vintage White",
    about:
      "Indulge in luxury with the Victorian Vanity Table from Elysium Interiors. Featuring intricate detailing and a vintage-inspired design, this table is the perfect centerpiece for your dressing room.",
  },
  {
    image:
      "https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Palatial Bookcase",
    brand: "Royal Library",
    price: 6199.99,
    color: "Mahogany",
    about:
      "Display your literary treasures in style with the Palatial Bookcase from Royal Library. Crafted with rich mahogany wood and adorned with intricate carving, this bookcase is a testament to refined taste and sophistication.",
  },
  {
    image:
      "https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Rococo Rose Chair",
    brand: "Elysian Estates",
    price: 1999.99,
    color: "Rose Pink",
    about:
      "Add a touch of romance to your home with the Rococo Rose Chair from Elysian Estates. Featuring a delicate rose pink upholstery and ornate rococo-inspired detailing, this chair is a luxurious accent piece.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Monarch Bar Cabinet",
    brand: "Regal Accents",
    price: 4499.99,
    color: "Rich Mahogany",
    about:
      "Entertain in style with the Monarch Bar Cabinet from Regal Accents. Crafted with luxurious mahogany wood and adorned with regal accents, this cabinet is the epitome of sophistication and elegance.",
  },
  {
    image:
      "https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Versailles Velvet Ottoman",
    brand: "Nouveau Luxe",
    price: 1899.99,
    color: "Opulent Gold",
    about:
      "Add a touch of glamour to your living space with the Versailles Velvet Ottoman from Nouveau Luxe. Featuring sumptuous velvet upholstery and elegant gold accents, this ottoman is a luxurious addition to any room.",
  },
  {
    image:
      "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Royal Canopy Daybed",
    brand: "Regal Dreams",
    price: 7199.99,
    color: "Royal Blue",
    about:
      "Create a luxurious retreat with the Royal Canopy Daybed from Regal Dreams. Featuring a majestic canopy frame and sumptuous velvet upholstery, this daybed is the perfect place to relax and unwind in style.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Baroque Buffet Table",
    brand: "Noble Furnishings",
    price: 5199.99,
    color: "Gilded Gold",
    about:
      "Make a statement in your dining room with the Baroque Buffet Table from Noble Furnishings. Crafted with luxurious materials and adorned with intricate detailing, this table is the epitome of opulence and grandeur.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Château Chandelier",
    brand: "Luxe Illuminations",
    price: 799.99,
    color: "Crystal",
    about:
      "Illuminate your home with the Château Chandelier from Luxe Illuminations. Featuring sparkling crystal accents and a timeless design, this chandelier adds a touch of luxury to any space.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Imperial Canopy Bed",
    brand: "Regency Luxe",
    price: 8899.99,
    color: "Royal Red",
    about:
      "Experience the splendor of royalty with the Imperial Canopy Bed from Regency Luxe. Crafted with sumptuous fabrics and adorned with gilded accents, this bed is fit for a king or queen.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Royal Palace Bed",
    brand: "Regal Luxuries",
    price: 5999.99,
    color: "Gold",
    about:
      "Transform your bedroom into a regal retreat with the Royal Palace Bed from Regal Luxuries. Crafted with exquisite attention to detail and featuring ornate carvings and luxurious upholstery, this bed is fit for royalty.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Versailles Dining Table",
    brand: "Opulent Interiors",
    price: 7999.99,
    color: "Mahogany",
    about:
      "Host elegant dinner parties in style with the Versailles Dining Table from Opulent Interiors. Handcrafted from solid mahogany wood and adorned with intricate detailing, this table is sure to impress your guests.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Baroque Chaise Lounge",
    brand: "Noble Furnishings",
    price: 3499.99,
    color: "Royal Blue",
    about:
      "Indulge in luxury and comfort with the Baroque Chaise Lounge from Noble Furnishings. Featuring plush velvet upholstery and a striking baroque-inspired design, this lounge is the epitome of opulence.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Venetian Velvet Sofa",
    brand: "Grandeur Home",
    price: 4999.99,
    color: "Burgundy",
    about:
      "Elevate your living space with the Venetian Velvet Sofa from Grandeur Home. Crafted with sumptuous velvet upholstery and adorned with elegant tufting, this sofa exudes timeless sophistication.",
  },
  {
    image:
      "https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    name: "Palatial Canopy Bed",
    brand: "Imperial Designs",
    price: 8999.99,
    color: "Royal Red",
    about:
      "Experience the ultimate in luxury with the Palatial Canopy Bed from Imperial Designs. Featuring a majestic canopy frame and decadent velvet drapery, this bed is a statement piece fit for a king or queen.",
  },
];

export default products2;
