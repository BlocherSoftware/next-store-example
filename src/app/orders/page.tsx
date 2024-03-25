import { currentUser } from '@clerk/nextjs'
import Link from 'next/link';
import { getOrdersByEmail } from '@/api/orders';

export default async function OrderPage() {
    const user = await currentUser();
    if (!user) {
        return null;
    }
    console.log(user.emailAddresses[0].emailAddress)
    const orders = await getOrdersByEmail(user.emailAddresses[0].emailAddress)
    console.log(orders)

    if (orders.length === 0) {
        return <div>Brak zamówień</div>
    }

    return <div className='container m-auto'>
        <h1 className='mb-6 text-2xl'>
            Zamówienia
        </h1>
        <ul>
            {orders.map(order => <Link href={`/orders/${order.id}`} key={order.id}><li className='flex justify-between p-3 bg-green-100 mb-2' ><div>{order.id}</div> <div>{order.status}</div></li></Link>)}
        </ul>
    </div>
}