import React from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind } from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome to my app!</Preview>
      <Tailwind>
      <Body className='bg-white'>
        <Container>
          <Text className='font-bold text-3xl'>Hello {name}!</Text>
        </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate