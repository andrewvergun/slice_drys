import Link from 'next/link'

export const Slider = () => {
  const sliderLinks = [
    {
      name: 'М’ясо',
      link: '/products/meat',
    },
    {
      name: 'Фрукти',
      link: '/products/fruits',
    },
    {
      name: 'Овочі',
      link: '/products/vegetables',
    },
    {
      name: 'Мікс',
      link: '/products/mix',
    },
  ]
  const sliders = [
    {
      title: "М'ясні сушені, що вражають",
      component: '',
    },
    {
      title: 'Фруктові сушені, що вражають',
      component: '',
    },
    {
      title: 'Овочеві сушені, що вражають',
      component: '',
    },
    {
      title: 'Мікс сушені, що вражають',
      component: '',
    },
  ]
  return (
    <>
      <div className="flex justify-around">
        {sliders.map((item) => (
          <div key={item.title}>
            <div className="text-[20px]">{item.title}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-around">
        {sliderLinks.map((item) => (
          <Link href={`${item.link}`} key={item.name} className="">
            <div className="text-[20px]">{item.name}</div>
          </Link>
        ))}
      </div>
    </>
  )
}
