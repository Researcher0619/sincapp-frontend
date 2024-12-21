'use client'

import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import Filters from './Filters'
import Header from './Header'
import ShoppingCart from './ShoppingCart'
import SortDropdown from './SortDropdown'
import { Grid, List } from 'lucide-react'

export default function ProductList() {
  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState({
    brand: '',
    color: '',
    sort: '',
    search: ''
  })
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState('grid')

  useEffect(() => {
    setLoading(true)
    const queryString = new URLSearchParams(filters).toString()
    fetch(`/api/products?${queryString}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching products:', error)
        setLoading(false)
      })
  }, [filters])

  return (
    <>
      <Header filters={filters} setFilters={setFilters} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
          <SortDropdown filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Filters filters={filters} setFilters={setFilters} />
          <div className="flex-1">
            {loading ? (
              <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'} gap-6`}>
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-gray-200 aspect-square rounded-lg mb-4"></div>
                    <div className="bg-gray-200 h-4 rounded mb-2"></div>
                    <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
                  </div>
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' : 'space-y-6'}`}>
                {products.map(product => (
                  <ProductCard key={product.id} product={product} viewMode={viewMode} />
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <p className="text-xl text-gray-600">Üzgünüz, aradığınız ürün bulunamadı.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <ShoppingCart />
    </>
  )
}

