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

function ModalAdicionar({setNome, setCategoria, setQuantidade, handleAddProduct, nome, categoria, quantidade}) {
  return (
    <div>
        {/* MODAL DE ADICIONAR PRODUTO */}
        <Dialog>
            <DialogTrigger>
            {/* BOTÃO QUE ACIONA A MODAL */}
            <Button >Adicionar</Button>

            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Adicionar novo produto</DialogTitle>
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
                onClick={(e) => handleAddProduct(e)}
                >Adicionar</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  )
}

export default ModalAdicionar