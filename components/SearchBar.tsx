'use client'

import { Search } from 'lucide-react'
import { useState } from 'react'

export default function SearchBar({ filters, setFilters }) {
  const [localSearch, setLocalSearch] = useState(filters.search || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    setFilters(prev => ({ ...prev, search: localSearch }))
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="25 milyon'dan fazla ürün içerisinde ara"
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="w-full px-4 py-3 pl-12 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm
                 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50
                 transition-all duration-300"
      />
      <button type="submit" className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <Search className="text-white/70 w-5 h-5" />
      </button>
    </form>
  )
}

