interface IOrder {
  id: string
  status:
    | 'new'
    | 'awaitingPayment'
    | 'awaitingShipment'
    | 'shipped'
    | 'completed'
    | 'awaitingReturn'
    | 'cancelled'
    | 'failedDelivery'
  products: {
    id: string
    name: string
    count: number
    price: number
  }[]
  total: number
  user: {
    id: string
    name: string
    surname: string
    phone: string
    email: string
  }
  delivery: {
    city: string
    department: string
    phone: string
  }
  payment: {
    method: 'cash' | 'card'
  }
  comment: string
}
