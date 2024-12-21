import SearchBar from './SearchBar'

export default function Header({ filters, setFilters }) {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 py-6">
          <h1 className="text-3xl font-bold text-white tracking-tight drop-shadow-lg">
            Akıllı Telefon Mağazası
          </h1>
          {filters.search && (
            <p className="text-white text-lg">
              Aranan kelime: <span className="font-semibold">{filters.search}</span>
            </p>
          )}
          <SearchBar filters={filters} setFilters={setFilters} />
        </div>
      </div>
    </header>
  )
}

