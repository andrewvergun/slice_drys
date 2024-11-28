import { IProduct } from '@/types/IProduct'

export const productsList: IProduct[] = [
  {
    _id: '1',
    name: 'Курка сушена',
    img: '/images/meat.png',
    newPrice: 110,
    price: 130,
    weight: ['50 г'],
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'new', label: 'Новинка' },
    ],
  },
  {
    _id: '2',
    name: 'Яловичина сушена',
    img: '/images/beef.png',
    newPrice: 200,
    weight: ['30 г'],
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'sale', label: 'Акція' },
    ],
  },
  {
    _id: '3',
    name: 'Свинина сушена',
    img: '/images/mix.png',
    newPrice: 100,
    price: 150,
    weight: ['50 г'],
    badges: [{ type: 'new', label: 'Новинка' }],
  },
  {
    _id: '4',
    name: 'Яловичина сушена',
    img: '/images/beef.png',
    newPrice: 200,
    weight: ['30 г'],
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'sale', label: 'Акція' },
    ],
  },
  {
    _id: '5',
    name: 'Курка сушена',
    img: '/images/meat.png',
    newPrice: 110,
    price: 130,
    weight: ['50 г'],
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'new', label: 'Новинка' },
    ],
  },
  {
    _id: '6',
    name: 'Яловичина сушена',
    img: '/images/mix.png',
    newPrice: 200,
    weight: ['30 г'],
    badges: [
      { type: 'top', label: 'Топ' },
      { type: 'sale', label: 'Акція' },
    ],
  },
  {
    _id: '7',
    name: 'Свинина сушена',
    img: '/images/beef.png',
    newPrice: 100,
    price: 150,
    weight: ['50 г'],
    badges: [{ type: 'new', label: 'Новинка' }],
  },
]
