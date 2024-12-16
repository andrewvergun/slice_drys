export default function ProductPage({ params }: any) {
  const { ordersId } = params

  return (
    <div>
      <h1>Order ID: {ordersId}</h1>
    </div>
  )
}
