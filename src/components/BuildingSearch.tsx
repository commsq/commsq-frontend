import PlacesAutocomplete from '@/components/PlacesAutocomplete'

const BuildingSearch: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-grow mb-48">
      <div className="mb-4">Let&apos;s get started! Find your building community.</div>
      <div className="flex justify-center w-1/3 rounded-md border border-green-400 p-2">
        <PlacesAutocomplete />
        <img className="h-6" alt="Search" src="/images/search.png" />
      </div>
    </div>
  )
}

export default BuildingSearch
