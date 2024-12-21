import { useState, useEffect } from 'react'

export default function Filters({ filters, setFilters }) {
  const [availableBrands, setAvailableBrands] = useState([])
  const [availableColors, setAvailableColors] = useState([])

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        const brands = [...new Set(data.map(product => product.brand))]
        const colors = [...new Set(data.map(product => product.color))]
        setAvailableBrands(brands)
        setAvailableColors(colors)
      })
  }, [])

  return (
    <div className="w-full md:w-64 space-y-8 p-6 bg-white rounded-xl shadow-lg">
      <div>
        <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Renk
        </h3>
        <div className="space-y-3">
          {availableColors.map(color => (
            <label key={color} className="flex items-center gap-3 group cursor-pointer">
              <input
                type="checkbox"
                checked={filters.color === color}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  color: e.target.checked ? color : ''
                }))}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 
                         focus:ring-blue-500 transition-colors"
              />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                {color}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Marka
        </h3>
        <div className="space-y-3">
          {availableBrands.map(brand => (
            <label key={brand} className="flex items-center gap-3 group cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brand === brand}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  brand: e.target.checked ? brand : ''
                }))}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 
                         focus:ring-blue-500 transition-colors"
              />
              <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

