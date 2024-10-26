'use client'
import { useState } from 'react'
import { Button } from '@/components/admin/ui/button'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/admin/ui/alert-dialog'
import { Input } from '@/components/admin/ui/input'
import { Label } from '@/components/admin/ui/label'
import { Textarea } from '@/components/admin/ui/textarea'
import { Checkbox } from '@/components/admin/ui/checkbox'

export default function Home() {
  const [selectedStatus, setSelectedStatus] = useState<string[]>(["new"])

  const [variables, setVariables] = useState([
    {
      weight: '',
      price: '',
      newPrice: '',
      currency: '',
      count: '',
    },
  ])

  const addVariable = () => {
    setVariables([
      ...variables,
      {
        weight: '',
        price: '',
        newPrice: '',
        currency: '',
        count: '',
      },
    ])
  }

  const handleVariableChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target
    setVariables((prevVariables) => {
      const updatedVariables = [...prevVariables]
      updatedVariables[index] = {
        ...updatedVariables[index],
        [name as keyof (typeof updatedVariables)[number]]: value,
      }
      return updatedVariables
    })
  }

  const deleteVariable = (index: number) => {
    setVariables((prevVariables) => prevVariables.filter((_, i) => i !== index))
  }

  const handleCheckboxChange = (value: string) => {
    setSelectedStatus((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    )
  }

  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-xl font-bold">Товари</h1>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>Створити</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Створення товару</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              <div className="max-h-[80svh] space-y-4 overflow-auto px-2">
                <div>
                  <Label htmlFor="name">Назва</Label>
                  <Input id="name" name="name" />
                </div>
                <Button>Додати зображення</Button>
                <div className="flex justify-between">
                  <div>
                    <Label htmlFor="category">Категорія</Label>
                    <Input id="category" name="category" />
                  </div>
                  <div>
                    <Label htmlFor="menu">Меню</Label>
                    <Input id="menu" name="menu" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="composition">Склад</Label>
                  <Input
                    id="composition"
                    name="composition"
                    placeholder="Розділяйте комами"
                  />
                </div>
                <div>
                  <Label htmlFor="description">Опис</Label>
                  <Textarea id="description" name="description" />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="c1"
                      checked={selectedStatus.includes('new')}
                      onCheckedChange={() => handleCheckboxChange('new')}
                    />
                    <label htmlFor="c1">Новинка</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="c2"
                      checked={selectedStatus.includes('sale')}
                      onCheckedChange={() => handleCheckboxChange('sale')}
                    />
                    <label htmlFor="c2">Акція</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="c3"
                      checked={selectedStatus.includes('top')}
                      onCheckedChange={() => handleCheckboxChange('top')}
                    />
                    <label htmlFor="c3">Топ</label>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Вид</h2>
                  {variables.map((variable, index) => (
                    <div key={index} className="mt-2 space-y-2 border p-4">
                      <div>
                        <Label htmlFor={`weight-${index}`}>Вага</Label>
                        <Input
                          id={`weight-${index}`}
                          name="weight"
                          value={variable.weight}
                          onChange={(e) => handleVariableChange(index, e)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`price-${index}`}>Ціна</Label>
                        <Input
                          id={`price-${index}`}
                          name="price"
                          value={variable.price}
                          onChange={(e) => handleVariableChange(index, e)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`newPrice-${index}`}>Нова ціна</Label>
                        <Input
                          id={`newPrice-${index}`}
                          name="newPrice"
                          value={variable.newPrice}
                          onChange={(e) => handleVariableChange(index, e)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`currency-${index}`}>Валюта</Label>
                        <Input
                          id={`currency-${index}`}
                          name="currency"
                          value={variable.currency}
                          onChange={(e) => handleVariableChange(index, e)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`count-${index}`}>Кількість</Label>
                        <Input
                          id={`count-${index}`}
                          name="count"
                          value={variable.count}
                          onChange={(e) => handleVariableChange(index, e)}
                        />
                      </div>
                      <Button
                        variant="destructive"
                        onClick={() => deleteVariable(index)}
                      >
                        Видалити вид
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="secondary"
                    onClick={addVariable}
                    className="mt-2"
                  >
                    Додати вид
                  </Button>
                </div>
              </div>
            </AlertDialogDescription>
            <AlertDialogFooter>
              <AlertDialogCancel>Скасувати</AlertDialogCancel>
              <AlertDialogAction>Створити</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </>
  )
}
