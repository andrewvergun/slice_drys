import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { useState } from 'react'

const list = [
  { id: 1, link: 'Головна' },
  { id: 2, link: 'Про нас' },
  { id: 3, link: 'Популярне' },
  { id: 4, link: 'Акції' },
  { id: 5, link: 'FAQ' },
  { id: 6, link: 'Відгуки' },
]

export default function ListBox() {
  const [selectedPerson, setSelectedPerson] = useState(list[0])

  return (


    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <ListboxButton className='flex gap-x-3 hover:text-red'>
        {selectedPerson.link}
        <div className="rotate-90">&#10095;</div>
      </ListboxButton>
      <ListboxOptions anchor="bottom start" className='border rounded-sm p-3 bg-light_gray w-48 '>
        {list.map((string) => (
          <ListboxOption
            key={string.id}
            value={string}
            className="data-[focus]:bg-blue-500 text-xl cursor-pointer"
          >
            {string.link}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>


  )
}