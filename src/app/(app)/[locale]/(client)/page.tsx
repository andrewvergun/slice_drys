import { Hero } from '@/components/client/hero/hero'
import About from '@/components/client/about/about'
import ProductSlider from '@/components/client/slider/productSlider'
import { getProductsSliderMain } from '@/server/products/get-productsSliderMain.server'

export default async function Home(props: {
  params: Params
  searchParams: ISearchParams
}) {
  const { locale } = await props.params

  const productsData: IGetProducts = await getProductsSliderMain(locale)

  console.log('productsData', productsData)

  return (
    <main>
      <Hero />
      <ProductSlider
        title={'ТОПОВІ СУШЕНИКИ'}
        message={'найсмачніші кусь-топчики'}
        products={productsData.products}
      />
      <About/>
    </main>
  )
}
