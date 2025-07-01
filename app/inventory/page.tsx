import { prisma } from '@/lib/prisma'
import InventoryClient from './InventoryClient'

export default async function InventoryPage() {
    const categories = await prisma.category.findMany({
        include: { items: true },
    })

    return <InventoryClient data={categories} />
}
