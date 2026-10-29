import React from 'react'
import Heading2 from './typography/Heading2'
import Paragraph from './typography/Paragraph'
import { NavLink } from 'react-router-dom'
import InfoCard from './InfoCard'

const Home = () => {
  return (
    <section className='py-20 px-6'>
    <div className='container'>
    <div className='flex flex-col items-center justify-center gap-6 px-6 md:px-0 w-full'>
     <Heading2>
        Config-Driven UI System
     </Heading2>
     <Paragraph>Choose a component to view. Both Form and Card are rendered from local JSON configuration.</Paragraph>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full'>
                <InfoCard 
                headingText="Form Component"
                paraText="Render dynamic forms using a JSON configuration."
                goTo="src/config/forms/"
                component="Form"
                supportedText="Supported fields: text, email, password, number, textarea, select, checkbox, radio, date, file"
                url="/form"
                btnText="View Form Example →"
                />
                  <InfoCard 
                headingText="Card Component"
                paraText="Render dynamic forms using a JSON configuration."
                goTo="src/config/cards/"
                component="Card"
                supportedText="Supports: title, description, image, badges, metadata, actions (links)"
                url="/cards"
                btnText="View Card Example →"
                />
              </div>
    </div>
    </div>
    </section>
  )
}

export default Home