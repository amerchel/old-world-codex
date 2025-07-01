import { PrismaClient } from '@prisma/client'
import { inventoryData} from '@/seeds/inventoryData'

const prisma = new PrismaClient()

async function seedCharacters() {
    const characters = [
        { name: 'Erim', school: 'Szkoła Wilka' },
        { name: 'Godryk', school: 'Szkoła Gryfa' },
        { name: 'Kylar', school: 'Szkoła Kota' },
        { name: 'Ryfar', school: 'Szkoła Niedźwiedzia' },
        { name: 'Jasper', school: 'Szkoła Żmii' },
    ]

    for (const character of characters) {
        await prisma.character.upsert({
            where: { name: character.name },
            update: {},
            create: character,
        })
    }

    console.log('Characters seeded')
}

async function seedInventory() {

    for (const section of inventoryData) {
        await prisma.category.create({
            data: {
                name: section.category,
                items: {
                    create: section.items.map(item => ({
                        name: item.name,
                        description: item.description,
                        images: item.images,
                        stats: item.stats,
                    })),
                },
            },
        })
    }

    console.log('Inventory seeded')
}

async function main() {
    await seedCharacters()
    await seedInventory()
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(() => prisma.$disconnect())
