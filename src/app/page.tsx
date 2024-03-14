import { db } from '@/lib/db'
import AddUser from './_components/AddUser'
import GetUsers from './_components/GetUsers'

export default async function Home() {
  return (
    <>
      <AddUser />
      <GetUsers/>
    </>
  )
}
