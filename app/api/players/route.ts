import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// CREATE new player
export async function POST(request: Request) {
  const body = await request.json()
  const { name, characterId } = body

  if (!name || !characterId) {
    return NextResponse.json({ error: 'Name and characterId are required' }, { status: 400 })
  }

  const newPlayer = await prisma.player.create({
    data: {
      name,
      characterId: Number(characterId),
    },
  })

  return NextResponse.json(newPlayer)
}

// READ all players
export async function GET() {
  const players = await prisma.player.findMany({
    orderBy: { joinedAt: 'desc' },
    include: {
      character: true,
    },
  })

  return NextResponse.json(players)
}

// UPDATE player by ID
export async function PATCH(request: Request) {
  const body = await request.json()
  const { id: idRaw, name, characterId } = body
  const id = Number(idRaw)

  if (!idRaw || isNaN(id)) {
    return NextResponse.json({ error: 'Valid player ID is required' }, { status: 400 })
  }

  const updatedPlayer = await prisma.player.update({
    where: { id },
    data: {
      ...(name && { name }),
      ...(characterId && { characterId: Number(characterId) }),
    },
  })

  return NextResponse.json(updatedPlayer)
}

// DELETE player by ID (from URL query string)
export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const idParam = searchParams.get('id')
  const id = Number(idParam)

  if (!idParam || isNaN(id)) {
    return NextResponse.json({ error: 'Valid player ID is required' }, { status: 400 })
  }

  await prisma.player.delete({
    where: { id },
  })

  return NextResponse.json({ success: true })
}
