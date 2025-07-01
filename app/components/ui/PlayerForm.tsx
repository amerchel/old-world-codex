'use client';

import { useState, useEffect, Fragment } from 'react';
import { Listbox } from '@headlessui/react';
import { Button } from './Button';

type Character = {
  id: number;
  name: string;
  school: string;
};

type Player = {
  id: number;
  name: string;
  character: Character;
  joinedAt: string;
};

export default function Home() {
  const [name, setName] = useState('');
  const [characterId, setCharacterId] = useState('');
  const [characters, setCharacters] = useState<Character[]>([]);
  const [players, setPlayers] = useState<Player[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pendingDelete, setPendingDelete] = useState<Player | null>(null);

  const fetchPlayers = async () => {
    const res = await fetch('/api/players');
    const data = await res.json();
    setPlayers(data);
  };

  const fetchCharacters = async () => {
    const res = await fetch('/api/characters');
    const data = await res.json();
    setCharacters(data);
  };

  useEffect(() => {
    fetchPlayers();
    fetchCharacters();
  }, []);

  const isValidInput = (value: string) => {
    const regex = /^[A-Za-zĄąĆćĘęŁłŃńÓóŚśŹźŻż\s]{3,16}$/;
    return regex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValidInput(name) || !characterId) {
      setError('Imię musi mieć 3–16 liter. Wybierz postać');
      return;
    }

    setError(null);

    const method = editingId ? 'PATCH' : 'POST';
    const payload = editingId
        ? { id: editingId, name, characterId: Number(characterId) }
        : { name, characterId: Number(characterId) };

    await fetch('/api/players', {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    setName('');
    setCharacterId('');
    setEditingId(null);
    fetchPlayers();
  };

  const handleDelete = async (id: number) => {
    await fetch(`/api/players?id=${id}`, {
      method: 'DELETE',
    });
    fetchPlayers();
  };

  const confirmDelete = (player: Player) => {
    setPendingDelete(player);
  };

  const cancelDelete = () => {
    setPendingDelete(null);
  };

  const confirmDeleteNow = async () => {
    if (pendingDelete) {
      await handleDelete(pendingDelete.id);
      setPendingDelete(null);
    }
  };

  const handleEdit = (player: Player) => {
    setName(player.name);
    setCharacterId(player.character.id.toString());
    setEditingId(player.id.toString());
    setError(null);
  };

  const selectedCharacter = characters.find((c) => c.id.toString() === characterId);

  return (
      <main className="min-h-screen bg-bg text-secondary px-6 py-12">
        <div className="max-w-3xl mx-auto space-y-10">
          <h1 className="text-3xl font-bold text-primary text-center">
            {editingId ? 'Edytuj Gracza' : 'Dodaj Gracza'}
          </h1>

          <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-[#1f1f1f] p-6 rounded-xl shadow-md border border-[#3a3a3a]"
          >
            <div>
              <label className="block text-sm mb-1 text-secondary">Twoja godność:</label>
              <input
                  type="text"
                  placeholder="np. Jaskier"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-[#2e2e2e] text-white border border-[#444] p-2 w-full rounded"
                  required
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-secondary">Postać:</label>
              <Listbox value={characterId} onChange={setCharacterId}>
                <div className="relative">
                  <Listbox.Button className="w-full rounded bg-[#2e2e2e] text-white border border-[#444] p-2 text-left">
                    {selectedCharacter
                        ? `${selectedCharacter.name} – ${selectedCharacter.school}`
                        : 'Wybierz postać...'}
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-10 mt-1 w-full rounded bg-[#2e2e2e] border border-[#3a3a3a] ring-1 ring-primary ring-opacity-30 shadow-none max-h-60 overflow-auto list-none p-0">
                    {characters.map((char) => (
                        <Listbox.Option key={char.id} value={char.id.toString()} as={Fragment}>
                          {({ active, selected }) => (
                              <li
                                  className={`cursor-pointer select-none px-4 py-2 ${
                                      active ? 'bg-primary text-bg' : 'text-white'
                                  } ${selected ? 'font-semibold' : ''}`}
                              >
                                {char.name} – {char.school}
                              </li>
                          )}
                        </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div className="flex justify-center">
              <Button type="submit">{editingId ? 'Zapisz zmiany' : 'Dodaj Gracza'}</Button>
            </div>
          </form>

          <div>
            <h2 className="text-2xl font-semibold text-primary mb-4">Gracze</h2>
            <ul className="space-y-4">
              {players.map((player) => (
                  <li
                      key={player.id}
                      className="bg-[#1f1f1f] p-4 rounded-xl border border-[#3a3a3a] shadow-sm flex justify-between items-center"
                  >
                    <div>
                      <p className="text-lg font-semibold">
                        {player.name} jako{' '}
                        <span className="italic">
                      {player.character.name} – {player.character.school}
                    </span>
                      </p>
                      <p className="text-sm text-gray-400">
                        Dołączył: {new Date(player.joinedAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button onClick={() => handleEdit(player)}>Edytuj</Button>
                      <Button onClick={() => confirmDelete(player)}>Usuń</Button>
                    </div>
                  </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Potwierdzenie usunięcia */}
        {pendingDelete && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className="bg-[#1f1f1f] border border-[#444] rounded-lg p-6 text-center max-w-sm w-full space-y-4 shadow-xl">
                <h2 className="text-xl font-semibold text-primary">Potwierdzenie</h2>
                <p className="text-secondary">
                  Czy na pewno chcesz usunąć gracza{' '}
                  <span className="text-white font-semibold">{pendingDelete.name}</span>?
                </p>
                <div className="flex justify-center gap-4">
                  <Button onClick={confirmDeleteNow}>Tak, usuń</Button>
                  <Button onClick={cancelDelete} variant='secondary'>
                    Anuluj
                  </Button>
                </div>
              </div>
            </div>
        )}
      </main>
  );
}
