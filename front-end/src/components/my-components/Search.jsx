import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useSearchParams } from "react-router-dom"

function Search() {

  const [searchParams, setSearchParams] = useSearchParams()

  const handleSearch = (e) => {
    setSearchParams({ nome: e.target.value })
  }

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="nome-filter">Filtrar por nome</Label>
      <Input type="text" id="nome-filter" placeholder="Nome"
      onChange={(e) => handleSearch(e)}
      autoComplete="off"
      />
    </div>
  )
  
}

export default Search