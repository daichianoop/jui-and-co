export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  images: string[]
  category: string
  print: string
  gender: "men" | "women" | "unisex"
  type: "new-arrivals" | "bestseller" | "regular"
  description: string
  details: {
    composition: string
    gsm: string
    color: string
    countryOfProduction: string
    washCare: string
    sizing: string
    fit: string
  }
  sizes: string[]
  purchaseCount: number
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Sage Comfort Tee",
    price: 1299,
    originalPrice: 1599,
    images: [
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
    ],
    category: "TOPS",
    print: "MARINE",
    gender: "men",
    type: "new-arrivals",
    description:
      "Channel the unstoppable power with this premium oversized tee. Made from premium 220 GSM 100% cotton, this oversized tee offers unmatched comfort and a relaxed fit.",
    details: {
      composition: "100% cotton",
      gsm: "220",
      color: "Sage Green",
      countryOfProduction: "India",
      washCare: "Machine wash cold with similar colors. Only non-chlorine.",
      sizing: "Garment measurement in inches.",
      fit: "Oversized drop shoulder tee",
    },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    purchaseCount: 847,
    inStock: true,
  },
  {
    id: "2",
    name: "Moss Green Co-ord Set",
    price: 2499,
    originalPrice: 2999,
    images: [
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
    ],
    category: "CO-ORD SETS",
    print: "SAFARI",
    gender: "women",
    type: "bestseller",
    description:
      "Elegant co-ord set perfect for any occasion. Made with premium fabric for ultimate comfort and style.",
    details: {
      composition: "Cotton blend",
      gsm: "180",
      color: "Moss Green",
      countryOfProduction: "India",
      washCare: "Machine wash cold. Tumble dry low.",
      sizing: "Regular fit",
      fit: "Tailored fit",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    purchaseCount: 1203,
    inStock: true,
  },
  {
    id: "3",
    name: "Baby Powder Dress",
    price: 1899,
    originalPrice: 2299,
    images: [
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
    ],
    category: "DRESSES",
    print: "LOVE ME",
    gender: "women",
    type: "new-arrivals",
    description: "Beautiful flowing dress in baby powder shade. Perfect for casual and semi-formal occasions.",
    details: {
      composition: "Cotton-poly blend",
      gsm: "160",
      color: "Baby Powder",
      countryOfProduction: "India",
      washCare: "Hand wash recommended",
      sizing: "True to size",
      fit: "A-line fit",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    purchaseCount: 592,
    inStock: true,
  },
  {
    id: "4",
    name: "Sage Summer Shorts",
    price: 999,
    originalPrice: 1299,
    images: [
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
    ],
    category: "BOTTOMS",
    print: "SUGAR SUN",
    gender: "men",
    type: "regular",
    description: "Comfortable summer shorts in sage color. Perfect for casual outings and beach days.",
    details: {
      composition: "Cotton",
      gsm: "200",
      color: "Sage",
      countryOfProduction: "India",
      washCare: "Machine wash cold",
      sizing: "Regular fit",
      fit: "Relaxed fit",
    },
    sizes: ["S", "M", "L", "XL", "XXL"],
    purchaseCount: 734,
    inStock: true,
  },
  {
    id: "5",
    name: "Moss Crop Top",
    price: 899,
    originalPrice: 1199,
    images: [
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
    ],
    category: "TOPS",
    print: "SPF",
    gender: "women",
    type: "new-arrivals",
    description: "Trendy crop top in moss green. Perfect for layering or wearing solo.",
    details: {
      composition: "Cotton blend",
      gsm: "180",
      color: "Moss Green",
      countryOfProduction: "India",
      washCare: "Machine wash cold",
      sizing: "Fitted",
      fit: "Crop fit",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    purchaseCount: 456,
    inStock: true,
  },
  {
    id: "6",
    name: "Sage Maxi Dress",
    price: 2199,
    originalPrice: 2699,
    images: [
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
      "/prod/p1.webp",
    ],
    category: "DRESSES",
    print: "INTO THE WILD",
    gender: "women",
    type: "regular",
    description: "Elegant maxi dress in sage color. Perfect for special occasions and evening wear.",
    details: {
      composition: "Rayon blend",
      gsm: "140",
      color: "Sage",
      countryOfProduction: "India",
      washCare: "Dry clean recommended",
      sizing: "True to size",
      fit: "Maxi length",
    },
    sizes: ["XS", "S", "M", "L", "XL"],
    purchaseCount: 823,
    inStock: true,
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getRelatedProducts(productId: string, limit = 4): Product[] {
  const currentProduct = getProductById(productId)
  if (!currentProduct) return []

  return products
    .filter(
      (product) =>
        product.id !== productId &&
        (product.category === currentProduct.category || product.gender === currentProduct.gender),
    )
    .slice(0, limit)
}
