import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function SortDropdown({ filters, setFilters }) {
  const [isOpen, setIsOpen] = useState(false)
  const sortOptions = [
    { value: 'price-asc', label: 'En Düşük Fiyat' },
    { value: 'price-desc', label: 'En Yüksek Fiyat' },
    { value: 'name-asc', label: 'İsim (A-Z)' },
    { value: 'name-desc', label: 'İsim (Z-A)' }
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
      >
        <span>Sırala</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-10">
          {sortOptions.map(option => (
            <button
              key={option.value}
              onClick={() => {
                setFilters(prev => ({ ...prev, sort: option.value }))
                setIsOpen(false)
              }}
              className="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors duration-200"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

