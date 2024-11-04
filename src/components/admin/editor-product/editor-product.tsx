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
import { useFieldArray, useForm, Controller } from 'react-hook-form'
import { createProduct } from '@/server/products/create-product.server'
import { toast } from '@/hooks/use-toast'
import Loading from '@/components/admin/ui/loading'
import { editProduct } from '@/server/products/eddit-product.server'
import { useRouter } from 'next/navigation'

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

  const router = useRouter()

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
            weight: Number(variable.weight),
            price: Number(variable.price),
            newPrice: variable.newPrice ? Number(variable.newPrice) : 0,
            count: Number(variable.count),
          }),
        )
        replace(variablesWithNumberWeights)
      }
    }
  }, [product, setValue, replace])

  const onSubmit = async (data: IProduct) => {
    setLoading(true)
    let result: IResult

    const newData = {
      ...data,
      category: categories,
      menu,
      composition,
      visited: 0,
      variables: data.variables.map((variable) => ({
        ...variable,
        weight: Number(variable.weight),
        price: Number(variable.price),
        newPrice: variable.newPrice ? Number(variable.newPrice) : 0,
        count: Number(variable.count),
        sold: 0,
      })),
    }

    if (product?._id) {
      result = await editProduct(product._id, newData)
    } else {
      console.log('work', newData)
      result = await createProduct(newData, null)
    }

    if (result.success) {
      setIsOpen(false)
      toast({
        title: result.message,
      })
    } else {
      toast({
        title: result.message,
      })
    }
    router.refresh()
    setLoading(false)
  }

  return (
    <div>
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
                    <span className="text-red">{errors.name.message}</span>
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
                        onChange={(e) => setCompositionInput(e.target.value)}
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
                        list="squirrels-suggestions"
                        {...register('nutritionalValue.squirrels', {
                          required: 'Це поле є обов’язковим',
                        })}
                      />
                      <datalist id="squirrels-suggestions">
                        {recommendations.squirrels.map((category: string) => (
                          <option key={category} value={category} />
                        ))}
                      </datalist>
                      {errors.nutritionalValue?.squirrels && (
                        <span className="text-red">
                          {errors.nutritionalValue.squirrels.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="nutritionalValue.fats">Жири</Label>
                      <Input
                        id="nutritionalValue.fats"
                        list="fats-suggestions"
                        {...register('nutritionalValue.fats', {
                          required: 'Це поле є обов’язковим',
                        })}
                      />
                      <datalist id="fats-suggestions">
                        {recommendations.fats.map((category: string) => (
                          <option key={category} value={category} />
                        ))}
                      </datalist>
                      {errors.nutritionalValue?.fats && (
                        <span className="text-red">
                          {errors.nutritionalValue.fats.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="nutritionalValue.carbohydrates">
                        Вуглеводи
                      </Label>
                      <Input
                        id="nutritionalValue.carbohydrates"
                        list="carbohydrates-suggestions"
                        {...register('nutritionalValue.carbohydrates', {
                          required: 'Це поле є обов’язковим',
                        })}
                      />
                      <datalist id="carbohydrates-suggestions">
                        {recommendations.carbohydrates.map(
                          (category: string) => (
                            <option key={category} value={category} />
                          ),
                        )}
                      </datalist>
                      {errors.nutritionalValue?.carbohydrates && (
                        <span className="text-red">
                          {errors.nutritionalValue.carbohydrates.message}
                        </span>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="nutritionalValue.energyValue">
                        Енергетична цінність
                      </Label>
                      <Input
                        id="nutritionalValue.energyValue"
                        list="energyValue-suggestions"
                        {...register('nutritionalValue.energyValue', {
                          required: 'Це поле є обов’язковим',
                        })}
                      />
                      <datalist id="energyValue-suggestions">
                        {recommendations.energyValue.map((category: string) => (
                          <option key={category} value={category} />
                        ))}
                      </datalist>
                      {errors.nutritionalValue?.energyValue && (
                        <span className="text-red">
                          {errors.nutritionalValue.energyValue.message}
                        </span>
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
                    <span className="text-red">
                      {errors.description.message}
                    </span>
                  )}
                </div>
                <Controller
                  name="statusLabel"
                  control={control}
                  defaultValue={product?.statusLabel || []}
                  render={({ field }) => (
                    <>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="new"
                          value="new"
                          checked={field.value?.includes('new') || false}
                          onCheckedChange={(checked) => {
                            const value = 'new'
                            if (checked) {
                              field.onChange([...field.value, value])
                            } else {
                              field.onChange(
                                field.value.filter((v) => v !== value),
                              )
                            }
                          }}
                        />
                        <label htmlFor="new">Новинка</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="sale"
                          value="sale"
                          checked={field.value?.includes('sale') || false}
                          onCheckedChange={(checked) => {
                            const value = 'sale'
                            if (checked) {
                              field.onChange([...field.value, value])
                            } else {
                              field.onChange(
                                field.value.filter((v) => v !== value),
                              )
                            }
                          }}
                        />
                        <label htmlFor="sale">Акція</label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="top"
                          value="top"
                          checked={field.value?.includes('top') || false}
                          onCheckedChange={(checked) => {
                            const value = 'top'
                            if (checked) {
                              field.onChange([...field.value, value])
                            } else {
                              field.onChange(
                                field.value.filter((v) => v !== value),
                              )
                            }
                          }}
                        />
                        <label htmlFor="top">Топ</label>
                      </div>
                    </>
                  )}
                />
                <div>
                  <h2 className="text-lg font-semibold">Вид</h2>
                  {variableFields.map((field, index) => (
                    <div key={field.id} className="mt-2 space-y-2 border p-4">
                      <div>
                        <Label htmlFor={`variables.${index}.weight`}>
                          Вага
                        </Label>
                        <Input
                          type={'number'}
                          id={`variables.${index}.weight`}
                          {...register(`variables.${index}.weight`, {
                            required: 'Це поле є обов’язковим',
                          })}
                        />
                        {errors.variables?.[index]?.weight && (
                          <span className="text-red">
                            {errors.variables[index].weight.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <Label htmlFor={`variables.${index}.price`}>Ціна</Label>
                        <Input
                          type={'number'}
                          id={`variables.${index}.price`}
                          {...register(`variables.${index}.price`, {
                            required: 'Це поле є обов’язковим',
                          })}
                        />
                        {errors.variables?.[index]?.price && (
                          <span className="text-red">
                            {errors.variables[index].price.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <Label htmlFor={`variables.${index}.newPrice`}>
                          Нова ціна
                        </Label>
                        <Input
                          type={'number'}
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
                          <span className="text-red">
                            {errors.variables[index].currency.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <Label htmlFor={`variables.${index}.count`}>
                          Кількість
                        </Label>
                        <Input
                          type={'number'}
                          id={`variables.${index}.count`}
                          {...register(`variables.${index}.count`, {
                            required: 'Це поле є обов’язковим',
                          })}
                        />
                        {errors.variables?.[index]?.count && (
                          <span className="text-red">
                            {errors.variables[index].count.message}
                          </span>
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
    </div>
  )
}

export default EditorProduct
