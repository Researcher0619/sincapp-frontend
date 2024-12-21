'use client'

import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useState } from 'react'

export default function ProductCard({ product, viewMode }) {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = () => {
    setIsAdding(true)
    addToCart(product)
    setTimeout(() => setIsAdding(false), 500)
  }

  return (
    <div
      className={`group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl 
                 transform transition-all duration-500 hover:-translate-y-2 ${viewMode === 'list' ? 'flex' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative ${viewMode === 'list' ? 'w-1/3' : 'aspect-square'} overflow-hidden bg-gray-100`}>
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className={`transform transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            setIsFavorite(!isFavorite)
          }}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm
                     transition-all duration-300 ${
                       isFavorite 
                         ? 'bg-red-500 text-white' 
                         : 'bg-white/80 text-gray-600 hover:bg-white'
                     }`}
        >
          <Heart
            className={`w-5 h-5 transform transition-transform duration-300 ${
              isFavorite ? 'scale-110' : 'scale-100'
            }`}
            fill={isFavorite ? 'currentColor' : 'none'}
          />
        </button>
        {product.discount > 0 && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
            %{product.discount} İndirim
          </div>
        )}
      </div>
      <div className={`p-6 ${viewMode === 'list' ? 'w-2/3' : ''}`}>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[56px]">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2 min-h-[40px]">
            {product.description}
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
              {product.brand}
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">
              {product.color}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {product.price.toFixed(2)} TL
            </span>
            {product.discount > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice.toFixed(2)} TL
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 text-yellow-400"
                fill={star <= Math.round(product.rating) ? 'currentColor' : 'none'}
              />
            ))}
            <span className="ml-1 text-sm text-gray-600">{product.rating.toFixed(1)}</span>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg
                     flex items-center justify-center gap-2 transform transition-all duration-300
                     hover:from-blue-700 hover:to-purple-700 hover:shadow-lg ${
                       isAdding ? 'scale-95 opacity-90' : 'hover:scale-[1.02]'
                     }`}
        >
          <ShoppingCart className={`w-5 h-5 ${isAdding ? 'animate-bounce' : ''}`} />
          <span>{isAdding ? 'Ekleniyor...' : 'Sepete Ekle'}</span>
        </button>
      </div>
    </div>
  )
}

