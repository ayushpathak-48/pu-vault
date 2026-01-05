import { Metadata } from 'next'
import AsssignmentsPage from './client'


export const metadata: Metadata = {
  title: 'Assignments - Pu-Vault',
  description: 'Download assignments for various subjects and courses. Stay updated with the latest assignments available for students.',
}

const page = () => {
  return (
    <AsssignmentsPage />
  )
}

export default page