import type { NextPage } from 'next'
import Showroom from '../ui/components/Showroom/Showroom'
import Title from '../ui/components/Title/Title'

const Home: NextPage = () => {
  return (
    <div>
      <Title 
        title="" 
        subtitle={
          <span>
            Com um pequeno valor, você <br/>
            pode<strong> adotar um pet virtualmente</strong>
          </span>
        }/>
      <Showroom
        pets={[
          {
            id: 1,
            name: 'Haroldo',
            history: 'dsalkda asmd askmldkm lamsdsa daps pdaps dkas',
            urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGGZc95OOM6NPXxxf2F9IEHzK_T11EN0HAnw&usqp=CAU'
          },
          {
            id: 2,
            name: 'Scobby',
            history: 'dsalkda asmd askmldkm lamsdsa daps pdaps dkas dsalkda asmd askmldkm lamsdsa daps pdaps dkas',
            urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlaTwF5ldhd2FnhqwQMxdHhj9bfFKSYHRrUA&usqp=CAU'
          }
        ]}
      />
    </div>
  )
}

export default Home
