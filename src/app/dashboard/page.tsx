import HeaderHome from '@/components/homeAuth/HeaderHome'
import { ListProduct } from '@/components/homeAuth/ListProduct'

export const revalidate = 60

export default function Dashboard() {
  return (
    <div>
      <HeaderHome />
      <ListProduct />
    </div>
  )
}
