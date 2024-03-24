import { currentUser } from '@clerk/nextjs'
export default async function OrderPage() {
    const user = await currentUser()
    const email = user?.emailAddresses[0]?.emailAddress

    if (!email) {
        return <div>Nie udało się pobrać mail z twojego konta</div>
    }
    return <div>Zamówienia</div>
}