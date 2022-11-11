import React from 'react'
import { JobListItem } from '../Components/JobListItem'
import { Pagination } from './../Components/Pagination';

export const JobBoard = () => {

  const [items, setItems] = React.useState ([])
  const [isLoading, setIsLoading] = React.useState (false)
  const [currentItems, setCurrentItems] = React.useState ([])

  React.useEffect(() => {
    setIsLoading(true)
    fetch("https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu")
      .then((response) => {
        if(response.ok) {
          return response.json()
        }
      })
      .then((data) => {
        setItems(data)
        setCurrentItems(data)
      })
    setIsLoading(false)
  },[])

  console.log(currentItems)

  const item = {
    "id":"635ee6d304601d61a71951f6",
    "name":"Sureplex",
    "email":"sureplex@gmail.bo",
    "phone":"+97117307890",
    "title":"Ut veniam occaecat aute adipisicing eiusmod non pariatur enim enim cupidatat nulla ipsum eiusmod.",
    "salary":"60k-71k",
    "address":"76 Blende Jardine Place",
    "benefits":["Pay vocations","Flexible hours"],
    "location":{"lat":9.804124,"long":147.139488},
    "pictures":["https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300"],
    "createdAt":"2012-05-04T01:38:26.141Z",
    "updatedAt":"2012-05-05T01:38:26.141Z",
    "description":"\n  Reprehenderit Lorem consectetur non et minim adipisicing deserunt. Ipsum reprehenderit do pariatur proident esse sint magna ullamco qui minim. Anim Lorem ut laborum occaecat culpa consectetur reprehenderit aliquip ex cupidatat proident quis laborum. Nulla aute ipsum et anim.\n  \n  Responsopilities:\n    Ex qui consequat deserunt laborum cupidatat ut ullamco veniam minim nisi incididunt aliquip incididunt. Sunt sunt ullamco elit ipsum ea enim consectetur sit magna minim ea cupidatat. Et ut proident voluptate quis nulla anim commodo in pariatur ad.\n  \nCompensation & Benefits:\n\t    Incididunt et sint incididunt laboris duis. Deserunt consectetur sint aute et sint aliqua quis nostrud non elit aliqua elit tempor. Aliquip ad dolore proident eu consequat elit amet laborum aute excepteur sit labore.\n\n",
    "employment_type":["Full time"]
}

  return (
    <div className='items '>
      {
        currentItems.map((obj) => {
          return <JobListItem key={obj.id} obj={obj}/>
        })
      }
      <Pagination items={items} itemsPerPage={5} currentItems={currentItems} setCurrentItems={setCurrentItems} />
      </div>
  )
}
