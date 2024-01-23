import React from 'react'

import {
Dialog,
DialogContent,
DialogDescription,
DialogFooter,
DialogHeader,
DialogTitle,
DialogTrigger,
} from "@/components/ui/dialog"

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function ModalEditar({card, handleEditarProduct}) {
    const [nome, setNome] = React.useState(card.title)
    const [categoria, setCategoria] = React.useState(card.description)
    const [quantidade, setQuantidade] = React.useState(card.qtd)

    return (
    <div>
        {/* MODAL DE EDITAR PRODUTO */}
        <Dialog>
            <DialogTrigger>
            {/* BOTÃO QUE ACIONA A MODAL */}
            <Button className='bg-blue-300 hover:bg-blue-400'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
            </Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Editar produto</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="nome" className="text-right">
                    Nome
                </Label>
                <Input
                    id="nome"
                    className="col-span-3"
                    autoComplete="off"
                    onChange={(e) => setNome(e.target.value)}
                    value={nome}
                />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="categoria" className="text-right">
                    Categoria
                </Label>
                <Input
                    id="categoria"
                    className="col-span-3"
                    autoComplete="off"
                    onChange={(e) => setCategoria(e.target.value)}
                    value={categoria}
                />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="quantidade" className="text-right">
                    Quantidade
                </Label>
                <Input
                    id="quantidade"
                    className="col-span-3"
                    autoComplete="off"
                    type="number"
                    onChange={(e) => setQuantidade(e.target.value)}
                    value={quantidade}
                />
                </div>
            </div>
            <DialogFooter>
                <Button
                type="submit"
                onClick={(e) => handleEditarProduct(e, card.id, nome, categoria, quantidade)}
                >Salvar</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
    )
}

export default ModalEditar