export const instrukcje: Record<number, string> = {
    1: '1 potwór (po 1 z każdego poziomu), 1 karta trofeum atrybutu, brak kart trofeum szkoły. Gracz 1 zaczyna z 5 kartami i 3 złotem.',
    2: '3 monsters (2× poziom I + 1× poziom II), 4 karty trofeów atrybutów, każdy gracz dostaje 1 trofeum szkoły. Gracze zaczynają z 3–5 kartami i 2–4 złotem.',
    3: '3 monsters (3× poziom I), 4 karty trofeów atrybutów, każdy gracz dostaje 2 trofea szkoły. Gracze zaczynają z 3–5 kartami i 2–6 złotem.',
    4: '4 monsters (3× poziom I + 1 na osobny stos), 8 kart trofeów atrybutów, każdy gracz dostaje 3 trofea szkoły i zwiększa 1 atrybut do poziomu 2. Start z 2–5 kartami i 4–7 złotem.',
    5: '5 potworów (3× poziom I + 2 na osobny stos), 8 kart trofeów atrybutów, każdy gracz dostaje 4 trofea szkoły i zwiększa 1 atrybut do poziomu 2. Start z 2–5 kartami i 5–7 złotem.',
};

export const krokiMap: Record<number, string[]> = {
    1: [
        'Rozłóż matę lub planszę.',
        'Potasuj talię akcji. Odkrywaj karty z wierzchu aż odkryją się 3 karty o koszcie 0, które należy położyć na 3 najniższych polach po prawej stronie planszy. Pozostałe karty wtasuj, odkryj jeszcze 3 karty na pozostałe miejsca a talię połóż zakrytą w górnym prawym rogu planszy.',
        'Wylosuj 1 kartę trofeum przypisanego atrybutom i połóż odkrytą na brzegu planszy, poniżej miejsca na karty eksploracji.',
        'Talię eliksirów potasowaną połóż na brzegu planszy poniżej kart akcji.',
        'Talie eksploracji miast i dzikich ostępów potasuj. Talii zdarzeń nie tasuj! Połóż talie na planszy.',
        'Rozmieść żetony złota, kości pokera i zamkniętą tawernę.',
        'Obok planszy połóż żetony złota (lub monety), kości do pokera i żeton/figurkę zamkniętej tawerny.',
        'Żetony obszarów rozdziel na 3 stosy wg typów terenu, potasuj i połóż obok planszy rewersem do góry. Przełóż po 1 z każdego typu na odpowiednie pola w sekcji potworów.',
        'Rozłóż monsters:\n' +
        'Karty i żetony potworów rozdziel na 3 stosy wg poziomów (I, II, III) i połóż obok planszy – karty odkryte a żetony potasowane i zakryte.\n' +
        'Wylosuj 3 żetony potworów: po 1 z każdego poziomu.\n' +
        'Wylosowane żetony potworów umieść losowo w obszarach wylosowanych wcześniej (rewersem do góry).\n' +
        'Odwróć żetony potworów i umieść ich karty potworów na planszy w sekcji potworów pod odpowiadającymi im żetonami obszarów. Jeśli masz figurki potworów to połóż je na mapie zamiast żetonów potworów.',
        'Talię kart walki potworów połóż potasowaną i zakrytą obok planszy.',
        'Graczem rozpoczynającym jest osoba, która ostatnio przeczytała książkę o Wiedźminie, lub wyłoniona w dowolny inny sposób (np. wylosowana). Gracze wybierają planszetki gracza dowolną metodą, np. opisaną na str. 7 instrukcji.',
        'Każdy gracz:\n' +
        'Bierze kartę pomocy, planszetkę i figurkę postaci (z kolorową podstawką), znaczniki (atrybutów i tarczy), żeton reputacji i talię 10 startowych kart akcji (karty z symbolem szkoły w górnym prawym rogu).\n' +
        'Umieszcza 5 znaczników atrybutów i tarczy w polach „1” na planszetce\n' +
        'Kładzie żeton reputacji na najniższym polu toru reputacji.\n' +
        'Tasuje talię startowych kart akcji i kładzie po lewej stronie planszetki.\n' +
        'Kładzie figurkę na mapie na swojej szkole.\n' +
        'Bierze następującą liczbę kart i żetonów złota/monet w zależności od kolejności graczy:\n' + '\n' +
        'Gracz 1: 5 kart, 3 żetony złota'
    ],
    2: [
        'Rozłóż matę lub planszę.',
        'Potasuj talię akcji. Odkrywaj karty z wierzchu aż odkryją się 3 karty o koszcie 0, które należy położyć na 3 najniższych polach po prawej stronie planszy. Pozostałe karty wtasuj, odkryj jeszcze 3 karty na pozostałe miejsca a talię połóż zakrytą w górnym prawym rogu planszy.',
        'Weź 4 karty trofeów przypisanych atrybutom (po 1 dla każdego atrybutu) i połóż odkryte na brzegu planszy, poniżej miejsca na karty eksploracji.',
        'Talię eliksirów potasowaną połóż na brzegu planszy poniżej kart akcji.',
        'Talie eksploracji miast i dzikich ostępów potasuj. Talii zdarzeń nie tasuj! Połóż talie na planszy.',
        'Obok planszy połóż żetony złota (lub monety), kości do pokera i żeton/figurkę zamkniętej tawerny.',
        'Żetony obszarów rozdziel na 3 stosy wg typów terenu, potasuj i połóż obok planszy rewersem do góry. Przełóż po 1 z każdego typu na odpowiednie pola w sekcji potworów.',
        'Rozłóż monsters:\n' +
        'Karty i żetony potworów rozdziel na 3 stosy wg poziomów (I, II, III) i połóż obok planszy – karty odkryte a żetony potasowane i zakryte.\n' +
        'Wylosuj 3 żetony potworów: 2 × poziomu I + 1 × poziomu II.\n' +
        'Wylosowane żetony potworów umieść losowo w obszarach wylosowanych wcześniej (rewersem do góry).\n' +
        'Odwróć żetony potworów i umieść ich karty potworów na planszy w sekcji potworów pod odpowiadającymi im żetonami obszarów. Jeśli masz figurki potworów to połóż je na mapie zamiast żetonów potworów.',
        'Talię kart walki potworów połóż potasowaną i zakrytą obok planszy.',
        'Graczem rozpoczynającym jest osoba, która ostatnio przeczytała książkę o Wiedźminie, lub wyłoniona w dowolny inny sposób (np. wylosowana). Gracze wybierają planszetki gracza dowolną metodą, np. opisaną na str. 7 instrukcji.',
        'Każdy gracz:\n' +
        'Bierze kartę pomocy, planszetkę i figurkę postaci (z kolorową podstawką), znaczniki (atrybutów i tarczy), żeton reputacji i talię 10 startowych kart akcji (karty z symbolem szkoły w górnym prawym rogu).\n' +
        'Bierze 1 kartę trofeum przypisanego szkole wiedźmińskiej (tyle ilu jest pozostałych graczy).\n' +
        'Umieszcza 5 znaczników atrybutów i tarczy w polach „1” na planszetce\n' +
        'Kładzie żeton reputacji na najniższym polu toru reputacji.\n' +
        'Tasuje talię startowych kart akcji i kładzie po lewej stronie planszetki.\n' +
        'Kładzie figurkę na mapie na swojej szkole.\n' +
        'Bierze następującą liczbę kart i żetonów złota/monet w zależności od kolejności graczy:\n' + '\n' +
        'Gracz 1: 3 karty, 2 żetony złota\n' +
        'Gracz 2: 5 kart, 4 żetony złota'
    ],
    3: [
        'Rozłóż matę lub planszę.',
        'Potasuj talię akcji. Odkrywaj karty z wierzchu aż odkryją się 3 karty o koszcie 0, które należy położyć na 3 najniższych polach po prawej stronie planszy. Pozostałe karty wtasuj, odkryj jeszcze 3 karty na pozostałe miejsca a talię połóż zakrytą w górnym prawym rogu planszy.',
        'Weź 4 karty trofeów przypisanych atrybutom (po 1 dla każdego atrybutu) i połóż odkryte na brzegu planszy, poniżej miejsca na karty eksploracji.',
        'Talię eliksirów potasowaną połóż na brzegu planszy poniżej kart akcji.',
        'Talie eksploracji miast i dzikich ostępów potasuj. Talii zdarzeń nie tasuj! Połóż talie na planszy.',
        'Obok planszy połóż żetony złota (lub monety), kości do pokera i żeton/figurkę zamkniętej tawerny.',
        'Żetony obszarów rozdziel na 3 stosy wg typów terenu, potasuj i połóż obok planszy rewersem do góry. Przełóż po 1 z każdego typu na odpowiednie pola w sekcji potworów.',
        'Rozłóż monsters:\n' +
        'Karty i żetony potworów rozdziel na 3 stosy wg poziomów (I, II, III) i połóż obok planszy – karty odkryte a żetony potasowane i zakryte.\n' +
        'Wylosuj 3 żetony potworów: 3 × poziomu I.\n' +
        'Wylosowane żetony potworów umieść losowo w obszarach wylosowanych wcześniej (rewersem do góry).\n' +
        'Odwróć żetony potworów i umieść ich karty potworów na planszy w sekcji potworów pod odpowiadającymi im żetonami obszarów. Jeśli masz figurki potworów to połóż je na mapie zamiast żetonów potworów.',
        'Talię kart walki potworów połóż potasowaną i zakrytą obok planszy.',
        'Graczem rozpoczynającym jest osoba, która ostatnio przeczytała książkę o Wiedźminie, lub wyłoniona w dowolny inny sposób (np. wylosowana). Gracze wybierają planszetki gracza dowolną metodą, np. opisaną na str. 7 instrukcji.',
        'Każdy gracz:\n' +
        'Bierze kartę pomocy, planszetkę i figurkę postaci (z kolorową podstawką), znaczniki (atrybutów i tarczy), żeton reputacji i talię 10 startowych kart akcji (karty z symbolem szkoły w górnym prawym rogu).\n' +
        'Bierze 2 karty trofeów przypisanych szkole wiedźmińskiej (tyle ilu jest pozostałych graczy).\n' +
        'Umieszcza 5 znaczników atrybutów i tarczy w polach „1” na planszetce\n' +
        'Kładzie żeton reputacji na najniższym polu toru reputacji.\n' +
        'Tasuje talię startowych kart akcji i kładzie po lewej stronie planszetki.\n' +
        'Kładzie figurkę na mapie na swojej szkole.\n' +
        'Bierze następującą liczbę kart i żetonów złota/monet w zależności od kolejności graczy:\n' + '\n' +
        'Gracz 1: 3 karty, 2 żetony złota\n' +
        'Gracz 2: 4 karty, 4 żetony złota\n' +
        'Gracz 3: 5 kart, 6 żetonów złota'
    ],
    4: [
        'Rozłóż matę lub planszę.',
        'Potasuj talię akcji. Odkrywaj karty z wierzchu aż odkryją się 3 karty o koszcie 0, które należy położyć na 3 najniższych polach po prawej stronie planszy. Pozostałe karty wtasuj, odkryj jeszcze 3 karty na pozostałe miejsca a talię połóż zakrytą w górnym prawym rogu planszy.',
        'Weź wszystkie 8 kart trofeów przypisanych atrybutom i połóż odkryte na brzegu planszy, poniżej miejsca na karty eksploracji.',
        'Talię eliksirów potasowaną połóż na brzegu planszy poniżej kart akcji.',
        'Talie eksploracji miast i dzikich ostępów potasuj. Talii zdarzeń nie tasuj! Połóż talie na planszy.',
        'Obok planszy połóż żetony złota (lub monety), kości do pokera i żeton/figurkę zamkniętej tawerny.',
        'Żetony obszarów rozdziel na 3 stosy wg typów terenu, potasuj i połóż obok planszy rewersem do góry. Przełóż po 1 z każdego typu na odpowiednie pola w sekcji potworów.',
        'Rozłóż monsters:\n' +
        'Karty i żetony potworów rozdziel na 3 stosy wg poziomów (I, II, III) i połóż obok planszy – karty odkryte a żetony potasowane i zakryte.\n' +
        'Połóż 1 żeton potwora poziomu I na dodatkowy stos obok planszy. Zob. str. 26 instrukcji do czego służy.\n' +
        'Wylosuj 3 żetony potworów: 3 × poziomu I.\n' +
        'Wylosowane żetony potworów umieść losowo w obszarach wylosowanych wcześniej (rewersem do góry).\n' +
        'Odwróć żetony potworów i umieść ich karty potworów na planszy w sekcji potworów pod odpowiadającymi im żetonami obszarów. Jeśli masz figurki potworów to połóż je na mapie zamiast żetonów potworów.',
        'Talię kart walki potworów połóż potasowaną i zakrytą obok planszy.',
        'Graczem rozpoczynającym jest osoba, która ostatnio przeczytała książkę o Wiedźminie, lub wyłoniona w dowolny inny sposób (np. wylosowana). Gracze wybierają planszetki gracza dowolną metodą, np. opisaną na str. 7 instrukcji.',
        'Każdy gracz:\n' +
        'Bierze kartę pomocy, planszetkę i figurkę postaci (z kolorową podstawką), znaczniki (atrybutów i tarczy), żeton reputacji i talię 10 startowych kart akcji (karty z symbolem szkoły w górnym prawym rogu).\n' +
        'Bierze 3 karty trofeów przypisanych szkole wiedźmińskiej (tyle ilu jest pozostałych graczy).\n' +
        'Umieszcza 5 znaczników atrybutów i tarczy w polach „1” na planszetce\n' +
        'Wybiera 1 atrybut i podnosi go do poziomu 2.\n' +
        'Kładzie żeton reputacji na najniższym polu toru reputacji.\n' +
        'Tasuje talię startowych kart akcji i kładzie po lewej stronie planszetki.\n' +
        'Kładzie figurkę na mapie na swojej szkole.\n' +
        'Bierze następującą liczbę kart i żetonów złota/monet w zależności od kolejności graczy:\n' + '\n' +
        'Gracz 1: 2 karty, 4 żetony złota\n' +
        'Gracz 2: 3 karty, 5 żetonów złota\n' +
        'Gracz 3: 4 karty, 6 żetonów złota\n' +
        'Gracz 4: 5 kart, 7 żetonów złota'
    ],
    5: [
        'Rozłóż matę lub planszę.',
        'Potasuj talię akcji. Odkrywaj karty z wierzchu aż odkryją się 3 karty o koszcie 0, które należy położyć na 3 najniższych polach po prawej stronie planszy. Pozostałe karty wtasuj, odkryj jeszcze 3 karty na pozostałe miejsca a talię połóż zakrytą w górnym prawym rogu planszy.',
        'Weź wszystkie 8 kart trofeów przypisanych atrybutom i połóż odkryte na brzegu planszy, poniżej miejsca na karty eksploracji.',
        'Talię eliksirów potasowaną połóż na brzegu planszy poniżej kart akcji.',
        'Talie eksploracji miast i dzikich ostępów potasuj. Talii zdarzeń nie tasuj! Połóż talie na planszy.',
        'Obok planszy połóż żetony złota (lub monety), kości do pokera i żeton/figurkę zamkniętej tawerny.',
        'Żetony obszarów rozdziel na 3 stosy wg typów terenu, potasuj i połóż obok planszy rewersem do góry. Przełóż po 1 z każdego typu na odpowiednie pola w sekcji potworów.',
        'Rozłóż monsters:\n' +
        'Karty i żetony potworów rozdziel na 3 stosy wg poziomów (I, II, III) i połóż obok planszy – karty odkryte a żetony potasowane i zakryte.\n' +
        'Połóż 2 żetony potworów poziomu I na dodatkowy stos obok planszy. Zob. str. 26 instrukcji do czego służy.\n' +
        'Wylosuj 3 żetony potworów: 3 × poziomu I.\n' +
        'Wylosowane żetony potworów umieść losowo w obszarach wylosowanych wcześniej (rewersem do góry).\n' +
        'Odwróć żetony potworów i umieść ich karty potworów na planszy w sekcji potworów pod odpowiadającymi im żetonami obszarów. Jeśli masz figurki potworów to połóż je na mapie zamiast żetonów potworów.',
        'Talię kart walki potworów połóż potasowaną i zakrytą obok planszy.',
        'Graczem rozpoczynającym jest osoba, która ostatnio przeczytała książkę o Wiedźminie, lub wyłoniona w dowolny inny sposób (np. wylosowana). Gracze wybierają planszetki gracza dowolną metodą, np. opisaną na str. 7 instrukcji.',
        'Każdy gracz:\n' +
        'Bierze kartę pomocy, planszetkę i figurkę postaci (z kolorową podstawką), znaczniki (atrybutów i tarczy), żeton reputacji i talię 10 startowych kart akcji (karty z symbolem szkoły w górnym prawym rogu).\n' +
        'Bierze 4 karty trofeów przypisanych szkole wiedźmińskiej (tyle ilu jest pozostałych graczy).\n' +
        'Umieszcza 5 znaczników atrybutów i tarczy w polach „1” na planszetce\n' +
        'Wybiera 1 atrybut i podnosi go do poziomu 2.\n' +
        'Kładzie żeton reputacji na najniższym polu toru reputacji.\n' +
        'Tasuje talię startowych kart akcji i kładzie po lewej stronie planszetki.\n' +
        'Kładzie figurkę na mapie na swojej szkole.\n' +
        'Bierze następującą liczbę kart i żetonów złota/monet w zależności od kolejności graczy:\n' + '\n' +
        'Gracz 1: 2 karty, 5 żetonów złota\n'+
        'Gracz 2: 3 karty, 5 żetonów złota\n' +
        'Gracz 3: 4 karty, 7 żetonów złota\n' +
        'Gracz 4: 4 karty, 7 żetonów złota\n' +
        'Gracz 5: 5 kart, 7 żetonów złota.'
    ]
}