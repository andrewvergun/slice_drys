import { colorConstants } from '../../../../tailwind.config'

export const sliderLinks = [
  { name: 'М’ЯСО', link: '/products/meat.tsx#product' },
  { name: 'ФРУКТИ', link: '/products/fruits' },
  { name: 'ОВОЧІ', link: '/products/vegetables' },
  { name: 'МІКСИ', link: '/products/mix' },
]

export const sliders = [
  {
    title: "М'ясні сушені, що вражають",
    image: '/sliders/meat.png',
    color: colorConstants.red,
  },
  {
    title: 'Фруктові сушені, що вражають',
    image: '/sliders/fruit.png',
    color: colorConstants.orange,
  },
  {
    title: 'Овочеві сушені, що вражають',
    image: '/sliders/veggie.png',
    color: colorConstants.green,
  },
  {
    title: 'Мікс сушені, що вражають',
    image: '/sliders/mix.png',
    color: colorConstants.purple,
  },
]
