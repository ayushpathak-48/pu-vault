import { Metadata } from 'next';
import Home from './home-client'

export const metadata: Metadata = {
  title: "Pu Vault",
  description: "Parul University MCA sem 1, 2 and 3 all materials, assignments, notes, source codes and more.",
};

const page = () => {
  return (
    <Home />
  )
}

export default page