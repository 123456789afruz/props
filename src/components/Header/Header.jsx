import React from 'react'
import './Header.scss'



import Card from './Card/Card'
import Title from './Title/Title'

const Header = () => {
  return (
    <>
        <Title>Транспорт</Title>
        <div className="wrap">
            <Card name="Велосипед" img="/card-1.jpg"/>
            <Card name="Мотоцикл" img="https://motorrika.ru/image/cache/catalog/Motorcycles/1_kawasaki/kawasaki-ninja-650-gray-ebony-2023-01-1600x1200.jpg"/>
            <Card name="Самокат" img="https://scoot.com.ua/image/cache/catalog/completes/indo/trampoline/indo_trampoline_scooter_1.1-1200x1200.jpg"/>
            <Card />
        </div>
    </>
  )
}

export default Header