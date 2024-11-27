import { IProduct } from '@/types/IProduct'

export const productsList: IProduct[] = [
  {
    id: 1,
    title: 'Курка сушена',
    image: '/images/meat.png',
    price: 110,
    oldPrice: 130,
    weight: '30 г',
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'new', label: 'Новинка' },
    ],
  },
  {
    id: 2,
    title: 'Яловичина сушена',
    image: '/images/beef.png',
    price: 200,
    weight: '50 г',
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'sale', label: 'Акція' },
    ],
  },
  {
    id: 3,
    title: 'Свинина сушена',
    image: '/images/mix.png',
    price: 100,
    oldPrice: 150,
    weight: '30 г',
    badges: [{ type: 'new', label: 'Новинка' }],
  },
  {
    id: 4,
    title: 'Яловичина сушена',
    image: '/images/beef.png',
    price: 200,
    weight: '50 г',
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'sale', label: 'Акція' },
    ],
  },
  {
    id: 5,
    title: 'Курка сушена',
    image: '/images/meat.png',
    price: 110,
    oldPrice: 130,
    weight: '30 г',
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'new', label: 'Новинка' },
    ],
  },
  {
    id: 6,
    title: 'Яловичина сушена',
    image: '/images/mix.png',
    price: 200,
    weight: '50 г',
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'sale', label: 'Акція' },
    ],
  },
  {
    id: 7,
    title: 'Свинина сушена',
    image: '/images/beef.png',
    price: 100,
    oldPrice: 150,
    weight: '30 г',
    badges: [{ type: 'new', label: 'Новинка' }],
  },
]
