'use client'
import React, { FC, useEffect, useState } from 'react'
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
import { editProduct } from '@/server/products/eddit-product.server'

interface ICrateProduct {
  buttonTitle: string
  product?: IProduct
  recommendations: IRecommendations
}

interface IResult {
  success: boolean
  message: string
}

const EditorProduct: FC<ICrateProduct> = ({
  buttonTitle,
  product,
  recommendations,
}) => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<IProduct>({
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
          weight: 0,
          price: 0,
          newPrice: 0,
          currency: '',
          count: 0,
        },
      ],
      nutritionalValue: {
        squirrels: '',
        fats: '',
        carbohydrates: '',
        energyValue: '',
      },
    },
  })

  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const [categoriesInput, setCategoriesInput] = useState<string>('')
  const [categories, setCategories] = useState<string[]>(
    product?.category || [],
  )

  const [menuInput, setMenuInput] = useState<string>('')
  const [menu, setMenu] = useState<string[]>(product?.menu || [])

  const [compositionInput, setCompositionInput] = useState<string>('')
  const [composition, setComposition] = useState<string[]>(
    product?.composition || [],
  )

  const {
    fields: variableFields,
    append: appendVariable,
    remove: removeVariable,
    replace,
  } = useFieldArray<IProduct, 'variables'>({
    control,
    name: 'variables',
  })

  useEffect(() => {
    if (product) {
      setValue('name', product.name)
      setValue('description', product.description)
      setValue('statusLabel', product.statusLabel)

      if (product.nutritionalValue) {
        setValue('nutritionalValue', product.nutritionalValue)
      }

      if (product.variables && product.variables.length > 0) {
        const variablesWithNumberWeights = product.variables.map(
          (variable) => ({
            ...variable,
            weight: Number(variable.weight), // Конвертуємо строку в число
            price: Number(variable.price), // Конвертуємо строку в число
            newPrice: variable.newPrice ? Number(variable.newPrice) : 0, // Конвертуємо строку в число або залишаємо 0
            count: Number(variable.count), // Конвертуємо строку в число
          }),
        )
        replace(variablesWithNumberWeights)
      }
    }
  }, [product, setValue, replace])

  const onSubmit = async (data: IProduct) => {
    console.log('data', data)
    setLoading(true)
    let result: IResult

    const categoryStrings = data.category.map((cat) => cat)
    const newData = { ...data, category: categoryStrings }

    if (product?._id) {
      result = await editProduct(product._id, newData)
    } else {
      result = await createProduct(newData)
    }

    if (result.success) {
      console.log('Product created')
      setIsOpen(false)
      toast({
        title: result.message,
      })
    } else {
      console.log('Product error')
      toast({
        title: result.message,
      })
    }
    setLoading(false)
  }

  return (
    <>
      {loading && <Loading />}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogTrigger asChild>
          <Button>{buttonTitle}</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AlertDialogHeader>
              <AlertDialogTitle>{buttonTitle} товар</AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              <div className="max-h-[80svh] space-y-4 overflow-auto p-2">
                <div>
                  <Label htmlFor="name">Назва</Label>
                  <Input
                    id="name"
                    {...register('name', {
                      required: 'Це поле є обов’язковим',
                    })}
                  />
                  {errors.name && (
                    <p className="text-red">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="picture">Додати зображення</Label>
                  <Input id="picture" type="file" />
                </div>

                <div className="flex w-full items-start gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <Label htmlFor="categoryInput">Меню</Label>
                      <Input
                        id="categoryInput"
                        list="category-suggestions"
                        value={menuInput}
                        onChange={(e) => setMenuInput(e.target.value)}
                      />
                    </div>
                    <Button
                      className="mt-5"
                      type="button"
                      onClick={() => {
                        setMenu((prev: string[]) => [...prev, menuInput])
                        setMenuInput('')
                      }}
                    >
                      Додати
                    </Button>
                  </div>
                  <datalist id="category-suggestions">
                    {recommendations.menu.map((category: string) => (
                      <option key={category} value={category} />
                    ))}
                  </datalist>
                  <div>
                    {menu.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {menu.map((category, index) => (
                          <div
                            key={category}
                            className="flex items-center justify-between gap-2 rounded-md border p-2 py-1"
                          >
                            <div>{category}</div>
                            <Button
                              variant="destructive"
                              type="button"
                              size="sm"
                              onClick={() =>
                                setMenu((prev: string[]) =>
                                  prev.filter((_, i) => i !== index),
                                )
                              }
                            >
                              Видалити
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex w-full items-start gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <Label htmlFor="categoryInput">Категорія</Label>
                      <Input
                        id="categoryInput"
                        list="category-suggestions"
                        value={categoriesInput}
                        onChange={(e) => setCategoriesInput(e.target.value)}
                      />
                    </div>
                    <Button
                      className="mt-5"
                      type="button"
                      onClick={() => {
                        setCategories((prev: string[]) => [
                          ...prev,
                          categoriesInput,
                        ])
                        setCategoriesInput('')
                      }}
                    >
                      Додати
                    </Button>
                  </div>
                  <datalist id="category-suggestions">
                    {recommendations.category.map((category: string) => (
                      <option key={category} value={category} />
                    ))}
                  </datalist>
                  <div>
                    {categories.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {categories.map((category, index) => (
                          <div
                            key={category}
                            className="flex items-center justify-between gap-2 rounded-md border p-2 py-1"
                          >
                            <div>{category}</div>
                            <Button
                              variant="destructive"
                              type="button"
                              size="sm"
                              onClick={() =>
                                setCategories((prev: string[]) =>
                                  prev.filter((_, i) => i !== index),
                                )
                              }
                            >
                              Видалити
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex w-full items-start gap-4">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <Label htmlFor="categoryInput">Склад</Label>
                      <Input
                        id="categoryInput"
                        list="category-suggestions"
                        value={compositionInput}
                        onChange={(e) => setCategoriesInput(e.target.value)}
                      />
                    </div>
                    <Button
                      className="mt-5"
                      type="button"
                      onClick={() => {
                        setComposition((prev: string[]) => [
                          ...prev,
                          compositionInput,
                        ])
                        setCompositionInput('')
                      }}
                    >
                      Додати
                    </Button>
                  </div>
                  <datalist id="category-suggestions">
                    {recommendations.composition.map((category: string) => (
                      <option key={category} value={category} />
                    ))}
                  </datalist>
                  <div>
                    {composition.length > 0 && (
                      <div className="flex flex-col gap-2">
                        {composition.map((category, index) => (
                          <div
                            key={category}
                            className="flex items-center justify-between gap-2 rounded-md border p-2 py-1"
                          >
                            <div>{category}</div>
                            <Button
                              variant="destructive"
                              type="button"
                              size="sm"
                              onClick={() =>
                                setComposition((prev: string[]) =>
                                  prev.filter((_, i) => i !== index),
                                )
                              }
                            >
                              Видалити
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-semibold">Харчова цінність</h2>
                  <div className="space-y-2">
                    <div>
                      <Label htmlFor="nutritionalValue.squirrels">Білки</Label>
                      <Input
                        id="nutritionalValue.squirrels"
                        {...register('nutritionalValue.squirrels', {
                          required: 'Це поле є обов’язковим',
                        })}
                      />
                      {errors.nutritionalValue?.squirrels && (
                        <p className="text-red-500">
                          {errors.nutritionalValue.squirrels.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="nutritionalValue.fats">Жири</Label>
                      <Input
                        id="nutritionalValue.fats"
                        {...register('nutritionalValue.fats', {
                          required: 'Це поле є обов’язковим',
                        })}
                      />
                      {errors.nutritionalValue?.fats && (
                        <p className="text-red-500">
                          {errors.nutritionalValue.fats.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="nutritionalValue.carbohydrates">
                        Вуглеводи
                      </Label>
                      <Input
                        id="nutritionalValue.carbohydrates"
                        {...register('nutritionalValue.carbohydrates', {
                          required: 'Це поле є обов’язковим',
                        })}
                      />
                      {errors.nutritionalValue?.carbohydrates && (
                        <p className="text-red-500">
                          {errors.nutritionalValue.carbohydrates.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="nutritionalValue.energyValue">
                        Енергетична цінність
                      </Label>
                      <Input
                        id="nutritionalValue.energyValue"
                        {...register('nutritionalValue.energyValue', {
                          required: 'Це поле є обов’язковим',
                        })}
                      />
                      {errors.nutritionalValue?.energyValue && (
                        <p className="text-red-500">
                          {errors.nutritionalValue.energyValue.message}
                        </p>
                      )}
                    </div>
                  </div>
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
                  {variableFields.map((field, index) => (
                    <div key={field.id} className="mt-2 space-y-2 border p-4">
                      <div>
                        <Label htmlFor={`variables.${index}.weight`}>
                          Вага
                        </Label>
                        <Input
                          id={`variables.${index}.weight`}
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
                        <Label htmlFor={`variables.${index}.price`}>Ціна</Label>
                        <Input
                          id={`variables.${index}.price`}
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
                        <Label htmlFor={`variables.${index}.newPrice`}>
                          Нова ціна
                        </Label>
                        <Input
                          id={`variables.${index}.newPrice`}
                          {...register(`variables.${index}.newPrice`)}
                        />
                      </div>
                      <div>
                        <Label htmlFor={`variables.${index}.currency`}>
                          Валюта
                        </Label>
                        <Input
                          id={`variables.${index}.currency`}
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
                        <Label htmlFor={`variables.${index}.count`}>
                          Кількість
                        </Label>
                        <Input
                          id={`variables.${index}.count`}
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
                        type="button"
                        onClick={() => removeVariable(index)}
                      >
                        Видалити вид
                      </Button>
                    </div>
                  ))}
                  <Button
                    variant="secondary"
                    type="button"
                    onClick={() =>
                      appendVariable({
                        weight: 0,
                        price: 0,
                        newPrice: 0,
                        currency: '',
                        count: 0,
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
              <div className="flex w-full justify-between">
                {product ? (
                  <Button
                    variant="destructive"
                    onClick={() => setIsOpen(false)}
                  >
                    Видалити
                  </Button>
                ) : (
                  <div />
                )}
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setIsOpen(false)}>
                    Скасувати
                  </Button>
                  <Button type="submit">{buttonTitle}</Button>
                </div>
              </div>
            </AlertDialogFooter>
          </form>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export default EditorProduct
