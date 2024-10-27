'use client'
import React, { useState } from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/admin/ui/alert-dialog'
import { Button } from '@/components/admin/ui/button'
import { Label } from '@/components/admin/ui/label'
import { Input } from '@/components/admin/ui/input'
import { Textarea } from '@/components/admin/ui/textarea'
import { Checkbox } from '@/components/admin/ui/checkbox'
import { useFieldArray, useForm } from 'react-hook-form'
import { createProduct } from '@/server/products/create-product.server'
import { toast } from '@/hooks/use-toast'
import Loading from '@/components/admin/ui/loading'

const CrateProduct = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      description: '',
      category: [],
      menu: [],
      composition: [],
      img: '',
      statusLabel: [],
      variables: [
        {
          weight: '',
          price: '',
          newPrice: '',
          currency: '',
          count: '',
        },
      ],
    },
  })

  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'variables',
  })

  const onSubmit = async (data: any) => {
    console.log('data', data)
    setLoading(true)
    const result = await createProduct(data)

    if (result.success) {
      console.log('Product created')
      setIsOpen(false)
      toast({
        title: 'Product created',
      })
    } else {
      toast({
        title: result.message,
      })
    }
    setLoading(false)
  }

  return (
    <>
      <Loading />
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button>Створити</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AlertDialogHeader>
              <AlertDialogTitle>Створення товару</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              <div className="max-h-[80svh] space-y-4 overflow-auto px-2">
                <div>
                  <Label htmlFor="name">Назва</Label>
                  <Input
                    id="name"
                    {...register('name', {
                      required: 'Це поле є обов’язковим',
                    })}
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <Button>Додати зображення</Button>
                <div className="flex justify-between">
                  <div>
                    <Label htmlFor="category">Категорія</Label>
                    <Input
                      id="category"
                      {...register('category', {
                        required: 'Це поле є обов’язковим',
                      })}
                    />
                    {errors.category && (
                      <p className="text-red-500">{errors.category.message}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="menu">Меню</Label>
                    <Input
                      id="menu"
                      {...register('menu', {
                        required: 'Це поле є обов’язковим',
                      })}
                    />
                    {errors.menu && (
                      <p className="text-red-500">{errors.menu.message}</p>
                    )}
                  </div>
                </div>
                <div>
                  <Label htmlFor="composition">Склад</Label>
                  <Input
                    id="composition"
                    placeholder="Розділяйте комами"
                    {...register('composition', {
                      required: 'Це поле є обов’язковим',
                    })}
                  />
                  {errors.composition && (
                    <p className="text-red-500">{errors.composition.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="description">Опис</Label>
                  <Textarea
                    id="description"
                    {...register('description', {
                      required: 'Це поле є обов’язковим',
                    })}
                  />
                  {errors.description && (
                    <p className="text-red-500">{errors.description.message}</p>
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="new"
                      value="new"
                      {...register('statusLabel')}
                    />
                    <label htmlFor="new">Новинка</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="sale"
                      value="sale"
                      {...register('statusLabel')}
                    />
                    <label htmlFor="sale">Акція</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="top"
                      value="top"
                      {...register('statusLabel')}
                    />
                    <label htmlFor="top">Топ</label>
                  </div>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Вид</h2>
                  {fields.map((field, index) => (
                    <div key={field.id} className="mt-2 space-y-2 border p-4">
                      <div>
                        <Label htmlFor={`variables[${index}].weight`}>
                          Вага
                        </Label>
                        <Input
                          id={`variables[${index}].weight`}
                          {...register(`variables.${index}.weight`, {
                            required: 'Це поле є обов’язковим',
                          })}
                        />
                        {errors.variables?.[index]?.weight && (
                          <p className="text-red-500">
                            {errors.variables[index].weight.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor={`variables[${index}].price`}>
                          Ціна
                        </Label>
                        <Input
                          id={`variables[${index}].price`}
                          {...register(`variables.${index}.price`, {
                            required: 'Це поле є обов’язковим',
                          })}
                        />
                        {errors.variables?.[index]?.price && (
                          <p className="text-red-500">
                            {errors.variables[index].price.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor={`variables[${index}].newPrice`}>
                          Нова ціна
                        </Label>
                        <Input
                          id={`variables[${index}].newPrice`}
                          {...register(`variables.${index}.newPrice`)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`variables[${index}].currency`}>
                          Валюта
                        </Label>
                        <Input
                          id={`variables[${index}].currency`}
                          {...register(`variables.${index}.currency`, {
                            required: 'Це поле є обов’язковим',
                          })}
                        />
                        {errors.variables?.[index]?.currency && (
                          <p className="text-red-500">
                            {errors.variables[index].currency.message}
                          </p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor={`variables[${index}].count`}>
                          Кількість
                        </Label>
                        <Input
                          id={`variables[${index}].count`}
                          {...register(`variables.${index}.count`, {
                            required: 'Це поле є обов’язковим',
                          })}
                        />
                        {errors.variables?.[index]?.count && (
                          <p className="text-red-500">
                            {errors.variables[index].count.message}
                          </p>
                        )}
                      </div>
                      <Button
                        variant="destructive"
                        onClick={() => remove(index)}
                      >
                        Видалити вид
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="secondary"
                    onClick={() =>
                      append({
                        weight: '',
                        price: '',
                        newPrice: '',
                        currency: '',
                        count: '',
                      })
                    }
                    className="mt-2"
                  >
                    Додати вид
                  </Button>
                </div>
              </div>
            </AlertDialogDescription>
            <AlertDialogFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Скасувати
              </Button>
              <Button type="submit">Створити</Button>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default CrateProduct
