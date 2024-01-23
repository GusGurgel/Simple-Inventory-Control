import React from 'react'
import { Button } from './components/ui/button'
import Search from './components/my-components/Search'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


import { useSearchParams } from 'react-router-dom'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import ModalAdicionar from './components/my-components/ModalAdicionar'
import ModalEditar from './components/my-components/ModalEditar'


function App() {
  const [SearchParams] = useSearchParams()
  const search = SearchParams.get('nome')
  const [nome, setNome] = React.useState('')
  const [categoria, setCategoria] = React.useState('')
  const [quantidade, setQuantidade] = React.useState(0)

  const [cards, setCards] = React.useState([
    {
      id: 1,
      title: 'Monitor',
      description: 'Description 1',
      qtd: 100
    },
    {
      id: 2,
      title: 'Televisão',
      description: 'Description 2',
      qtd: 120
    },
    {
      id: 3,
      title: 'Cadeira',
      description: 'Description 3',
      qtd: 49
    }
  ])


  const handleAddProduct = (e) => {
    e.preventDefault()
    console.log(nome)
    console.log(categoria)
    console.log(quantidade)
    setCards([...cards, {
      id: cards.length + 1,
      title: nome,
      description: categoria,
      qtd: quantidade
    }])
    setNome('')
    setCategoria('')
    setQuantidade(0)
  }

 const handleEditarProduct = (e, id, nome, categoria, quantidade) => {
  e.preventDefault()
    setCards(cards.map(card => {
      if(card.id === id){
        return {
          ...card,
          title: nome,
          description: categoria,
          qtd: quantidade
        }
      }
      return card
    }))
 }

  const handleDeleteProduct = (id) => {
    setCards(cards.filter(card => card.id !== id))
  }

  return (
    <div className='container'>
      <div className='flex flex-col items-center justify-center my-4'>
        <div className="flex flex-wrap justify-between w-full sm:max-w-lg">
          <div><Search /></div>
          <div className='self-end'>
            <ModalAdicionar
              nome={nome}
              setNome={setNome}
              categoria={categoria}
              setCategoria={setCategoria}
              quantidade={quantidade}
              setQuantidade={setQuantidade}
              handleAddProduct={handleAddProduct}
            />
          </div>
        </div>
        <div className="cards mt-4 w-full sm:max-w-lg">
          {cards.filter((card) =>{
            if(search === null || search === '' ){
              return true
            }else if (card.title.toLowerCase().includes(search.toLowerCase())){
              return true
            }
            return false
          }).map(card => {
            return (
              <Card key={card.id} className="mb-4">
                <CardHeader>
                  <CardTitle>
                  <span className='flex flex-wrap items-center justify-between'>
                  <p className={`text-2xl mr-1 font-bold`}>
                    {card.title}
                  </p>

                  <div className='flex'>
                    {/* BOTÃO DE DELETAR */}
                    <Button className='bg-red-500 hover:bg-red-600 text-base mr-3'
                    onClick={() => handleDeleteProduct(card.id)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </Button>
                    <ModalEditar
                    card={card}
                    handleEditarProduct={handleEditarProduct}
                    />
                  </div>
                  
                    
                  </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{card.description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-between">
                  <span className='flex flex-wrap items-center'>
                  <p className={`text-2xl mr-1 font-bold ${card.qtd < 30 ? 'text-red-500' : ''}`}>
                    {card.qtd}
                  </p>

                    unidades no estoque
                  </span>
                  <Dialog>
                    <DialogTrigger>
                    <Button >Ver Produto</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{card.title}</DialogTitle>
                        <DialogDescription>
                          <p className='text-lg'>Categoria: {card.description}</p>
                          <p className='text-lg'>Quantidade em estoque: {card.qtd}</p>
                        </DialogDescription>
                        <Tabs defaultValue="account">
                          <TabsList>
                            <TabsTrigger value="detalhes">Detalhes</TabsTrigger>
                            <TabsTrigger value="atualizar">Atualizar</TabsTrigger>
                            <TabsTrigger value="adicionar">Adicionar</TabsTrigger>
                            <TabsTrigger value="remover">Remover</TabsTrigger>
                            <TabsTrigger value="movimentar">Movimentar</TabsTrigger>
                          </TabsList>
                          <TabsContent value="detalhes">Make changes to your account here.</TabsContent>
                          <TabsContent value="atualizar">Change your password here.</TabsContent>
                        </Tabs>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App