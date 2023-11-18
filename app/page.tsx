'use client';
import { Button } from '@radix-ui/themes'
import { Header } from './components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Hello world !</h1>
      <Button>Click</Button>
    </div>
  )
}
