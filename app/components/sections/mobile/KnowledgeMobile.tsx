'use client'

export const KnowledgeMobile = () => {
    return (
        <section className="min-h-screen px-4 py-8 bg-bg text-secondary">
            <h1 className="text-2xl font-bold text-primary mb-6 text-center">
                Instrukcja gry
            </h1>

            <div className="w-full h-[75vh]">
                <iframe
                    src="/knowledge.pdf"
                    title="Instrukcja gry"
                    className="w-full h-full rounded-md shadow-md"
                />
            </div>
        </section>
    )
}
