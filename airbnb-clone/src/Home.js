import React from 'react';
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
  return (
      <div className='home'>
        <Banner />
        <div className='home__section'>
        <Card
          src="http://cdn.home-designing.com/wp-content/uploads/2015/03/stunning-modern-home.jpg"
          title="Entire homes"
          description="Comfortable private places, with room for friend sor family."/>
        <Card
          src="https://stupiddope.com/wp-content/uploads/2020/04/Airbnb-Online-Experiences-3.jpg"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"/>
        <Card
          src="https://cdn.theatlantic.com/assets/media/img/photo/2015/06/unusual-homes-around-the-world/h01_RTXZWGT-1/main_1200.jpg"
          title="Unique Stays"
          description="Spaces that are more than just a place to sleep."/>
        </div>
        <div className='home__section'>
        <Card
          src="https://www.travelvoice.jp/english/wp-content/uploads/2016/04/64505_01.jpg"
          title="4 Bedroom stay in Tokyo"
          description="Superhost with a stunning view of the nightlife in Tokyo, Japan"
          price="¥10468/night"
        />
        <Card
          src="https://i.huffpost.com/gen/1525130/thumbs/o-RB1-900.jpg?6"
          title="Vaction home in Hawaii"
          description="Enjoy the ocean breeze of Hawaii with this stunning home."
          price="$120/night"
        />
        <Card
          src="https://images1.apartments.com/i2/h8jFKVlKaqHOy8RjKrOQEw5v83fhIydTBQX7IhhBPUA/111/the-anthem-new-york-ny-primary-photo.jpg"
          title="One bedroom studio"
          description="New York studio located next to great tourist attractions"
          price="$90/night"
        />
        </div>
      </div>
  )
}
export default Home
