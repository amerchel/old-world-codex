import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const characters = [
        { name: 'Erim', school: 'Szkoła Wilka' },
        { name: 'Godryk', school: 'Szkoła Gryfa' },
        { name: 'Kylar', school: 'Szkoła Kota' },
        { name: 'Ryfar', school: 'Szkoła Niedźwiedzia' },
        { name: 'Jasper', school: 'Szkoła Żmii' },
    ];

    for (const character of characters) {
        await prisma.character.upsert({
            where: { name: character.name },
            update: {},
            create: character,
        });
    }
}

main()
    .then(() => console.log('✅ Characters seeded'))
    .catch((e) => console.error(e))
    .finally(() => prisma.$disconnect());
