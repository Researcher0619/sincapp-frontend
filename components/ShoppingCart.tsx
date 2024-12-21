'use client'

import { useCart } from '@/context/CartContext'
import { ShoppingBag, X, Plus, Minus } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart, removeFromCart, updateQuantity } = useCart()

  const totalPrice = cart.items.reduce((total, item) => {
    return total + (item.price * item.quantity)
  }, 0)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4
                   rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
      >
        <ShoppingBag className="w-6 h-6" />
        {cart.items.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6
                         rounded-full flex items-center justify-center animate-bounce">
            {cart.items.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-all duration-300">
          <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl p-6 overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Sepetim
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cart.items.length === 0 ? (
              <div className="text-center text-gray-500 py-12">
                <ShoppingBag className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Sepetiniz boş</p>
              </div>
            ) : (
              <>
                <div className="space-y-6">
                  {cart.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">{item.name}</h3>
                        <p className="text-sm text-gray-500 mb-2">
                          {item.price.toFixed(2)} TL
                        </p>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="p-1 rounded-md hover:bg-white transition-colors"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded-md hover:bg-white transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Toplam</span>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                      {totalPrice.toFixed(2)} TL
                    </span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg
                                   transform transition-all duration-200 hover:from-blue-700 hover:to-purple-700
                                   hover:shadow-lg active:scale-95">
                    Satın Al
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

