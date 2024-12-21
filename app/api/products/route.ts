import { NextResponse } from 'next/server'

const products = [
  // Apple Products
  {
    id: 1,
    name: 'iPhone 13 Pro - Sierra Blue',
    description: 'A15 Bionic chip, Pro camera system, 6.1" Super Retina XDR display',
    price: 999.99,
    originalPrice: 1099.99,
    discount: 9,
    brand: 'Apple',
    color: 'Blue',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-pro-01.jpg',
    rating: 4.8
  },
  {
    id: 2,
    name: 'iPhone 12 - Purple',
    description: 'A14 Bionic chip, Dual camera system, 6.1" Super Retina XDR display',
    price: 799.99,
    originalPrice: 899.99,
    discount: 11,
    brand: 'Apple',
    color: 'Purple',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg',
    rating: 4.7
  },
  {
    id: 3,
    name: 'iPhone SE (2020) - Red',
    description: 'A13 Bionic chip, Single camera system, 4.7" Retina HD display',
    price: 399.99,
    originalPrice: 449.99,
    discount: 11,
    brand: 'Apple',
    color: 'Red',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-se-2020-1.jpg',
    rating: 4.5
  },
  {
    id: 4,
    name: 'iPhone 11 - Green',
    description: 'A13 Bionic chip, Dual camera system, 6.1" Liquid Retina HD display',
    price: 599.99,
    originalPrice: 699.99,
    discount: 14,
    brand: 'Apple',
    color: 'Green',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-11-1.jpg',
    rating: 4.6
  },
  {
    id: 5,
    name: 'iPhone XR - Coral',
    description: 'A12 Bionic chip, Single camera system, 6.1" Liquid Retina HD display',
    price: 499.99,
    originalPrice: 599.99,
    discount: 17,
    brand: 'Apple',
    color: 'Coral',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-xr-1.jpg',
    rating: 4.4
  },
  {
    id: 6,
    name: 'iPhone 13 Mini - Midnight',
    description: 'A15 Bionic chip, Dual camera system, 5.4" Super Retina XDR display',
    price: 699.99,
    originalPrice: 799.99,
    discount: 13,
    brand: 'Apple',
    color: 'Black',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-13-mini-01.jpg',
    rating: 4.6
  },
  {
    id: 7,
    name: 'iPhone 12 Pro Max - Gold',
    description: 'A14 Bionic chip, Pro camera system, 6.7" Super Retina XDR display',
    price: 1099.99,
    originalPrice: 1199.99,
    discount: 8,
    brand: 'Apple',
    color: 'Gold',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg',
    rating: 4.9
  },
  {
    id: 8,
    name: 'iPhone X - Silver',
    description: 'A11 Bionic chip, Dual camera system, 5.8" Super Retina HD display',
    price: 449.99,
    originalPrice: 549.99,
    discount: 18,
    brand: 'Apple',
    color: 'Silver',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-1.jpg',
    rating: 4.5
  },
  // Samsung Products
  {
    id: 9,
    name: 'Samsung Galaxy S21 Ultra - Phantom Black',
    description: 'Exynos 2100, 108MP camera, 6.8" Dynamic AMOLED 2X',
    price: 1199.99,
    originalPrice: 1299.99,
    discount: 8,
    brand: 'Samsung',
    color: 'Black',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s21-ultra-5g-1.jpg',
    rating: 4.8
  },
  {
    id: 10,
    name: 'Samsung Galaxy A52 - Awesome Blue',
    description: 'Snapdragon 720G, 64MP Quad Camera, 6.5" Super AMOLED Display',
    price: 349.99,
    originalPrice: 399.99,
    discount: 13,
    brand: 'Samsung',
    color: 'Blue',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a52-4g-1.jpg',
    rating: 4.5
  },
  {
    id: 11,
    name: 'Samsung Galaxy Z Fold3 5G - Phantom Silver',
    description: 'Snapdragon 888, Foldable Dynamic AMOLED 2X, 7.6" Main Display',
    price: 1799.99,
    originalPrice: 1899.99,
    discount: 5,
    brand: 'Samsung',
    color: 'Silver',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-fold3-5g-1.jpg',
    rating: 4.7
  },
  {
    id: 12,
    name: 'Samsung Galaxy S20 FE - Cloud Lavender',
    description: 'Snapdragon 865, Triple camera, 6.5" Super AMOLED Display',
    price: 599.99,
    originalPrice: 699.99,
    discount: 14,
    brand: 'Samsung',
    color: 'Lavender',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s20-fe-5g-1.jpg',
    rating: 4.6
  },
  {
    id: 13,
    name: 'Samsung Galaxy Note20 Ultra - Mystic Bronze',
    description: 'Exynos 990, 108MP camera, 6.9" Dynamic AMOLED 2X',
    price: 1099.99,
    originalPrice: 1199.99,
    discount: 8,
    brand: 'Samsung',
    color: 'Bronze',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-note20-ultra-1.jpg',
    rating: 4.8
  },
  {
    id: 14,
    name: 'Samsung Galaxy A72 - Awesome White',
    description: 'Snapdragon 720G, 64MP Quad Camera, 6.7" Super AMOLED Display',
    price: 449.99,
    originalPrice: 499.99,
    discount: 10,
    brand: 'Samsung',
    color: 'White',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-a72-4g-1.jpg',
    rating: 4.5
  },
  {
    id: 15,
    name: 'Samsung Galaxy Z Flip3 5G - Cream',
    description: 'Snapdragon 888, Foldable Dynamic AMOLED 2X, 6.7" Main Display',
    price: 999.99,
    originalPrice: 1099.99,
    discount: 9,
    brand: 'Samsung',
    color: 'Cream',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-z-flip3-5g-1.jpg',
    rating: 4.6
  },
  {
    id: 16,
    name: 'Samsung Galaxy M52 5G - Blazing Black',
    description: 'Snapdragon 778G, 64MP Triple Camera, 6.7" Super AMOLED Plus Display',
    price: 379.99,
    originalPrice: 429.99,
    discount: 12,
    brand: 'Samsung',
    color: 'Black',
    image: 'https://fdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-m52-5g-1.jpg',
    rating: 4.4
  },
  // Huawei Products
  {
    id: 17,
    name: 'Huawei P40 Pro - Silver Frost',
    description: 'Kirin 990 5G, Leica Quad Camera, 6.58" OLED Display',
    price: 899.99,
    originalPrice: 999.99,
    discount: 10,
    brand: 'Huawei',
    color: 'Silver',
    image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p40-pro-01.jpg',
    rating: 4.6
  },
  {
    id: 18,
    name: 'Huawei Mate 40 Pro - Mystic Silver',
    description: 'Kirin 9000 5G, 50MP Ultra Vision Camera, 6.76" OLED Display',
    price: 1099.99,
    originalPrice: 1199.99,
    discount: 8,
    brand: 'Huawei',
    color: 'Silver',
    image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate40-pro-1.jpg',
    rating: 4.7
  },
  {
    id: 19,
    name: 'Huawei P30 Pro - Aurora',
    description: 'Kirin 980, Leica Quad Camera, 6.47" OLED Display',
    price: 699.99,
    originalPrice: 799.99,
    discount: 13,
    brand: 'Huawei',
    color: 'Blue',
    image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p30-pro-1.jpg',
    rating: 4.5
  },
  {
    id: 20,
    name: 'Huawei Nova 8 - Blush Gold',
    description: 'Kirin 985 5G, 64MP Quad Camera, 6.57" OLED Display',
    price: 599.99,
    originalPrice: 649.99,
    discount: 8,
    brand: 'Huawei',
    color: 'Gold',
    image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-8-1.jpg',
    rating: 4.3
  },
  {
    id: 21,
    name: 'Huawei Mate 30 Pro - Space Silver',
    description: 'Kirin 990, Leica Quad Camera, 6.53" OLED Display',
    price: 799.99,
    originalPrice: 899.99,
    discount: 11,
    brand: 'Huawei',
    color: 'Silver',
    image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-mate30-pro-1.jpg',
    rating: 4.6
  },
  {
    id: 22,
    name: 'Huawei P50 - Cocoa Gold',
    description: 'Snapdragon 888 4G, 50MP Triple Camera, 6.5" OLED Display',
    price: 899.99,
    originalPrice: 999.99,
    discount: 10,
    brand: 'Huawei',
    color: 'Gold',
    image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p50-1.jpg',
    rating: 4.5
  },
  {
    id: 23,
    name: 'Huawei Nova 9 - Starry Blue',
    description: 'Snapdragon 778G, 50MP Quad Camera, 6.57" OLED Display',
    price: 499.99,
    originalPrice: 549.99,
    discount: 9,
    brand: 'Huawei',
    color: 'Blue',
    image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-9-1.jpg',
    rating: 4.4
  },
  {
    id: 24,
    name: 'Huawei Y9s - Breathing Crystal',
    description: 'Kirin 710F, Triple Camera, 6.59" IPS LCD Display',
    price: 239.99,
    originalPrice: 279.99,
    discount: 14,
    brand: 'Huawei',
    color: 'Crystal',
    image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-y9s-1.jpg',
    rating: 4.2
  },
  // Xiaomi Products
  {
    id: 25,
    name: 'Xiaomi Mi 11 - Midnight Gray',
    description: 'Snapdragon 888, 108MP Camera, 6.81" AMOLED Display',
    price: 699.99,
    originalPrice: 799.99,
    discount: 13,
    brand: 'Xiaomi',
    color: 'Gray',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi11-1.jpg',
    rating: 4.7
  },
  {
    id: 26,
    name: 'Xiaomi Redmi Note 10 Pro - Gradient Bronze',
    description: 'Snapdragon 732G, 108MP camera, 6.67" AMOLED Display',
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    brand: 'Xiaomi',
    color: 'Bronze',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note10-pro-1.jpg',
    rating: 4.6
  },
  {
    id: 27,
    name: 'Xiaomi Poco X3 NFC - Cobalt Blue',
    description: 'Snapdragon 732G, 64MP Quad Camera, 6.67" IPS LCD Display',
    price: 249.99,
    originalPrice: 279.99,
    discount: 11,
    brand: 'Xiaomi',
    color: 'Blue',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-poco-x3-nfc-1.jpg',
    rating: 4.5
  },
  {
    id: 28,
    name: 'Xiaomi Mi 10T Pro - Lunar Silver',
    description: 'Snapdragon 865, 108MP camera, 6.67" IPS LCD Display',
    price: 599.99,
    originalPrice: 649.99,
    discount: 8,
    brand: 'Xiaomi',
    color: 'Silver',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-10t-pro-1.jpg',
    rating: 4.7
  },
  {
    id: 29,
    name: 'Xiaomi Redmi 9 - Carbon Gray',
    description: 'Helio G80, Quad Camera, 6.53" IPS LCD Display',
    price: 149.99,
    originalPrice: 179.99,
    discount: 17,
    brand: 'Xiaomi',
    color: 'Gray',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-9-1.jpg',
    rating: 4.3
  },
  {
    id: 30,
    name: 'Xiaomi Black Shark 4 - Pale Grey',
    description: 'Snapdragon 870 5G, 64MP Triple Camera, 6.67" AMOLED Display',
    price: 499.99,
    originalPrice: 549.99,
    discount: 9,
    brand: 'Xiaomi',
    color: 'Grey',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-black-shark-4-1.jpg',
    rating: 4.6
  },
  {
    id: 31,
    name: 'Xiaomi Mi 11 Lite - Boba Black',
    description: 'Snapdragon 732G, 64MP Triple Camera, 6.55" AMOLED Display',
    price: 299.99,
    originalPrice: 349.99,
    discount: 14,
    brand: 'Xiaomi',
    color: 'Black',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-mi-11-lite-4g-1.jpg',
    rating: 4.5
  },
  {
    id: 32,
    name: 'Xiaomi Redmi Note 9 Pro - Tropical Green',
    description: 'Snapdragon 720G, 64MP Quad Camera, 6.67" IPS LCD Display',
    price: 269.99,
    originalPrice: 299.99,
    discount: 10,
    brand: 'Xiaomi',
    color: 'Green',
    image: 'https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-redmi-note-9-pro-1.jpg',
    rating: 4.4
  }
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  let filteredProducts = [...products]
  
  const brand = searchParams.get('brand')
  const color = searchParams.get('color')
  const sort = searchParams.get('sort')
  const search = searchParams.get('search')

  if (brand) {
    filteredProducts = filteredProducts.filter(p => p.brand.toLowerCase() === brand.toLowerCase())
  }

  if (color) {
    filteredProducts = filteredProducts.filter(p => p.color.toLowerCase() === color.toLowerCase())
  }

  if (search) {
    filteredProducts = filteredProducts.filter(p => 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
    )
  }

  if (sort) {
    switch (sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
        break
    }
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500))

  return NextResponse.json(filteredProducts)
}

