export type InventoryItem = {
    name: string
    images: string[]
    description: string
    stats: string[]
}

export type InventorySection = {
    category: string
    items: InventoryItem[]
}

export const inventoryData: InventorySection[] = [
    {
        category: 'TWOW(06) 1/4 - 99 kart',
        items: [
    {
            name: 'Startowe karty akcji',
            images: [
                '/assets/inventory/karty_akcji_rewers.jpg',
                '/assets/inventory/karty_akcji_startowe.png',
            ],
            description: 'Podstawowa wersja gry\n \nPo 10 kart dla każdego z 5 wiedźminów',
            stats: [
                '# w tej paczce: 50', 
                '# do tej pory: 50', 
                '# wszystkich: 50'
            ],
    },
    {
            name: 'Karty akcji',
            images: [
                '/assets/inventory/karty_akcji_rewers.jpg',
                '/assets/inventory/karty_akcji.png',
            ],
            description: 'Podstawowa wersja gry',
            stats: [
                '# w tej paczce: 38', 
                '# do tej pory: 38', 
                '# wszystkich: 90'],
    },
    {
            name: 'Karty pomocy',
            images: [
                '/assets/inventory/karty_pomocy.png',
                '/assets/inventory/karty_pomocy_rewers.png',
            ],
            description: 'Podstawowa wersja gry\n \n5 kart z opisem tury gracza, 5 kart z legendą ikon',
            stats: [
                '# w tej paczce: 10', 
                '# do tej pory: 10', 
                '# wszystkich: 10'
            ],
    },
    {
        name: 'Karta pomocy SOLO',
        images: [
            '/assets/inventory/karta_pomocy_s.png',
            '/assets/inventory/karta_pomocy_solo.png',
        ],
        description: 'Podstawowa wersja gry',
        stats: [
            '# w tej paczce: 1', 
            '# do tej pory: 1', 
            '# wszystkich: 1',
        ],
    },
],
    },
    
    //TWOW 2/4
    
    {
        category: 'TWOW(06) 2/4 - 61 kart',
        items: [
            {
              name: 'Karty potworów',
              images: [
                '/assets/inventory/leszy.png',
                '/assets/inventory/leszy_trofea.png',
              ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 11',
                '# do tej pory: 11',
                '# wszystkich: 29'
              ]
            },
            {
              name: 'Karty eksploracji miast',
              images: [
                '/assets/inventory/karty_eksploracji_miast_rewers.jpg',
                '/assets/inventory/karty_eksploracji_miast.png',
                  ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 36',
                '# do tej pory: 36',
                '# wszystkich: 36'
              ]
            },
            {
              name: 'Karty Akcji',
              images: [
                '/assets/inventory/karty_akcji_rewers.jpg',
                '/assets/inventory/karty_akcji_1.png',
              ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 14',
                '# do tej pory: 52',
                '# wszystkich: 90'
              ]
            },
        ]
    },

    //TWOW 3/4

    {
        category: 'TWOW(06) 3/4 - 99 kart',
        items: [
            {
              name: 'Karty potworów',
              images: [
                '/assets/inventory/barghest.png',
                '/assets/inventory/barghest_trofea.png',
              ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 15',
                '# do tej pory: 26',
                '# wszystkich: 29'
              ]
            },
            {
              name: 'Karty trofeów atrybutów',
              images: [
                '/assets/inventory/trofeum.jpg'
              ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 8',
                '# do tej pory: 8',
                '# wszystkich: 8'
              ]
            },
            {
              name: 'Karty walki potworów',
              images: [
                '/assets/inventory/karty_walki_potworow_rewers.jpg',
                '/assets/inventory/karty_walki_potworow.png',
              ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 20',
                '# do tej pory: 20',
                '# wszystkich: 20'
              ]
            },
            {
              name: 'Karty zdarzeń',
              images: [
                '/assets/inventory/karty_zdarzen_rewers.jpg',
                '/assets/inventory/karty_zdarzen.png',
              ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 56',
                '# do tej pory: 56',
                '# wszystkich: 56'
              ]
            },
        ]
    },

    //TWOW(06) 4/4

    {
        category: 'TWOW(06) 4/4 - 86 kart',
        items: [
            {
              name: 'Karty eliksirów',
              images: [
                '/assets/inventory/karty_eliksirow_rewers.jpg',
                '/assets/inventory/karty_eliksirow.png',
              ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 28',
                '# do tej pory: 28',
                '# wszystkich: 28'
              ]
            },
            {
              name: 'Karty trofeów szkół wiedźmińskich',
              images: [
                '/assets/inventory/wiedzmin_trofeum_gryf.jpg',
                '/assets/inventory/wiedzmin_trofeum_kot.jpg',
                '/assets/inventory/wiedzmin_trofeum_niedzwiedz.jpg',
                '/assets/inventory/wiedzmin_trofeum_wilk.jpg',
                '/assets/inventory/wiedzmin_trofeum_zmija.jpg',
              ],
              description: 'Podstawowa wersja gry\n \n Po 4 karty dla każdej z 5 szkół',
              stats: [
                '# w tej paczce: 20',
                '# do tej pory: 20',
                '# wszystkich: 20'
              ]
            },
            {
              name: 'Karty eksploracji dzikich ostępów',
              images: [
                '/assets/inventory/karty_eksploracji_dzikich_ostepow_rewers.jpg',
                '/assets/inventory/karty_eksploracji_dzikich_ostepow.png',
              ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 36',
                '# do tej pory: 36',
                '# wszystkich: 36'
              ]
            },
            {
              name: 'Karty potworów',
              images: [
                '/assets/inventory/gryf.png',
                '/assets/inventory/gryf_trofea.png',
              ],
              description: 'Podstawowa wersja gry',
              stats: [
                '# w tej paczce: 3',
                '# do tej pory: 29',
                '# wszystkich: 29'
              ]
            },
            
        ]
    },
]
