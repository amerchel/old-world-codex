import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const characters = await prisma.character.findMany({
        orderBy: { name: 'asc' },
    });

    return NextResponse.json(characters);
}
