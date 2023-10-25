const movieList = [
    {
        "adult": false,
        "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "La Seconde Guerre mondiale vient de s'achever. À New York, le « parrain » Don Corleone, l'un des chefs respectés de la mafia, se sent vieillir. Il refuse de s'adapter à son temps et de se lancer, comme ses pairs, dans le trafic de drogue. Une frilosité qui entrave la bonne marche des affaires des autres « familles » et qui lui vaut d'être la cible d'un attentat. Don Corleone survit à ses blessures, mais reste très diminué. Mike, son plus jeune fils, qui jusque-là se tenait à l'écart des affaires de son père, devient le plus dévoué de ses héritiers. Plus efficace que ses frères, Sonny et Fredo, il venge son père et organise l'élimination de ses adversaires…",
        "popularity": 113.571,
        "poster_path": "/wnDNKCeBQzioXYQrXcSyrmRHVxf.jpg",
        "release_date": "1972-03-14",
        "title": "Le Parrain",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 18785
    },
    {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "En 1947, Andy Dufresne, un jeune banquier, est condamné à la prison à vie pour le meurtre de sa femme et de son amant. Ayant beau clamer son innocence, il est emprisonné à Shawshank, le pénitencier le plus sévère de l'État du Maine. Il y fait la rencontre de Red, un noir désabusé, détenu depuis vingt ans. Commence alors une grande histoire d'amitié entre les deux hommes…",
        "popularity": 90.609,
        "poster_path": "/xqfTE9FjwD5vS1A6QnyoMdPQUvh.jpg",
        "release_date": "1994-09-23",
        "title": "Les Évadés",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 24761
    },
    {
        "adult": false,
        "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 240,
        "original_language": "en",
        "original_title": "The Godfather Part II",
        "overview": "Depuis la mort de Don Vito Corleone, son fils Michael règne sur la famille. Amené à négocier avec la mafia juive, il perd alors le soutien d'un de ses lieutenants, Frankie Pentageli. Echappant de justesse à un attentat, Michael tente de retrouver le coupable, soupçonnant Hyman Roth, le chef de la mafia juive. Vito Corleone, immigrant italien, arrive à New York au début du siècle ; très vite, il devient un des caïds du quartier, utilisant la violence comme moyen de régler toutes les affaires. Seul au départ, il bâtit peu à peu un véritable empire, origine de la fortune de la famille des Corleone.",
        "popularity": 63.238,
        "poster_path": "/chMfGLOf5EMz0o10Duukmb9oj0P.jpg",
        "release_date": "1974-12-20",
        "title": "Le Parrain, 2e partie",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 11359
    },
    {
        "adult": false,
        "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 424,
        "original_language": "en",
        "original_title": "Schindler's List",
        "overview": "Évocation des années de guerre d'Oskar Schindler, fils d'industriel d'origine autrichienne rentré à Cracovie en 1939 avec les troupes allemandes. Il va, tout au long de la guerre, protéger des juifs en les faisant travailler dans sa fabrique et en 1944 sauver 800 hommes et 300 femmes du camp d'extermination d'Auschwitz-Birkenau.",
        "popularity": 64.273,
        "poster_path": "/vHgf8NE7tXV4DJPEnqVLZDof8fT.jpg",
        "release_date": "1993-12-15",
        "title": "La Liste de Schindler",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 14673
    },
    {
        "adult": false,
        "backdrop_path": "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 19404,
        "original_language": "hi",
        "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
        "overview": "Chaudhry Baldev Singh est un père de famille installé à Londres. Un jour, il reçoit une lettre d'Inde : son meilleur ami lui écrit, lui rappellant la promesse qu'il avait faite deux décennies auparavant de marier leurs enfants. Chaudhry décide alors de tenir sa promesse, mais donne toutefois un mois libre à sa fille tout avant qu'elle ne s'en aille en Inde se marier...",
        "popularity": 35.219,
        "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
        "release_date": "1995-10-20",
        "title": "Dilwale Dulhania Le Jayenge",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 4264
    },
    {
        "adult": false,
        "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "id": 129,
        "original_language": "ja",
        "original_title": "千と千尋の神隠し",
        "overview": "Chihiro, 10 ans, a tout d'une petite fille capricieuse. Elle s'apprête à emménager avec ses parents dans une nouvelle demeure. Sur la route, la petite famille se retrouve face à un immense bâtiment rouge au centre duquel s'ouvre un long tunnel. De l'autre côté du passage se dresse une ville fantôme. Les parents découvrent dans un restaurant désert de nombreux mets succulents et ne tardent pas à se jeter dessus. Ils se retrouvent alors transformés en cochons. Prise de panique, Chihiro s'enfuit et se dématérialise progressivement. L'énigmatique Haku se charge de lui expliquer le fonctionnement de l'univers dans lequel elle vient de pénétrer. Pour sauver ses parents, la fillette va devoir faire face à la terrible sorcière Yubaba, qui arbore les traits d'une harpie méphistophélique.",
        "popularity": 88.011,
        "poster_path": "/12TAqK0AUgdcYE9ZYZ9r7ASbH5Q.jpg",
        "release_date": "2001-07-20",
        "title": "Le Voyage de Chihiro",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 14982
    },
    {
        "adult": false,
        "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
        "genre_ids": [
            18
        ],
        "id": 389,
        "original_language": "en",
        "original_title": "12 Angry Men",
        "overview": "Un jeune homme d'origine modeste est accusé du meurtre de son père et risque la peine de mort. Le jury composé de douze hommes se retire pour délibérer et procède immédiatement à un vote : onze votent coupable, or la décision doit être prise à l'unanimité. Le juré qui a voté non-coupable, sommé de se justifier, explique qu'il a un doute et que la vie d'un homme mérite quelques heures de discussion. Il s'emploie alors à les convaincre un par un.",
        "popularity": 46.233,
        "poster_path": "/bPImGSvZtG2tvsJ9bVLrIECRDnB.jpg",
        "release_date": "1957-04-10",
        "title": "12 Hommes en colère",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 7714
    },
    {
        "adult": false,
        "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
        "genre_ids": [
            35,
            53,
            18
        ],
        "id": 496243,
        "original_language": "ko",
        "original_title": "기생충",
        "overview": "Toute la famille de Ki-taek est au chômage. Elle s'intéresse particulièrement au train de vie de la richissime famille Park. Mais un incident se produit et les deux familles se retrouvent mêlées, sans le savoir, à une bien étrange histoire…",
        "popularity": 61.446,
        "poster_path": "/7hLSzZX2jROmEXz2aEoh6JKUFy2.jpg",
        "release_date": "2019-05-30",
        "title": "Parasite",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 16522
    },
    {
        "adult": false,
        "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
        "genre_ids": [
            10749,
            16,
            18
        ],
        "id": 372058,
        "original_language": "ja",
        "original_title": "君の名は。",
        "overview": "Mitsuha est une lycéenne, la fille du maire d'une petite ville nichée entre les montagnes. Vivant avec sa petite sœur et sa grand-mère, c'est une demoiselle franche qui n'hésite pas à dire qu'elle n'a pas envie de participer aux rituels shinto, ou d'aider son père dans ses campagnes électorales. En fait, elle rêve de pouvoir quitter cette ville où elle s'ennuie, pour partir tenter sa chance à la capitale. Taki est un lycéen, un tokyoïte qui travaille à mi-temps dans un restaurant italien, tout en aspirant à des études d'architecture ou dans les Beaux-Arts. Chaque nuit, il fait un rêve étrange, où il devient... une lycéenne campagnarde, vivant dans une petite ville entre les montagnes.  Quel secret se cache derrière ces rêves mutuels, qui unissent ces deux êtres qui ne se sont jamais rencontrés ?",
        "popularity": 91.418,
        "poster_path": "/zyHjvVRgKOt9wgVx4ikp2kGArGF.jpg",
        "release_date": "2016-08-26",
        "title": "Your Name.",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 10369
    },
    {
        "adult": false,
        "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
        "genre_ids": [
            18,
            28,
            80,
            53
        ],
        "id": 155,
        "original_language": "en",
        "original_title": "The Dark Knight",
        "overview": "Batman aborde une phase décisive de sa guerre contre le crime à Gotham City. Avec l'aide du lieutenant de police Jim Gordon et du nouveau procureur Harvey Dent, il entreprend de démanteler les dernières organisations criminelles qui infestent les rues de la ville. L'association s'avère efficace, mais le trio se heurte bientôt à un nouveau génie du crime qui répand la terreur et le chaos dans Gotham : le Joker. On ne sait pas d'où il vient ni qui il est. Ce criminel possède une intelligence redoutable doublé d'un humour sordide et n'hésite pas à s'attaquer à la pègre locale dans le seul but de semer le chaos.",
        "popularity": 86.251,
        "poster_path": "/pyNXnq8QBWoK3b37RS6C3axwUOy.jpg",
        "release_date": "2008-07-16",
        "title": "The Dark Knight : Le Chevalier noir",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 30756
    },
    {
        "adult": false,
        "backdrop_path": "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
        "genre_ids": [
            14,
            18,
            80
        ],
        "id": 497,
        "original_language": "en",
        "original_title": "The Green Mile",
        "overview": "Paul Edgecomb, pensionnaire centenaire d'une maison de retraite, est hanté par ses souvenirs. Gardien-chef du pénitencier de Cold Mountain en 1935, il était chargé de veiller au bon déroulement des exécutions des peines capitales, en s'efforçant d'adoucir les derniers moments des condamnés. Parmi eux, se trouvait un colosse du nom de John Coffey, accusé du viol et du meurtre de deux fillettes. Intrigué par cet homme candide et timide, aux dons magiques, Edgecomb va tisser avec lui des liens très forts.",
        "popularity": 96.495,
        "poster_path": "/mVGSetYx6kmJCf4T8YOYs1z6M00.jpg",
        "release_date": "1999-12-10",
        "title": "La Ligne verte",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 16025
    },
    {
        "adult": false,
        "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        "genre_ids": [
            53,
            80
        ],
        "id": 680,
        "original_language": "en",
        "original_title": "Pulp Fiction",
        "overview": "L'odyssée sanglante et burlesque de petits malfrats dans la jungle d'Hollywood : Deux petits tueurs, un dangereux gangster marié à une camée, un boxeur roublard, des prêteurs sur gages sadiques, un caïd élégant et dévoué, un dealer bon mari et deux tourtereaux à la gâchette facile.",
        "popularity": 64.832,
        "poster_path": "/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg",
        "release_date": "1994-09-10",
        "title": "Pulp Fiction",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 26010
    },
    {
        "adult": false,
        "backdrop_path": "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 13,
        "original_language": "en",
        "original_title": "Forrest Gump",
        "overview": "Durant trois décennies particulièrement agitées, Forrest Gump vit une série d'aventures le propulsant de l'état de handicapé physique à celui de star du football, de héros du Vietnam au roi de la crevette, des honneurs de la Maison Blanche au bonheur d'une grande histoire d'amour. Forrest est le symbole d'une époque, un candide dans une Amérique qui a perdu son innocence. Son cœur dépasse les limites de son QI…",
        "popularity": 60.236,
        "poster_path": "/A0Th0x8QIzP0njrFAJnYQ5ouIoB.jpg",
        "release_date": "1994-06-23",
        "title": "Forrest Gump",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 25524
    },
    {
        "adult": false,
        "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
        "genre_ids": [
            12,
            14,
            28
        ],
        "id": 122,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Return of the King",
        "overview": "Les armées de Sauron ont attaqué Minas Tirith, la capitale de Gondor. Jamais ce royaume autrefois puissant n'a eu autant besoin de son roi. Mais Aragorn trouvera-t-il en lui la volonté d'accomplir sa destinée ? Tandis que Gandalf tente de soutenir les forces brisées de Gondor, Théoden exhorte les guerriers de Rohan à se joindre au combat.  Mais malgré leur courage et leur loyauté, les armées des Hommes ne sont pas de taille à lutter contre les innombrables légions ennemies qui s'abattent sur la Terre du Milieu… Chaque victoire se paye d'immenses sacrifices. Pendant ce temps et malgré ses pertes, la Communauté poursuit sa quête, ses membres faisant tout pour détourner l'attention de Sauron afin de donner à Frodon une chance d'accomplir sa mission. Voyageant à travers les terres ennemies, ce dernier doit s'appuyer sur Sam et Gollum, tandis que l'Anneau continue de le tenter…",
        "popularity": 78.357,
        "poster_path": "/ypUCFOvOf07bcHy81jng9LyMUfi.jpg",
        "release_date": "2003-12-01",
        "title": "Le Seigneur des anneaux : Le Retour du roi",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 22445
    },
    {
        "adult": false,
        "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
        "genre_ids": [
            37
        ],
        "id": 429,
        "original_language": "it",
        "original_title": "Il buono, il brutto, il cattivo",
        "overview": "Pendant la guerre de Sécession, Tuco et Joe se lancent à la recherche d'un coffre contenant 200 000 dollars en pièces d'or volés à l'armée sudiste. Ayant des indices complémentaires sur la cache, chacun a besoin de l'autre. Mais un troisième homme entre dans la course : Sentenza, un tueur qui ne recule devant rien pour parvenir à ses fins.",
        "popularity": 53.905,
        "poster_path": "/qEr65B4yGlsmLQjcM0xjSUMfZS2.jpg",
        "release_date": "1966-12-23",
        "title": "Le Bon, la Brute et le Truand",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 7803
    },
    {
        "adult": false,
        "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 769,
        "original_language": "en",
        "original_title": "GoodFellas",
        "overview": "Brooklyn, dans les années 50. Depuis l'enfance, le jeune Henry Hill rêve de devenir gangster. À 16 ans, il se met en selle auprès de Paul Cicero, un caïd local, et commet ses premiers délits. Arrêté et interrogé, il refuse de parler et gagne ainsi le respect du milieu. À sa sortie de prison, il fait la connaissance de James Conway et de Tommy DeVito, deux truands d'une extrême violence, et se lance avec eux dans des trafics de grande envergure. Karen, une jeune bourgeoise qu'il courtise et finit par épouser, ne devine sa profession qu'après être passée devant l'officier d'état-civil. Grisé par le succès, Henry multiplie les coups les plus audacieux...",
        "popularity": 52.131,
        "poster_path": "/v4c6WMVqUlSJHMyjHNj72iTFGhm.jpg",
        "release_date": "1990-09-12",
        "title": "Les Affranchis",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 11803
    },
    {
        "adult": false,
        "backdrop_path": "/gwj4R8Uy1GwejKqfofREKI9Jh7L.jpg",
        "genre_ids": [
            16,
            18,
            10752
        ],
        "id": 12477,
        "original_language": "ja",
        "original_title": "火垂るの墓",
        "overview": "Japon, été 1945. Après le bombardement de Kobé, Seita, un adolescent de quatorze ans et sa petite sœur de quatre ans, Setsuko, orphelins, vont s'installer chez leur tante à quelques dizaines de kilomètres de chez eux. Celle-ci leur fait comprendre qu'ils sont une gêne pour la famille et doivent mériter leur riz quotidien. Seita décide de partir avec sa petite sœur. Ils se réfugient dans un bunker désaffecté en pleine campagne et vivent des jours heureux illuminés par la présence de milliers de lucioles. Mais bientôt la nourriture commence cruellement à manquer.",
        "popularity": 0.6,
        "poster_path": "/r9a6jyW4CBsQ5QyF12eJC84YdAd.jpg",
        "release_date": "1988-04-16",
        "title": "Le Tombeau des Lucioles",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 4895
    },
    {
        "adult": false,
        "backdrop_path": "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 637,
        "original_language": "it",
        "original_title": "La vita è bella",
        "overview": "En 1938, Guido, jeune homme plein de gaieté, rêve d'ouvrir une librairie, malgré les tracasseries de l'administration fasciste. Il tombe amoureux de Dora, institutrice étouffée par le conformisme familial et l'enlève le jour de ses fiançailles avec un bureaucrate du régime. Cinq ans plus tard, Guido et Dora ont un fils : Giosue. Mais les lois raciales sont entrées en vigueur et Guido est juif. Il est alors déporté avec son fils. Par amour pour eux, Dora monte de son plein gré dans le train qui les emmène aux camps de la mort où Guido va tout faire pour éviter l'horreur à son fils…",
        "popularity": 42.069,
        "poster_path": "/c6NveyskoKlwAvouqEmKBRU0Pkp.jpg",
        "release_date": "1997-12-20",
        "title": "La vie est belle",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 12280
    },
    {
        "adult": false,
        "backdrop_path": "/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 11216,
        "original_language": "it",
        "original_title": "Nuovo Cinema Paradiso",
        "overview": "Alfredo vient de mourir. Pour Salvatore, cinéaste en vogue, c'est tout un pan de son passé qui s'écroule. On l'appelait Toto a l'époque. Il partageait son temps libre entre l'office où il était enfant de chœur et la salle de cinéma paroissiale, en particulier la cabine de projection où régnait Alfredo.",
        "popularity": 28.689,
        "poster_path": "/ywJsnH7BmM6GmugCvN6ZjIfgSHv.jpg",
        "release_date": "1988-11-17",
        "title": "Cinéma Paradiso",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 3985
    },
    {
        "adult": false,
        "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
        "genre_ids": [
            28,
            18
        ],
        "id": 346,
        "original_language": "ja",
        "original_title": "七人の侍",
        "overview": "Au XVIème siècle, au Japon, des paysans décident d'embaucher des samouraïs pour protéger leur village, et en trouvent sept. Ces hommes organisent la défense du village contre quarante brigands.",
        "popularity": 29.413,
        "poster_path": "/5OmAeKNT1ouUmesKNyDSWCeOXk2.jpg",
        "release_date": "1954-04-26",
        "title": "Les Sept Samouraïs",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 3256
    },
    {
        "adult": false,
        "backdrop_path": "/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 696374,
        "original_language": "en",
        "original_title": "Gabriel's Inferno",
        "overview": "Exploration intrigante et pécheresse de la séduction, de l'amour interdit et de la rédemption, Gabriel's Inferno est un récit captivant et follement passionné de la fuite d'un homme de son propre enfer, alors qu'il tente de gagner l'impossible, le pardon et l'amour.",
        "popularity": 11.887,
        "poster_path": "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
        "release_date": "2020-05-29",
        "title": "Gabriel's Inferno",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 2366
    },
    {
        "adult": false,
        "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        "genre_ids": [
            18
        ],
        "id": 550,
        "original_language": "en",
        "original_title": "Fight Club",
        "overview": "Le narrateur, sans identité précise, vit seul, travaille seul, dort seul, mange seul ses plateaux-repas pour une personne comme beaucoup d'autres personnes seules qui connaissent la misère humaine, morale et sexuelle. C'est pourquoi il va devenir membre du Fight club, un lieu clandestin où il va pouvoir retrouver sa virilité, l'échange et la communication. Ce club est dirigé par Tyler Durden, une sorte d'anarchiste entre gourou et philosophe qui prêche l'amour de son prochain.",
        "popularity": 65.562,
        "poster_path": "/t1i10ptOivG4hV7erkX3tmKpiqm.jpg",
        "release_date": "1999-10-15",
        "title": "Fight Club",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 27354
    },
    {
        "adult": false,
        "backdrop_path": "/uif5fUshJrXyyDzfpzp1DLw3N0S.jpg",
        "genre_ids": [
            27,
            18,
            53
        ],
        "id": 539,
        "original_language": "en",
        "original_title": "Psycho",
        "overview": "Marion Crane en a assez de ne pouvoir mener sa vie comme elle l'entend. Son travail ne la passionne plus, son amant ne peut l'épouser car il doit verser une énorme pension alimentaire le laissant sans le sou... Mais un beau jour, son patron lui demande de déposer 40 000 dollars à la banque. La tentation est trop grande, et Marion s'enfuit avec l'argent. Très vite la panique commence à se faire sentir. Partagée entre l'angoisse de se faire prendre et l'excitation de mener une nouvelle vie, Marion roule vers une destination qu'elle n'atteindra jamais. La pluie est battante, la jeune femme s'arrête près d'un motel, tenu par un sympathique gérant nommé Norman Bates, mais qui doit supporter le caractère possessif de sa mère. Après un copieux repas avec Norman, Marion prend toutes ses précautions afin de dissimuler l'argent. Pour se délasser de cette journée, elle prend une douche...",
        "popularity": 51.759,
        "poster_path": "/wVxZDGjd3rCl6y0ksFIhVsEIMmG.jpg",
        "release_date": "1960-06-22",
        "title": "Psychose",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 9324
    },
    {
        "adult": false,
        "backdrop_path": "/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
        "genre_ids": [
            16,
            28,
            12
        ],
        "id": 569094,
        "original_language": "en",
        "original_title": "Spider-Man: Across the Spider-Verse",
        "overview": "Après avoir retrouvé Gwen Stacy, Spider-Man, le sympathique héros originaire de Brooklyn, est catapulté à travers le Multivers, où il rencontre une équipe de Spider-Héros chargée d'en protéger l'existence. Mais lorsque les héros s'opposent sur la façon de gérer une nouvelle menace, Miles se retrouve confronté à eux et doit redéfinir ce que signifie être un héros afin de sauver les personnes qu'il aime le plus.",
        "popularity": 408.111,
        "poster_path": "/hvfwCeSTgsExmz9l31dKkfR83DH.jpg",
        "release_date": "2023-05-31",
        "title": "Spider-Man : Across the Spider-Verse",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 4582
    },
    {
        "adult": false,
        "backdrop_path": "/5p3aTxtUtZHCHwYsuycutmxIhND.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 598,
        "original_language": "pt",
        "original_title": "Cidade de Deus",
        "overview": "Dans une favela qui a vu le jour à Rio de Janeiro dans les années soixante, Fusée est un gamin noir, pauvre, trop fragile pour devenir hors-la-loi, mais assez malin pour ne pas se contenter d'un travail sous payé. Il grandit dans un environnement violent, mais tente de voir la réalité autrement, avec l'oeil d'un artiste. Il rêve de devenir photographe professionnel. Petit Dé, un enfant de onze ans, emménage dans la Cité. Il souhaite pour sa part devenir le plus grand criminel de Rio et commence son apprentissage en rendant de menus services à la pègre locale. Il admire Tignasse et son gang, qui arraisonnent les camions et cambriolent à tout va. Tignasse donne à Petit Dé l'occasion de commettre un meurtre, le premier d'une longue série...",
        "popularity": 36.274,
        "poster_path": "/53mEWbkbGD7jILQoiYuvLQHAfrJ.jpg",
        "release_date": "2002-08-30",
        "title": "La Cité de Dieu",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 6745
    },
    {
        "adult": false,
        "backdrop_path": "/uPYa165sraN2c8gZBM9C47g3JoU.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 311,
        "original_language": "en",
        "original_title": "Once Upon a Time in America",
        "overview": "A New York, à la fin de la prohibition, Noodles se réfugie dans une fumerie d'opium après un coup qui a mal tourné. Plus de trente ans plus tard, il est de retour en ville et se remémore son passé de gangster : de sa jeunesse de voyou dans les années 20, marquée par sa rencontre avec son ami Max et leurs nombreux trafics dans le ghetto juif de la ville, jusqu'à la période de prohibition où leur bande, liée par une profonde amitié, s'enrichit et marque son ascension dans la pègre grâce au commerce illégal d'alcool. Noodles se rappelle aussi de sa relation amoureuse échouée avec Deborah durant toute sa vie.",
        "popularity": 38.035,
        "poster_path": "/qfuO1yue5bQnocFiOUM07dwLdmo.jpg",
        "release_date": "1984-05-23",
        "title": "Il était une fois en Amérique",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 4896
    },
    {
        "adult": false,
        "backdrop_path": "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 724089,
        "original_language": "en",
        "original_title": "Gabriel's Inferno: Part II",
        "overview": "Le professeur Gabriel Emerson apprend enfin la vérité sur l'identité de Julia Mitchell, mais il le réalise un moment trop tard. Julia a fini d'attendre que le spécialiste très respecté de Dante se souvienne d'elle et ne veut plus rien avoir à faire avec lui. Gabriel peut-il regagner le cœur de Julia avant qu'elle ne trouve l'amour dans d'autres bras ?",
        "popularity": 12.125,
        "poster_path": "/8Rxutea68d940kg44Box5gFmKcF.jpg",
        "release_date": "2020-07-31",
        "title": "Gabriel's Inferno: Part II",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1485
    },
    {
        "adult": false,
        "backdrop_path": "/qUq3QTr2KLvGIcN0GaaaYx9bbyH.jpg",
        "genre_ids": [
            18
        ],
        "id": 510,
        "original_language": "en",
        "original_title": "One Flew Over the Cuckoo's Nest",
        "overview": "Randle P. McMurphy se fait interner pour échapper à la prison. Il va être touché par la détresse et la solitude des patients. Très rapidement, il comprend que l'infirmière en chef, Mlle Ratched, a imposé des règles strictes et entend bien les faire respecter. Il décide alors de révolutionner ce petit monde, plutôt au départ par jeu.",
        "popularity": 45.829,
        "poster_path": "/u6DNW70YE2ed1v9opDgZj1pmR00.jpg",
        "release_date": "1975-11-19",
        "title": "Vol au-dessus d'un nid de coucou",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 9697
    },
    {
        "adult": false,
        "backdrop_path": "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        "genre_ids": [
            12,
            18,
            878
        ],
        "id": 157336,
        "original_language": "en",
        "original_title": "Interstellar",
        "overview": "Dans un futur proche, face à une Terre exsangue, un groupe d'explorateurs utilise un vaisseau interstellaire pour franchir un trou de ver permettant de parcourir des distances jusque-là infranchissables. Leur but : trouver un nouveau foyer pour l'humanité.",
        "popularity": 159.002,
        "poster_path": "/1pnigkWWy8W032o9TKDneBa3eVK.jpg",
        "release_date": "2014-11-05",
        "title": "Interstellar",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 32717
    },
    {
        "adult": false,
        "backdrop_path": "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 761053,
        "original_language": "en",
        "original_title": "Gabriel's Inferno: Part III",
        "overview": "La dernière partie de l'adaptation cinématographique du roman d'amour érotique, Gabriel's Inferno, écrit par un auteur canadien anonyme sous le pseudonyme de Sylvain Reynard.",
        "popularity": 24.806,
        "poster_path": "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
        "release_date": "2020-11-19",
        "title": "Gabriel's Inferno: Part III",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1027
    },
    {
        "adult": false,
        "backdrop_path": "/nv5wwZou159v5OC61i4ElR7OqyY.jpg",
        "genre_ids": [
            14,
            16,
            12
        ],
        "id": 4935,
        "original_language": "ja",
        "original_title": "ハウルの動く城",
        "overview": "La jeune Sophie, âgée de 18 ans, travaille sans relâche dans la boutique de chapelier que tenait son père avant de mourir. Lors de l'une de ses rares sorties en ville, elle fait la connaissance de Hauru le Magicien. Celui-ci est extrêmement séduisant, mais n'a pas beaucoup de caractère… Se méprenant sur leur relation, une sorcière jette un épouvantable sort sur Sophie et la transforme en vieille femme de 90 ans. Accablée, Sophie s'enfuit et erre dans les terres désolées. Par hasard, elle pénètre dans le Château Ambulant de Hauru et, cachant sa véritable identité, s'y fait engager comme femme de ménage. Cette « vieille dame » aussi mystérieuse que dynamique va bientôt redonner une nouvelle vie à l'ancienne demeure. Plus énergique que jamais, Sophie accomplit des miracles. Quel fabuleux destin l'attend ? Et si son histoire avec Hauru n'en était qu'à son véritable commencement ?",
        "popularity": 70.197,
        "poster_path": "/45PVXJUYfH6yIINcQKelQ0SJPvh.jpg",
        "release_date": "2004-09-09",
        "title": "Le Château ambulant",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 8774
    },
    {
        "adult": false,
        "backdrop_path": "/qGQf2OHIkoh89K8XeKQzhxczf96.jpg",
        "genre_ids": [
            28,
            12,
            16,
            878
        ],
        "id": 324857,
        "original_language": "en",
        "original_title": "Spider-Man: Into the Spider-Verse",
        "overview": "Spider-Man : New Generation suit les aventures de Miles Morales, un adolescent afro-américain et portoricain qui vit à Brooklyn et s'efforce de s'intégrer dans son nouveau collège à Manhattan. Mais la vie de Miles se complique quand il se fait mordre par une araignée radioactive et se découvre des super-pouvoirs : il est désormais capable d'empoisonner ses adversaires, de se camoufler, de coller littéralement aux murs et aux plafonds ; son ouïe est démultipliée... Dans le même temps, le plus redoutable cerveau criminel de la ville, le Caïd, a mis au point un accélérateur de particules nucléaires capable d'ouvrir un portail sur d'autres univers. Son invention va provoquer l'arrivée de plusieurs autres versions de Spider-Man dans le monde de Miles, dont un Peter Parker plus âgé, Spider-Gwen, Spider-Man Noir, Spider-Cochon et Peni Parker, venue d'un dessin animé japonais.",
        "popularity": 86.12,
        "poster_path": "/jw9TRNYIMI1KsTjgQ3wVYSMXxlh.jpg",
        "release_date": "2018-12-06",
        "title": "Spider-Man : New Generation",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 14105
    },
    {
        "adult": false,
        "backdrop_path": "/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg",
        "genre_ids": [
            12,
            14,
            28
        ],
        "id": 120,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Fellowship of the Ring",
        "overview": "Le jeune et timide Hobbit, Frodon Sacquet, hérite d'un anneau. Bien loin d'être une simple babiole, il s'agit de l'Anneau Unique, un instrument de pouvoir absolu qui permettrait à Sauron, le Seigneur des ténèbres, de régner sur la Terre du Milieu et de réduire en esclavage ses peuples. À moins que Frodon, aidé d'une Compagnie constituée de Hobbits, d'Hommes, d'un Magicien, d'un Nain, et d'un Elfe, ne parvienne à emporter l'Anneau à travers la Terre du Milieu jusqu'à la Crevasse du Destin, lieu où il a été forgé, et à le détruire pour toujours. Un tel périple signifie s'aventurer très loin en Mordor, les terres du Seigneur des ténèbres, où est rassemblée son armée d'Orques maléfiques… La Compagnie doit non seulement combattre les forces extérieures du mal mais aussi les dissensions internes et l'influence corruptrice qu'exerce l'Anneau lui-même.",
        "popularity": 100.356,
        "poster_path": "/5OPg6M0yHr21Ovs1fni2H1xpKuF.jpg",
        "release_date": "2001-12-18",
        "title": "Le Seigneur des anneaux : La Communauté de l'anneau",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 23423
    },
    {
        "adult": false,
        "backdrop_path": "/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg",
        "genre_ids": [
            16,
            18
        ],
        "id": 378064,
        "original_language": "ja",
        "original_title": "映画 聲の形",
        "overview": "Nishimiya est une élève douce et attentionnée. Chaque jour, elle est harcelée par Ishida, car elle est sourde. Dénoncé pour son comportement, le garçon est à son tour mis à l'écart et renvoyé de l'école… Des années plus tard, il apprend la langue des signes… et part à la recherche de la jeune fille.",
        "popularity": 42.833,
        "poster_path": "/xjeYI75uMBtBjNlJ0cDJZDFg5Yv.jpg",
        "release_date": "2016-09-17",
        "title": "Silent Voice",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 3580
    },
    {
        "adult": false,
        "backdrop_path": "/xw1gA0lm0AEhGLoR6sE8IYCQAV4.jpg",
        "genre_ids": [
            35,
            18,
            14
        ],
        "id": 40096,
        "original_language": "pt",
        "original_title": "O Auto da Compadecida",
        "overview": "Le quartier animé João Grilo et chico sournoise sont pauvres gars qui vivent dans l'arrière-pays qui trichent un tas de gens dans une petite ville du Nord-Est du Brésil. Mais quand ils meurent, ils doivent être jugés par le Christ, le diable et la Vierge Marie, avant d'être admis au paradis.",
        "popularity": 10.258,
        "poster_path": "/imcOp1kJsCsAFCoOtY5OnPrFbAf.jpg",
        "release_date": "2000-09-15",
        "title": "Will A Dog",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1021
    },
    {
        "adult": false,
        "backdrop_path": "/aJCtkxLLzkk1pECehVjKHA2lBgw.jpg",
        "genre_ids": [
            12,
            28,
            878
        ],
        "id": 1891,
        "original_language": "en",
        "original_title": "The Empire Strikes Back",
        "overview": "Malgré la destruction de l'Étoile Noire, l'Empire maintient son emprise sur la galaxie, et poursuit sans relâche sa lutte contre l'Alliance rebelle. Basés sur la planète glacée de Hoth, les rebelles essuient un assaut des troupes impériales. Parvenus à s'échapper, la princesse Leia, Han Solo, Chewbacca et C-3P0 se dirigent vers Bespin, la cité des nuages gouvernée par Lando Calrissian, ancien compagnon de Han. Suivant les instructions d'Obi-Wan Kenobi, Luke Skywalker se rend quant à lui vers le système de Dagobah, planète marécageuse où il doit recevoir l'enseignement du dernier maître Jedi, Yoda. Apprenant l'arrestation de ses compagnons par les stormtroopers de Dark Vador après la trahison de Lando, Luke décide d'interrompre son entraînement pour porter secours à ses amis et affronter le sombre seigneur Sith...",
        "popularity": 30.667,
        "poster_path": "/qDvctAykmNWAmi9G2GrVrwWx3pr.jpg",
        "release_date": "1980-05-20",
        "title": "L'Empire contre-attaque",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 15833
    },
    {
        "adult": false,
        "backdrop_path": "/zcc0My3G4SYR72VuEYHNcUWkkW0.jpg",
        "genre_ids": [
            12,
            14,
            28
        ],
        "id": 121,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Two Towers",
        "overview": "Après la mort de Boromir et la disparition de Gandalf, la Communauté s'est scindée en trois. Perdus dans les collines d'Emyn Muil, Frodon et Sam découvrent qu'ils sont suivis par Gollum, une créature versatile corrompue par l'Anneau. Celui-ci promet de conduire les Hobbits jusqu'à la Porte Noire du Mordor. À travers la Terre du Milieu, Aragorn, Legolas et Gimli font route vers le Rohan, le royaume assiégé de Theoden. Cet ancien grand roi, manipulé par l'espion de Saroumane, le sinistre Langue de Serpent, est désormais tombé sous la coupe du malfaisant magicien. Eowyn, la nièce du Roi, reconnaît en Aragorn un meneur d'hommes. Entretemps, les Hobbits Merry et Pippin, prisonniers des Uruk-hai, se sont échappés et ont découvert dans la mystérieuse Forêt de Fangorn un allié inattendu : Sylvebarbe, gardien des arbres, représentant d'un ancien peuple végétal dont Saroumane a décimé la forêt…",
        "popularity": 81.729,
        "poster_path": "/qVHBqQYLDRs7ESjP9q6o9iPHLWj.jpg",
        "release_date": "2002-12-18",
        "title": "Le Seigneur des anneaux : Les Deux Tours",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 20363
    },
    {
        "adult": false,
        "backdrop_path": "/dVr11o9or7AS8AMPfwjSpEU83iU.jpg",
        "genre_ids": [
            18,
            10752
        ],
        "id": 423,
        "original_language": "en",
        "original_title": "The Pianist",
        "overview": "Varsovie, au mois d'octobre 1939. Un jeune pianiste juif, Wladyslaw Szpilman, est enfermé dans le ghetto avec sa famille. Il assiste, impuissant, aux humiliations que subissent quotidiennement les siens. Grâce à une aide extérieure, il échappe de justesse à la déportation mais voit partir toute sa famille. Le jeune homme se cache alors dans les maisons vides et observe passivement les derniers habitants se révolter contre l'occupation allemande. Après avoir réussi à s'échapper miraculeusement, il se terre dans des quartiers détruits et tente de survivre, ce qui s'avère de plus en plus dur. C'est alors qu'il rencontre un nazi mélomane…",
        "popularity": 37.049,
        "poster_path": "/vI05JxU356MciaQeYHjXlqfjQe0.jpg",
        "release_date": "2002-09-17",
        "title": "Le Pianiste",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 8409
    },
    {
        "adult": false,
        "backdrop_path": "/vNXGrknx4GjWLgmuNTftWZluIUl.jpg",
        "genre_ids": [
            18,
            10402
        ],
        "id": 244786,
        "original_language": "en",
        "original_title": "Whiplash",
        "overview": "Andrew, 19 ans, rêve de devenir l'un des meilleurs batteurs de jazz de sa génération. Mais la concurrence est rude au conservatoire de Manhattan où il s'entraîne avec acharnement. Il a pour objectif d'intégrer le fleuron des orchestres dirigé par Terence Fletcher, professeur féroce et intraitable. Lorsque celui-ci le repère enfin, Andrew se lance, sous sa direction, dans la quête de l'excellence...",
        "popularity": 63.006,
        "poster_path": "/3XriEpTdnplQRzyphAC0cu3emns.jpg",
        "release_date": "2014-10-10",
        "title": "Whiplash",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 13956
    },
    {
        "adult": false,
        "backdrop_path": "/hWrxRwnnisPE4LJdER3FmdeM39b.jpg",
        "genre_ids": [
            80,
            9648,
            53
        ],
        "id": 807,
        "original_language": "en",
        "original_title": "Se7en",
        "overview": "À New York, un criminel anonyme a décidé de commettre 7 meurtres basés sur les 7 pêchés capitaux énoncés dans la Bible : gourmandise, avarice, paresse, orgueil, luxure, envie et colère. Vieux flic blasé à 7 jours de la retraite, l'inspecteur Somerset mène l'enquête tout en formant son remplaçant, l'ambitieux inspecteur David Mills…",
        "popularity": 50.659,
        "poster_path": "/h4X4tJFxJobAImCMekVZXUpJVJC.jpg",
        "release_date": "1995-09-22",
        "title": "Seven",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 19494
    },
    {
        "adult": false,
        "backdrop_path": "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
        "genre_ids": [
            28,
            878,
            12
        ],
        "id": 27205,
        "original_language": "en",
        "original_title": "Inception",
        "overview": "Dom Cobb est un voleur expérimenté, le meilleur dans l'art dangereux de l'extraction, voler les secrets les plus intimes enfouis au plus profond du subconscient durant une phase de rêve, lorsque l'esprit est le plus vulnérable. Les capacités de Cobb ont fait des envieux dans le monde tourmenté de l'espionnage industriel alors qu'il devient fugitif en perdant tout ce qu'il a un jour aimé. Une chance de se racheter lui est alors offerte. Une ultime mission grâce à laquelle il pourrait retrouver sa vie passée mais uniquement s'il parvient à accomplir l'impossible inception.",
        "popularity": 78.198,
        "poster_path": "/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg",
        "release_date": "2010-07-15",
        "title": "Inception",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 34615
    },
    {
        "adult": false,
        "backdrop_path": "/zGs5tZOlvc9cprdcU6kDOVNpujf.jpg",
        "genre_ids": [
            53,
            9648
        ],
        "id": 567,
        "original_language": "en",
        "original_title": "Rear Window",
        "overview": "À cause d'une jambe cassée, le reporter-photographe L. B. Jefferies est contraint de rester chez lui dans un fauteuil roulant. Homme d'action et amateur d'aventures, il s'aperçoit qu'il peut tirer parti de son immobilité forcée en étudiant le comportement des habitants de l'immeuble qu'il occupe dans Greenwich Village. Et ses observations l'amènent à la conviction que Lars Thorwald, son voisin d'en face, a assassiné sa femme. Sa fiancée, Lisa Fremont, ne le prend tout d'abord pas au sérieux, ironisant sur l'excitation que lui procure sa surveillance, mais finit par se prendre au jeu.",
        "popularity": 28.818,
        "poster_path": "/xiPX9jCpPXQIqIrbbuHfsL4qt9c.jpg",
        "release_date": "1954-08-01",
        "title": "Fenêtre sur cour",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 5931
    },
    {
        "adult": false,
        "backdrop_path": "/9LSsSPbP715XT9B7acIZzantPyX.jpg",
        "genre_ids": [
            18
        ],
        "id": 73,
        "original_language": "en",
        "original_title": "American History X",
        "overview": "À travers l'histoire d'une famille américaine, ce film tente d'expliquer l'origine du racisme et de l'extrémisme aux États-Unis. Il raconte l'histoire de Derek qui, voulant venger la mort de son père, abattu par un dealer noir, a épousé les thèses racistes d'un groupuscule de militants d'extrême droite et s'est mis au service de son leader, brutal théoricien prônant la suprématie de la race blanche. Ces théories le mèneront à commettre un double meurtre entrainant son jeune frère, Danny, dans la spirale de la haine.",
        "popularity": 27.665,
        "poster_path": "/yygSRdHdcIVPRNC0rDv658ZdJiD.jpg",
        "release_date": "1998-07-01",
        "title": "American History X",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 10779
    },
    {
        "adult": false,
        "backdrop_path": "/mfwq2nMBzArzQ7Y9RKE8SKeeTkg.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 274,
        "original_language": "en",
        "original_title": "The Silence of the Lambs",
        "overview": "Un psychopathe connu sous le nom de Buffalo Bill sème la terreur dans le Middle West en kidnappant et en assassinant de jeunes femmes. Clarice Starling, une jeune stagiaire du FBI, est chargée d'interroger l'ex-psychiatre Hannibal Lecter. Psychopathe redoutablement intelligent et porté sur le cannibalisme, Lecter est capable de lui fournir des informations concernant Buffalo Bill ainsi que son portrait psychologique. Mais il n'accepte de l'aider qu'en échange d'informations sur la vie privée de la jeune femme. Entre eux s'établit un lien de fascination et de répulsion.",
        "popularity": 10.707,
        "poster_path": "/vEWF6WNHr85mF5FBeOl5mkj6r6C.jpg",
        "release_date": "1991-02-14",
        "title": "Le Silence des agneaux",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 15092
    },
    {
        "adult": false,
        "backdrop_path": "/sXV0NVLtyEsOdaEXnMcRGwUhIi0.jpg",
        "genre_ids": [
            12,
            14,
            16
        ],
        "id": 128,
        "original_language": "ja",
        "original_title": "もののけ姫",
        "overview": "Au XVᵉ siècle, durant l'ère Muromachi, la forêt japonaise, jadis protégée par des animaux géants, se dépeuple à cause de l'homme. Un sanglier transformé en démon dévastateur en sort et attaque le village d'Ashitaka, futur chef du clan Emishi. Touché par le sanglier qu'il a tué, celui-ci est forcé de partir à la recherche du dieu Cerf pour lever la malédiction qui lui gangrène le bras.",
        "popularity": 42.001,
        "poster_path": "/AulQiyP2PMQKW5Vm7PviGrFbpPm.jpg",
        "release_date": "1997-07-12",
        "title": "Princesse Mononoké",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 7272
    },
    {
        "adult": false,
        "backdrop_path": "/AfyuI3glMCBDFmNPj9PY6DwbgGp.jpg",
        "genre_ids": [
            16,
            878,
            28,
            18
        ],
        "id": 18491,
        "original_language": "ja",
        "original_title": "新世紀エヴァンゲリオン劇場版 Air/まごころを、君に",
        "overview": "« The End of Evangelion » est un film divisé en deux parties (« Love is Destructive » et « One More Final: I need you ») proposant une conclusion alternative à de la série « Neon Genesis Evangelion ».  Alors que la NERV, le dernier rempart contre les Anges, est assailli par les militaires qui massacrent tout sur leur passage, Asuka mène un combat sans merci contre les neuf EVA. Le monde se prépare à subir le Troisième Impact.",
        "popularity": 31.362,
        "poster_path": "/yBanOpNIccxjZlH4QH7ag4ojWOI.jpg",
        "release_date": "1997-07-19",
        "title": "Neon Genesis Evangelion : The End of Evangelion",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 1390
    },
    {
        "adult": false,
        "backdrop_path": "/p47ihFj4A7EpBjmPHdTj4ipyq1S.jpg",
        "genre_ids": [
            18
        ],
        "id": 599,
        "original_language": "en",
        "original_title": "Sunset Boulevard",
        "overview": "Norma Desmond, grande actrice du muet, vit recluse dans sa luxueuse villa de Berverly Hills en compagnie de Max von Meyerling, son majordome qui fut aussi son metteur en scène et mari. Joe Gillis, un scénariste sans le sou, pénètre par hasard dans la propriété et Norma lui propose de travailler au scénario du film qui marquera son retour à l'écran, Salomé. Joe accepte, s'installe chez elle, à la fois fasciné et effrayé par ses extravagances et son délire, et devient bientôt son amant. Quand son délire se transforme en paranoïa et qu'elle débarque au milieu des studios Paramount pour convaincre Cecil B. DeMille de tourner à nouveau avec elle, Gillis commence à prendre ses distances...",
        "popularity": 19.352,
        "poster_path": "/uI3woJ8BROjZm1Tfvc6XlyDkXG3.jpg",
        "release_date": "1950-08-10",
        "title": "Boulevard du crépuscule",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 2334
    },
    {
        "adult": false,
        "backdrop_path": "/c8Pi8F1FzpNebtgXcSjC9nWCdSW.jpg",
        "genre_ids": [
            35,
            10752
        ],
        "id": 914,
        "original_language": "en",
        "original_title": "The Great Dictator",
        "overview": "Dans le ghetto juif vit un petit barbier qui ressemble énormément à Adenoid Hynkel, le dictateur de Tomania qui a décidé l'extermination du peuple juif. Au cours d'une rafle, le barbier est arrêté en compagnie de Schultz, un farouche adversaire d'Hynkel…",
        "popularity": 20.956,
        "poster_path": "/iklNcUOELu4VV8jZthsY0hsGW50.jpg",
        "release_date": "1940-10-15",
        "title": "Le Dictateur",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 3058
    },
    {
        "adult": false,
        "backdrop_path": "/jRJrQ72VLyEnVsvwfep8Xjlvu8c.jpg",
        "genre_ids": [
            80,
            18,
            28
        ],
        "id": 101,
        "original_language": "en",
        "original_title": "Léon: The Professional",
        "overview": "Léon est un tueur professionnel redoutable et insaisissable. Il vit seul à New York avec sa plante verte et ses habitudes jusqu'au jour où une petite Mathilda de douze ans sonne à sa porte et fait irruption dans sa vie.",
        "popularity": 42.736,
        "poster_path": "/sdY7ogAWQKzuh1NVPEueFsnBA8E.jpg",
        "release_date": "1994-09-14",
        "title": "Léon",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 13723
    },
    {
        "adult": false,
        "backdrop_path": "/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg",
        "genre_ids": [
            12,
            35,
            878
        ],
        "id": 105,
        "original_language": "en",
        "original_title": "Back to the Future",
        "overview": "En 1985, Marty, un adolescent comme les autres, mène une existence morne et ennuyeuse. Heureusement, il est épris de la jolie Jennifer et entretient une profonde amitié avec Doc, un savant fou qui prétend avoir inventé une machine à explorer le temps. Un jour, Doc invite Marty à l'essayer…",
        "popularity": 52.158,
        "poster_path": "/y9bs2N5rEM51YBXbU7N5PaXJc6W.jpg",
        "release_date": "1985-07-03",
        "title": "Retour vers le futur",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 18526
    },
    {
        "adult": false,
        "backdrop_path": "/hpzQHv8cA7j2Dn2CphOFYmllXzj.jpg",
        "genre_ids": [
            18
        ],
        "id": 207,
        "original_language": "en",
        "original_title": "Dead Poets Society",
        "overview": "Todd Anderson est un garçon plutôt timide. Désormais élève de la prestigieuse académie Welton, réputée pour être l'une des plus fermées et austères des États-Unis, tout le monde attend de lui qu'il suive les traces de son frère, qui avait fait à Welton de brillantes études.  C'est là qu'il va faire la rencontre de M. Keating, un professeur de lettres anglaises qui, c'est le moins que l'on puisse dire, sort des sentiers battus. Jour après jour, M. Keating encourage ses élèves à penser par eux-mêmes et à refuser l'ordre établi. Cette rencontre va bouleverser la vie du jeune Todd, mais aussi celle de ses amis.",
        "popularity": 37.603,
        "poster_path": "/5fFM4xlY1XqwAR0NWMCX2xCPy4E.jpg",
        "release_date": "1989-06-02",
        "title": "Le Cercle des poètes disparus",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 10359
    },
    {
        "adult": false,
        "backdrop_path": "/6C1U0cKK5zGjyUSwNc5GLSVCr7Y.jpg",
        "genre_ids": [
            18,
            10752
        ],
        "id": 25237,
        "original_language": "ru",
        "original_title": "Иди и смотри",
        "overview": "Pendant la Seconde Guerre mondiale, Fliora, jeune garçon d'un village de Biélorussie occupé par les troupes nazies, s'engage, bien que trop jeune, chez les partisans. Il va découvrir l'amour, la fraternité, la souffrance, la guerre.",
        "popularity": 25.271,
        "poster_path": "/8aDq6vxmG6clcp2vywWltuXDUYi.jpg",
        "release_date": "1985-07-09",
        "title": "Requiem pour un massacre",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 1223
    },
    {
        "adult": false,
        "backdrop_path": "/n0Cju2Eu3VyrUFl32thblHFWznA.jpg",
        "genre_ids": [
            35,
            10749,
            18
        ],
        "id": 901,
        "original_language": "en",
        "original_title": "City Lights",
        "overview": "Un vagabond s'éprend d'une belle et jeune vendeuse de fleurs aveugle qui vit avec sa mère, couverte de dettes. Suite à un quiproquo, la fleuriste s'imagine le misérable, qui vient de lui acheter une fleur, en milliardaire…",
        "popularity": 15.952,
        "poster_path": "/osvXWgShaFKDPeKMB751L10qimp.jpg",
        "release_date": "1931-02-01",
        "title": "Les Lumières de la ville",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 1971
    },
    {
        "adult": false,
        "backdrop_path": "/A1Larywbw79kZQqkvCEiPHJqdLN.jpg",
        "genre_ids": [
            16,
            53
        ],
        "id": 10494,
        "original_language": "ja",
        "original_title": "PERFECT BLUE",
        "overview": "Chanteuse pop très populaire, Mima décide d'abandonner la scène pour devenir actrice. Sans regrets, elle quitte son groupe et accepte un petit rôle dans une série TV, déclenchant ainsi la colère de ses fans… et plus particulièrement celle de l'un deux. Le mystérieux « traqueur » passe à l'acte en dévoilant en détail la vie de Mima sur Internet, puis en menaçant ses proches. Des incidents violents se produisent et elle réalise que son existence se confond dangereusement avec la série dans laquelle elle joue. Mima sombre dans la schizophrénie tandis que les cadavres s'accumulent autour d'elle…",
        "popularity": 37.502,
        "poster_path": "/pTjuiITuZHIii9PSRZjWzTRNwoC.jpg",
        "release_date": "1998-02-28",
        "title": "Perfect Blue",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 2193
    },
    {
        "adult": false,
        "backdrop_path": "/kSlO1pHpwQfPQdgVPr7dJiJNtJ8.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 3082,
        "original_language": "en",
        "original_title": "Modern Times",
        "overview": "Charlot est ouvrier dans une gigantesque usine. Il resserre quotidiennement des boulons. Mais les machines, le travail à la chaîne le rendent malade, il abandonne son poste, recueille une orpheline et vit d'expédients. Le vagabond et la jeune fille vont s'allier pour affronter ensemble les difficultés de la vie…",
        "popularity": 18.89,
        "poster_path": "/gcRA8st7q01xDuA34JmrzGG563w.jpg",
        "release_date": "1936-02-05",
        "title": "Les Temps Modernes",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 3416
    },
    {
        "adult": false,
        "backdrop_path": "/vmryZ1Bkko8P2utNaJeO2Yo2Bx4.jpg",
        "genre_ids": [
            18,
            37
        ],
        "id": 335,
        "original_language": "it",
        "original_title": "C'era una volta il West",
        "overview": "Alors que les constructeurs de chemins de fer traversent sans relâche le désert de l'Arizona en direction de la mer, Jill arrive dans la petite ville de Flagstone avec l'intention de commencer une nouvelle vie.",
        "popularity": 35.323,
        "poster_path": "/xjXKy5b2M3fDelAQItIswcDNvwm.jpg",
        "release_date": "1968-12-21",
        "title": "Il était une fois dans l'Ouest",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 3944
    },
    {
        "adult": false,
        "backdrop_path": "/88J6waYVTta8Qz3iX3qUeWNA5d5.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 447362,
        "original_language": "en",
        "original_title": "Life in a Year",
        "overview": "Un jeune de 17 ans apprend que sa petite-amie n'a plus qu'une année à vivre.",
        "popularity": 30.611,
        "poster_path": "/bP7u19opmHXYeTCUwGjlLldmUMc.jpg",
        "release_date": "2020-11-27",
        "title": "Life in a Year",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 1561
    },
    {
        "adult": false,
        "backdrop_path": "/9Qs9oyn4iE8QtQjGZ0Hp2WyYNXT.jpg",
        "genre_ids": [
            18,
            10752
        ],
        "id": 28,
        "original_language": "en",
        "original_title": "Apocalypse Now",
        "overview": "Cloîtré dans une chambre d'hôtel de Saïgon, le jeune capitaine Willard, mal rasé et imbibé d'alcool, est sorti de sa prostration par une convocation de l'état-major américain. Le général Corman lui confie une mission qui doit rester secrète : éliminer le colonel Kurtz, un militaire aux méthodes quelque peu expéditives et qui sévit au-delà de la frontière cambodgienne.",
        "popularity": 31.528,
        "poster_path": "/scaiAT7I2KZ2GAeMvoU6Ro1515J.jpg",
        "release_date": "1979-08-15",
        "title": "Apocalypse Now",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 7531
    },
    {
        "adult": false,
        "backdrop_path": "/27ZkYMWynuK2qiDP6awc3MsCaOs.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 527641,
        "original_language": "en",
        "original_title": "Five Feet Apart",
        "overview": "Stella Grant, dix-sept ans, est atteinte par la fibrose kystique. Elle a passé une grande partie de sa vie entre les quatres murs de sa chambre d'hôpital. C'est dans ce contexte, qu'elle tombe amoureuse de Will Newman, également atteint de la mucoviscidose. Leurs états de santé respectifs les empêchent de s'approcher trop près l'un de l'autre. De plus, Stella doit tenter de raisonner son amoureux qui ne veut plus prendre ses traitements médicaux.",
        "popularity": 44.574,
        "poster_path": "/c71h4tvMrhUK9jENJrOJm5IRuNF.jpg",
        "release_date": "2019-03-14",
        "title": "À deux mètres de toi",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 5271
    },
    {
        "adult": false,
        "backdrop_path": "/3G9YiVm0bQB1XyyyiDzfeNCiFLw.jpg",
        "genre_ids": [
            18,
            10752
        ],
        "id": 975,
        "original_language": "en",
        "original_title": "Paths of Glory",
        "overview": "En 1916, durant la Première Guerre mondiale, le général français Broulard ordonne au général Mireau de lancer une offensive suicidaire contre une position allemande imprenable, surnommée la « Fourmilière ». Au moment de l'attaque, les soldats tombent par dizaines et leurs compagnons, épuisés, refusent d'avancer…",
        "popularity": 20.166,
        "poster_path": "/jfE5FYueGzdNZUg60WJ7JSJCLkG.jpg",
        "release_date": "1957-10-25",
        "title": "Les Sentiers de la gloire",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 2586
    },
    {
        "adult": false,
        "backdrop_path": "/4YbHir4Ka4kG7WOdh0anXv1iT8s.jpg",
        "genre_ids": [
            18
        ],
        "id": 637920,
        "original_language": "tr",
        "original_title": "7. Koğuştaki Mucize",
        "overview": "Séparé de sa fille, un père avec un handicap mental doit prouver son innocence lorsqu'il est arrêté pour le meurtre d'une enfant.",
        "popularity": 40.483,
        "poster_path": "/5DT2uoSmwm2p8LyH7OSPCl5Stx9.jpg",
        "release_date": "2019-10-10",
        "title": "La Cellule Numéro 7",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 4229
    },
    {
        "adult": false,
        "backdrop_path": "/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 77338,
        "original_language": "fr",
        "original_title": "Intouchables",
        "overview": "À la suite d'un accident de parapente, Philippe, riche aristocrate, engage comme aide à domicile Driss, un jeune de banlieue tout juste sorti de prison. Bref la personne la moins adaptée pour le job. Ensemble ils vont faire cohabiter Vivaldi et Earth Wind and Fire, le verbe et la vanne, les costumes et les bas de survêtement… Deux univers vont se télescoper, s'apprivoiser, pour donner naissance à une amitié aussi dingue, drôle et forte qu'inattendue, une relation unique qui fera des étincelles et qui les rendra… Intouchables.",
        "popularity": 52.312,
        "poster_path": "/8hZnsW4wGz3zuuwu9eniaoKIJnP.jpg",
        "release_date": "2011-11-02",
        "title": "Intouchables",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 16134
    },
    {
        "adult": false,
        "backdrop_path": "/sdwjQEM869JFwMytTmvr6ggvaUl.jpg",
        "genre_ids": [
            18,
            53,
            9648,
            28
        ],
        "id": 670,
        "original_language": "ko",
        "original_title": "올드보이",
        "overview": "À la fin des années 80, Oh Dae-Soo, père de famille sans histoire, est enlevé un jour devant chez lui. Séquestré pendant plusieurs années dans une cellule privée, son seul lien avec l'extérieur est une télévision. Par le biais de cette télévision, il apprend le meurtre de sa femme, meurtre dont il est le principal suspect. Au désespoir d'être séquestré sans raison apparente succède alors chez le héros une rage intérieure vengeresse qui lui permet de survivre. Il est relâché 15 ans plus tard, toujours sans explication. Oh Dae-Soo est alors contacté par celui qui semble être le responsable de ses malheurs, qui lui propose de découvrir qui l'a enlevé et pourquoi. Le cauchemar continue pour le héros.",
        "popularity": 40.857,
        "poster_path": "/u0Ct3708zXaoJCkF65bLfenQmhM.jpg",
        "release_date": "2003-11-21",
        "title": "Old Boy",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 7844
    },
    {
        "adult": false,
        "backdrop_path": "/YLyORLsYIjC0d1TFBSpJKk7piP.jpg",
        "genre_ids": [
            16,
            18,
            10749
        ],
        "id": 504253,
        "original_language": "ja",
        "original_title": "君の膵臓をたべたい",
        "overview": "Une fille mourante rencontre un garçon nonchalant dont elle lui révèle son secret que lui seul sait. Elle a décidé de remplir sa liste de choses à faire avec nul autre que le garçon qui se moque du monde. Tiré du roman de Yoru Sumino, qui a ému le Japon.",
        "popularity": 29.639,
        "poster_path": "/9JrICtsOZWKVGErvsb2TDVvlYk1.jpg",
        "release_date": "2018-09-01",
        "title": "Je veux manger ton pancréas",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 1342
    },
    {
        "adult": false,
        "backdrop_path": "/6rmb35g7XoMCMQtnbH0rUecFZlV.jpg",
        "genre_ids": [
            18,
            10402,
            10749
        ],
        "id": 10376,
        "original_language": "it",
        "original_title": "La leggenda del pianista sull'oceano",
        "overview": "A bord du \"Virginian\", paquebot de croisière, Danny, un mécanicien, découvre un nouveau-né abandonné dans la salle de bal désertée. Il décide de l'élever et le baptise du nom de 1900.\r À la mort de Danny, l'enfant, adopté par l'équipage, grandit sur le navire, voguant d'un continent à l'autre. Un jour, 1900 s'assoit au piano et révèle un don extraordinaire pour la musique. Adulte, il devient un pianiste virtuose. Les plus grands jazzmen lui rendent visite. 1900 refuse de quitter le navire.\r Jusqu'au jour où celui-ci est promis à la démolition.",
        "popularity": 18.572,
        "poster_path": "/tamGferK68ppVyOrM8jiqF5vbjJ.jpg",
        "release_date": "1998-10-28",
        "title": "La Légende du pianiste sur l'océan",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 2098
    },
    {
        "adult": false,
        "backdrop_path": "/b1Y8SUb12gPHCSSSNlbX4nB3IKy.jpg",
        "genre_ids": [
            12,
            14,
            16,
            35,
            10751,
            28
        ],
        "id": 315162,
        "original_language": "en",
        "original_title": "Puss in Boots: The Last Wish",
        "overview": "Le Chat Potté découvre que sa passion pour l'aventure et son mépris du danger ont fini par lui coûter cher : il a épuisé huit de ses neuf vies, et en a perdu le compte au passage. Afin de retomber sur ses pattes notre héros velu se lance littéralement dans la quête de sa vie. Il s'embarque dans une aventure épique aux confins de la Forêt Sombre afin de dénicher la mythique Etoile à vœu, seule susceptible de lui rendre ses vies perdues. Mais quand il ne vous en reste qu'une, il faut savoir faire profil bas, se montrer prudent et demander de l'aide. C'est ainsi qu'il se tourne vers son ancienne partenaire et meilleure ennemie de toujours : l'ensorcelante Kitty Pattes De Velours. Le Chat Potté et la belle Kitty vont être aidés dans leur quête, à leur corps bien défendant, par Perro, un corniaud errant et galleux à la langue bien pendue et d'une inaltérable bonne humeur.",
        "popularity": 211.262,
        "poster_path": "/kO35BwoKHyP1VRulxZJVeEl5dvS.jpg",
        "release_date": "2022-12-07",
        "title": "Le Chat Potté 2 : la dernière quête",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 6490
    },
    {
        "adult": false,
        "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
        "genre_ids": [
            12,
            878,
            28
        ],
        "id": 299534,
        "original_language": "en",
        "original_title": "Avengers: Endgame",
        "overview": "Après leur défaite face au Titan Thanos qui dans le film précédent s'est approprié toutes les pierres du Gant de l'infini, les Avengers et les Gardiens de la Galaxie ayant survécu à son claquement de doigts qui a pulvérisé « la moitié de toute forme de vie dans l'Univers », Captain America, Thor, Bruce Banner, Natasha Romanoff, War Machine, Tony Stark, Nébula et Rocket, vont essayer de trouver une solution pour ramener leurs coéquipiers disparus et vaincre Thanos en se faisant aider par Ronin alias Clint Barton, Captain Marvel et Ant-Man.",
        "popularity": 100.258,
        "poster_path": "/wF7jv3x51hXgkl7t5KHePuRjXc8.jpg",
        "release_date": "2019-04-24",
        "title": "Avengers : Endgame",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 23942
    },
    {
        "adult": false,
        "backdrop_path": "/sQkRiQo3nLrQYMXZodDjNUJKHZV.jpg",
        "genre_ids": [
            16,
            28,
            878
        ],
        "id": 618344,
        "original_language": "en",
        "original_title": "Justice League Dark: Apokolips War",
        "overview": "Suite à ses deux invasions ratées de la Terre,  Darkseid a été sur un chemin de guerre, conquérant d'innombrables mondes. À la Watchtower, la Justice League , rejointe par de nouveaux membres John Constantine et son amant Zatanna , fait un plan pour contrer son invasion à travers l'univers. Cependant, à leur insu, Darkseid les regarde à travers la technologie de Victor Stone . La Ligue se dirige vers Apokolips tandis que les Teen Titans restent sur Terre en tant que \"garde à domicile\". A leur arrivée, la Ligue est attaquée par des \"Paradooms\"; hybrides génétiques de Parademons et Doomsday . Pendant l'attaque, plusieurs héros sont tués. Darkseid démantèle Cyborg - qui permet à Shazam de s'échapper - et remplace ses pièces par la technologie apokoliptienne, asservit Diana , Starfire , Hawkman , Mera et Martian Manhunter pour devenir ses Furies mécanisées, place Batman dans son contrôle mental, faisant de lui son bras droit, et injecte à Clark Kent du liquide de Kryptonite, le dépower...",
        "popularity": 24.247,
        "poster_path": "/c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
        "release_date": "2020-05-05",
        "title": "Justice League Dark: Apokolips War",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 1360
    },
    {
        "adult": false,
        "backdrop_path": "/ch3lDc4xQ9MpsNEpnRhvR8PIxxK.jpg",
        "genre_ids": [
            18,
            10751,
            14
        ],
        "id": 1585,
        "original_language": "en",
        "original_title": "It's a Wonderful Life",
        "overview": "Bedford Falls, petite ville de l'État de New York, la veille de Noël. De chaque foyer s'élève une prière. Les paroles murmurées avec ferveur concernent toutes le même homme – George Bailey –, qu'elles proviennent de la bouche de son épouse, de ses enfants, de ses amis et collègues… et de manière générale de tous ceux qui tiennent à lui. Les prières vont être exaucées et Clarence, un ange sans ailes est envoyé au secours de George afin de gagner ses ailes. Avec lui, nous revivons les années écoulées dans la vie de George .Ayant renoncé à son rêve d'enfant de devenir explorateur, pour reprendre la banque de son père, il a toujours consacré son énergie et son argent à l'amélioration des conditions de vie des habitants de la ville, en luttant contre le désir de puissance d'un homme d'affaires sans scrupules.",
        "popularity": 27.723,
        "poster_path": "/niniH26VfSTF7fefLWwipvNFGbL.jpg",
        "release_date": "1946-12-20",
        "title": "La vie est belle",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 3874
    },
    {
        "adult": false,
        "backdrop_path": "/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
        "genre_ids": [
            28,
            16,
            12,
            14,
            53
        ],
        "id": 635302,
        "original_language": "ja",
        "original_title": "劇場版「鬼滅の刃」無限列車編",
        "overview": "Le groupe de Tanjirô a terminé son entraînement de récupération au domaine des papillons et embarque à présent en vue de sa prochaine mission à bord du train de l'infini, d'où quarante personnes ont disparu en peu de temps. Tanjirô et Nezuko, accompagnés de Zen'itsu et Inosuke, s'allient à l'un des plus puissants épéistes de l'armée des pourfendeurs de démons, le Pilier de la Flamme Kyôjurô Rengoku, afin de contrer le démon qui a engagé le train de l'Infini sur une voie funeste.",
        "popularity": 83.875,
        "poster_path": "/3fTjxkrp23AWyRbMKaujz5wrNDM.jpg",
        "release_date": "2020-10-16",
        "title": "Demon Slayer : Kimetsu no Yaiba - Le film : Le train de l'Infini",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 3437
    },
    {
        "adult": false,
        "backdrop_path": "/AaV1YIdWKnjAIAOe8UUKBFm327v.jpg",
        "genre_ids": [
            28,
            18
        ],
        "id": 361743,
        "original_language": "en",
        "original_title": "Top Gun: Maverick",
        "overview": "Après avoir été l'un des meilleurs pilotes de chasse de l'Aéronavale américaine pendant plus de trente ans, Pete “Maverick\" Mitchell continue à repousser ses limites en tant que pilote d'essai. Il refuse de monter en grade, car cela l'obligerait à renoncer à voler. Il est chargé de former un détachement de jeunes diplômés de l'école Top Gun pour une mission spéciale qu'aucun pilote n'aurait jamais imaginée. Lors de cette mission, Maverick rencontre le lieutenant Bradley “Rooster” Bradshaw, le fils de son défunt ami, le navigateur Nick “Goose” Bradshaw. Face à un avenir incertain, hanté par ses fantômes, Maverick va devoir affronter ses pires cauchemars au cours d'une mission qui exigera les plus grands sacrifices.",
        "popularity": 159.564,
        "poster_path": "/kTh1s6I6yUyk2OGiRoGkDTYTS6K.jpg",
        "release_date": "2022-05-24",
        "title": "Top Gun : Maverick",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 7644
    },
    {
        "adult": false,
        "backdrop_path": "/wXfAvsPZqBDJ8U78F2IAzsUxtNh.jpg",
        "genre_ids": [
            10751,
            16,
            18
        ],
        "id": 8587,
        "original_language": "en",
        "original_title": "The Lion King",
        "overview": "Disney présente l'histoire de Simba, un fougueux lionceau qui « voudrait déjà être roi ». Éloigné par son sombre et ambitieux oncle Scar, Simba profite de la vie avec ses drôles de compagnons Timon et Pumbaa, oubliant son rang et ses responsabilités. Mais son destin l'appelle à rentrer auprès des siens et à reprendre sa place dans le Grand Cercle de la Vie.",
        "popularity": 94.668,
        "poster_path": "/n6UChiAOSTHGih2FBactLjA4Cdt.jpg",
        "release_date": "1994-06-24",
        "title": "Le Roi lion",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 17068
    },
    {
        "adult": false,
        "backdrop_path": "/mDfJG3LC3Dqb67AZ52x3Z0jU0uB.jpg",
        "genre_ids": [
            12,
            28,
            878
        ],
        "id": 299536,
        "original_language": "en",
        "original_title": "Avengers: Infinity War",
        "overview": "Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l'univers.",
        "popularity": 172.249,
        "poster_path": "/hSfuKPtyEryeFzapZ8UgZd4aESu.jpg",
        "release_date": "2018-04-25",
        "title": "Avengers : Infinity War",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 27815
    },
    {
        "adult": false,
        "backdrop_path": "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 872585,
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "En 1942, convaincus que l'Allemagne nazie est en train de développer une arme nucléaire, les États-Unis initient, dans le plus grand secret, le \"Projet Manhattan\" destiné à mettre au point la première bombe atomique de l'histoire. Pour piloter ce dispositif, le gouvernement engage J. Robert Oppenheimer, brillant physicien, qui sera bientôt surnommé \"le père de la bombe atomique\". C'est dans le laboratoire ultra-secret de Los Alamos, au cœur du désert du Nouveau-Mexique, que le scientifique et son équipe mettent au point une arme révolutionnaire dont les conséquences, vertigineuses, continuent de peser sur le monde actuel…",
        "popularity": 382.119,
        "poster_path": "/boAUuJBeID7VNp4L7LNMQs8mfQS.jpg",
        "release_date": "2023-07-19",
        "title": "Oppenheimer",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 3923
    },
    {
        "adult": false,
        "backdrop_path": "/dIHezuC3AmylT8mkXQiWSjz2wJR.jpg",
        "genre_ids": [
            18
        ],
        "id": 265177,
        "original_language": "fr",
        "original_title": "Mommy",
        "overview": "Une veuve mono-parentale hérite de la garde de son fils, un adolescent profondément turbulent. Ensemble, ils tentent de joindre les deux bouts, notamment grâce à l'aide inattendue de la mystérieuse voisine d'en face, Kyla. Tous les trois, ils retrouvent une forme d'équilibre et, bientôt, d'espoir.",
        "popularity": 16.425,
        "poster_path": "/3zyQtPg3avKprmJP2gBiYgyWUQC.jpg",
        "release_date": "2014-09-19",
        "title": "Mommy",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 2545
    },
    {
        "adult": false,
        "backdrop_path": "/2u1YG0pgm5bIOXO2OVWLNdMl23f.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            35,
            14
        ],
        "id": 508965,
        "original_language": "en",
        "original_title": "Klaus",
        "overview": "Un facteur égoïste et un fabricant de jouets solitaire forgent une amitié improbable, apportant la joie à une bourgade sombre et froide qui en a désespérément besoin.",
        "popularity": 24.722,
        "poster_path": "/qb0eCUtvi2Rn5etdqFbaYzvIPYn.jpg",
        "release_date": "2019-11-08",
        "title": "Klaus",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 3555
    },
    {
        "adult": false,
        "backdrop_path": "/3upEZ0ltY7WwOSFVXrtiP34D48p.jpg",
        "genre_ids": [
            53,
            18,
            10749
        ],
        "id": 290098,
        "original_language": "ko",
        "original_title": "아가씨",
        "overview": "Corée. Années 30, pendant la colonisation japonaise. Une jeune femme est engagée comme servante d'une riche japonaise, vivant recluse dans un immense manoir sous la coupe d'un oncle tyrannique. Mais Sookee a un secret. Avec l'aide d'un escroc se faisant passer pour un comte japonais, ils ont d'autres plans pour Hideko…",
        "popularity": 52.412,
        "poster_path": "/z4cpSCLQLbe2TwDZhmf8uzsKUMj.jpg",
        "release_date": "2016-06-01",
        "title": "Mademoiselle",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 3324
    },
    {
        "adult": false,
        "backdrop_path": "/2Xe9lISpwXKhvKiHttbFfVRERQX.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 490132,
        "original_language": "en",
        "original_title": "Green Book",
        "overview": "En 1962, alors que règne la ségrégation, Tony Lip, un videur italo-américain du Bronx, est engagé pour conduire et protéger le Dr Don Shirley, un pianiste noir de renommée mondiale, lors d'une tournée de concerts. Durant leur périple de Manhattan jusqu'au Sud profond, ils s'appuient sur le Green Book pour dénicher les établissements accueillant les personnes de couleur, où l'on ne refusera pas de servir Shirley et où il ne sera ni humilié ni maltraité. Dans un pays où le mouvement des droits civiques commence à se faire entendre, les deux hommes vont être confrontés au pire de l'âme humaine, dont ils se guérissent grâce à leur générosité et leur humour. Ensemble, ils vont devoir dépasser leurs préjugés, oublier ce qu'ils considéraient comme des différences insurmontables, pour découvrir leur humanité commune.",
        "popularity": 70.398,
        "poster_path": "/orN43xQQkoAmbUx1tYZl6HY7WKU.jpg",
        "release_date": "2018-11-16",
        "title": "Green Book : Sur les routes du Sud",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 10590
    },
    {
        "adult": false,
        "backdrop_path": "/yHtB4KHNigx3ZoxDvQbW2SOXGfq.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            14
        ],
        "id": 441130,
        "original_language": "en",
        "original_title": "Wolfwalkers",
        "overview": "En Irlande, au temps des superstitions et de la magie, Robyn, une jeune fille de 11 ans, aide son père à chasser la dernière meute de loups. Mais un jour, lors d'une battue en forêt, Robyn rencontre Mebh, petite fille le jour, louve la nuit. Désormais pour Robyn, ayant rejoint elle aussi le peuple des loups, la menace ne vient plus des loups, mais bien des hommes !",
        "popularity": 22.709,
        "poster_path": "/2LRSFnl1MDAkFlduyhVjB7sUOil.jpg",
        "release_date": "2020-10-26",
        "title": "Le Peuple loup",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1032
    },
    {
        "adult": false,
        "backdrop_path": "/eNWjMbuhGxJdzaIY9ZZ2KvWx2sQ.jpg",
        "genre_ids": [
            16,
            10751,
            18,
            14,
            12
        ],
        "id": 110420,
        "original_language": "ja",
        "original_title": "おおかみこどもの雨と雪",
        "overview": "Hana et ses deux enfants, Ame et Yuki, vivent discrètement dans un coin tranquille de la ville. Leur vie est simple et joyeuse, mais ils cachent un secret : leur père est un homme-loup. Quand celui-ci disparaît brutalement, Hana décide de quitter la ville pour élever ses enfants à l'abri des regards. Ils emménagent dans un village proche d'une forêt luxuriante…",
        "popularity": 23.925,
        "poster_path": "/wttjncP0v7ucU5OyQXs8ihMtKu3.jpg",
        "release_date": "2012-07-21",
        "title": "Les Enfants loups, Ame & Yuki",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2097
    },
    {
        "adult": false,
        "backdrop_path": "/sj2aZDetPE8RoOCAm5QJitCNfLr.jpg",
        "genre_ids": [
            18
        ],
        "id": 797,
        "original_language": "sv",
        "original_title": "Persona",
        "overview": "Une actrice muette est confiée à une infirmière qui constate que leurs personnalités se confondent.",
        "popularity": 17.701,
        "poster_path": "/5DD1LJWLzLS8UYwDZKRdSwVaRr5.jpg",
        "release_date": "1966-10-18",
        "title": "Persona",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1936
    },
    {
        "adult": false,
        "backdrop_path": "/vRTKNKNWLZ22fAgPa5kY8wT2b1F.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 284,
        "original_language": "en",
        "original_title": "The Apartment",
        "overview": "C.C. Baxter est employé à la Sauvegarde, grande compagnie d'assurance. Dans l'espoir d'un avancement il prête souvent son appartement à ses supérieurs qui y emmènent leurs petites amies. Un jour le chef du personnel le convoque et lui apprend qu'il sait tout et lui demande aussi sa clé. Baxter est enfin promu. Mais ce qu'il ignorait c'est que le chef du personnel emmenait dans son appartement la femme dont il était amoureux.",
        "popularity": 17.609,
        "poster_path": "/puRnwIQd6VdQqefketctjeuhsvd.jpg",
        "release_date": "1960-06-21",
        "title": "La Garçonnière",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2030
    },
    {
        "adult": false,
        "backdrop_path": "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg",
        "genre_ids": [
            10751,
            16,
            14,
            10402,
            35,
            12
        ],
        "id": 354912,
        "original_language": "en",
        "original_title": "Coco",
        "overview": "Depuis déjà plusieurs générations, la musique est bannie dans la famille de Miguel. Un vrai déchirement pour le jeune garçon dont le rêve ultime est de devenir un musicien aussi accompli que son idole, Ernesto de la Cruz. Bien décidé à prouver son talent, Miguel, par un étrange concours de circonstances, se retrouve propulsé dans un monde étonnant et coloré lié aux célébrations des ancêtres. Là, il se lie d'amitié avec Hector, un gentil garçon mais un peu filou sur les bords. Ensemble, ils vont accomplir un voyage extraordinaire qui leur révèlera la véritable histoire qui se cache derrière celle de la famille de Miguel…",
        "popularity": 259.879,
        "poster_path": "/sZqcEV3KhDITHlUBmyj1a3RRvT9.jpg",
        "release_date": "2017-10-27",
        "title": "Coco",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 17860
    },
    {
        "adult": false,
        "backdrop_path": "/AdKA2F1SzYPhSZdEbjH1Zh75UVQ.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 694,
        "original_language": "en",
        "original_title": "The Shining",
        "overview": "Jack Torrance, gardien d'un hôtel fermé l'hiver, sa femme et son fils Danny s'apprêtent à vivre de longs mois de solitude. Danny, qui possède un don de médium, le «Shining», est effrayé à l'idée d'habiter ce lieu, théâtre marqué par de terribles événements passés…",
        "popularity": 51.024,
        "poster_path": "/cfF0o7sVAfKE081zj0YZtwUzTg0.jpg",
        "release_date": "1980-05-23",
        "title": "Shining",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 16278
    },
    {
        "adult": false,
        "backdrop_path": "/AetjwIIITWQ5ueKKk9LQNaOFwVa.jpg",
        "genre_ids": [
            18,
            9648,
            80
        ],
        "id": 37257,
        "original_language": "en",
        "original_title": "Witness for the Prosecution",
        "overview": "Sir Wilfrid, un brillant et expérimenté avocat spécialiste des causes perdues, sort d'un séjour prolongé à l'hôpital et doit, pour des raisons de santé, renoncer à s'occuper d'affaires criminelles trop stimulantes. C'est à ce moment que Leonard Vole, accusé du meurtre de Mme French, vient lui demander son aide. Bien que l'affaire paraisse passionnante, Sir Wilfrid refuse de s'en occuper pour préserver sa santé et conseille un autre avocat, Mr Brogan-Moore, un de ses anciens élèves. Après le départ de Leonard Vole du bureau de Sir Wilfrid, Christine Vole, la femme de Leonard, fait son apparition. Elle est son seul alibi pour le soir du meurtre. Son attitude très froide et son rôle crucial dans l'affaire font changer Sir Wilfrid d'avis, qui décide malgré les recommandations des médecins de s'occuper de cette affaire fascinante.",
        "popularity": 17.369,
        "poster_path": "/fr7pLgv4PDn9c2xsEfqGCeQyrd5.jpg",
        "release_date": "1957-12-17",
        "title": "Témoin à charge",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1222
    },
    {
        "adult": false,
        "backdrop_path": "/8pEnePgGyfUqj8Qa6d91OZQ6Aih.jpg",
        "genre_ids": [
            18,
            53,
            10752
        ],
        "id": 16869,
        "original_language": "en",
        "original_title": "Inglourious Basterds",
        "overview": "Dans la France occupée de 1940, un groupe de soldats juifs américains, les bâtards, mène des actions punitives particulièrement sanglantes contre les nazis du Troisième Reich. Leur chemin rencontre celui de Shosanna Dreyfus, une jeune juive réfugiée à Paris exploitante d'une salle de cinéma qui entend elle aussi assouvir sa propre vengeance envers les nazis.",
        "popularity": 51.564,
        "poster_path": "/3yOfQLerEO2Qnb1VkSJ8WG3c0Jx.jpg",
        "release_date": "2009-08-19",
        "title": "Inglourious Basterds",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 20838
    },
    {
        "adult": false,
        "backdrop_path": "/yIonSXf1jdNihhK8PssxO6KCIfz.jpg",
        "genre_ids": [
            878,
            18
        ],
        "id": 185,
        "original_language": "en",
        "original_title": "A Clockwork Orange",
        "overview": "Au XXIe siècle, où règnent la violence et le sexe, Alex, jeune chef de bande, exerce avec sadisme une terreur aveugle. Après son emprisonnement, des psychanalystes l'emploient comme cobaye dans des expériences destinées à juguler la criminalité…",
        "popularity": 35.908,
        "poster_path": "/n2oKNiEq9DZljqs6xsxs8hnsW9p.jpg",
        "release_date": "1971-12-19",
        "title": "Orange Mécanique",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 11999
    },
    {
        "adult": false,
        "backdrop_path": "/kTUUiKGKrdRhJsCcYT3Ivtfuuzh.jpg",
        "genre_ids": [
            18
        ],
        "id": 5156,
        "original_language": "it",
        "original_title": "Ladri di biciclette",
        "overview": "Chômeur depuis deux ans, Antonio trouve un emploi de colleur d'affiches, mais il se fait voler sa bicyclette, outil indispensable dans le cadre de son nouveau métier.",
        "popularity": 18.173,
        "poster_path": "/8CM1etpLlkG9YipIPWGOm6a8JWk.jpg",
        "release_date": "1948-11-24",
        "title": "Le Voleur de bicyclette",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2155
    },
    {
        "adult": false,
        "backdrop_path": "/uWVkEo9PWHu9algZsiLPi6sRU64.jpg",
        "genre_ids": [
            36,
            18
        ],
        "id": 556574,
        "original_language": "en",
        "original_title": "Hamilton",
        "overview": "Captation de la célèbre comédie musicale de Broadway récompensée par 11 Tony, Grammy et Olivier Awards, et par un prix Pulitzer. Hamilton raconte l'histoire d'Alexander Hamilton, l'un des Pères fondateurs de la nation américaine.",
        "popularity": 30.13,
        "poster_path": "/itaIGLdCu0e28XQOEf7V3chd904.jpg",
        "release_date": "2020-07-03",
        "title": "Hamilton",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1228
    },
    {
        "adult": false,
        "backdrop_path": "/bdD39MpSVhKjxarTxLSfX6baoMP.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 857,
        "original_language": "en",
        "original_title": "Saving Private Ryan",
        "overview": "Alors que les forces alliées débarquent à Omaha Beach, Miller doit conduire son escouade derrière les lignes ennemies pour une mission particulièrement dangereuse : trouver et ramener sain et sauf le simple soldat James Ryan, dont les trois frères sont morts au combat en l'espace de trois jours. Pendant que l'escouade progresse en territoire ennemi, les hommes de Miller se posent des questions. Faut-il risquer la vie de huit hommes pour en sauver un seul ?",
        "popularity": 53.666,
        "poster_path": "/uLbBoC6QzfKibKf7Y5u78DR62Rz.jpg",
        "release_date": "1998-07-24",
        "title": "Il faut sauver le soldat Ryan",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 14720
    },
    {
        "adult": false,
        "backdrop_path": "/3ZVEtQxVPpEp5LNpAULDcxadTU3.jpg",
        "genre_ids": [
            28,
            18,
            12
        ],
        "id": 98,
        "original_language": "en",
        "original_title": "Gladiator",
        "overview": "Le général romain Maximus est le plus fidèle soutien de l'empereur Marc Aurèle, qu'il a conduit de victoire en victoire avec une bravoure et un dévouement exemplaires. Jaloux du prestige de Maximus, et plus encore de l'amour que lui voue l'empereur, le fils de Marc Aurèle, Commode, s'arroge brutalement le pouvoir, puis ordonne l'arrestation du général et son exécution. Maximus échappe à ses assassins mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d'esclaves, il devient gladiateur et prépare sa vengeance.",
        "popularity": 61.295,
        "poster_path": "/5gJOu3t2QrznuJqjCG7FQDMI76t.jpg",
        "release_date": "2000-05-04",
        "title": "Gladiator",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 17053
    },
    {
        "adult": false,
        "backdrop_path": "/oMsxZEvz9a708d49b6UdZK1KAo5.jpg",
        "genre_ids": [
            28,
            878
        ],
        "id": 603,
        "original_language": "en",
        "original_title": "The Matrix",
        "overview": "Programmeur anonyme dans un service administratif le jour, Thomas Anderson devient Neo la nuit venue. Sous ce pseudonyme, il est l'un des pirates les plus recherchés du cyber-espace. À cheval entre deux mondes, Neo est assailli par d'étranges songes et des messages cryptés provenant d'un certain Morpheus. Celui-ci l'exhorte à aller au-delà des apparences et à trouver la réponse à la question qui hante constamment ses pensées : qu'est-ce que la Matrice ? Nul ne le sait, et aucun homme n'est encore parvenu à en percer les défenses. Mais Morpheus est persuadé que Neo est l'Élu, le libérateur mythique de l'humanité annoncé selon la prophétie. Ensemble, ils se lancent dans une lutte sans retour contre la Matrice et ses terribles agents…",
        "popularity": 69.477,
        "poster_path": "/pEoqbqtLc4CcwDUDqxmEDSWpWTZ.jpg",
        "release_date": "1999-03-30",
        "title": "Matrix",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 23955
    },
    {
        "adult": false,
        "backdrop_path": "/xBDE2d6HM1aBKQRu4IT7SfPD9fs.jpg",
        "genre_ids": [
            18,
            9648,
            878
        ],
        "id": 1124,
        "original_language": "en",
        "original_title": "The Prestige",
        "overview": "Londres, au début du siècle dernier... Robert Angier et Alfred Borden sont deux magiciens surdoués, promis dès leur plus jeune âge à un glorieux avenir. Une compétition amicale les oppose d'abord l'un à l'autre, mais l'émulation tourne vite à la jalousie, puis à la haine. Devenus de farouches ennemis, les deux rivaux vont s'efforcer de se détruire l'un l'autre en usant des plus noirs secrets de leur art. Cette obsession aura pour leur entourage des conséquences dramatiques...",
        "popularity": 37.697,
        "poster_path": "/37Fr7lY4QBHsuxlLJIfTNxW6nGW.jpg",
        "release_date": "2006-10-19",
        "title": "Le Prestige",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 14775
    },
    {
        "adult": false,
        "backdrop_path": "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
        "genre_ids": [
            12,
            28,
            878
        ],
        "id": 11,
        "original_language": "en",
        "original_title": "Star Wars",
        "overview": "Il y a bien longtemps, dans une galaxie très lointaine... La guerre civile fait rage entre l'Empire galactique et l'Alliance rebelle. Capturée par les troupes de choc de l'Empereur menées par le sombre et impitoyable Dark Vador, la princesse Leia Organa dissimule les plans de l'Étoile Noire, une station spatiale invulnérable, à son droïde R2-D2 avec pour mission de les remettre au Jedi Obi-Wan Kenobi. Accompagné de son fidèle compagnon, le droïde de protocole C-3PO, R2-D2 s'échoue sur la planète Tatooine et termine sa quête chez le jeune Luke Skywalker. Rêvant de devenir pilote mais confiné aux travaux de la ferme, ce dernier se lance à la recherche de ce mystérieux Obi-Wan Kenobi, devenu ermite au cœur des montagnes désertiques de Tatooine...",
        "popularity": 82.117,
        "poster_path": "/qelTNHrBSYjPvwdzsDBPVsqnNzc.jpg",
        "release_date": "1977-05-25",
        "title": "La Guerre des étoiles",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 19228
    },
    {
        "adult": false,
        "backdrop_path": "/96sS0woEzf0zFSWjHVblOhsBfGd.jpg",
        "genre_ids": [
            18,
            10749,
            35,
            10751
        ],
        "id": 522924,
        "original_language": "en",
        "original_title": "The Art of Racing in the Rain",
        "overview": "Enzo n'est pas un chien comme les autres. Philosophe dans l'âme, il aime s'instruire devant la télévision et écouter attentivement les leçons de vie de son maître, Denny Swift, un pilote automobile. Aujourd'hui, Enzo se souvient de tout ce que sa famille et lui-même ont traversé au cours des années...",
        "popularity": 29.95,
        "poster_path": "/2r2y16SUUm1NAJRWIFnnunKruv7.jpg",
        "release_date": "2019-08-08",
        "title": "Dans les yeux d'Enzo",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1311
    },
    {
        "adult": false,
        "backdrop_path": "/wyvUmyzqGOBDyqLHRSukGDjI7bH.jpg",
        "genre_ids": [
            18
        ],
        "id": 50014,
        "original_language": "en",
        "original_title": "The Help",
        "overview": "Dans la petite ville de Jackson, Mississippi, durant les années 60, trois femmes que tout devait opposer vont nouer une incroyable amitié. Elles sont liées par un projet secret qui les met toutes en danger, l'écriture d'un livre qui remet en cause les conventions sociales les plus sensibles de leur époque. De cette alliance improbable va naître une solidarité extraordinaire. À travers leur engagement, chacune va trouver le courage de bouleverser l'ordre établi, et d'affronter tous les habitants de la ville qui refusent le vent du changement…",
        "popularity": 64.443,
        "poster_path": "/8HdsLv7fWz6L9VFOgoZwKQh3PxD.jpg",
        "release_date": "2011-08-09",
        "title": "La Couleur des sentiments",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 7571
    },
    {
        "adult": false,
        "backdrop_path": "/U8QRD7jvTXEYsUXq74IFKaSiL5.jpg",
        "genre_ids": [
            18,
            53,
            9648
        ],
        "id": 11324,
        "original_language": "en",
        "original_title": "Shutter Island",
        "overview": "En 1954, le marshal Teddy Daniels et son coéquipier Chuck Aule sont envoyés enquêter sur l'île de Shutter Island, dans un hôpital psychiatrique où sont internés de dangereux criminels. L'une des patientes, Rachel Solando, a inexplicablement disparu. Comment la meurtrière a-t-elle pu sortir d'une cellule fermée de l'extérieur ? Le seul indice retrouvé dans la pièce est une feuille de papier sur laquelle on peut lire une suite de chiffres et de lettres sans signification apparente. Œuvre cohérente d'une malade, ou cryptogramme ?",
        "popularity": 63.313,
        "poster_path": "/fQ0vGVTtxjCdAJnxwPZ88O3Wzrh.jpg",
        "release_date": "2010-02-14",
        "title": "Shutter Island",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 22401
    },
    {
        "adult": false,
        "backdrop_path": "/6s2BqtDvp1BMiP70zCDU5OW6hMy.jpg",
        "genre_ids": [
            14,
            18
        ],
        "id": 490,
        "original_language": "sv",
        "original_title": "Det sjunde inseglet",
        "overview": "Au XIVe siècle, la grande peste ravage la Suède. De retour des croisades, le chevalier Antonius Blok rencontre la Mort sur son chemin. Espérant retarder l'échéance fatidique, le temps de trouver des réponses à ses questionnements métaphysiques, il lui propose une partie d'échecs. Sur la route, tandis que l'écuyer qui l'accompagne professe sa philosophie nihiliste, les deux hommes rencontrent le bateleur Jof qui chemine avec sa jeune famille au cœur du pays tourmenté et dit avoir vu la vierge Marie.",
        "popularity": 25.473,
        "poster_path": "/tM7ZfWHWYV0qLTWrGN9zcuBMyLn.jpg",
        "release_date": "1957-02-16",
        "title": "Le Septième Sceau",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2708
    },
    {
        "adult": false,
        "backdrop_path": "/yQIBS8B9l2qXoPoPtxSXvH7CfoT.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 324786,
        "original_language": "en",
        "original_title": "Hacksaw Ridge",
        "overview": "Quand la Seconde Guerre mondiale a éclaté, Desmond, un jeune américain, s'est retrouvé confronté à un dilemme: comme n'importe lequel de ses compatriotes, il voulait servir son pays, mais la violence était incompatible avec ses croyances et ses principes moraux. Il s'opposait ne serait-ce qu'à tenir une arme et refusait d'autant plus de tuer. Il s'engagea tout de même dans l'infanterie comme médecin. Son refus d'infléchir ses convictions lui valut d'être rudement mené par ses camarades et sa hiérarchie, mais c'est armé de sa seule foi qu'il est entré dans l'enfer de la guerre pour en devenir l'un des plus grands héros. Lors de la bataille d'Okinawa sur l'imprenable falaise de Maeda, il a réussi à sauver des dizaines de vies seul sous le feu de l'ennemi, ramenant en sureté, du champ de bataille, un à un les soldats blessés.",
        "popularity": 116.173,
        "poster_path": "/zyxSZvaA7mU7mwnO1lR2cXUdQdV.jpg",
        "release_date": "2016-10-07",
        "title": "Tu ne tueras point",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 12729
    },
    {
        "adult": false,
        "backdrop_path": "/7S7PE3vK9Eh5uzCYBDGk5qTJeYW.jpg",
        "genre_ids": [
            18,
            80,
            53
        ],
        "id": 629,
        "original_language": "en",
        "original_title": "The Usual Suspects",
        "overview": "Suspect numéro 1 dans une étrange affaire de hold-up, Verbal Kint est soumis à un interrogatoire par des agents fédéraux. Très vite, il dévoile aux policiers que le véritable cerveau de cette affaire n'est autre que le redoutable criminel Keyser Soze, un être machiavélique possédant une intelligence hors du commun. Peu à peu, le suspect va dresser un portrait effrayant de ce criminel que personne n'a jamais vu…",
        "popularity": 38.115,
        "poster_path": "/h06jDZB4Y9YQJiSGTcUwbhuiUrB.jpg",
        "release_date": "1995-07-19",
        "title": "Usual Suspects",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 9646
    },
    {
        "adult": false,
        "backdrop_path": "/mAhCW7QbpL5kwvCWGsfyY3ILoW6.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 10098,
        "original_language": "en",
        "original_title": "The Kid",
        "overview": "Un vagabond recueille un enfant abandonné par sa jeune mère qui, quelques années plus tard, est prise de remords et tente de retrouver son fils.",
        "popularity": 13.433,
        "poster_path": "/1d0TOt6CjLRFCYh6yh0les0gmXR.jpg",
        "release_date": "1921-01-21",
        "title": "Le Kid",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1890
    },
    {
        "adult": false,
        "backdrop_path": "/7Wev9JMo6R5XAfz2KDvXb7oPMmy.jpg",
        "genre_ids": [
            9648,
            53
        ],
        "id": 77,
        "original_language": "en",
        "original_title": "Memento",
        "overview": "Leonard Shelby ne porte que des costumes de grands couturiers et ne se déplace qu'au volant de sa Jaguar. En revanche, il habite dans des motels miteux et règle ses notes avec d'épaisses liasses de billets. Leonard n'a qu'une idée en tête: traquer l'homme qui a violé et assassiné sa femme afin de se venger. Sa recherche du meurtrier est rendue plus difficile par le fait qu'il souffre d'une forme rare et incurable d'amnésie. Bien qu'il puisse se souvenir de détails de son passé, il est incapable de savoir ce qu'il a fait dans le quart d'heure précédent, où il se trouve, où il va et pourquoi. Pour ne jamais perdre son objectif de vue, il a structuré sa vie à l'aide de fiches, de notes, de photos, de tatouages sur le corps. C'est ce qui l'aide à garder contact avec sa mission, à retenir les informations et à garder une trace, une notion de l'espace et du temps.",
        "popularity": 31.715,
        "poster_path": "/nzlv62aC0octS5AklAiWpXLX9Z0.jpg",
        "release_date": "2000-10-11",
        "title": "Memento",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 13791
    },
    {
        "adult": false,
        "backdrop_path": "/mKTccI6mwC4TumkzgzXoI8b2Qul.jpg",
        "genre_ids": [
            28,
            12,
            14
        ],
        "id": 791373,
        "original_language": "en",
        "original_title": "Zack Snyder's Justice League",
        "overview": "Bruce Wayne est déterminé à faire en sorte que le sacrifice ultime de Superman ne soit pas vain. Pour cela, avec l'aide de Diana Prince, il met en place un plan pour recruter une équipe de métahumains afin de protéger le monde d'une menace apocalyptique imminente. La tâche s'avère plus difficile qu'il ne l'imaginait, car chacune des recrues doit faire face aux démons de son passé, et les surpasser, pour se rassembler et former une ligue de héros sans précédent. Désormais unis, Batman, Wonder Woman, Aquaman, Cyborg et Flash réussiront-ils à sauver la planète de Steppenwolf, DeSaad, Darkseid et de leurs terribles intentions ?",
        "popularity": 136.786,
        "poster_path": "/oDKDztKLiidLCbSzlxHlF9ROBdp.jpg",
        "release_date": "2021-03-18",
        "title": "Zack Snyder's Justice League",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 9253
    },
    {
        "adult": false,
        "backdrop_path": "/6yrbWzzrPp7pwz6zHdifspJk8t3.jpg",
        "genre_ids": [
            878,
            18
        ],
        "id": 1398,
        "original_language": "ru",
        "original_title": "Сталкер",
        "overview": "Dans un pays et une époque indéterminés, il existe une zone interdite, fermée et gardée par des militaires. Elle aurait été créée par la chute d'une météorite, il y a bien longtemps. De temps à autre, le stalker, un passeur, se lève le matin et quitte son épouse pour guider à travers la zone le voyageur qui souhaite atteindre la Chambre des désirs, un lieu où les vœux les plus chers sont exaucés. Seul le stalker peut déjouer les nombreuses embûches du parcours. Aujourd'hui, un écrivain et un physicien sont les clients du stalker. Il faut tout d'abord échapper à la surveillance des gardes pour pénétrer dans la zone, puis avancer au hasard…",
        "popularity": 22.203,
        "poster_path": "/dMnfize1bUFzHUwSoayGJmvrzYZ.jpg",
        "release_date": "1979-05-25",
        "title": "Stalker",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1891
    },
    {
        "adult": false,
        "backdrop_path": "/9guoVF7zayiiUq5ulKQpt375VIy.jpg",
        "genre_ids": [
            16,
            28,
            14,
            12
        ],
        "id": 592350,
        "original_language": "ja",
        "original_title": "僕のヒーローアカデミア THE MOVIE ヒーローズ：ライジング",
        "overview": "La classe 1-A de U.A. a été envoyée sur l'île isolée de Nabu dans le cadre d'un programme de sécurité, ce qui équivaut à des actes mineurs de la part des étudiants, car l'île est pratiquement exempte de criminalité. Izuku Midoriya, titulaire du One for All, un pouvoir d'une immense puissance héritée, rencontre Mahoro Shimano et son frère Katsuma, résidents de l'île. S'unissant à eux avec son rival Katsuki Bakugo, ils découvrent que Katsuma souhaite devenir un héros, mais Mahoro cherche à le dissuader, estimant que son Alter n'est pas adapté à une ligne de travail dangereuse.Pendant ce temps, le père de Mahoro et Katsuma, qui possède un Alter curatif appelé Cell Activation, est attaqué par Nine et son groupe.",
        "popularity": 36.209,
        "poster_path": "/eo80fmXxtvfAuv4VuLvCNp5XY1v.jpg",
        "release_date": "2019-12-20",
        "title": "My Hero Academia : Heroes Rising",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1084
    },
    {
        "adult": false,
        "backdrop_path": "/2JeIqOdSM5nC1SQmuhUOfj3iB1U.jpg",
        "genre_ids": [
            16,
            14,
            18
        ],
        "id": 555604,
        "original_language": "en",
        "original_title": "Guillermo del Toro's Pinocchio",
        "overview": "Cette épopée musicale en stop-motion qui se déroule dans l'Italie de l'entre-deux-guerres marque les débuts de Guillermo del Toro en tant que parolier, avec la ballade \"Ciao Papa\".",
        "popularity": 49.769,
        "poster_path": "/ftnEmnoHI5Znlzg0TwGcSMoXJt1.jpg",
        "release_date": "2022-11-09",
        "title": "Pinocchio par Guillermo del Toro",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2493
    },
    {
        "adult": false,
        "backdrop_path": "/921vUyXdfIYpaXqu5Lnf3nVb4IJ.jpg",
        "genre_ids": [
            16,
            28,
            14
        ],
        "id": 810693,
        "original_language": "ja",
        "original_title": "劇場版 呪術廻戦 0",
        "overview": "Lorsqu'il était enfant, Yuta Okkotsu a vu son amie Rika Orimoto perdre la vie dans un terrible accident. Depuis, Rika vient hanter Yuta qui a même souhaité sa propre mort après avoir souffert des années de cette malédiction. Jusqu'au jour où le plus puissant des exorcistes, Satoru Gojo, l'accueille dans l'école d'exorcisme de Tokyo. Tandis que Yuta trouve enfin un nouveau sens à sa vie, une menace plane sur le monde. En effet, quelqu'un projette de déchaîner un millier de malédictions sur Shinjuku et Kyoto pour exterminer tous les non-exorcistes…",
        "popularity": 104.054,
        "poster_path": "/jW4OW6ySAtP40BzUWgVmsApqyaS.jpg",
        "release_date": "2021-12-24",
        "title": "Jujutsu Kaisen 0",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1087
    },
    {
        "adult": false,
        "backdrop_path": "/foFq1RZWQIgFuCQ0nyYccywjFyX.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 531428,
        "original_language": "fr",
        "original_title": "Portrait de la jeune fille en feu",
        "overview": "1770. Marianne est peintre et doit réaliser le portrait de mariage d'Héloïse, une jeune femme qui vient de quitter le couvent. Héloïse résiste à son destin d'épouse en refusant de poser. Marianne va devoir la peindre en secret. Introduite auprès d'elle en tant que dame de compagnie, elle la regarde.",
        "popularity": 26.916,
        "poster_path": "/lH2hSK6F1FZmS3ao384kZCMsbCl.jpg",
        "release_date": "2019-06-17",
        "title": "Portrait de la jeune fille en feu",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2207
    },
    {
        "adult": false,
        "backdrop_path": "/5zKeHHFYfuyH0KFR7h3IYnOHL7v.jpg",
        "genre_ids": [
            9648,
            10749,
            53
        ],
        "id": 426,
        "original_language": "en",
        "original_title": "Vertigo",
        "overview": "Scottie est sujet au vertige, ce qui lui porte préjudice dans son métier de policier. Rendu responsable de la mort d'un de ses collègues, il décide de quitter la police. Une ancienne relation le contacte afin qu'il suive sa femme, possédée selon lui par l'esprit de son aïeule. Scottie s'éprend de la jeune femme et se trouve ballotté par des événements qu'il ne peut contrôler.",
        "popularity": 25.634,
        "poster_path": "/uFhTTIJypI747dfXpTmsqCxZgZB.jpg",
        "release_date": "1958-05-28",
        "title": "Sueurs Froides",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 5288
    },
    {
        "adult": false,
        "backdrop_path": "/2Jr2OBzoLLOYqQWnyN4eicZv0sL.jpg",
        "genre_ids": [
            12,
            10751
        ],
        "id": 606856,
        "original_language": "en",
        "original_title": "Togo",
        "overview": "Quand une épidémie de diphtérie ravage un village isolé d'Alaska durant l'hiver 1925, rendant gravement malades d'innombrables enfants, la population est en émoi car l'antitoxine nécessaire à leur guérison se trouve à des centaines de kilomètres de là, au-devant de terrains difficiles à traverser et alors qu'une tempête gigantesque se profile à l'horizon. Les responsables du village s'en remettent alors au seul homme capable de les sauver, Leonhard Seppala, accompagné de son chien de traîneau, Togo.",
        "popularity": 36.245,
        "poster_path": "/921q4gPNN4J6UxvKaw6SCNBe3F8.jpg",
        "release_date": "2019-12-20",
        "title": "Togo",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1828
    },
    {
        "adult": false,
        "backdrop_path": "/1p6cMqrxwLjTHmruMCWfpbTAxvt.jpg",
        "genre_ids": [
            18
        ],
        "id": 517814,
        "original_language": "ar",
        "original_title": "کفرناحوم",
        "overview": "Zain, un garçon de 12 ans, est présenté devant le juge. Le juge: «Pourquoi attaquez-vous vos parents en justice?» Zain: «Pour m'avoir donné la vie.»",
        "popularity": 26.488,
        "poster_path": "/aGVsSeRWytxiVMos7pxvFyvYy3L.jpg",
        "release_date": "2018-09-20",
        "title": "Capharnaüm",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1536
    },
    {
        "adult": false,
        "backdrop_path": "/5Lbm0gpFDRAPIV1Cth6ln9iL1ou.jpg",
        "genre_ids": [
            18,
            37
        ],
        "id": 68718,
        "original_language": "en",
        "original_title": "Django Unchained",
        "overview": "Dans le sud des États-Unis, deux ans avant la guerre de Sécession, le Dr King Schultz, un chasseur de primes allemand, fait l'acquisition de Django, un esclave qui peut l'aider à traquer les frères Brittle, les meurtriers qu'il recherche. Schultz promet à Django de lui rendre sa liberté lorsqu'il aura capturé les Brittle – morts ou vifs. Alors que les deux hommes pistent les dangereux criminels, Django n'oublie pas que son seul but est de retrouver Broomhilda, sa femme, dont il fut séparé à cause du commerce des esclaves… Lorsque Django et Schultz arrivent dans l'immense plantation du puissant Calvin Candie, ils éveillent les soupçons de Stephen, un esclave qui sert Candie et a toute sa confiance. Le moindre de leurs mouvements est désormais épié par une dangereuse organisation de plus en plus proche… Si Django et Schultz veulent espérer s'enfuir avec Broomhilda, ils vont devoir choisir entre l'indépendance et la solidarité, entre le sacrifice et la survie…",
        "popularity": 44.313,
        "poster_path": "/hodO0759IB5LbzUiiLKB50gT2UO.jpg",
        "release_date": "2012-12-25",
        "title": "Django Unchained",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 24753
    },
    {
        "adult": false,
        "backdrop_path": "/adlZgxAudw3ZPA0HUcDzSTKrH8B.jpg",
        "genre_ids": [
            16,
            10770,
            14,
            28
        ],
        "id": 755812,
        "original_language": "fr",
        "original_title": "Miraculous World : New York, les héros unis",
        "overview": "La classe de Marinette doit se rendre à New York, la ville des super héros, pour la semaine de l'amitié franco-américaine. Ladybug demande à Chat Noir de veiller sur Paris… mais quand Marinette convainc Gabriel de laisser son fils partir avec ses camarades, Adrien a un problème. Étant également Chat Noir en secret, il ne peut pas à la fois veiller sur Paris et être avec sa classe à New York. Comment faire ? De plus, Il y a une chose que Ladybug et Chat Noir ignorent : Papillon se prépare lui aussi à voyager ! Il se pourrait bien que les super héros américains aient besoin d'un peu d'aide !",
        "popularity": 40.614,
        "poster_path": "/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg",
        "release_date": "2020-12-18",
        "title": "Miraculous World : New York, les héros unis",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1024
    },
    {
        "adult": false,
        "backdrop_path": "/6WRrGYalXXveItfpnipYdayFkQB.jpg",
        "genre_ids": [
            18,
            53,
            80
        ],
        "id": 1422,
        "original_language": "en",
        "original_title": "The Departed",
        "overview": "À Boston, une lutte sans merci oppose la police à la pègre irlandaise. Pour mettre fin au règne du parrain Frank Costello, la police infiltre son gang avec « un bleu » issu des bas quartiers, Billy Costigan. Tandis que Billy s'efforce de gagner la confiance du malfrat vieillissant, Colin Sullivan entre dans la police au sein de l'Unité des Enquêtes Spéciales, chargée d'éliminer Costello. Mais Colin fonctionne en « sous‑marin » et informe Costello des opérations qui se trament contre lui. Risquant à tout moment d'être démasqués, Billy et Colin sont contraints de mener une double vie qui leur fait perdre leurs repères et leur identité. Traquenards et contre‑offensives s'enchaînent jusqu'au jour où chaque camp réalise qu'il héberge une taupe. Une course contre la montre s'engage entre les deux hommes avec un seul objectif : découvrir l'identité de l'autre sous peine d'y laisser sa peau…",
        "popularity": 46.634,
        "poster_path": "/xHeuF5zzlx1YxkULiz0mx1TMBJ7.jpg",
        "release_date": "2006-10-04",
        "title": "Les Infiltrés",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 13857
    },
    {
        "adult": false,
        "backdrop_path": "/wOfzdzC0QZyhUIlyjeMuUYSb8Ax.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 289,
        "original_language": "en",
        "original_title": "Casablanca",
        "overview": "À Casablanca, pendant la Seconde Guerre mondiale, le night-club le plus couru de la ville est tenu par Rick Blaine, un Américain en exil. Mais l'établissement sert également de refuge à ceux qui voudraient se procurer les papiers nécessaires pour quitter le pays. Lorsque Rick voit débarquer un soir le dissident politique Victor Laszlo et son épouse Ilsa, quelle n'est pas sa surprise de retrouver dans ces circonstances le grand amour de sa vie.",
        "popularity": 25.847,
        "poster_path": "/5tVekU5MvJjws4MDr3lXYL8tLjf.jpg",
        "release_date": "1943-01-15",
        "title": "Casablanca",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 4955
    },
    {
        "adult": false,
        "backdrop_path": "/hvj1gN9MRhTNsaCr3upb6gYChXF.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 872,
        "original_language": "en",
        "original_title": "Singin' in the Rain",
        "overview": "Les films muets laissent place aux films parlants - et le danseur devenu chanteur (Gene Kelly) est lui aussi pris dans cette transition compliquée, tout comme son ami (Donald O'Connor), sa petite amie (Debbie Reynolds) et sa désagréable co-star (Jean Hagen).",
        "popularity": 21.745,
        "poster_path": "/wPX0ZU7cGRZKJjnyeTqK7bTETTv.jpg",
        "release_date": "1952-04-09",
        "title": "Chantons sous la pluie",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2868
    },
    {
        "adult": false,
        "backdrop_path": "/hO7KbdvGOtDdeg0W4Y5nKEHeDDh.jpg",
        "genre_ids": [
            80,
            53,
            18
        ],
        "id": 475557,
        "original_language": "en",
        "original_title": "Joker",
        "overview": "Dans les années 1980, à Gotham City, Arthur Fleck, un humoriste de stand-up raté, bascule dans la folie et devient le Joker.",
        "popularity": 71.073,
        "poster_path": "/zDyT3gIeae39UgL9P6jL5Zc3zyt.jpg",
        "release_date": "2019-10-01",
        "title": "Joker",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 23526
    },
    {
        "adult": false,
        "backdrop_path": "/zvOJawrnmgK0sL293mOXOdLvTXQ.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 398818,
        "original_language": "en",
        "original_title": "Call Me by Your Name",
        "overview": "Été 1983. Elio Perlman, 17 ans, passe ses vacances dans la villa du XVIIe siècle que possède sa famille en Italie, à jouer de la musique classique, à lire et à flirter avec son amie Marzia. Son père, éminent professeur, et sa mère, traductrice, lui ont donné une excellente éducation. Un jour, Oliver, un séduisant Américain qui prépare son doctorat, vient travailler auprès du père d'Elio. Elio et Oliver vont bientôt découvrir l'éveil du désir...",
        "popularity": 34.696,
        "poster_path": "/mLXvHMUiob0fgT4G6RazE6X7SY0.jpg",
        "release_date": "2017-09-01",
        "title": "Call Me by Your Name",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 11399
    },
    {
        "adult": false,
        "backdrop_path": "/hiXMQiwpa0fqPJxWLSMWTbpiWn8.jpg",
        "genre_ids": [
            14,
            18
        ],
        "id": 422,
        "original_language": "it",
        "original_title": "8½",
        "overview": "Un cinéaste dépressif fuit le monde du cinéma et se réfugie dans un univers peuplé de fantasmes.",
        "popularity": 17.942,
        "poster_path": "/9MQdBEd4oetuKFZemxT6MisLgjg.jpg",
        "release_date": "1963-02-14",
        "title": "Huit et demi",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2070
    },
    {
        "adult": false,
        "backdrop_path": "/cCvp5Sni75agCtyJkNOMapORUQV.jpg",
        "genre_ids": [
            28,
            80,
            18
        ],
        "id": 111,
        "original_language": "en",
        "original_title": "Scarface",
        "overview": "En 1980, le gouvernement cubain expulse plusieurs centaines de prisonniers dangereux vers la Floride. Parmi eux, Tony Montana : ambitieux et sans scrupules, il élabore un plan pour prendre la place d'un caïd de la drogue.",
        "popularity": 59.188,
        "poster_path": "/pIFZCbL2t6J4cAWQuFiiHkJJs1z.jpg",
        "release_date": "1983-12-09",
        "title": "Scarface",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 10824
    },
    {
        "adult": false,
        "backdrop_path": "/4GWYk5VP9qu1rNSeNAwNaBy9mwS.jpg",
        "genre_ids": [
            10751,
            16
        ],
        "id": 399106,
        "original_language": "en",
        "original_title": "Piper",
        "overview": "Un petit oisillon affamé s'aventure hors du nid pour la première fois. Le problème, c'est que la nourriture est enfouie sous le sable, là où les effrayantes vagues viennent balayer le rivage…",
        "popularity": 13.785,
        "poster_path": "/rfEkkVzmrMYqGezNLl02mVyJCP2.jpg",
        "release_date": "2016-06-16",
        "title": "Piper",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1525
    },
    {
        "adult": false,
        "backdrop_path": "/kH8xW7K2Gp1KOXoeewcLPkfqZ8K.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 470044,
        "original_language": "en",
        "original_title": "The Hate U Give",
        "overview": "Starr est témoin de la mort de son meilleur ami d'enfance, Khalil, tué par balles par un officier de police. Confrontée aux nombreuses pressions de sa communauté, Starr doit trouver sa voix et se battre pour ce qui est juste.",
        "popularity": 21.091,
        "poster_path": "/7B3F6yELtvQvUA2xLk6Uq8VH0Cs.jpg",
        "release_date": "2018-10-19",
        "title": "The Hate U Give - La Haine qu'on donne",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1992
    },
    {
        "adult": false,
        "backdrop_path": "/bblKpucB0XbyQBmfXsaRN985Rgh.jpg",
        "genre_ids": [
            18
        ],
        "id": 458220,
        "original_language": "en",
        "original_title": "Palmer",
        "overview": "Après 12 ans en prison, l'ex-prodige du football Eddie Palmer revient chez lui pour repartir de zéro. Il se lie d'amitié avec un jeune garçon malmené par la vie, mais son passé trouble menace de réduire en cendres ce nouveau départ.",
        "popularity": 37.822,
        "poster_path": "/xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg",
        "release_date": "2021-01-29",
        "title": "Palmer",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 1316
    },
    {
        "adult": false,
        "backdrop_path": "/6aoyUbvu0419XLKLIMoH0TkEicH.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 103,
        "original_language": "en",
        "original_title": "Taxi Driver",
        "overview": "Vétéran de la Guerre du Vietnam, Travis Bickle est chauffeur de taxi dans la ville de New York. Ses rencontres nocturnes et la violence quotidienne dont il est témoin lui font peu à peu perdre la tête. Il se charge bientôt de délivrer une prostituée mineure de ses souteneurs.",
        "popularity": 45.388,
        "poster_path": "/iyHQrfNsjZlfHJ8hyhNi0yAFnZa.jpg",
        "release_date": "1976-02-09",
        "title": "Taxi Driver",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 11149
    },
    {
        "adult": false,
        "backdrop_path": "/iQlJyRecJeGGzQGT2rEcyAgz89F.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 762975,
        "original_language": "en",
        "original_title": "Purple Hearts",
        "overview": "Malgré tout ce qui les sépare, Cassie (Sofia Carson), qui aspire à devenir chanteuse, et Luke (Nicholas Galitzine), un marine marqué par la vie, décident de se marier pour bénéficier des avantages accordés aux militaires et à leurs épouses. Mais lorsque la tragédie les frappe, la frontière entre le vrai et le faux s'estompe peu à peu.",
        "popularity": 50.422,
        "poster_path": "/byLPCHeM57kJ3GMx6IZJMNiOUEf.jpg",
        "release_date": "2022-07-29",
        "title": "Nos cœurs meurtris",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2142
    },
    {
        "adult": false,
        "backdrop_path": "/r8pUcom5Mw8igtBpj3AHSAUvH0R.jpg",
        "genre_ids": [
            18,
            878
        ],
        "id": 19,
        "original_language": "de",
        "original_title": "Metropolis",
        "overview": "En 2026, une métropole à l'architecture fantastique vit sous le joug d'un groupe de tyrans. Les aristocrates se prélassent et se divertissent dans de somptueuses demeures et de luxuriants jardins, tandis que la grande masse de la population travaille, dort et survit durement dans les profondeurs de la terre. Le fils du maître de la ville découvre avec effarement l'existence du monde souterrain, où se rencontrent en secret les ouvriers, peu enclins à supporter pour toujours leur situation. Pendant ce temps, un savant invente une femme-robot qui doit détourner les opprimés de leur révolte…",
        "popularity": 16.199,
        "poster_path": "/vHDWZOpupmKB7iNuiWFqnUSjfmN.jpg",
        "release_date": "1927-02-06",
        "title": "Metropolis",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 2444
    },
    {
        "adult": false,
        "backdrop_path": "/7vsnnWXuYvUesLuoysnfVZC6nxa.jpg",
        "genre_ids": [
            18,
            10751
        ],
        "id": 406997,
        "original_language": "en",
        "original_title": "Wonder",
        "overview": "L'histoire de August Pullman, un petit garçon né avec une malformation du visage qui l'a empêché jusqu'à présent d'aller normalement à l'école. Aujourd'hui, il rentre en CM2 à l'école de son quartier. C'est le début d'une aventure humaine hors du commun. Chacun, dans sa famille, parmi ses nouveaux camarades de classe, et dans la ville toute entière, va être confronté à ses propres limites, à sa générosité de coeur ou à son étroitesse d'esprit. L'aventure d'Auggie finira par unir les gens autour de lui.",
        "popularity": 38.445,
        "poster_path": "/cTxheJP4o1hMw6cQ2TXVnrcPhmT.jpg",
        "release_date": "2017-11-13",
        "title": "Wonder",
        "video": false,
        "vote_average": 8.2,
        "vote_count": 7437
    },
    {
        "adult": false,
        "backdrop_path": "/vw3zNfzvnVNF7nIjpiEgcdznfeC.jpg",
        "genre_ids": [
            16,
            28,
            14
        ],
        "id": 664767,
        "original_language": "en",
        "original_title": "Mortal Kombat Legends: Scorpion's Revenge",
        "overview": "Après le massacre vicieux de sa famille par le mercenaire Sub-Zero, Hanzo Hasashi est exilé dans le Netherrealm. Là, en échange de sa servitude envers le sinistre Quan Chi, il a une chance de venger sa famille – et est ressuscité en tant que Scorpion, une âme perdue déterminée à se venger. De retour sur Earthrealm, Lord Raiden rassemble une équipe de guerriers d'élite – le moine Shaolin Liu Kang, l'officier des forces spéciales Sonya Blade et la star d'action Johnny Cage – une bande de héros improbable avec une chance de sauver l'humanité. Pour ce faire, ils doivent vaincre la horde de gladiateurs de Shang Tsung et régner sur le tournoi Mortal Kombat.",
        "popularity": 105.505,
        "poster_path": "/4VlXER3FImHeFuUjBShFamhIp9M.jpg",
        "release_date": "2020-04-12",
        "title": "Mortal Kombat Legends : Scorpion's Revenge",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1296
    },
    {
        "adult": false,
        "backdrop_path": "/h3weAFgg06GqchI2xDfufBgSFTj.jpg",
        "genre_ids": [
            18
        ],
        "id": 600354,
        "original_language": "en",
        "original_title": "The Father",
        "overview": "Alors qu'il vieillit et devient de moins en moins autonome, un père refuse l'aide de sa fille. Voyant la situation se dégrader, il commence à douter de ses proches, de son propre esprit et même de ce qui est réel.",
        "popularity": 26.358,
        "poster_path": "/8a0ocQ8shfXdNpGcFpr5Q3psM76.jpg",
        "release_date": "2020-12-23",
        "title": "The Father",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 2807
    },
    {
        "adult": false,
        "backdrop_path": "/bpV8wn48s82au37QyUJ51S7X2Vf.jpg",
        "genre_ids": [
            18
        ],
        "id": 489,
        "original_language": "en",
        "original_title": "Good Will Hunting",
        "overview": "Will Hunting est un authentique génie mais également un rebelle aux élans imprévisibles. Il est né dans le quartier populaire de South Boston et a arrêté très tôt ses études, refusant le brillant avenir que pouvait lui procurer son intelligence. Il vit désormais entouré d'une bande de copains et passe son temps dans les bars a chercher la bagarre et à commettre quelques petits délits qui risquent bien de l'envoyer en prison. C'est alors que ses dons prodigieux en mathématiques attirent l'attention du professeur Lambeau, du Massachusetts Institute of Technology...",
        "popularity": 43.645,
        "poster_path": "/dMxqv6b08mQCikVPZL4UBl2MuHR.jpg",
        "release_date": "1997-12-05",
        "title": "Will Hunting",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 11164
    },
    {
        "adult": false,
        "backdrop_path": "/AmR3JG1VQVxU8TfAvljUhfSFUOx.jpg",
        "genre_ids": [
            27,
            878
        ],
        "id": 348,
        "original_language": "en",
        "original_title": "Alien",
        "overview": "En 2122, le Nostromo, vaisseau de commerce, fait route vers la Terre avec à son bord un équipage de sept personnes en hibernation et une cargaison de minerais. Il interrompt soudain sa course suite à la réception d'un mystérieux message provenant d'une planète inexplorée. Réveillé par l'ordinateur de bord, l'équipage se rend sur place et découvre les restes d'un gigantesque vaisseau extraterrestre dont le seul passager semble être mort dans d'étranges circonstances…",
        "popularity": 63.371,
        "poster_path": "/l8CES84JndFlNfBNMxdLRYaLvI6.jpg",
        "release_date": "1979-05-25",
        "title": "Alien, le huitième passager",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 13274
    },
    {
        "adult": false,
        "backdrop_path": "/4JNggqfyJWREqb0enzpUMbvIniV.jpg",
        "genre_ids": [
            16,
            10751,
            35,
            14,
            18
        ],
        "id": 508442,
        "original_language": "en",
        "original_title": "Soul",
        "overview": "Passionné de jazz et professeur de musique dans un collège, Joe Gardner a enfin l'opportunité de réaliser son rêve : jouer dans le meilleur club de jazz de New York. Mais un malencontreux faux pas le précipite dans le « Grand Avant » – un endroit fantastique où les nouvelles âmes acquièrent leur personnalité, leur caractère et leur spécificité avant d'être envoyées sur Terre. Bien décidé à retrouver sa vie, Joe fait équipe avec 22, une âme espiègle et pleine d'esprit, qui n'a jamais saisi l'intérêt de vivre une vie humaine. En essayant désespérément de montrer à 22 à quel point l'existence est formidable, Joe pourrait bien découvrir les réponses aux questions les plus importantes sur le sens de la vie.",
        "popularity": 53.243,
        "poster_path": "/vzaI8Zc5eFuJoYbAe9X3vOlxouH.jpg",
        "release_date": "2020-12-25",
        "title": "Soul",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 9525
    },
    {
        "adult": false,
        "backdrop_path": "/3k2TRmqMjgt7tcwkYwZQdctnty3.jpg",
        "genre_ids": [
            18,
            10752
        ],
        "id": 600,
        "original_language": "en",
        "original_title": "Full Metal Jacket",
        "overview": "Pendant la guerre du Viêt Nam, la préparation et l'entraînement d'un groupe de jeunes marines, jusqu'au terrible baptême du feu et la sanglante offensive du Tết à Hue, en 1968.",
        "popularity": 31.404,
        "poster_path": "/cShwwkz4gBBIRj8yFy8TP2tEWZ4.jpg",
        "release_date": "1987-06-26",
        "title": "Full Metal Jacket",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 9716
    },
    {
        "adult": false,
        "backdrop_path": "/aCHn2TXYJfzPXQKA6r9mKPbMlUB.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 37165,
        "original_language": "en",
        "original_title": "The Truman Show",
        "overview": "Il est la vedette d'un show télévisé - mais il ne le sait pas. Jim Carrey a conquis à la fois les critiques et le public pour sa prestation inoubliable dans ce chef-d'œuvre de Peter Weir. Il interprète Truman Burbank, un homme dont la vie entière est un show télévisé - Ses moindres faits et gestes sont filmés à son insu par un créateur/réalisateur/producteur avant-gardiste : la ville entière est un immense studio de cinéma ; ses voisins, ses collègues, ses amis et même sa femme sont des acteurs professionnels d'Hollywood. Un jour pourtant, Truman se doute de quelque chose. Sa réaction face à cette découverte vous fera rire, pleurer et vous émerveillera comme aucun film ne l'a jamais fait.",
        "popularity": 69.274,
        "poster_path": "/7p5MzMb4h0Y2WUn73r4MHKNeh3X.jpg",
        "release_date": "1998-06-04",
        "title": "The Truman Show",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 16913
    },
    {
        "adult": false,
        "backdrop_path": "/zPbu0CFnAT2kYfbGWjgZBTajmzi.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 439,
        "original_language": "it",
        "original_title": "La dolce vita",
        "overview": "Le chroniqueur Marcello fait le tour des lieux à scandale de Rome pour alimenter les potins d'un journal à fort tirage. Il rencontre une faune corrompue et dérisoire qui feint de s'amuser et dissimule mal son ennui.",
        "popularity": 18.695,
        "poster_path": "/dAIN4mz33ZMReIAanfIZ3iIlJKE.jpg",
        "release_date": "1960-02-05",
        "title": "La dolce vita",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1685
    },
    {
        "adult": false,
        "backdrop_path": "/jqFjgNnxpXIXWuPsyfqmcLXRo9p.jpg",
        "genre_ids": [
            80,
            53
        ],
        "id": 500,
        "original_language": "en",
        "original_title": "Reservoir Dogs",
        "overview": "Après un hold-up manqué, des cambrioleurs de haut vol font leurs comptes dans une confrontation violente, pour découvrir lequel d'entre eux les a trahis.",
        "popularity": 30.543,
        "poster_path": "/p61wwD0jWfgbhg9Ja9uoDZdS8YE.jpg",
        "release_date": "1992-09-02",
        "title": "Reservoir Dogs",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 13351
    },
    {
        "adult": false,
        "backdrop_path": "/BBVAUchYvkmPThVIqipgAfabfl.jpg",
        "genre_ids": [
            18
        ],
        "id": 614,
        "original_language": "sv",
        "original_title": "Smultronstället",
        "overview": "Le docteur Isak Borg part à Lund pour assister à une cérémonie de jubilé en son honneur. Au cours de ce voyage, dans sa propre limousine et accompagné de sa bru, il fait le point sur sa vie et finalement se réconcilie avec lui-même.",
        "popularity": 13.48,
        "poster_path": "/sSwqjBEHTnu2fsATr4hndlZZYyV.jpg",
        "release_date": "1957-12-26",
        "title": "Les Fraises sauvages",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1482
    },
    {
        "adult": false,
        "backdrop_path": "/sTp8K0SfcC2RQef1Tu160z3niHO.jpg",
        "genre_ids": [
            18,
            35,
            10752
        ],
        "id": 935,
        "original_language": "en",
        "original_title": "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
        "overview": "Le général Jack Ripper, convaincu que les Russes ont décidé d'empoisonner l'eau potable des États-Unis, lance sur l'URSS une offensive de bombardiers B-52 en ayant pris soin d'isoler la base aérienne de Burpelson du reste du monde. Pendant ce temps, Muffley, le Président des États-Unis, convoque l'état-major militaire dans la salle d'opérations du Pentagone et tente de rétablir la situation.",
        "popularity": 19.527,
        "poster_path": "/2FAPp70o9zIH21qz71KGrjYcftS.jpg",
        "release_date": "1964-01-29",
        "title": "Dr Folamour",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 5138
    },
    {
        "adult": false,
        "backdrop_path": "/cXQH2u7wUIX1eoIdEj51kHXoWhX.jpg",
        "genre_ids": [
            35,
            80
        ],
        "id": 100,
        "original_language": "en",
        "original_title": "Lock, Stock and Two Smoking Barrels",
        "overview": "Eddy, un joueur invétéré, s'apprête à participer à la plus grosse partie de cartes de sa vie avec un enjeu de cent mille livres, somme qu'il a durement amassée avec ses trois acolytes, Tom, Baco et Soap. Eddy est considéré comme l'un des meilleurs joueurs du circuit, mais la partie s'avère être un coup monté à l'issue duquel il doit cinq cent mille livres à son adversaire Hatchet Harry. Ce dernier lui donne une semaine pour réunir cette somme, sinon il aura les doigts coupés. Seul JD, le père d'Eddy, pourrait annuler la dette en cédant son bar à son vieux rival, Harry.",
        "popularity": 14.025,
        "poster_path": "/yCWGMcU0rI0dGq0snlKlCf9RZXR.jpg",
        "release_date": "1998-08-28",
        "title": "Arnaques, crimes et botanique",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 6099
    },
    {
        "adult": false,
        "backdrop_path": "/lgSNjIL44nnidHL7NBYI12nKoFD.jpg",
        "genre_ids": [
            80,
            53
        ],
        "id": 996,
        "original_language": "en",
        "original_title": "Double Indemnity",
        "overview": "Walter Neff, un employé d'une compagnie d'assurances, tombe amoureux de sa cliente et échafaude avec elle un plan pour supprimer le mari encombrant et ainsi partager avec elle l'assurance-vie de ce dernier.",
        "popularity": 20.867,
        "poster_path": "/drQOVMFowbjonav5zV651XK0WWN.jpg",
        "release_date": "1944-06-14",
        "title": "Assurance sur la mort",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1623
    },
    {
        "adult": false,
        "backdrop_path": "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
        "genre_ids": [
            80,
            18,
            9648
        ],
        "id": 548,
        "original_language": "ja",
        "original_title": "羅生門",
        "overview": "Kyoto, au XIe siècle. Sous le portique d'un vieux temple en ruines, Rashômon, trois hommes s'abritent de la pluie. Les guerres et les famines font rage. Pourtant un jeune moine et un vieux bûcheron sont plus terrifiés encore par le procès auquel ils viennent d'assister. Ils sont si troublés qu'ils vont obliger le troisième voyageur à écouter le récit de ce procès : celui d'un célèbre bandit accusé d'avoir violé une jeune femme et tué son mari, un samouraï. Le drame a eu lieu dans la forêt à l'orée de laquelle est situé le portique de Rashômon. L'histoire est simple : Qui a tué le mari ? Le bandit Tajomaru, la femme, un bûcheron qui passait ou le mari lui-même qui se serait suicidé ? Autant d'hypothèses vraisemblables. Mais les dépositions des témoins devant le tribunal apportent à chaque fois une version différente du drame, et la vérité ne percera qu'après de nouvelles révélations surprenantes...",
        "popularity": 24.12,
        "poster_path": "/zqc86MkNP2382tiXtBE1jn0XW7V.jpg",
        "release_date": "1950-08-26",
        "title": "Rashômon",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1969
    },
    {
        "adult": false,
        "backdrop_path": "/xl4t4ButJaBqdi5va3mZexlC004.jpg",
        "genre_ids": [
            18
        ],
        "id": 705,
        "original_language": "en",
        "original_title": "All About Eve",
        "overview": "Ève Harrington reçoit, des mains d'un vieil acteur, le prix Sarah Siddons. L'entourage de celle-ci se souvient de son ascension.",
        "popularity": 14.606,
        "poster_path": "/pR2Cf9CvAiF5ofjGlmzr2EJNoHI.jpg",
        "release_date": "1950-10-06",
        "title": "Ève",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1396
    },
    {
        "adult": false,
        "backdrop_path": "/1ZSWFzAP4AZuFCigZZoib2RdcUO.jpg",
        "genre_ids": [
            18,
            9648,
            53
        ],
        "id": 411088,
        "original_language": "es",
        "original_title": "Contratiempo",
        "overview": "Après s'être réveillé à côté du corps sans vie de sa petite amie à l'hôtel, un homme d'affaires engage une grande avocate pour comprendre ce qui s'est passé.",
        "popularity": 36.527,
        "poster_path": "/9C3kmMtwtddbZSHsGpVZAueFYmy.jpg",
        "release_date": "2017-01-06",
        "title": "L'Accusé",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 4220
    },
    {
        "adult": false,
        "backdrop_path": "/zd7mu6dJKxkVtBdXqlEQ9W3msKl.jpg",
        "genre_ids": [
            18,
            53
        ],
        "id": 11878,
        "original_language": "ja",
        "original_title": "用心棒",
        "overview": "À la fin de l'ère Edo, un samouraï, Sanjuro, arrive dans un village écartelé entre deux bandes rivales, menées d'un côté par le bouilleur de saké, de l'autre par le courtier en soie. Les deux bandes veulent s'adjoindre les services de Sanjuro…",
        "popularity": 21.321,
        "poster_path": "/2o0wBhokLzemNkZ1uQr4JspjeRO.jpg",
        "release_date": "1961-04-25",
        "title": "Le Garde du corps",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1274
    },
    {
        "adult": false,
        "backdrop_path": "/ksdencRboJK5L17GFfRJ0UnLVVh.jpg",
        "genre_ids": [
            80,
            28,
            18,
            53
        ],
        "id": 9702,
        "original_language": "en",
        "original_title": "Bound by Honor",
        "overview": "Dans les années 1970, Miklo, issu d'un métissage américain et mexicain, est en liberté conditionnelle. Lorsqu'il frappe son père à Las Vegas, il retourne immédiatement dans son quartier d'origine à East Los Angeles. Il y retrouve sa famille maternelle et mexicaine, dont principalement Paco et Cruzito, ses cousins. Malgré sa peau blanche, Miklo reste un chicano, mais lorsqu'avant la fin de sa probation il veut son tatouage \"Vatos Locos\" et que pour cela il doit faire ses preuves, il n'hésite pas attaquer un gang rival, ce qui va engendrer une guerre et la séparation des trois chicanos.",
        "popularity": 33.144,
        "poster_path": "/i9Mj2DS1Gka2wKJT4hMHeQqA38Z.jpg",
        "release_date": "1993-02-05",
        "title": "Les Princes de la ville",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1155
    },
    {
        "adult": false,
        "backdrop_path": "/imUJOrtNf8EWameChpaRLXSaX4w.jpg",
        "genre_ids": [
            16,
            18,
            14
        ],
        "id": 149871,
        "original_language": "ja",
        "original_title": "かぐや姫の物語",
        "overview": "Adapté d'un conte populaire japonais \"Le coupeur de bambou\", un des textes fondateurs de la littérature japonaise, Kaguya, \"la princesse lumineuse\", est découverte dans la tige d'un bambou par des paysans. Elle devient très vite une magnifique jeune femme que les plus grands princes convoitent : ceux-ci vont devoir relever d'impossibles défis dans l'espoir d'obtenir sa main.",
        "popularity": 22.608,
        "poster_path": "/diSMW0WtztzGyRY5KaEehmVxzZ8.jpg",
        "release_date": "2013-11-23",
        "title": "Le Conte de la princesse Kaguya",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1573
    },
    {
        "adult": false,
        "backdrop_path": "/n4GJFGzsc7NinI1VeGDXIcQjtU2.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 843,
        "original_language": "cn",
        "original_title": "花樣年華",
        "overview": "Hong Kong, 1962. M. et Mme Chow emménagent dans leur nouvel appartement le même jour que leurs voisins, M. et Mme Chan. Sans comprendre comment cela a commencé, Chow Mo-wan et Chan Li-zhen apprennent que leurs époux respectifs ont une liaison. Cette découverte les choque mais les rapproche. Ils se voient de plus en plus souvent mais le voisinage commence à s'en apercevoir. Il semble n'y avoir aucune possibilité pour eux de vivre une relation amoureuse. Mais la retenue, les réserves émotionnelles de Mme Chan hantent M. Chow, qui sent ses sentiments changer.",
        "popularity": 28.998,
        "poster_path": "/9iciwUJTFBbjnmwfgkg6jmt8zHa.jpg",
        "release_date": "2000-09-29",
        "title": "In the Mood for Love",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 2355
    },
    {
        "adult": false,
        "backdrop_path": "/5zTwAcnI3zCJ0mucPPnoBtkSWEV.jpg",
        "genre_ids": [
            35,
            10749,
            80
        ],
        "id": 239,
        "original_language": "en",
        "original_title": "Some Like It Hot",
        "overview": "Deux musiciens de jazz au chômage, mêlés involontairement à un règlement de comptes entre gangsters, se transforment en musiciennes pour leur échapper. Ils partent en Floride avec un orchestre féminin. Ils tombent illico amoureux d'une ravissante et blonde créature, Alouette, qui veut épouser un milliardaire…",
        "popularity": 27.579,
        "poster_path": "/euufDAwaAcCOxD4l0c5nsS8YBca.jpg",
        "release_date": "1959-03-19",
        "title": "Certains l'aiment chaud",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 3168
    },
    {
        "adult": false,
        "backdrop_path": "/n5A7brJCjejceZmHyujwUTVgQNC.jpg",
        "genre_ids": [
            14,
            12
        ],
        "id": 12445,
        "original_language": "en",
        "original_title": "Harry Potter and the Deathly Hallows: Part 2",
        "overview": "Le combat entre les puissances du bien et du mal de l'univers des sorciers se transforme en guerre sans merci. L'école Poudlard est désormais sous la coupe du professeur Rogue et des force des ténèbres. Les enjeux sont devenus considérables et personne n'est plus en sécurité alors que se rapproche l'ultime épreuve de force avec Voldemort…",
        "popularity": 104.201,
        "poster_path": "/alQOPmKEPHkH4BLMEla1vTNYrUr.jpg",
        "release_date": "2011-07-12",
        "title": "Harry Potter et les Reliques de la mort - 2ème partie",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 19252
    },
    {
        "adult": false,
        "backdrop_path": "/xKb6mtdfI5Qsggc44Hr9CCUDvaj.jpg",
        "genre_ids": [
            28,
            53,
            878
        ],
        "id": 280,
        "original_language": "en",
        "original_title": "Terminator 2: Judgment Day",
        "overview": "En 2029, après leur échec pour éliminer Sarah Connor, les robots de Skynet programment un nouveau Terminator, le T-1000, pour retourner dans le passé et éliminer son fils John Connor, futur leader de la résistance humaine. Ce dernier programme un autre cyborg, le T-800, et l'envoie également en 1995, pour le protéger. Une seule question déterminera le sort de l'humanité : laquelle des deux machines trouvera John la première ?",
        "popularity": 66.733,
        "poster_path": "/mKCG5N5gDjDmxg07PXWsrPVrdCg.jpg",
        "release_date": "1991-07-03",
        "title": "Terminator 2 : Le Jugement dernier",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 11802
    },
    {
        "adult": false,
        "backdrop_path": "/7zN7m5jEyrNxFYm2EbQJAZwAG5i.jpg",
        "genre_ids": [
            18
        ],
        "id": 103663,
        "original_language": "da",
        "original_title": "Jagten",
        "overview": "Après un divorce difficile, Lucas, quarante ans, a trouvé une nouvelle petite amie, un nouveau travail et il s'applique à reconstruire sa relation avec Marcus, son fils adolescent. Mais quelque chose tourne mal. Presque rien. Une remarque en passant. Un mensonge fortuit. Et alors que la neige commence à tomber et que les lumières de Noël s'illuminent, le mensonge se répand comme un virus invisible. La stupeur et la méfiance se propagent et la petite communauté plonge dans l'hystérie collective, obligeant Lucas à se battre pour sauver sa vie et sa dignité.",
        "popularity": 20.847,
        "poster_path": "/rWvp8PaWrieqoUTgEwRMo7RsELj.jpg",
        "release_date": "2012-10-25",
        "title": "La Chasse",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 3771
    },
    {
        "adult": false,
        "backdrop_path": "/bgc85fJzUIzXa3ghrRzST5kuTPu.jpg",
        "genre_ids": [
            878,
            18,
            10749
        ],
        "id": 38,
        "original_language": "en",
        "original_title": "Eternal Sunshine of the Spotless Mind",
        "overview": "Joël et Clémentine ne voient plus que les mauvais côtés de leur tumultueuse histoire d'amour, au point que celle-ci fait effacer de sa mémoire toute trace de cette relation. Effondré, Joël contacte l'inventeur du procédé Lacuna, le Dr. Mierzwiak, pour qu'il extirpe également de sa mémoire tout ce qui le rattachait à Clémentine. Deux techniciens, Stan et Patrick, s'installent à son domicile et se mettent à l'œuvre, en présence de la secrétaire, Mary. Les souvenirs commencent à défiler dans la tête de Joël, des plus récents aux plus anciens, et s'envolent un à un, à jamais. Mais en remontant le fil du temps, Joël redécouvre ce qu'il aimait depuis toujours en Clémentine – l'inaltérable magie d'un amour dont rien au monde ne devrait le priver. Luttant de toutes ses forces pour préserver ce trésor, il engage alors une bataille de la dernière chance contre Lacuna…",
        "popularity": 40.676,
        "poster_path": "/5Usvr9gugSBYPoDGlpuKoSzyk0g.jpg",
        "release_date": "2004-03-19",
        "title": "Eternal Sunshine of the Spotless Mind",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 13770
    },
    {
        "adult": false,
        "backdrop_path": "/jNICaPciTja37SkbSZh4XCsA0Q6.jpg",
        "genre_ids": [
            18,
            10752,
            9648
        ],
        "id": 46738,
        "original_language": "fr",
        "original_title": "Incendies",
        "overview": "À la lecture du testament de leur mère, Jeanne et Simon Marwan se voient remettre deux enveloppes : l'une destinée à un père qu'ils croyaient mort et l‘autre à un frère dont ils ignoraient l'existence. Jeanne voit dans cet énigmatique legs la clé du silence de sa mère, enfermée dans un mutisme inexpliqué les dernières semaines précédant sa mort. Elle décide immédiatement de partir au Moyen Orient exhumer le passé de cette famille dont elle ne sait presque rien… Simon, lui, n'a que faire des caprices posthumes de cette mère qui s'est toujours montrée distante. Mais son amour pour sa sœur jumelle le poussera bientôt à rejoindre Jeanne et à sillonner avec elle le pays de leurs ancêtres sur la piste d'une mère bien loin de celle qu'ils ont connue.",
        "popularity": 18.36,
        "poster_path": "/zQdcNGCi4aVIv02wMHaTWlF7M2w.jpg",
        "release_date": "2010-09-04",
        "title": "Incendies",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 2346
    },
    {
        "adult": false,
        "backdrop_path": "/r8Un26Y8GhcIdtmVZVnUOccnHaj.jpg",
        "genre_ids": [
            18,
            53,
            80
        ],
        "id": 832,
        "original_language": "de",
        "original_title": "M - Eine Stadt sucht einen Mörder",
        "overview": "Toute la presse ne parle que de ça : le maniaque tueur d'enfants, qui terrorise la ville depuis quelques temps, vient de faire une nouvelle victime. Chargé de l'enquête, le commissaire Lohmann multiplie les rafles dans les bas-fonds. Gênée par toute cette agitation la pègre décide de retrouver elle-même le criminel : elle charge les mendiants et les clochards de surveiller chaque coin de rue…",
        "popularity": 21.248,
        "poster_path": "/6ggCgD8LLGT3rGukHdTxFWna1qq.jpg",
        "release_date": "1931-05-11",
        "title": "M le maudit",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1928
    },
    {
        "adult": false,
        "backdrop_path": "/rBm6yOxATXUMdlp5H3QWC9vgXVD.jpg",
        "genre_ids": [
            18,
            53,
            80
        ],
        "id": 146233,
        "original_language": "en",
        "original_title": "Prisoners",
        "overview": "Dans la banlieue de Boston, deux fillettes de 6 ans, Anna et Joy, ont disparu. Le détective Loki privilégie la thèse du kidnapping suite au témoignage de Keller, le père d'Anna. Le suspect numéro 1 est rapidement arrêté mais est relâché quelques jours plus tard faute de preuve, entrainant la fureur de Keller. Aveuglé par sa douleur, le père dévasté se lance alors dans une course contre la montre pour retrouver les enfants disparus. De son côté, Loki essaie de trouver des indices pour arrêter le coupable avant que Keller ne commette l'irréparable… Les jours passent et les chances de retrouver les fillettes s'amenuisent…",
        "popularity": 32.088,
        "poster_path": "/fUk1f0iOAezl5PZ7gQW6nrguOXk.jpg",
        "release_date": "2013-09-19",
        "title": "Prisoners",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 10806
    },
    {
        "adult": false,
        "backdrop_path": "/moTOuNKnM2phZCYPF49Y1Hb7WJj.jpg",
        "genre_ids": [
            18
        ],
        "id": 655,
        "original_language": "en",
        "original_title": "Paris, Texas",
        "overview": "Un homme réapparaît subitement après quatre années d'errance, période sur laquelle il ne donne aucune explication à son frère venu le retrouver. Accompagné de son fils, il part au Texas à la recherche de Jane, la mère de l'enfant. Une quête vers l'inconnu, une découverte mutuelle réunit ces deux êtres au passé tourmenté.",
        "popularity": 21.513,
        "poster_path": "/u7fVugekkAeFLiEBuUOLrpI7MyO.jpg",
        "release_date": "1984-07-16",
        "title": "Paris, Texas",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1560
    },
    {
        "adult": false,
        "backdrop_path": "/viGCwLxupyoaLsa6hrnu1gYrB0B.jpg",
        "genre_ids": [
            18
        ],
        "id": 406,
        "original_language": "fr",
        "original_title": "La Haine",
        "overview": "Trois copains d'une banlieue ordinaire traînent leur ennui et leur jeunesse qui se perd. Ils vont vivre la journée la plus importante de leur vie après une nuit d'émeutes provoquée par le passage à tabac d'Abdel Ichah par un inspecteur de police lors d'un interrogatoire.",
        "popularity": 20.25,
        "poster_path": "/bW4tXG8kZ89ZCurPnzDDSzJbeF5.jpg",
        "release_date": "1995-05-31",
        "title": "La Haine",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 3636
    },
    {
        "adult": false,
        "backdrop_path": "/8LRcCJjbQI552BMCuGgYqph8USS.jpg",
        "genre_ids": [
            18
        ],
        "id": 7345,
        "original_language": "en",
        "original_title": "There Will Be Blood",
        "overview": "Lorsque Daniel Plainview entend parler d'une petite ville de Californie où l'on dit qu'un océan de pétrole coulerait littéralement du sol, il décide d'aller tenter sa chance et part avec son fils H.W. à Little Boston. Dans cet endroit perdu où chacun lutte pour survivre et où l'unique distraction est l'église animée par le charismatique prêtre Eli Sunday, Plainview et son fils voient le sort leur sourire. Même si le pétrole comble leurs attentes et fait leur fortune, plus rien ne sera comme avant : les tensions s'intensifient, les conflits éclatent et les valeurs humaines comme l'amour, l'espoir, le sens de la communauté, les croyances, l'ambition et même les liens entre père et fils sont mis en péril par la corruption, la trahison… et le pétrole.",
        "popularity": 25.486,
        "poster_path": "/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
        "release_date": "2007-12-26",
        "title": "There Will Be Blood",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 6018
    },
    {
        "adult": false,
        "backdrop_path": "/fgffluhvdOv79SkYaKrfRA0xkf4.jpg",
        "genre_ids": [
            18
        ],
        "id": 334543,
        "original_language": "en",
        "original_title": "Lion",
        "overview": "Une incroyable histoire vraie :  À 5 ans, Saroo se retrouve seul dans un train traversant l'Inde qui l'emmène malgré lui à des milliers de kilomètres de sa famille. Perdu, le petit garçon doit apprendre à survivre seul dans l'immense ville de Calcutta.  Après des mois d'errance, il est recueilli dans un orphelinat et adopté par un couple d'Australiens.  25 ans plus tard, Saroo est devenu un véritable Australien, mais il pense toujours à sa famille en Inde. Armé de quelques rares souvenirs et d'une inébranlable détermination, il commence à parcourir des photos satellites sur Google Earth, dans l'espoir de reconnaître son village.  Mais peut-on imaginer retrouver une simple famille dans un pays d'un milliard d'habitants ?",
        "popularity": 23.314,
        "poster_path": "/kIkf33jYUpENZOVm8aQjvRjxFhB.jpg",
        "release_date": "2016-11-24",
        "title": "Lion",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 6209
    },
    {
        "adult": false,
        "backdrop_path": "/pgEWI7yGYF0mM5Uf1YxSOHsBkJR.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 4348,
        "original_language": "en",
        "original_title": "Pride & Prejudice",
        "overview": "Elizabeth Bennet, 20 ans, est la seconde fille de Mr et Mrs Bennet. Elle grandit aux cotés de ses quatre autres sœurs et affectionne particulièrement Jane, de deux ans son aînée. Cette dernière est réputée pour sa douceur et sa beauté dans toute la ville de Meryton. Elizabeth, quant à elle, est une jeune fille ravissante, vive d'esprit, aimant observer la société dans laquelle elle évolue mais aimant surtout se moquer des sottises d'autrui. La famille Bennet est simple et très liée, faisant fi de certaines convenances exigée par l'étiquette à l'époque de Jane Austen. Mrs Bennet n'a qu'une idée en tête : marier ses cinq filles afin d'assurer leur avenir ainsi que celui de toute la famille.",
        "popularity": 50.926,
        "poster_path": "/hPJ51MhWSNUXTbTHYPyfLz4qwgK.jpg",
        "release_date": "2005-09-16",
        "title": "Orgueil & Préjugés",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 7432
    },
    {
        "adult": false,
        "backdrop_path": "/oQHF0Y4gCw6VdPmapjsbZoxY2ht.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 359940,
        "original_language": "en",
        "original_title": "Three Billboards Outside Ebbing, Missouri",
        "overview": "Après des mois sans que l'enquête sur la mort de sa fille ait avancé, Mildred Hayes prend les choses en main, affichant un message controversé visant le très respecté chef de la police sur trois grands panneaux à l'entrée de leur ville.",
        "popularity": 23.224,
        "poster_path": "/dI6EruCntFCEhnSQSrFdCs9UWVY.jpg",
        "release_date": "2017-12-01",
        "title": "3 Billboards : Les Panneaux de la vengeance",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 9459
    },
    {
        "adult": false,
        "backdrop_path": "/fK5ssgvtI43z19FoWigdlqgpLRE.jpg",
        "genre_ids": [
            16,
            10751,
            878
        ],
        "id": 10681,
        "original_language": "en",
        "original_title": "WALL·E",
        "overview": "Faites la connaissance de WALL•E (prononcez « Walli ») : WALL•E est le dernier être sur Terre et s'avère être un… petit robot ! 700 ans plus tôt, l'humanité a déserté notre planète laissant à cette incroyable petite machine le soin de nettoyer la Terre. Mais au bout de ces longues années, WALL•E a développé un petit défaut technique : une forte personnalité. Extrêmement curieux, très indiscret, il est surtout un peu trop seul…\r Cependant, sa vie s'apprête à être bouleversée avec l'arrivée d'une petite « robote », bien carénée et prénommée EVE. Tombant instantanément et éperdument amoureux d'elle, WALL•E va tout mettre en œuvre pour la séduire. Et lorsqu'EVE est rappelée dans l'espace pour y terminer sa mission, WALL•E n'hésite pas un seul instant : il se lance à sa poursuite… Hors de question pour lui de laisser passer le seul amour de sa vie… Pour être à ses côtés, il est prêt à aller au bout de l'univers et vivre la plus fantastique des aventures !",
        "popularity": 60.197,
        "poster_path": "/qFmoOgaXN280oMnAIPdI01KTxBY.jpg",
        "release_date": "2008-06-22",
        "title": "WALL·E",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 17515
    },
    {
        "adult": false,
        "backdrop_path": "/tRI6Csmw4rKzMYDrfUx5xtyBSVE.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 387,
        "original_language": "de",
        "original_title": "Das Boot",
        "overview": "Pendant la deuxième Guerre Mondiale, 40 000 sous-mariniers allemands envoyés par Hitler embarquent pour une mission de routine dans l'Atlantique Nord. L'insouciance règne à bord. Ce qu'ils ne savent pas, c'est que seuls 10 000 hommes retourneront chez eux vivants.",
        "popularity": 24.537,
        "poster_path": "/gvOqpu8E8lRX3XFcEavzDeMUC8t.jpg",
        "release_date": "1981-09-17",
        "title": "Le Bateau",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1999
    },
    {
        "adult": false,
        "backdrop_path": "/lntyt4OVDbcxA1l7LtwITbrD3FI.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 1010581,
        "original_language": "es",
        "original_title": "Culpa mía",
        "overview": "Noah doit quitter sa ville, son petit ami et ses amis pour emménager dans le manoir de William Leister, le nouveau et riche mari de sa mère. Âgée de dix-sept ans, fière et indépendante, Noah rencontre Nick, son nouveau demi-frère, et leurs fortes personnalités s'entrechoquent dès le début. Noah découvre bientôt que derrière l'image d'un fils modèle, Nick cache une vie de bagarre, de jeu et de courses automobiles illégales. Malgré l'abîme qui les sépare, tous deux commencent à ressentir une attirance irrésistible qui se transformera bientôt en feu et en folle passion. Ni la rivalité permanente, ni l'opposition de leur entourage ne peuvent les empêcher de tomber secrètement et follement amoureux. Mais le présent turbulent de Nick et le passé orageux de Noah mettront à l'épreuve leur vie et leur amour interdit.",
        "popularity": 269.02,
        "poster_path": "/3ZCfSSxZ2e4Kiwu3Y9dvfT5n1m6.jpg",
        "release_date": "2023-06-08",
        "title": "À contre-sens",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1798
    },
    {
        "adult": false,
        "backdrop_path": "/r7DuyYJ0N3cD8bRKsR5Ygq2P7oa.jpg",
        "genre_ids": [
            12,
            28,
            18
        ],
        "id": 980489,
        "original_language": "en",
        "original_title": "Gran Turismo",
        "overview": "Gran Turismo est inspiré de l'incroyable histoire vécue d'une invraisemblable bande d'infortunés – un amateur de jeu vidéo de classe ouvrière, un ex-pilote d'autos de course paumé et un idéaliste de l'industrie du sport motorisé. Ensemble, ils risquent tout pour percer dans le sport le plus prestigieux au monde. Gran Turismo est une captivante histoire et un feu roulant d'action qui prouvent que tout est possible lorsqu'on conduit avec l'énergie du désespoir.",
        "popularity": 842.156,
        "poster_path": "/vRIHkkuI6FKqUHPJbABbNLRM3VI.jpg",
        "release_date": "2023-08-09",
        "title": "Gran Turismo",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1101
    },
    {
        "adult": false,
        "backdrop_path": "/w5IDXtifKntw0ajv2co7jFlTQDM.jpg",
        "genre_ids": [
            878,
            9648,
            12
        ],
        "id": 62,
        "original_language": "en",
        "original_title": "2001: A Space Odyssey",
        "overview": "Aux temps préhistoriques, une petite tribu d'hommes-singes installée au milieu de rochers arides lutte difficilement pour la vie. Un matin, ils trouvent devant eux une mystérieuse dalle noire monolithique. L'un des singes touche la pierre et apprend alors à se servir d'un os de quadrupède pour tuer ses ennemis. Quatre millions d'années plus tard, en 2001, un savant de l'espace, le Dr Heywood Floyd, débarque sur la lune pour examiner une dalle noire semblable à celle des singes, qui était enterrée sous la surface de l'astre. Selon les premières observations, l'objet émettrait un signal mystérieux…",
        "popularity": 39.146,
        "poster_path": "/jNSk4dXs1cHu0SoLxmmZ2W6CYKl.jpg",
        "release_date": "1968-04-02",
        "title": "2001 : l'odyssée de l'espace",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 10630
    },
    {
        "adult": false,
        "backdrop_path": "/fxYazFVeOCHpHwuqGuiqcCTw162.jpg",
        "genre_ids": [
            14,
            16,
            10751
        ],
        "id": 8392,
        "original_language": "ja",
        "original_title": "となりのトトロ",
        "overview": "Mei, 4 ans, et Satsuki, 10 ans, s'installent à la campagne avec leur père pour se rapprocher de l'hôpital où séjourne leur mère. Elles découvrent la nature tout autour de la maison et, surtout, l'existence d'animaux étranges et merveilleux, les Totoros, avec qui elles deviennent très amies. Un jour, alors que Satsuki et Mei attendent le retour de leur mère, elles apprennent que sa sortie de l'hôpital a été repoussée. Mei décide alors d'aller lui rendre visite seule. Satsuki et les gens du village la recherchent en vain. Désespérée, Satsuki va finalement demander de l'aide à son voisin Totoro.",
        "popularity": 43.833,
        "poster_path": "/eEpy8IiR8N0S6mgkdAjDCMlMYQO.jpg",
        "release_date": "1988-04-16",
        "title": "Mon voisin Totoro",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 7170
    },
    {
        "adult": false,
        "backdrop_path": "/gfR3GEClL7WrNpQOg8mcPhM8fx6.jpg",
        "genre_ids": [
            28,
            18,
            36
        ],
        "id": 11645,
        "original_language": "ja",
        "original_title": "乱",
        "overview": "Dans le Japon du XVIème siècle, le seigneur Hidetora Ichimonji décide de se retirer et de partager son domaine entre ses trois fils, Taro, Jiro et Saburo. Mais la répartition de cet héritage va déchirer la famille.",
        "popularity": 19.05,
        "poster_path": "/7u1Hk0YTt2bwYbjUitIypGEmcbZ.jpg",
        "release_date": "1985-06-01",
        "title": "Ran",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1370
    },
    {
        "adult": false,
        "backdrop_path": "/2NArMoObkAbnIPvqlHC3gRGsfBb.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 11423,
        "original_language": "ko",
        "original_title": "살인의 추억",
        "overview": "Province de Gyunggi 1986. Le corps d'une jeune femme brutalement violée puis assassinée est retrouvé dans la campagne. Deux mois plus tard, d'autres crimes similaires ont lieu. Dans un pays qui n'a jamais connu de telles atrocités, la rumeur d'actes commis par un serial killer grandit de jour en jour. Une unité spéciale de la police est ainsi créée dans la région afin de trouver rapidement le coupable. Elle est placée sous les ordres d'un policier local et d'un détective spécialement envoyé de Séoul à sa demande. Devant l'absence de preuves concrètes, les deux hommes sombrent peu à peu dans le doute...",
        "popularity": 38.133,
        "poster_path": "/fz5NYI8PUmPplu3UA70AOqEDJL7.jpg",
        "release_date": "2003-05-02",
        "title": "Memories of Murder",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 3374
    },
    {
        "adult": false,
        "backdrop_path": "/rfkIeCaIHhN3K5wjJJqKmfUjYp8.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 381284,
        "original_language": "en",
        "original_title": "Hidden Figures",
        "overview": "L'histoire de Katherine Johnson, Dorothy Vaughn et Mary Jackson, les cerveaux derrière le premier voyage spatial habité réussi par les Américains en 1962. Ces trois Afro-Américaines travaillaient pour la NASA et ont permis à l'astronaute John Glenn de réaliser son premier vol en orbite, tout juste 10 mois après le Russe Yuri Gagarine. Cet exploit a redonné confiance à l'Amérique et a relancé la course à l'espace entre les deux grandes puissances politiques de l'époque. Le trio visionnaire a su surpasser les questions raciales et de genre et a jeté les bases du programme spatial qui a abouti à la vision de Kennedy du premier homme sur la Lune.",
        "popularity": 54.423,
        "poster_path": "/w1v2wYvh9Ciq3BQ4ssoVa8oYKRP.jpg",
        "release_date": "2016-12-10",
        "title": "Les Figures de l'ombre",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 8990
    },
    {
        "adult": false,
        "backdrop_path": "/63HcRYJI4LKeo8sINlL71ZtlUFY.jpg",
        "genre_ids": [
            18
        ],
        "id": 147,
        "original_language": "fr",
        "original_title": "Les Quatre Cents Coups",
        "overview": "Antoine a une adolescence turbulente. Il ment à ses parents indifférents à son sort, vole, fugue. Son seul réconfort, il fait les quatre cents coups avec son ami René. Un jour, la police s'en mêle.",
        "popularity": 16.413,
        "poster_path": "/9y51Fk9VeihwWzuCdkLDeCnjfoO.jpg",
        "release_date": "1959-06-03",
        "title": "Les Quatre Cents Coups",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1945
    },
    {
        "adult": false,
        "backdrop_path": "/tGb044NgQYQJr58fta5O3OB6SpQ.jpg",
        "genre_ids": [
            18,
            28,
            80
        ],
        "id": 7347,
        "original_language": "pt",
        "original_title": "Tropa de Elite",
        "overview": "1997. Les milices armées liées au trafic de drogue contrôlent les favelas de Rio. Rongée par la corruption, la police n'intervient plus sur le terrain. Les forces d'élite du BOPE (Bataillon des opérations spéciales de police) sont livrées à elles-mêmes dans leur lutte sans merci contre les trafiquants. Mais le maintien de l'ordre a un prix : il est de plus en plus difficile de distinguer le bien du mal, de faire la différence entre l'exigence de justice et le désir de vengeance. Le Capitaine du BOPE Nascimento est en pleine crise : en plus de risquer sa vie sur le terrain, il doit choisir et former son successeur, dans l'espoir de quitter cette vie de violence et de rester auprès de son épouse, qui s'apprête à donner naissance à leur premier enfant. Neto et Matias, deux de ses recrues les plus récentes, sont amis d'enfance : l'un est un as de la gâchette, l'autre refuse de transiger sur ses idéaux.",
        "popularity": 24.69,
        "poster_path": "/yB8rkH0fKen2QM8TtKaIK5mLdHE.jpg",
        "release_date": "2007-10-12",
        "title": "Troupe d'Élite",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 2167
    },
    {
        "adult": false,
        "backdrop_path": "/f8sYAxcM3zRwe4P8cnjKFidq3Jh.jpg",
        "genre_ids": [
            35,
            80
        ],
        "id": 337404,
        "original_language": "en",
        "original_title": "Cruella",
        "overview": "Londres, années 70, en plein mouvement punk rock. Escroc pleine de talent, Estella est résolue à se faire un nom dans le milieu de la mode. Elle se lie d'amitié avec deux jeunes vauriens qui apprécient ses compétences d'arnaqueuse et mène avec eux une existence criminelle dans les rues de Londres. Un jour, ses créations se font remarquer par la baronne von Hellman, une grande figure de la mode, terriblement chic et horriblement snob. Mais leur relation va déclencher une série de révélations qui amèneront Estella à se laisser envahir par sa part sombre, au point de donner naissance à l'impitoyable Cruella, une brillante jeune femme assoiffée de mode et de vengeance…",
        "popularity": 78.292,
        "poster_path": "/1AZeUbutbivet3bXi2I2TT0Q2E5.jpg",
        "release_date": "2021-05-26",
        "title": "Cruella",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 8537
    },
    {
        "adult": false,
        "backdrop_path": "/xHDynIimfsgj0ZOs0j5ma8v1vmM.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 120467,
        "original_language": "en",
        "original_title": "The Grand Budapest Hotel",
        "overview": "Pendant l'entre-deux guerres, le légendaire concierge d'un grand hôtel et son jeune protégé se retrouvent impliqués dans une histoire mêlant le vol d'un tableau de la Renaissance, la bataille pour une énorme fortune familiale, et le lent puis soudain bouleversement qui transforme l'Europe en cette première moitié de XXème siècle.",
        "popularity": 31.418,
        "poster_path": "/atLMzzA7pOB0BdfM89V7BbdtLN6.jpg",
        "release_date": "2014-02-26",
        "title": "The Grand Budapest Hotel",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 13845
    },
    {
        "adult": false,
        "backdrop_path": "/fpgSkuEG2eV9nOHAYzqfOg1R8t2.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 26022,
        "original_language": "hi",
        "original_title": "My Name Is Khan",
        "overview": "Rizwan Khan est un petit garçon musulman qui grandit à Borivali, dans la banlieue de Mumbai (Inde), entouré de l'affection de sa mère. Celle-ci, malgré son comportement déroutant, lui inculque les valeurs de tolérance, d'amour et de justice. Adulte, Rizwan rejoint son frère émigré aux États Unis où sa belle-sœur lui diagnostique un syndrome d'Asperger, forme atténuée d'autisme. Alors qu'il travaille pour l'entreprise familiale, Rizwan fait la connaissance et tombe amoureux de Mandira, Indienne et hindoue. Malgré la différence de religion, ils se marient et vivent heureux avec le fils que Mandira a eu d'un précédent mariage. Mais après le 11 septembre les choses changent, la famille est en bute à l'ostracisme anti-musulman et, accablée de douleur, Mandira rejette son mari qu'elle rend responsable du drame qui les frappe. Pour reconquérir la femme qu'il aime, Rizwan entreprend un long périple afin de faire savoir à tous que \"Son nom est Khan et qu'il n'est pas un terroriste\".",
        "popularity": 23.836,
        "poster_path": "/a0eABtjnlAOdx08pNN8Z4yFlS3t.jpg",
        "release_date": "2010-02-10",
        "title": "My Name Is Khan",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1201
    },
    {
        "adult": false,
        "backdrop_path": "/lpuehRS74pgVYIQ6ZQ2fIAaoAvo.jpg",
        "genre_ids": [
            18
        ],
        "id": 538362,
        "original_language": "it",
        "original_title": "Sulla mia pelle",
        "overview": "Arrêté à Rome pour un délit lié à la drogue, Stefano Cucchi subit une terrible semaine de détention qui marque sa famille pour toujours.",
        "popularity": 8.974,
        "poster_path": "/jOvvIZjdbGVpPaQ8upPpZzttO3T.jpg",
        "release_date": "2018-09-12",
        "title": "Sur ma peau",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 1801
    },
    {
        "adult": false,
        "backdrop_path": "/hKpzq3U7X1C1lqnYh0WQwlPyxO5.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 1955,
        "original_language": "en",
        "original_title": "The Elephant Man",
        "overview": "Londres, 1884. Le chirurgien Frederick Treves découvre un homme complètement défiguré et difforme, devenu une attraction de foire. John Merrick, «le monstre», doit son nom de Elephant Man au terrible accident que subit sa mère. Alors enceinte de quelques mois, elle est renversée par un éléphant. Impressionné par de telles difformités, le Dr. Treves achète Merrick, l'arrachant ainsi à la violence de son propriétaire, et à l'humiliation quotidienne d'être mis en spectacle. Le chirurgien pense alors que «le monstre» est un idiot congénital. Il découvre rapidement en Merrick un homme meurtri, intelligent et doté d'une grande sensibilité.",
        "popularity": 21.768,
        "poster_path": "/zf9GBMbvU2KA8dDpZ2MaApUsFX8.jpg",
        "release_date": "1980-10-09",
        "title": "Elephant Man",
        "video": false,
        "vote_average": 8,
        "vote_count": 3175
    },
    {
        "adult": false,
        "backdrop_path": "/gl8jhRWV8k7yDEJLp51qtrV9FM0.jpg",
        "genre_ids": [
            27,
            9648,
            878
        ],
        "id": 1091,
        "original_language": "en",
        "original_title": "The Thing",
        "overview": "Une équipe de recherche américaine, basée en Antarctique, est attaquée par une créature capable de prendre l'apparence de ses victimes.",
        "popularity": 50.116,
        "poster_path": "/gajOIkrWq10MDjpHwCmIt4Yip2z.jpg",
        "release_date": "1982-06-25",
        "title": "The Thing",
        "video": false,
        "vote_average": 8,
        "vote_count": 6282
    },
    {
        "adult": false,
        "backdrop_path": "/agoBZfL1q5G79SD0npArSlJn8BH.jpg",
        "genre_ids": [
            35,
            10752,
            18
        ],
        "id": 515001,
        "original_language": "en",
        "original_title": "Jojo Rabbit",
        "overview": "Jojo est un petit allemand solitaire. Sa vision du monde est mise à l'épreuve quand il découvre que sa mère cache une jeune fille juive dans leur grenier. Avec la seule aide de son ami aussi grotesque qu'imaginaire, Adolf Hitler, Jojo va devoir faire face à son nationalisme aveugle.",
        "popularity": 32.998,
        "poster_path": "/1uiuoWE0XUqCZpwWKMQwoFpqjkp.jpg",
        "release_date": "2019-10-18",
        "title": "Jojo Rabbit",
        "video": false,
        "vote_average": 8,
        "vote_count": 8761
    },
    {
        "adult": false,
        "backdrop_path": "/gYtXT7fJNBRZBbBulO11DoRveLT.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 400928,
        "original_language": "en",
        "original_title": "Gifted",
        "overview": "Un homme se bat pour obtenir la garde de sa nièce, qui témoigne d'un don hors du commun pour les mathématiques.",
        "popularity": 42.619,
        "poster_path": "/wHyrEoiAjFQ6HigTSgoI20CrlTc.jpg",
        "release_date": "2017-04-12",
        "title": "Mary",
        "video": false,
        "vote_average": 8,
        "vote_count": 4997
    },
    {
        "adult": false,
        "backdrop_path": "/5VF2y1KyrrAL2WAX47odZ7TdelT.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 449176,
        "original_language": "en",
        "original_title": "Love, Simon",
        "overview": "On mérite tous une première grande histoire d'amour. Pourtant pour le jeune Simon, c'est compliqué. Il a une vie normale, dans une famille qu'il adore, et est entouré d'amis extraordinaires, mais il garde pour lui un grand secret : personne ne sait qu'il est gay et il ne connaît pas l'identité de son premier coup de coeur, avec qui il communique en ligne. Alors que son secret est menacé d'être révélé, la vie de Simon bascule dans une aventure aussi drôle que bouleversante... Ses amis prendront alors une place essentielle pour l'aider à changer sa vie et découvrir le premier amour.",
        "popularity": 16.81,
        "poster_path": "/qnA8dIE9yrI4KGO9qgemu79YBCR.jpg",
        "release_date": "2018-02-16",
        "title": "Love, Simon",
        "video": false,
        "vote_average": 8,
        "vote_count": 5757
    },
    {
        "adult": false,
        "backdrop_path": "/i109vzdCkG7W3H9FxHmfpZjgh61.jpg",
        "genre_ids": [
            10751,
            12,
            18
        ],
        "id": 522518,
        "original_language": "en",
        "original_title": "A Dog's Journey",
        "overview": "Certaines amitiés vont au-delà de la durée d'une vie. Bailey, ce bon chien aimant, trouve, au travers de sa nouvelle destinée et de ses nouvelles formes, cette force qui le guidera, lui et les personnes qu'il aime, vers des lieux qu'ils n'auraient jamais imaginés.",
        "popularity": 41.117,
        "poster_path": "/ot1Hd2PDWY4nAa86zltCihAOCxj.jpg",
        "release_date": "2019-05-03",
        "title": "Mes Autres Vies de Chien",
        "video": false,
        "vote_average": 8,
        "vote_count": 1366
    },
    {
        "adult": false,
        "backdrop_path": "/63y4XSVTZ7mRzAzkqwi3o0ajDZZ.jpg",
        "genre_ids": [
            80,
            18,
            35
        ],
        "id": 106646,
        "original_language": "en",
        "original_title": "The Wolf of Wall Street",
        "overview": "L'histoire vraie de Jordan Belfort, un courtier en bourse qui passa vingt mois en prison pour avoir refusé de participer à une gigantesque arnaque, dévoilant la corruption et l'implication de la pègre qui sévissait à Wall Street et au-delà des États-Unis. L'argent, le pouvoir, les femmes, la drogue, les tentations étaient là, à portée de main, et les autorités n'avaient aucune prise. Aux yeux de Jordan et de sa meute, la modestie était devenue complètement inutile. Trop n'était jamais assez…",
        "popularity": 95.841,
        "poster_path": "/dQIQZbJXn1pflQw3nwvXLJX0dHa.jpg",
        "release_date": "2013-12-25",
        "title": "Le Loup de Wall Street",
        "video": false,
        "vote_average": 8,
        "vote_count": 22331
    },
    {
        "adult": false,
        "backdrop_path": "/3mxteiwtcCPjbYKlyC0WxY1G9J3.jpg",
        "genre_ids": [
            18,
            53
        ],
        "id": 582,
        "original_language": "de",
        "original_title": "Das Leben der Anderen",
        "overview": "Au début des années 1980, en Allemagne de l'Est, l'auteur à succès Georges Dreyman et sa compagne, l'actrice Christa-Maria Sieland, sont considérés comme faisant partie de l'élite des intellectuels de l'État communiste, même si, secrètement, ils n'adhèrent aux idées du parti. Le Ministère de la Culture commence à s'intéresser à Christa et dépêche un agent secret, nommé Wiesler, ayant pour mission de l'observer. Tandis qu'il progresse dans l'enquête, le couple d'intellectuels le fascine de plus en plus…",
        "popularity": 20.158,
        "poster_path": "/tuITw3t3WMOEKtL1sUYts1ZAnoa.jpg",
        "release_date": "2006-03-15",
        "title": "La Vie des autres",
        "video": false,
        "vote_average": 8,
        "vote_count": 3330
    },
    {
        "adult": false,
        "backdrop_path": "/szJSH8XbGQcZR3Vtn90jKnEb5Ee.jpg",
        "genre_ids": [
            36,
            10402,
            18
        ],
        "id": 279,
        "original_language": "en",
        "original_title": "Amadeus",
        "overview": "A Vienne, en novembre 1823. Au coeur de la nuit, un vieil homme égaré clame cette étonnante confession : \"Pardonne, Mozart, pardonne à ton assassin !\" Ce fantôme, c'est Antonio Salieri, jadis musicien réputé et compositeur officiel de la Cour. Dès l'enfance, il s'était voué tout entier au service de Dieu, s'engageant à le célébrer par sa musique, au prix d'un incessant labeur. Pour prix de ses sacrifices innombrables, il réclamait la gloire éternelle. Son talent, reconnu par l'empereur mélomane Joseph II, valut durant quelques années à Salieri les plus hautes distinctions. Mais, en 1781, un jeune homme arrive à Vienne, précédé d'une flatteuse réputation. Wolfgang Amadeus Mozart est devenu le plus grand compositeur du siècle. Réalisant la menace que représente pour lui ce surdoué arrogant dont il admire le profond génie, Salieri tente de l'évincer.",
        "popularity": 26.007,
        "poster_path": "/xUnezAE1f4kOTbo1Or5SZx1OALI.jpg",
        "release_date": "1984-09-19",
        "title": "Amadeus",
        "video": false,
        "vote_average": 8,
        "vote_count": 3855
    },
    {
        "adult": false,
        "backdrop_path": "/i8aK8cGt5iYfMmUJiAe5AKIqYE5.jpg",
        "genre_ids": [
            18,
            53
        ],
        "id": 264644,
        "original_language": "en",
        "original_title": "Room",
        "overview": "Jack, 5 ans, vit seul avec sa mère, Ma. Elle lui apprend à jouer, à rire et à comprendre le monde qui l'entoure. Un monde qui commence et s'arrête aux murs de leur chambre, où ils sont retenus prisonniers, le seul endroit que Jack ait jamais connu. L'amour de Ma pour Jack la pousse à tout risquer pour offrir à son fils une chance de s'échapper et de découvrir l'extérieur, une aventure à laquelle il n'était pas préparé.",
        "popularity": 22.444,
        "poster_path": "/dIxoYFcj6EqD5KScuU8lWCftnvH.jpg",
        "release_date": "2015-10-16",
        "title": "Room",
        "video": false,
        "vote_average": 8,
        "vote_count": 8711
    },
    {
        "adult": false,
        "backdrop_path": "/kuOvQ9TqsZwleNVNmHRJiIyzsKx.jpg",
        "genre_ids": [
            16,
            18,
            9648,
            36
        ],
        "id": 339877,
        "original_language": "en",
        "original_title": "Loving Vincent",
        "overview": "Loving Vincent est le premier long métrage d'animation réalisé uniquement par l'intermédiaire de toiles peintes à la main ! Plus de 120 peintures de l'artiste sont utilisées et l'intrigue est basée sur 800 lettres manuscrites de Van Gogh.",
        "popularity": 18.197,
        "poster_path": "/dpP3PMi8gbocMiNvkIL4atIoXJF.jpg",
        "release_date": "2017-06-22",
        "title": "La Passion Van Gogh",
        "video": false,
        "vote_average": 8,
        "vote_count": 2295
    },
    {
        "adult": false,
        "backdrop_path": "/s5R6kTMfOxkGit96A8lqcDL4uVk.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 641,
        "original_language": "en",
        "original_title": "Requiem for a Dream",
        "overview": "Harry Goldfarb est un junkie. Il passe ses journées en compagnie de sa petite amie Marion et son copain Tyrone. Ensemble, ils s'inventent un paradis artificiel. En quête d'une vie meilleure, le trio est entraîné dans une spirale infernale qui les enfonce toujours un peu plus dans l'angoisse et le désespoir. La mère d'Harry, Sara, souffre d'une autre forme d'addiction, la télévision. Juive, fantasque et veuve depuis des années, elle vit seule à Coney Island et nourrit dans le secret l'espoir de participer un jour à son émission préférée. Afin de satisfaire aux canons esthétiques de la télévision, elle s'astreint à un régime draconien. Un jour, elle le sait, elle passera de l'autre côté de l'écran.",
        "popularity": 13.027,
        "poster_path": "/nOd6vjEmzCT0k4VYqsA2hwyi87C.jpg",
        "release_date": "2000-10-06",
        "title": "Requiem for a Dream",
        "video": false,
        "vote_average": 8,
        "vote_count": 9214
    },
    {
        "adult": false,
        "backdrop_path": "/hZHeDPQGNKN9NN9GuW7qVbM2tDx.jpg",
        "genre_ids": [
            12,
            35,
            18
        ],
        "id": 962,
        "original_language": "en",
        "original_title": "The Gold Rush",
        "overview": "Le célèbre assaut pour tout l'or de l'Oklahoma vu par l'un des maîtres du burlesque américain.",
        "popularity": 16.776,
        "poster_path": "/fT3OU1AjdTxiJmKvfCnzBBAQivp.jpg",
        "release_date": "1925-07-12",
        "title": "La Ruée vers l'or",
        "video": false,
        "vote_average": 8,
        "vote_count": 1438
    },
    {
        "adult": false,
        "backdrop_path": "/obKmfNexgL4ZP5cAmzdL4KbHHYX.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 673,
        "original_language": "en",
        "original_title": "Harry Potter and the Prisoner of Azkaban",
        "overview": "Sirius Black, un dangereux sorcier criminel, s'échappe de la sombre prison d'Azkaban avec un seul et unique but : retrouver Harry Potter, en troisième année à l'école de Poudlard. Selon la légende, Black aurait jadis livré les parents du jeune sorcier à leur assassin, Lord Voldemort, et serait maintenant déterminé à tuer Harry…",
        "popularity": 115.852,
        "poster_path": "/t4P2079IyK19njHDP2GwQrKdvzd.jpg",
        "release_date": "2004-05-31",
        "title": "Harry Potter et le Prisonnier d'Azkaban",
        "video": false,
        "vote_average": 8,
        "vote_count": 20113
    },
    {
        "adult": false,
        "backdrop_path": "/DztBnZaqmla2sGUW9s8AyOmskT.jpg",
        "genre_ids": [
            18
        ],
        "id": 14,
        "original_language": "en",
        "original_title": "American Beauty",
        "overview": "Alors qu'il éprouve des difficultés à supporter une femme irascible, un travail ingrat et une ado morose, un homme tombe raide dingue d'une des amies de sa fille.",
        "popularity": 25.102,
        "poster_path": "/jLkxPf0IPJZ3EBVG27oUTZfYavL.jpg",
        "release_date": "1999-09-15",
        "title": "American Beauty",
        "video": false,
        "vote_average": 8,
        "vote_count": 11310
    },
    {
        "adult": false,
        "backdrop_path": "/tQcbNXoYU7zy1dz96npOlbDgtbq.jpg",
        "genre_ids": [
            35,
            80,
            18
        ],
        "id": 9277,
        "original_language": "en",
        "original_title": "The Sting",
        "overview": "À Chicago, en 1936, Johnny Hooker et son acolyte Coleman volent sans le savoir le convoyeur de fonds de Doyle Lonnegan, un dangereux gangster de New York. Coleman est aussitôt abattu par le gang de ce dernier et Hooker se réfugie chez Henry Gondorff, un spécialiste de l'arnaque. Ceux-ci décident alors de venger la mort de Coleman en montant une vaste escroquerie destinée à mettre Lonnegan sur la paille. Pour cela, Hooker fait croire au gangster qu'il est capable d'obtenir les résultats des courses avant qu'ils ne soient officiellement connus.",
        "popularity": 19.82,
        "poster_path": "/eWNgBQRqnWp1Rg1EXWII3HqDvBZ.jpg",
        "release_date": "1973-12-25",
        "title": "L'Arnaque",
        "video": false,
        "vote_average": 8,
        "vote_count": 2351
    },
    {
        "adult": false,
        "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 447365,
        "original_language": "en",
        "original_title": "Guardians of the Galaxy Vol. 3",
        "overview": "Peter Quill, encore sous le choc d'une terrible perte, doit rallier son équipe et se lancer dans un mission risquée et palpitante pour défendre l'univers et protéger Rocket. Pendant ce temps, une nouvelle force imprévisible menace de faire tomber les Gardiens pour de bon.",
        "popularity": 265.306,
        "poster_path": "/aaGDsYYjltMxrwgs4qnHse4qlGX.jpg",
        "release_date": "2023-05-03",
        "title": "Les Gardiens de la Galaxie : Volume 3",
        "video": false,
        "vote_average": 8,
        "vote_count": 5098
    },
    {
        "adult": false,
        "backdrop_path": "/hs6OPto38fF589ScpGhl7uSU4MI.jpg",
        "genre_ids": [
            37
        ],
        "id": 938,
        "original_language": "it",
        "original_title": "Per qualche dollaro in più",
        "overview": "« L'indien », bandit cruel et fou, s'est évadé de prison. Il se prépare à attaquer la banque d'El Paso, la mieux gardée de tout l'Ouest, avec une quinzaine d'autres malfaiteurs. Le « Manchot » et le Colonel Douglas Mortimer, deux chasseurs de primes concurrents, décident, après une confrontation tendue, de faire finalement équipe pour arrêter les bandits. Mais leurs motivations ne sont pas forcément les mêmes…",
        "popularity": 25.689,
        "poster_path": "/dei0MF0dWPOLRGWNXa0LTJG8mtv.jpg",
        "release_date": "1965-12-18",
        "title": "Et pour quelques dollars de plus",
        "video": false,
        "vote_average": 8,
        "vote_count": 3578
    },
    {
        "adult": false,
        "backdrop_path": "/uvd1KXopHKelymR2JbSumRupRJo.jpg",
        "genre_ids": [
            53,
            80
        ],
        "id": 521,
        "original_language": "en",
        "original_title": "Dial M for Murder",
        "overview": "Tony Wendice, une ancienne gloire du tennis, s'est marié avec Margot pour sa richesse. Mais celle-ci le trompe depuis peu avec Mark Halliday, un jeune auteur de romans policiers. Craignant que sa femme le quitte et le laisse sans le sou, Tony fait appel au capitaine Lesgate et le charge d'assassiner Margot en échange d'une grosse somme d'argent.",
        "popularity": 20.521,
        "poster_path": "/2ikfaqVUxyPq726S8TYihSczkFF.jpg",
        "release_date": "1954-05-29",
        "title": "Le crime était presque parfait",
        "video": false,
        "vote_average": 8,
        "vote_count": 2354
    },
    {
        "adult": false,
        "backdrop_path": "/AaIRBsx4hpa2fVQzeCfFyOdzCEM.jpg",
        "genre_ids": [
            10751,
            16,
            14
        ],
        "id": 110416,
        "original_language": "en",
        "original_title": "Song of the Sea",
        "overview": "Ben et Maïna vivent avec leur père tout en haut d'un phare sur une petite île. Pour les protéger des dangers de la mer, leur grand-mère les emmène vivre à la ville. Ben découvre alors que sa petite soeur est une selkie, une fée de la mer dont le chant peut délivrer les êtres magiques du sort que leur a jeté la Sorcière aux hiboux. Au cours d'un fantastique voyage, Ben et Maïna vont devoir affronter peurs et dangers,  et combattre la sorcière pour aider les êtres magiques à retrouver leur pouvoir.",
        "popularity": 13.411,
        "poster_path": "/vAwM9my6tiswN9jLTnr2ywLwKg7.jpg",
        "release_date": "2014-09-06",
        "title": "Le Chant de la mer",
        "video": false,
        "vote_average": 8,
        "vote_count": 1296
    },
    {
        "adult": false,
        "backdrop_path": "/ruF3Lmd4A8MHbnEBE6lxPMbsHGL.jpg",
        "genre_ids": [
            9648,
            18
        ],
        "id": 15,
        "original_language": "en",
        "original_title": "Citizen Kane",
        "overview": "À la mort du milliardaire Charles Foster Kane, un grand magnat de la presse, Thompson, un reporter, enquête sur sa vie. Les contacts qu'il prend avec ses proches lui font découvrir un personnage gigantesque, mégalomane, égoïste et solitaire.",
        "popularity": 25.031,
        "poster_path": "/89GnRTK1CjJSUelKKHLIPXsVam9.jpg",
        "release_date": "1941-04-17",
        "title": "Citizen Kane",
        "video": false,
        "vote_average": 8,
        "vote_count": 5064
    },
    {
        "adult": false,
        "backdrop_path": "/wRDyTXw5j0RN9M03xZlHYkoNLCI.jpg",
        "genre_ids": [
            16,
            18,
            14,
            10749
        ],
        "id": 568160,
        "original_language": "ja",
        "original_title": "天気の子",
        "overview": "Jeune lycéen, Hodaka fuit son île pour rejoindre Tokyo. Sans argent ni emploi, il tente de survivre dans la jungle urbaine et trouve un poste dans une revue dédiée au paranormal. Un phénomène météorologique extrême touche alors le Japon, exposé à de constantes pluies. Hodaka est dépêché pour enquêter sur l'existence de prêtresses du temps. Peu convaincu par cette légende, il change soudainement d'avis lorsqu'il croise la jeune Hina…",
        "popularity": 30.398,
        "poster_path": "/k0tHYSbzOEkxOYoVLLstLg4Gdkd.jpg",
        "release_date": "2019-06-19",
        "title": "Les Enfants du temps",
        "video": false,
        "vote_average": 8,
        "vote_count": 1976
    },
    {
        "adult": false,
        "backdrop_path": "/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 615457,
        "original_language": "en",
        "original_title": "Nobody",
        "overview": "Hutch Mansell, un père et un mari frustré, totalement déconsidéré par sa famille, se contente d'encaisser les coups, sans jamais les rendre. Il n'est rien. Une nuit, alors que deux cambrioleurs pénètrent chez lui, il fait le choix de ne pas intervenir, plutôt que de risquer une escalade sanglante. Une décision qui le discrédite définitivement aux yeux de son fils Blake, et qui semble l'éloigner encore plus de sa femme Becca. Cet incident réveille chez cet homme blessé des instincts larvés qui vont le propulser sur une voie violente, révélant des zones d'ombres et des compétences létales insoupçonnées. Dans une avalanche de coups de poings, de fusillades et de crissements de pneus, il va tout faire pour tirer sa famille des griffes d'un redoutable ennemi et s'assurer que, plus jamais, personne ne le prenne pour un moins que rien.",
        "popularity": 49.575,
        "poster_path": "/jKRzh9y5YjYNISbeh55FQwetsSu.jpg",
        "release_date": "2021-03-18",
        "title": "Nobody",
        "video": false,
        "vote_average": 8,
        "vote_count": 6264
    },
    {
        "adult": false,
        "backdrop_path": "/2vq5GTJOahE03mNYZGxIynlHcWr.jpg",
        "genre_ids": [
            18,
            28,
            36
        ],
        "id": 359724,
        "original_language": "en",
        "original_title": "Ford v Ferrari",
        "overview": "Relate l'histoire vraie qui a conduit l'ingénieur automobile visionnaire américain Caroll Shelby à faire équipe avec le pilote de course britannique surdoué Ken Miles. Bravant l'ordre établi, défiant les lois de la physique et luttant contre leurs propres démons, les deux hommes n'avaient qu'un seul but : construire pour le compte de Ford Motor Company un bolide révolutionnaire capable de renverser la suprématie de l'écurie d'Enzo Ferrari sur le mythique circuit des 24 heures du Mans en 1966…",
        "popularity": 58.418,
        "poster_path": "/2KQI0x6AEdbiN6z4LWjKZHukMzZ.jpg",
        "release_date": "2019-11-13",
        "title": "Le Mans 66",
        "video": false,
        "vote_average": 8,
        "vote_count": 7023
    },
    {
        "adult": false,
        "backdrop_path": "/a5pOEjOLvr04Hr8qktIDM75OZi0.jpg",
        "genre_ids": [
            18,
            10751
        ],
        "id": 28178,
        "original_language": "en",
        "original_title": "Hachi: A Dog's Tale",
        "overview": "Pour Parker, professeur de musique à l'université, l'arrivée dans la famille du chien Hatchi est un heureux événement. L'animal prend sa place auprès de chacun, mais c'est avec Parker qu'il passe le plus de temps. Chaque matin, le chien accompagne son maître à la gare où celui-ci prend son train, et revient l'attendre chaque soir. Cet attendrissant rituel rythme la vie de tous ceux qui en sont témoins... jusqu'au jour où Parker ne revient pas... Hatchi va continuer à attendre le retour de son maître chaque jour, jusqu'à la fin.Cette fidélité et cette patience vont bouleverser tous ceux qui connaissent Hatchi et faire de lui une légende.",
        "popularity": 36.909,
        "poster_path": "/3bbeimKO0QKYVZgfaQqGNWbSFS3.jpg",
        "release_date": "2009-06-08",
        "title": "Hatchi",
        "video": false,
        "vote_average": 8,
        "vote_count": 6254
    },
    {
        "adult": false,
        "backdrop_path": "/2W9HjAYWNug5RwyrEtrneXeL94Z.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 524,
        "original_language": "en",
        "original_title": "Casino",
        "overview": "Dans les années soixante-dix à Las Vegas, Ace Rothstein dirige d'une main de fer l'hôtel-casino Tangiers, financé en sous-main par le puissant syndicat des camionneurs. Le Tangiers est l'un des casinos les plus prospères de la ville et Ace est devenu le grand manitou de Las Vegas, secondé par son ami d'enfance, Nicky Santoro. Impitoyable avec les tricheurs, Rothstein se laisse un jour séduire par une virtuose de l'arnaque d'une insolente beauté, Ginger McKenna. Amoureux, il lui ouvre les porte de son paradis et l'épouse. Ses ennuis commencent alors.",
        "popularity": 33.71,
        "poster_path": "/4a0I37pYcdFY6HeutalHQTGs0sl.jpg",
        "release_date": "1995-11-22",
        "title": "Casino",
        "video": false,
        "vote_average": 8,
        "vote_count": 5279
    },
    {
        "adult": false,
        "backdrop_path": "/caQp2MhwfrTYGqVr7d9ayn8tqQ7.jpg",
        "genre_ids": [
            36,
            18,
            53,
            10752
        ],
        "id": 205596,
        "original_language": "en",
        "original_title": "The Imitation Game",
        "overview": "1940 : Alan Turing, mathématicien, cryptologue, est chargé par le gouvernement Britannique de percer le secret de la célèbre machine de cryptage allemande Enigma, réputée inviolable. À la tête d'une équipe improbable de savants, linguistes, champions d'échecs et agents du renseignement, Turing s'attaque au chef-d'œuvre de complexité dont la clef peut conduire à la victoire. IMITATION GAME relate la façon dont Alan Turing, soumis à une intense pression, contribua à changer le cours de la Seconde Guerre mondiale et de l'Histoire. C'est aussi le portrait d'un homme qui se retrouva condamné par la société de l'époque en raison de son homosexualité et en mourut.",
        "popularity": 61.569,
        "poster_path": "/gBxCZuieAe8KClWWP1vVijXBlTp.jpg",
        "release_date": "2014-11-14",
        "title": "Imitation Game",
        "video": false,
        "vote_average": 8,
        "vote_count": 16025
    },
    {
        "adult": false,
        "backdrop_path": "/okdg55jhsr9k1F2lxsZoQncrLZL.jpg",
        "genre_ids": [
            18,
            10749,
            10752
        ],
        "id": 3175,
        "original_language": "en",
        "original_title": "Barry Lyndon",
        "overview": "Chassé de son Irlande natale après une série d'exactions et d'inconvenances, Redmond Barry s'engage dans l'armée britannique et combat les Prussiens. Le métier des armes lui devient vite insupportable et il déserte. Capturé par l'ennemi, le jeune homme, ambitieux mais naïf, ne doit sa survie qu'à son empressement à servir ses nouveaux maîtres. La guerre finie, Redmond devient espion, puis joueur professionnel. Il fréquente la haute société, dont il apprend les usages et les bonnes manières. Ce talent lui permet de conquérir le cœur d'une jeune veuve, la comtesse de Lyndon, dont le fils, lord Bullingdon, lui voue bientôt la plus vive animosité…",
        "popularity": 21.402,
        "poster_path": "/prwtTDfRbwdNOzjURTabW3UYW0O.jpg",
        "release_date": "1975-12-18",
        "title": "Barry Lyndon",
        "video": false,
        "vote_average": 8,
        "vote_count": 2550
    },
    {
        "adult": false,
        "backdrop_path": "/i4m14DMv0JG4AOH6sP7Pes87A9x.jpg",
        "genre_ids": [
            18,
            35,
            10749
        ],
        "id": 11104,
        "original_language": "cn",
        "original_title": "重慶森林",
        "overview": "L'histoire de deux flics lâchés par leur petite amie. Le matricule 223 qui se promet de tomber amoureux de la première femme qui entrera dans un bar a Chungking House ou il noie son chagrin. Le matricule 663, qui chaque soir passe au Midnight Express, un fast-food du quartier de Lan Kwai Fong, acheter a la jolie Faye une \"Chef Salad\" qu'il destine a sa belle, une hôtesse de l'air.",
        "popularity": 26.317,
        "poster_path": "/fv0KUkKoEr1P6Z0lltVyWwtFg5e.jpg",
        "release_date": "1994-07-14",
        "title": "Chungking Express",
        "video": false,
        "vote_average": 8,
        "vote_count": 1543
    },
    {
        "adult": false,
        "backdrop_path": "/mbJIERhLu25fyZb8DQIq1JN3AOR.jpg",
        "genre_ids": [
            18
        ],
        "id": 595,
        "original_language": "en",
        "original_title": "To Kill a Mockingbird",
        "overview": "Atticus Finch, un avocat dans le sud des États-Unis des années 1930 doit défendre un homme noir accusé de viol. Le récit, raconté à travers les souvenirs et le regard de ses enfants Scout et Jem, est parsemé de détails sur la vie et les mentalités de l'époque ainsi que d'anecdotes de voisinages (dont certaines inspirées des souvenirs d'enfance de l'auteur du roman).",
        "popularity": 22.321,
        "poster_path": "/bMuXgPmZhQtvzsy0oivTVLjVKi8.jpg",
        "release_date": "1962-12-20",
        "title": "Du silence et des ombres",
        "video": false,
        "vote_average": 8,
        "vote_count": 2375
    },
    {
        "adult": false,
        "backdrop_path": "/keSpEdNRKB1MW3zLcpz2AxPWVBJ.jpg",
        "genre_ids": [
            28,
            12,
            16,
            18,
            10751,
            14
        ],
        "id": 315465,
        "original_language": "ja",
        "original_title": "バケモノの子",
        "overview": "Après le décès de sa mère, Ren, 9 ans, refuse de vivre avec sa famille éloignée et prend la fuite. À la nuit tombée, alors qu'il arpente seul les rues du quartier de Shibuya, il est interpellé par un étrange personnage encapuchonné… Sous la cape se cache Kumatetsu, une bête au corps imposant et aux dents aiguisées venue d'un univers parallèle au nôtre. Transporté dans ce monde fantastique peuplé de bêtes étranges, le jeune garçon va se retrouver à son insu disciple de cet ours tumultueux ! Il devra désormais apprendre à composer avec son nouveau maître au tempérament… bestial !",
        "popularity": 23.187,
        "poster_path": "/ApHYRWgO8lTSDlHeOuOsskeHwHH.jpg",
        "release_date": "2015-07-11",
        "title": "Le Garçon et la Bête",
        "video": false,
        "vote_average": 8,
        "vote_count": 1359
    },
    {
        "adult": false,
        "backdrop_path": "/uXXvFU16v3cH8gIUWx3WCbAt29a.jpg",
        "genre_ids": [
            16,
            10751,
            10749
        ],
        "id": 140420,
        "original_language": "en",
        "original_title": "Paperman",
        "overview": "Un employé de bureau découvre que les avions en papier sont un moyen pour rencontrer une fille, mais d'une manière à laquelle il ne s'attendait pas.",
        "popularity": 15.379,
        "poster_path": "/6MXYNvGmI63W8fI3HKlcZzEy1U5.jpg",
        "release_date": "2012-11-02",
        "title": "Paperman",
        "video": false,
        "vote_average": 8,
        "vote_count": 1623
    },
    {
        "adult": false,
        "backdrop_path": "/uOMUJoon86IqYk11UL4vZQzhHpF.jpg",
        "genre_ids": [
            18,
            10752
        ],
        "id": 11778,
        "original_language": "en",
        "original_title": "The Deer Hunter",
        "overview": "Trois jeunes Américains, amateurs de la chasse aux daims, partent combattre au Vietnam. Seuls certains reviendront de cette tragique épreuve. Second film de Michael Cimino qui marque une étape essentielle dans l'évolution du cinéma américain.",
        "popularity": 19.3,
        "poster_path": "/s27zqyyCJvSm72f3uThjxcgmX6M.jpg",
        "release_date": "1978-12-08",
        "title": "Voyage au Bout de l'Enfer",
        "video": false,
        "vote_average": 8,
        "vote_count": 3426
    },
    {
        "adult": false,
        "backdrop_path": "/dcvbs8z0GEXslC1kCT77x19XDeR.jpg",
        "genre_ids": [
            10402,
            18,
            36
        ],
        "id": 424694,
        "original_language": "en",
        "original_title": "Bohemian Rhapsody",
        "overview": "Le parcours de Queen et son leader Freddie Mercury, de la formation du groupe à son apparition au concert Live Aid en 1985.",
        "popularity": 37.488,
        "poster_path": "/zpf6mrGZ0BbdsfzwUP0Nzp3hJEb.jpg",
        "release_date": "2018-10-24",
        "title": "Bohemian Rhapsody",
        "video": false,
        "vote_average": 8,
        "vote_count": 15998
    },
    {
        "adult": false,
        "backdrop_path": "/wmsePXV2z1b6ecXuKKrFbG0Q92P.jpg",
        "genre_ids": [
            18
        ],
        "id": 13223,
        "original_language": "en",
        "original_title": "Gran Torino",
        "overview": "Walt Kowalski est un ancien de la guerre de Corée, un homme inflexible, amer et pétri de préjugés surannés. Après des années de travail à la chaîne, il vit replié sur lui-même, occupant ses journées à bricoler, traînasser et siroter des bières. Avant de mourir, sa femme exprima le vœu qu'il aille à confesse, mais Walt n'a rien à avouer, ni personne à qui parler. Hormis sa chienne Daisy, il ne fait confiance qu'à son M-1, toujours propre, toujours prêt à l'usage... Ses anciens voisins ont déménagé ou sont morts depuis longtemps. Son quartier est aujourd'hui peuplé d'immigrants asiatiques qu'il méprise, et Walt ressasse ses haines, innombrables - à l'encontre de ses voisins, des ados Hmong, latinos et afro-américains « qui croient faire la loi », de ses propres enfants, devenus pour lui des étrangers. Walt tue le temps comme il peut, en attendant le grand départ, jusqu'au jour où un ado Hmong du quartier tente de lui voler sa précieuse Ford Gran Torino...",
        "popularity": 24.242,
        "poster_path": "/sVmDIIFPzbyEz87dZYpLfetn4Lm.jpg",
        "release_date": "2008-12-12",
        "title": "Gran Torino",
        "video": false,
        "vote_average": 8,
        "vote_count": 10036
    },
    {
        "adult": false,
        "backdrop_path": "/2WgieNR1tGHlpJUsolbVzbUbE1O.jpg",
        "genre_ids": [
            10752,
            28,
            18
        ],
        "id": 530915,
        "original_language": "en",
        "original_title": "1917",
        "overview": "Pris dans la tourmente de la Première Guerre Mondiale, Schofield et Blake, deux jeunes soldats britanniques, se voient assigner une mission à proprement parler impossible. Porteurs d'un message qui pourrait empêcher une attaque dévastatrice et la mort de centaines de soldats, dont le frère de Blake, ils se lancent dans une véritable course contre la montre, derrière les lignes ennemies.",
        "popularity": 28.84,
        "poster_path": "/zppHKKEkHg9ZGzOdzZwW8lZYYqy.jpg",
        "release_date": "2019-12-25",
        "title": "1917",
        "video": false,
        "vote_average": 8,
        "vote_count": 11437
    },
    {
        "adult": false,
        "backdrop_path": "/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 634649,
        "original_language": "en",
        "original_title": "Spider-Man: No Way Home",
        "overview": "Après les événements liés à l'affrontement avec Mysterio, l'identité secrète de Spider-Man a été révélée. Il est poursuivi par le gouvernement américain, qui l'accuse du meurtre de Mysterio, et traqué par les médias. Cet événement a également des conséquences terribles sur la vie de sa petite-amie M.J. et de son meilleur ami Ned. Désemparé, Peter Parker demande alors de l'aide au docteur Strange. Ce dernier lance un sort pour que tout le monde oublie que Peter est Spider-Man. Mais les choses ne se passent pas comme prévu, et cette action altère la stabilité de l'espace-temps. Cela ouvre le « multivers », un concept terrifiant dont ils ne savent quasiment rien...",
        "popularity": 170.118,
        "poster_path": "/3SyG7dq2q0ollxJ4pSsrqcfRmVj.jpg",
        "release_date": "2021-12-15",
        "title": "Spider-Man : No Way Home",
        "video": false,
        "vote_average": 8,
        "vote_count": 18379
    },
    {
        "adult": false,
        "backdrop_path": "/fNHCogWhABNAmzk0IFdzQP5XLYj.jpg",
        "genre_ids": [
            80,
            9648,
            53,
            10749,
            18
        ],
        "id": 25376,
        "original_language": "es",
        "original_title": "El secreto de sus ojos",
        "overview": "1974, Buenos Aires. Benjamin Esposito enquête sur le meurtre violent d'une jeune femme. 25 ans plus tard, il décide d'écrire un roman basé sur cette affaire «classée» dont il a été témoin et protagoniste. Ce travail d'écriture le ramène à ce meurtre qui l'obsède depuis tant d'années mais également à l'amour qu'il portait alors à sa collègue de travail. Benjamin replonge ainsi dans cette période sombre de l'Argentine où l'ambiance était étouffante et les apparences trompeuses...",
        "popularity": 17.562,
        "poster_path": "/fucZ0HnS7QKxnlVS1MB6ByIumds.jpg",
        "release_date": "2009-08-13",
        "title": "Dans ses yeux",
        "video": false,
        "vote_average": 8,
        "vote_count": 2310
    },
    {
        "adult": false,
        "backdrop_path": "/OR8oloCZ3klJtB7Y0i8pSqWw5a.jpg",
        "genre_ids": [
            9648,
            53
        ],
        "id": 213,
        "original_language": "en",
        "original_title": "North by Northwest",
        "overview": "Le publiciste Roger Tornhill se retrouve par erreur dans la peau d'un espion. Pris entre une mystérieuse organisation qui cherche à le supprimer et la police qui le poursuit, Tornhill est dans une situation bien inconfortable. Il fuit à travers les États-Unis et part à la recherche d'une vérité qui se révèlera très surprenante...",
        "popularity": 24.602,
        "poster_path": "/fxwVitOtjxw2M2lz9SRmAgJNQMz.jpg",
        "release_date": "1959-07-08",
        "title": "La Mort aux trousses",
        "video": false,
        "vote_average": 8,
        "vote_count": 3759
    },
    {
        "adult": false,
        "backdrop_path": "/u7kuUaySqXBVAtqEl9vkTkAzHV9.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 20453,
        "original_language": "hi",
        "original_title": "3 Idiots",
        "overview": "Deux amis, Raju et Farhan, se mettent à la recherche d'un copain qu'ils n'ont pas revu depuis leur jeunesse. En chemin, ils honorent un pari fait de nombreuses années auparavant et oublié depuis : ils doivent participer à une noce en resquilleurs. Ils assistent aussi à des funérailles où la situation dérape et échappe à tout contrôle. Simultanément, ils entament un voyage intérieur à travers leurs souvenirs et l'histoire de leur ami Rancho, un libre penseur qui à sa façon a su toucher leur âme et leur a appris à penser par eux-mêmes, changeant leurs vies à tout jamais. Étudiants en ce temps-là, leurs vies oscillent entre la relation passionnelle qui lie Rancho à Pia, jeune fille au tempérament ardent, et les affrontements opposant leur ami au professeur Viru Sahastrabuddhe, très imbu de lui même. Puis un jour, Rancho disparaît, les laissant dans le doute : qui est-il, d'où vient-il et surtout, pourquoi les a-t-il abandonnés ?",
        "popularity": 27.851,
        "poster_path": "/gBKJVh5fG1Ce308fXMGMZssnWz5.jpg",
        "release_date": "2009-12-23",
        "title": "3 Idiots",
        "video": false,
        "vote_average": 8,
        "vote_count": 2168
    },
    {
        "adult": false,
        "backdrop_path": "/cIVB7BepeWUXqFF787uL3A7lOJb.jpg",
        "genre_ids": [
            10402,
            18
        ],
        "id": 12104,
        "original_language": "en",
        "original_title": "Pink Floyd: The Wall",
        "overview": "Après le décès de son père pendant la Seconde Guerre mondiale, Pink est élevé par une mère tyrannique. Devenu rock star, il mène une vie tourmentée et s'enferme sur lui-même dans sa chambre d'hôtel. Peu à peu, il sombre dans la drogue tandis que la folie commence à s'emparer de lui…",
        "popularity": 13.831,
        "poster_path": "/hBfQbJUKl8C70z26cHoS5x9qyCR.jpg",
        "release_date": "1982-07-14",
        "title": "Pink Floyd : The Wall",
        "video": false,
        "vote_average": 8,
        "vote_count": 1354
    },
    {
        "adult": false,
        "backdrop_path": "/xBSwwkAYl9h8QVG2OxNpSaSgJwr.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 43949,
        "original_language": "en",
        "original_title": "Flipped",
        "overview": "Juli Baker croit fermement à trois choses: que les arbres sont sacrés (surtout son très cher sycomore), que les oeufs qu'elle récupère dans son jardin sont un véritable bienfait, et qu'un jour elle embrassera Bryce Loski. Depuis qu'elle a vu Bryce, Juli est tombée amoureuse. Malheureusement, Bryce n'a jamais partagé ses sentiments. Il pense au contraire, que Juli est bizarre. Mais un jour, tout change brusquement...",
        "popularity": 24.325,
        "poster_path": "/hVmBNYDFnwdA9X8eWI6W5fjgfZ6.jpg",
        "release_date": "2010-08-06",
        "title": "Un Cœur à l'envers",
        "video": false,
        "vote_average": 8,
        "vote_count": 2662
    },
    {
        "adult": false,
        "backdrop_path": "/mx2jS5Kaa5rmaldEFzKeKpDN9Q2.jpg",
        "genre_ids": [
            12,
            18,
            36,
            10752
        ],
        "id": 947,
        "original_language": "en",
        "original_title": "Lawrence of Arabia",
        "overview": "Le destin hors du commun de l'officier britannique T. E. Lawrence, qui mena la révolte arabe contre l'oppresseur turc au cours de la Première Guerre mondiale. Il a fallu plus de deux ans de travail de détective et d'archéologue au producteur Robert A. Harris, à qui l'on doit la restauration du «Napoléon» d'Abel Gance pour reconstituer la première version 70 mm intégrale de «Lawrence d'Arabie».",
        "popularity": 25.189,
        "poster_path": "/l6pOdchQfeBe5L9OByhtW0jhFzv.jpg",
        "release_date": "1962-12-11",
        "title": "Lawrence d'Arabie",
        "video": false,
        "vote_average": 8,
        "vote_count": 2701
    },
    {
        "adult": false,
        "backdrop_path": "/5dF4FNwM2qZIuF0WCUs5zvDGU2H.jpg",
        "genre_ids": [
            18
        ],
        "id": 7508,
        "original_language": "hi",
        "original_title": "तारे ज़मीन पर",
        "overview": "Ishaan Awasthi, âgé de huit ans, est un enfant espiègle et imaginatif. Issu d'une famille aisée, ses piètres résultats scolaires font le désespoir de ses parents qui décident de l'inscrire dans un pensionnat pour qu'il y acquière rigueur, goût du travail et de la réussite. Mais dans cet environnement rigide et hostile, coupé de sa famille et de ses amis, Ishaan se renferme et s'étiole jusqu'au jour où un jeune professeur découvre ses talents de peintre et sa dyslexie, cause de ses difficultés d'apprentissage.",
        "popularity": 23.633,
        "poster_path": "/wEHkOBcvEiNZpFU1O3HbZLoKSaE.jpg",
        "release_date": "2007-12-21",
        "title": "Des étoiles sur la terre",
        "video": false,
        "vote_average": 8,
        "vote_count": 1043
    },
    {
        "adult": false,
        "backdrop_path": "/h68ilwiTesb5wmDgy2mHYkVuOBP.jpg",
        "genre_ids": [
            35,
            10752,
            12,
            28
        ],
        "id": 961,
        "original_language": "en",
        "original_title": "The General",
        "overview": "Conducteur de locomotive, Johnnie Gray habite à Marietta, en Géorgie. Il est fiancé à Annabelle Lee. La guerre de Sécession éclate : le père et le frère de la jeune fille sont incorporés. Pas Johnny, qu'on juge plus utile à son poste et qu'entache ainsi, aux yeux de tous et même de sa fiancée, un soupçon de couardise. Un jour, des soldats nordistes volent sa locomotive, la «General», et enlèvent dans la foulée sa fiancée, Annabelle Lee. De peur d'être définitivement pris pour un lâche, Johnnie s'en va-t-en guerre : il se lance seul à la poursuite des voleurs...",
        "popularity": 11.546,
        "poster_path": "/fBqCF0ScIDElrSKzaXz0fHc85Nj.jpg",
        "release_date": "1926-12-25",
        "title": "Le Mécano de la Générale",
        "video": false,
        "vote_average": 8,
        "vote_count": 1094
    },
    {
        "adult": false,
        "backdrop_path": "/Ag6qhzsJd3k1NKuNrG9RmhZDMh7.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 640,
        "original_language": "en",
        "original_title": "Catch Me If You Can",
        "overview": "Dans les années soixante, le jeune Frank Abagnale Jr. est passé maître dans l'art de l'escroquerie, allant jusqu'à détourner 2,5 millions de dollars et à figurer sur les listes du FBI comme l'un des dix individus les plus recherchés des États-Unis. Véritable caméléon, Frank revêt des identités aussi diverses que celles de pilote de ligne, de médecin, de professeur d'université ou encore d'assistant du procureur. Carl Hanratty, agent du FBI à l'apparence stricte, fait de la traque de Frank Abagnale Jr. sa mission prioritaire, mais ce dernier reste pendant longtemps insaisissable…",
        "popularity": 57.921,
        "poster_path": "/kBKinpkg20wdxjRYtzrJDJfytms.jpg",
        "release_date": "2002-12-16",
        "title": "Arrête-moi si tu peux",
        "video": false,
        "vote_average": 8,
        "vote_count": 14448
    },
    {
        "adult": false,
        "backdrop_path": "/3Rfvhy1Nl6sSGJwyjb0QiZzZYlB.jpg",
        "genre_ids": [
            16,
            12,
            10751,
            35
        ],
        "id": 862,
        "original_language": "en",
        "original_title": "Toy Story",
        "overview": "Dans un monde où les jouets vivent leur vie quand les humains ne sont pas présents, Toy Story emmène les spectateurs dans un voyage fantastique vu principalement par les yeux de deux rivaux : Woody, un cow-boy, et Buzz l'Éclair, un ranger de l'espace. Ce duo va devoir apprendre à mettre ses différences de côté et s'allier, lorsqu'il sera séparé de son propriétaire Andy.",
        "popularity": 94.913,
        "poster_path": "/4cWLRhub0yY9VJpdw0nqoTPYyiN.jpg",
        "release_date": "1995-10-30",
        "title": "Toy Story",
        "video": false,
        "vote_average": 8,
        "vote_count": 17228
    },
    {
        "adult": false,
        "backdrop_path": "/qA2TyqPldTtoTVY3LKrNIG5g6bH.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 76,
        "original_language": "en",
        "original_title": "Before Sunrise",
        "overview": "Céline est une étudiante française qui est allée rendre visite à sa grand-mère à Budapest. Jesse est un jeune américain en voyage à travers l'Europe. Tous deux se rencontrent dans un train, entre Budapest et Vienne. Arrivés à Vienne, Jesse doit descendre. Il parvient à convaincre Céline de passer une nuit avec lui dans la capitale autrichienne. Au cours de cette nuit, ils apprendront à se connaître. Le lendemain, ils devront se séparer.",
        "popularity": 23.733,
        "poster_path": "/vLY17UVvhwXpEjnTqTYqlmuO2py.jpg",
        "release_date": "1995-01-27",
        "title": "Before Sunrise",
        "video": false,
        "vote_average": 8,
        "vote_count": 3744
    },
    {
        "adult": false,
        "backdrop_path": "/lVy5Zqcty2NfemqKYbVJfdg44rK.jpg",
        "genre_ids": [
            28,
            80
        ],
        "id": 24,
        "original_language": "en",
        "original_title": "Kill Bill: Vol. 1",
        "overview": "Au cours d'un mariage, un commando armé massacre l'assistance, laissant pour morte la Mariée et l'enfant qu'elle porte. Après 4 ans de coma, la Mariée se lance à la poursuite des assassins, membres du clan de Bill, au sein duquel, sous le pseudonyme de Black Mamba, elle exerça elle-même autrefois ses talents de redoutable tueuse...",
        "popularity": 36.105,
        "poster_path": "/hM2fUVWViGIJT0Twz2BTXOBEYLM.jpg",
        "release_date": "2003-10-10",
        "title": "Kill Bill: Volume 1",
        "video": false,
        "vote_average": 8,
        "vote_count": 16240
    },
    {
        "adult": false,
        "backdrop_path": "/gKkW9PIJSuyaTWI8wE3BZfjDaTi.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 627,
        "original_language": "en",
        "original_title": "Trainspotting",
        "overview": "Les aventures tragi-comiques de Mark Renton, junkie d'Édimbourg, qui va tenter de se séparer de sa bande de copains, losers, menteurs, psychopathes et voleurs.",
        "popularity": 28.015,
        "poster_path": "/wSjSdfnVjD6r8Fnn0K8FXz3JciM.jpg",
        "release_date": "1996-02-23",
        "title": "Trainspotting",
        "video": false,
        "vote_average": 8,
        "vote_count": 9049
    },
    {
        "adult": false,
        "backdrop_path": "/sdL37sfUBth7mdkAolI83bXAl7L.jpg",
        "genre_ids": [
            16,
            878,
            10751,
            35
        ],
        "id": 482321,
        "original_language": "en",
        "original_title": "Ron's Gone Wrong",
        "overview": "L'histoire de Barney, un collégien tout ce qu'il y a de plus normal, et de Ron, une prouesse technologique connectée capable de marcher et de parler, et conçue pour être son meilleur ami. Les dysfonctionnements de Ron à l'ère des réseaux sociaux entrainent le duo dans d'incroyables péripéties au cours desquelles garçon et robot vont découvrir la notion d'amitié sincère au milieu d'un joyeux désordre...",
        "popularity": 28.188,
        "poster_path": "/dtpRJxUtRnAY7rugbbyT8Ifko4e.jpg",
        "release_date": "2021-10-14",
        "title": "Ron débloque",
        "video": false,
        "vote_average": 8,
        "vote_count": 1653
    },
    {
        "adult": false,
        "backdrop_path": "/sj5R5SGor3YMFBuabMj8gPbyBmh.jpg",
        "genre_ids": [
            12,
            18,
            37
        ],
        "id": 3090,
        "original_language": "en",
        "original_title": "The Treasure of the Sierra Madre",
        "overview": "Dobbs et Curtis travaillent sur un chantier dont le chef part avec le salaire des ouvriers. Ils partent à sa recherche et récupèrent leur argent. Puis ils s'associent avec le vieil Howard pour exploiter un filon d'or dans la Sierra Madre.",
        "popularity": 16.294,
        "poster_path": "/mn4btqwxCcaegoW6pqag2s0YkZj.jpg",
        "release_date": "1948-01-15",
        "title": "Le Trésor de la Sierra Madre",
        "video": false,
        "vote_average": 8,
        "vote_count": 1072
    },
    {
        "adult": false,
        "backdrop_path": "/81LX4wktTXWEXjLNlkHTmJm7tRu.jpg",
        "genre_ids": [
            53,
            80,
            18
        ],
        "id": 1580,
        "original_language": "en",
        "original_title": "Rope",
        "overview": "Deux étudiants en suppriment un troisième, pour la seule beauté du geste. Défi suprême, le meurtre précède de peu une soirée où ils reçoivent les parents de la victime et leur ancien professeur.",
        "popularity": 24.718,
        "poster_path": "/3RPGC82EQVY3syzvD6ECeZCg39w.jpg",
        "release_date": "1948-03-11",
        "title": "La Corde",
        "video": false,
        "vote_average": 8,
        "vote_count": 2402
    },
    {
        "adult": false,
        "backdrop_path": "/ft8WRF2xqEwwGWa59naDUybKTAx.jpg",
        "genre_ids": [
            18,
            10752,
            10749
        ],
        "id": 770,
        "original_language": "en",
        "original_title": "Gone with the Wind",
        "overview": "En Géorgie, en 1861, Scarlett O'Hara est une jeune femme fière et volontaire de la haute société sudiste. Courtisée par tous les bons partis du pays, elle n'a d'yeux que pour Ashley Wilkes malgré ses fiançailles avec sa douce et timide cousine, Melanie Hamilton. Scarlett est pourtant bien décidée à le faire changer d'avis, mais à la réception des Douze Chênes c'est du cynique Rhett Butler qu'elle retient l'attention…",
        "popularity": 30.051,
        "poster_path": "/tCiSsqAzbM1gfwkyEWvglHSbIaX.jpg",
        "release_date": "1939-12-15",
        "title": "Autant en Emporte le Vent",
        "video": false,
        "vote_average": 8,
        "vote_count": 3707
    },
    {
        "adult": false,
        "backdrop_path": "/v85FlkbMYKa5du1glm0YfYNsL2n.jpg",
        "genre_ids": [
            18,
            10402,
            10749
        ],
        "id": 776503,
        "original_language": "en",
        "original_title": "CODA",
        "overview": "Fille de parents sourds, Ruby est la seule personne entendante de la maison. Quand elle se découvre une passion pour le chant, elle doit choisir entre ses rêves et sa famille.",
        "popularity": 31.87,
        "poster_path": "/2zryiROLIuC9rkqxBHiZWXMjZTm.jpg",
        "release_date": "2021-08-11",
        "title": "CODA",
        "video": false,
        "vote_average": 8,
        "vote_count": 1937
    },
    {
        "adult": false,
        "backdrop_path": "/3cyjYtLWCBE1uvWINHFsFnE8LUK.jpg",
        "genre_ids": [
            12,
            14,
            16,
            28,
            10751,
            10749
        ],
        "id": 10515,
        "original_language": "ja",
        "original_title": "天空の城ラピュタ",
        "overview": "Sheeta, seule héritière des secrets de Laputa, la cité volante, attire l'avidité des pirates et de l'armée. Poursuivie, elle est sauvée par Pazu, un jeune pilote d'avion travaillant dans une cité minière.",
        "popularity": 40.761,
        "poster_path": "/uU32j2eWvoHIIVyn7QfBg5UaKue.jpg",
        "release_date": "1986-08-02",
        "title": "Le Château dans le ciel",
        "video": false,
        "vote_average": 8,
        "vote_count": 3764
    },
    {
        "adult": false,
        "backdrop_path": "/xhm7SfFI5ApWoqFVNnEnYxbIxJT.jpg",
        "genre_ids": [
            35
        ],
        "id": 38286,
        "original_language": "it",
        "original_title": "Tre uomini e una gamba",
        "overview": "Trois amis - Aldo, Giovanni et Giacomo - doivent se rendre de Milan à Gallipoli, dans les Pouilles, pour le mariage de Giacomo. Le père de la mariée, qui est aussi l'employeur et le beau-père d'Aldo et de Giovanni, est un homme d'affaires riche et vulgaire qui maltraite ses gendres et leur a confié la tâche de lui apporter une jambe de bois, œuvre d'un artiste célèbre.",
        "popularity": 8.196,
        "poster_path": "/qCw7fAZnA7DloKwvzdseWRYi19K.jpg",
        "release_date": "1997-12-27",
        "title": "Tre uomini e una gamba",
        "video": false,
        "vote_average": 8,
        "vote_count": 1967
    },
    {
        "adult": false,
        "backdrop_path": "/86l1gqKjhPn6Ypd8XSSIGx7ZikB.jpg",
        "genre_ids": [
            16,
            18,
            10751
        ],
        "id": 242828,
        "original_language": "ja",
        "original_title": "思い出のマーニー",
        "overview": "Anna, jeune fille solitaire, vit en ville avec ses parents adoptifs. Un été, elle est envoyée dans un petit village au nord d'Hokkaïdo. Dans une vieille demeure inhabitée, au cœur des marais, elle va se lier d'amitié avec l'étrange Marnie…",
        "popularity": 26.199,
        "poster_path": "/cc1UKEQCw7BJA7uWnZbd2tfqM4.jpg",
        "release_date": "2014-07-19",
        "title": "Souvenirs de Marnie",
        "video": false,
        "vote_average": 8,
        "vote_count": 1625
    },
    {
        "adult": false,
        "backdrop_path": "/oGMomeS7bE43eN8SGJUaKvQnmud.jpg",
        "genre_ids": [
            18
        ],
        "id": 70,
        "original_language": "en",
        "original_title": "Million Dollar Baby",
        "overview": "Rejeté depuis longtemps par sa fille, l'entraîneur Frankie Dunn s'est replié sur lui-même et vit dans un désert affectif, en évitant toute relation qui pourrait accroître sa douleur et sa culpabilité. Le jour où Maggie Fitzgerald, 31 ans, pousse la porte de son gymnase à la recherche d'un coach, elle n'amène pas seulement avec elle sa jeunesse et sa force, mais aussi une histoire jalonnée d'épreuves et une exigence, vitale et urgente : monter sur le ring, entraînée par Frankie, et enfin concrétiser le rêve d'une vie. Après avoir repoussé plusieurs fois sa demande, Frankie se laisse convaincre par l'inflexible détermination de la jeune femme. Une relation mouvementée, tour à tour stimulante et exaspérante, se noue entre eux, au fil de laquelle Maggie et l'entraîneur se découvrent une communauté d'esprit et une complicité inattendues…",
        "popularity": 22.946,
        "poster_path": "/7yWwlgq12qZ4nMLQHhEf8ITaggn.jpg",
        "release_date": "2004-12-15",
        "title": "Million Dollar Baby",
        "video": false,
        "vote_average": 8,
        "vote_count": 8910
    },
    {
        "adult": false,
        "backdrop_path": "/uHztAwe3iWDC5I0W1tDZ5fUtRRQ.jpg",
        "genre_ids": [
            18,
            27,
            53,
            80
        ],
        "id": 234,
        "original_language": "de",
        "original_title": "Das Cabinet des Dr. Caligari",
        "overview": "Dans une fête foraine, un mystérieux docteur prédit un avenir tragique à un jeune étudiant...",
        "popularity": 18.529,
        "poster_path": "/qWAZozKtoRI8PO8teYmSvH3zcHI.jpg",
        "release_date": "1920-02-27",
        "title": "Le Cabinet du docteur Caligari",
        "video": false,
        "vote_average": 8,
        "vote_count": 1386
    },
    {
        "adult": false,
        "backdrop_path": "/tvNuhRlpRozDgsX1zR9gQ2aHv1X.jpg",
        "genre_ids": [
            18
        ],
        "id": 1578,
        "original_language": "en",
        "original_title": "Raging Bull",
        "overview": "Raging Bull retrace les moments forts de la carrière flamboyante de Jack La Motta, champion de boxe poids moyen. Issu d'un milieu modeste, il fut le héros de combats mythiques, notamment contre Robinson et Cerdan. Autodestructeur, paranoïque, déchiré entre le désir du salut personnel et la damnation, il termine son existence, bouffi, en tant que gérant de boîte de nuit et entertainer. Quand l'ascension et le déclin d'une vie deviennent épopée...",
        "popularity": 23.731,
        "poster_path": "/pbJqnZccb9g6DCrX40Y4eUzRbap.jpg",
        "release_date": "1980-11-14",
        "title": "Raging Bull",
        "video": false,
        "vote_average": 8,
        "vote_count": 3901
    },
    {
        "adult": false,
        "backdrop_path": "/4kIRrW1AlHP5Idne8CPHeQt8nR5.jpg",
        "genre_ids": [
            16,
            10751,
            35,
            14
        ],
        "id": 550205,
        "original_language": "en",
        "original_title": "Wish Dragon",
        "overview": "Din, un étudiant ambitieux mais sans le sou, et Long, un dragon cynique mais tout-puissant capable d'exaucer des vœux, se lancent dans une aventure délirante à travers le Shanghai d'aujourd'hui à la recherche de Lina, une amie d'enfance que Din n'a pas revue depuis longtemps. Leur périple les conduira à se poser certaines questions existentielles, car si l'on peut obtenir tout ce que l'on souhaite, il faut alors déterminer ce qui compte réellement.",
        "popularity": 45.879,
        "poster_path": "/kTl4PwU1Xvls5FR6HcFGXdflu8C.jpg",
        "release_date": "2021-01-15",
        "title": "Le Dragon-Génie",
        "video": false,
        "vote_average": 8,
        "vote_count": 1168
    },
    {
        "adult": false,
        "backdrop_path": "/hGGC9gKo7CFE3fW07RA587e5kol.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            12
        ],
        "id": 14160,
        "original_language": "en",
        "original_title": "Up",
        "overview": "À 78 ans, Carl n'envisage plus qu'une chose : finir tranquillement sa vie dans la petite maison où il a passé toute une existence paisible auprès de son épouse Ellie. Veuf désormais, il reste, en effet, attaché à son passé en refusant les propositions mirobolantes d'un promoteur pour racheter son bien. Quand des circonstances exceptionnelles le contraignent d'intégrer une maison de retraite, il prend une ultime fois les choses en mains et, transformant sa demeure en dirigeable, s'envole pour l'aventure, vers la partie du monde où sa femme et lui s'étaient promis un jour de s'installer. Il ne se doute pas alors qu'il a emporté avec lui un jeune passager clandestin, Russell et que le voyage sera loin d'être de tout repos…",
        "popularity": 96.344,
        "poster_path": "/4groWLHx6qkSDSSHiEzUwsf70aO.jpg",
        "release_date": "2009-05-28",
        "title": "Là-haut",
        "video": false,
        "vote_average": 8,
        "vote_count": 18933
    },
    {
        "adult": false,
        "backdrop_path": "/l2iY1AgqQ8dEa3FtWkN5TQ5aVbU.jpg",
        "genre_ids": [
            53,
            9648
        ],
        "id": 1092,
        "original_language": "en",
        "original_title": "The Third Man",
        "overview": "Au lendemain de la Seconde Guerre mondiale. Invité par son ami Harry Lime, le romancier américain Holly Martins se rend à Vienne, divisée en quatre zones d'occupation. Tout juste arrivé, il apprend que Lime vient de perdre la vie dans un accident de la circulation et qu'on l'enterre ce jour même. L'écrivain n'est pas au bout de ses surprises. Au cimetière, il est abordé par le major Calloway, pour qui Lime n'était qu'un vulgaire trafiquant, une crapule. Choqué, Martins décide de mener une enquête sur le défunt. Il fait bientôt la connaissance du mystérieux baron Kurtz, l'un des deux témoins de l'accident, l'autre étant un Roumain du nom de Popescu…",
        "popularity": 20.348,
        "poster_path": "/4Yeqe1eiM6GVPwIqWWhidCFP1Z4.jpg",
        "release_date": "1949-08-31",
        "title": "Le Troisième Homme",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1680
    },
    {
        "adult": false,
        "backdrop_path": "/jeC1kzwWnZTuXl7xF4E5D70BD8c.jpg",
        "genre_ids": [
            12,
            878
        ],
        "id": 775,
        "original_language": "fr",
        "original_title": "Le Voyage dans la Lune",
        "overview": "Lors d'un colloque d'astronomie, le professeur Barbenfouillis propose à ses confrères d'organiser une expédition sur la Lune. Son idée est de s'y faire envoyer à l'aide d'un obus spatial qui sera propulsé au moyen d'un canon géant. Le lancement réussit et les six savants embarqués découvrent que la lune est habitée par une population locale, les Sélénites, et sont faits prisonniers.",
        "popularity": 18.05,
        "poster_path": "/ep8nPMDeKE01jss7mzEKDzgYQdr.jpg",
        "release_date": "1902-04-17",
        "title": "Le Voyage dans la Lune",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1590
    },
    {
        "adult": false,
        "backdrop_path": "/fK40VGYIm7hmKrLJ26fgPQU0qRG.jpg",
        "genre_ids": [
            16,
            878,
            28
        ],
        "id": 149,
        "original_language": "ja",
        "original_title": "AKIRA",
        "overview": "Tetsuo, un adolescent ayant vécu une enfance difficile, est la victime d'expériences visant à développer les capacités psychiques qui dorment en chacun de nous. Ainsi doté d'une puissance que lui-même ne peut imaginer, Tetsuo décide de partir en guerre contre le monde qui l'a opprimé. Dès lors, Il se retrouve au cœur d'une légende populaire qui annonce le retour prochain d'Akira, un enfant aux pouvoirs extra-ordinaires censé délivrer Tokyo du chaos...",
        "popularity": 33.509,
        "poster_path": "/8fCn7TwTe0Z4fTugIiLssX6UcHe.jpg",
        "release_date": "1988-07-16",
        "title": "Akira",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 3747
    },
    {
        "adult": false,
        "backdrop_path": "/46FRuCeAn6TrS4F1P4F9zhyCpyo.jpg",
        "genre_ids": [
            18
        ],
        "id": 785084,
        "original_language": "en",
        "original_title": "The Whale",
        "overview": "Charlie, professeur d'anglais reclus souffrant d'obésité, tente de renouer avec sa fille adolescente pour une ultime chance de rédemption.",
        "popularity": 75.15,
        "poster_path": "/5jilYAMUKk9U5K9phmbFOEDqfR3.jpg",
        "release_date": "2022-12-09",
        "title": "The Whale",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2977
    },
    {
        "adult": false,
        "backdrop_path": "/A9IY3j3Hwf4Q8Q9w5QxSQPYSvCu.jpg",
        "genre_ids": [
            18,
            9648,
            10749
        ],
        "id": 110,
        "original_language": "fr",
        "original_title": "Trois couleurs : Rouge",
        "overview": "Valentine, étudiante à Genève et mannequin à ses heures, passe son temps à attendre les appels téléphoniques de son petit ami, Michel, qui vit en Angleterre. Auguste, son voisin, épris de la douce Karin, travaille d'arrache-pied pour devenir avocat. Sans le savoir, tout ce petit monde a été placé sur écoute par un juge à la retraite, acariâtre et cynique, qui occupe ainsi sa misanthropie et ses vieux jours. Parce qu'au volant de sa voiture, elle a renversé la chienne du juge, Valentine fait la connaissance du vieux grigou et découvre ses basses manies. Dégoûtée autant que fascinée, elle se met à lui rendre de fréquentes visites...",
        "popularity": 18.179,
        "poster_path": "/oc7q25hwAMJ6RH7pytfCgWcR99w.jpg",
        "release_date": "1994-05-12",
        "title": "Trois couleurs : Rouge",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1230
    },
    {
        "adult": false,
        "backdrop_path": "/4Bb1kMIfrT2tYRZ9M6Jhqy6gkeF.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 76203,
        "original_language": "en",
        "original_title": "12 Years a Slave",
        "overview": "Les États-Unis, quelques années avant la guerre de Sécession.  Solomon Northup, jeune homme noir originaire de l'État de New York, est enlevé et vendu comme esclave.  Face à la cruauté d'un propriétaire de plantation de coton, Solomon se bat pour rester en vie et garder sa dignité. Douze ans plus tard, il va croiser un abolitionniste canadien et, cette rencontre va changer sa vie…",
        "popularity": 24.44,
        "poster_path": "/AeoXonCArZda8vgBb7IbXiUJsdi.jpg",
        "release_date": "2013-10-18",
        "title": "12 Years a Slave",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 10643
    },
    {
        "adult": false,
        "backdrop_path": "/6TjllWT3cGrPFyqDXurVZ3L8bBi.jpg",
        "genre_ids": [
            9648,
            53,
            18
        ],
        "id": 745,
        "original_language": "en",
        "original_title": "The Sixth Sense",
        "overview": "Cole Sear, garçonnet de huit ans est hanté par un terrible secret. Son imaginaire est visité par des esprits menaçants. Trop jeune pour comprendre le pourquoi de ces apparitions et traumatisé par ces pouvoirs paranormaux, Cole s'enferme dans une peur maladive et ne veut révéler à personne la cause de son enfermement, à l'exception d'un psychologue pour enfants. La recherche d'une explication rationnelle guidera l'enfant et le thérapeute vers une vérité foudroyante et inexplicable.",
        "popularity": 41.349,
        "poster_path": "/7s3ekiDpic8NxDjwdLdOYDIX8Pe.jpg",
        "release_date": "1999-08-06",
        "title": "Sixième sens",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 10795
    },
    {
        "adult": false,
        "backdrop_path": "/1pz4ZArUTM1jrpR6XkYuDlEQncG.jpg",
        "genre_ids": [
            12,
            18,
            36,
            53,
            10752
        ],
        "id": 5925,
        "original_language": "en",
        "original_title": "The Great Escape",
        "overview": "Le Capitaine Ramsey et ses 250 hommes, prisonniers anglais, se retrouvent au Stalag Luth North. Et bien que le colonel von Luger de la Luftwaffe, directeur du camp, a affirmé qu'il est impossible de s'échapper, Ramsey considère qu'il est de son devoir de faire une tentative.",
        "popularity": 31.341,
        "poster_path": "/gsiQeKIBIB1xkfEaSEzlyvNJ0rJ.jpg",
        "release_date": "1963-07-03",
        "title": "La Grande Évasion",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2294
    },
    {
        "adult": false,
        "backdrop_path": "/79bJL9ydAMYVltuNTt4VhxORqIz.jpg",
        "genre_ids": [
            12,
            878
        ],
        "id": 329,
        "original_language": "en",
        "original_title": "Jurassic Park",
        "overview": "Ne pas réveiller le chat qui dort... C'est ce que le milliardaire John Hammond aurait dû se rappeler avant de se lancer dans le \"clonage\" de dinosaures. C'est à partir d'une goutte de sang absorbée par un moustique fossilisé que John Hammond et son équipe ont réussi à faire renaître une dizaine d'espèces de dinosaures. Il s'apprête maintenant avec la complicité du docteur Alan Grant, paléontologue de renom, et de son amie Ellie, à ouvrir le plus grand parc à thème du monde. Mais c'était sans compter la cupidité et la malveillance de l'informaticien Dennis Nedry, et éventuellement des dinosaures, seuls maîtres sur l'île...",
        "popularity": 23.898,
        "poster_path": "/2E2dKGPTWoyiaSzgNaer9zpP49n.jpg",
        "release_date": "1993-06-11",
        "title": "Jurassic Park",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 15204
    },
    {
        "adult": false,
        "backdrop_path": "/r4xkyAUrMJLV0AE2eZJs2wKx0SK.jpg",
        "genre_ids": [
            16,
            18,
            10751
        ],
        "id": 37797,
        "original_language": "ja",
        "original_title": "耳をすませば",
        "overview": "Shizuku est une jeune collégienne de quatorze ans comme toutes les autres, mais elle est passionnée de littérature et elle écrit des chansons. C'est l'été à Tokyo, et elle a décidé de lire, pendant les vacances, une vingtaine de livres. Elle découvre qu'à chacun des romans qu'elle a choisis, le nom de Seiji Amasawa apparaît sur la liste des personnes les ayant empruntés. Shizuku rencontre enfin ce Seiji.",
        "popularity": 33.253,
        "poster_path": "/y0MAMtcsKSCTq1WJbdsiBa5fckY.jpg",
        "release_date": "1995-07-15",
        "title": "Si tu tends l'oreille",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1751
    },
    {
        "adult": false,
        "backdrop_path": "/hUzRPXBUHyJhpyGV0NfBDuadbgp.jpg",
        "genre_ids": [
            80,
            18,
            10749
        ],
        "id": 654,
        "original_language": "en",
        "original_title": "On the Waterfront",
        "overview": "Un jeune docker, Terry Malloy, ancien boxeur, est manipulé par son frère, avocat du syndicat des dockers dirigé par le crapuleux Johnny Friendly. Il assiste sans intervenir au meurtre d'un employé qui voulait dénoncer les méthodes illégales de ce dernier. Malloy se retrouve devant un cas de conscience...",
        "popularity": 20.263,
        "poster_path": "/mVrMBsovgLtlONd03l1OhjsnnCq.jpg",
        "release_date": "1954-06-22",
        "title": "Sur les quais",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1413
    },
    {
        "adult": false,
        "backdrop_path": "/32pvxFiXNo2TdNpBiuHN8k2Mr4K.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 11010,
        "original_language": "it",
        "original_title": "Il postino",
        "overview": "Mario a eu la double infortune de naître sur une île du sud de l'Italie qui ne vit que de la pêche et, de détester cette activité. Aussi, quelle ne fut sa joie lorsqu'il appris qu'il était engagé comme facteur dans le village voisin et qu'en outre son travail se limiterait à desservir une seule adresse, mais quelle adresse : celle de Pablo Neruda, le poète chilien en exil. Neruda se laisse peu à peu séduire par cet admirateur enthousiaste qu'il trouvait envahissant aux débuts de leur relation. Une amitié naît entre les deux hommes. Neruda communique à l'homme qui concrétise son lien avec le monde l'amour des mots et le sens de leur agencement. Il l'aide même à conquérir la femme qu'il aime et qu'il pourra bientôt épouser...",
        "popularity": 12.534,
        "poster_path": "/gS9oBkj080WmqygQ4CDqVpVz4R6.jpg",
        "release_date": "1994-04-07",
        "title": "Le Facteur",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1064
    },
    {
        "adult": false,
        "backdrop_path": "/kd9jFTTabg4xJpHDgxY0h8F9BzG.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 6977,
        "original_language": "en",
        "original_title": "No Country for Old Men",
        "overview": "À la frontière qui sépare le Texas du Mexique, les trafiquants de drogue ont depuis longtemps remplacé les voleurs de bétail. Lorsque Llewelyn Moss tombe sur une camionnette abandonnée, cernée de cadavres ensanglantés, il ne sait rien de ce qui a conduit à ce drame. Et quand il prend les deux millions de dollars qu'il découvre à l'intérieur du véhicule, il n'a pas la moindre idée de ce que cela va provoquer… Moss a déclenché une réaction en chaîne d'une violence inouïe que le shérif Bell, un homme vieillissant et sans illusions, ne parviendra pas à contenir…",
        "popularity": 52.563,
        "poster_path": "/hxVT4KTmjVxVbsnvImm6WWgLMzg.jpg",
        "release_date": "2007-06-13",
        "title": "No Country for Old Men",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 11019
    },
    {
        "adult": false,
        "backdrop_path": "/jMBpJFRtrtIXymer93XLavPwI3P.jpg",
        "genre_ids": [
            28,
            53,
            878
        ],
        "id": 679,
        "original_language": "en",
        "original_title": "Aliens",
        "overview": "Après 57 ans de dérive dans l'espace, Ellen Ripley est secourue par la corporation Weyland-Yutani. Malgré son rapport concernant l'incident survenu sur le Nostromo, elle n'est pas prise au sérieux par les militaires quant à la présence de xénomorphes sur la planète LV-426 où se posa son équipage… planète où plusieurs familles de colons ont été envoyés en mission de « terraformage ». Après la disparition de ces derniers, Ripley décide d'accompagner une escouade de marines dans leur mission de sauvetage… et d'affronter à nouveau la Bête.",
        "popularity": 57.445,
        "poster_path": "/uafMg29wVV4XvxPS59s8nBBbP4i.jpg",
        "release_date": "1986-07-18",
        "title": "Aliens, le retour",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 8796
    },
    {
        "adult": false,
        "backdrop_path": "/6ydGnzbo8s4yRNqQWPAvVSiNU8N.jpg",
        "genre_ids": [
            16,
            12,
            35
        ],
        "id": 501929,
        "original_language": "en",
        "original_title": "The Mitchells vs. the Machines",
        "overview": "Katie Michell, jeune fille passionnée à la créativité débordante, est acceptée dans l'université de ses rêves. Alors qu'elle avait prévu de prendre l'avion pour s'installer à l'université, son père Rick, grand amoureux de la nature, décide que toute la famille devrait l'accompagner en voiture pour faire un road- trip mémorable et profiter d'un moment tous ensemble. Linda, mère excessivement positive, Aaron, petit frère excentrique, et Monchi, carlin délicieusement joufflu, se joignent à Katie et Rick pour un ultime voyage en famille. Mais le programme des Mitchell est soudainement interrompu par une rébellion technologique : partout dans le monde, les appareils électroniques tant appréciés de tous – des téléphones aux appareils électroménagers, en passant par des robots personnels innovants – décident qu'il est temps de prendre le contrôle.",
        "popularity": 28.753,
        "poster_path": "/pUT8Rn3wTBhTX5KWSHe6ozVx2LI.jpg",
        "release_date": "2021-04-22",
        "title": "Les Mitchell contre les Machines",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2598
    },
    {
        "adult": false,
        "backdrop_path": "/8lBcqakI3F19NWkXdqE0M8W76b9.jpg",
        "genre_ids": [
            28,
            18,
            36,
            10752
        ],
        "id": 197,
        "original_language": "en",
        "original_title": "Braveheart",
        "overview": "À la fin du XIIIème siècle, le roi Edward 1er d'Angleterre s'empare du trône d'Ecosse, réduisant son peuple à la misère. William Wallace donne le signe de la révolte et, à la tête d'une armée de gueux, parvient à reconquérir plusieurs places fortes. Mais les nobles écossais sont lâchés et par deux fois trahissent le héros de leur peuple...",
        "popularity": 41.144,
        "poster_path": "/cteCb7HgeNmx8aeu5drpTb7N8fB.jpg",
        "release_date": "1995-05-24",
        "title": "Braveheart",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 9384
    },
    {
        "adult": false,
        "backdrop_path": "/9Eh5xzWTpJeZM1FGCblWKZ8GTpw.jpg",
        "genre_ids": [
            878,
            28,
            16,
            9648
        ],
        "id": 142061,
        "original_language": "en",
        "original_title": "Batman: The Dark Knight Returns, Part 2",
        "overview": "Motivé par le retour de Batman, le Joker s'évade et provoque des meurtres en série. Superman demande à Batman de cesser ses activités avant qu'il ne soit obligé de l'arrêter par la force.…",
        "popularity": 22.406,
        "poster_path": "/9co1jy62YHRlCBvUZ8WB0rDxWul.jpg",
        "release_date": "2013-01-03",
        "title": "Batman : The Dark Knight Returns, Part 2",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1349
    },
    {
        "adult": false,
        "backdrop_path": "/eIi3klFf7mp3oL5EEF4mLIDs26r.jpg",
        "genre_ids": [
            878,
            18,
            53
        ],
        "id": 78,
        "original_language": "en",
        "original_title": "Blade Runner",
        "overview": "2019, Los Angeles. La Terre est surpeuplée et l'humanité est partie coloniser l'espace. Les nouveaux colons sont assistés de Replicants, androïdes que rien ne peut distinguer de l'être humain. Conçus comme de nouveaux esclaves, certains parmi les plus évolués s'affranchissent de leurs chaînes et s'enfuient. Rick Deckard, un ancien Blade Runner, catégorie spéciale de policiers chargés de \"retirer\" ces replicants, accepte une nouvelle mission consistant à retrouver quatre de ces individus qui viennent de regagner la Terre après avoir volé une navette spatiale.",
        "popularity": 47.649,
        "poster_path": "/zHKWxyG4j404HVeSYHNH4niUpkW.jpg",
        "release_date": "1982-06-25",
        "title": "Blade Runner",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 12832
    },
    {
        "adult": false,
        "backdrop_path": "/jHwASc8hBtdfRGUmxS6pq5mHiyN.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 152532,
        "original_language": "en",
        "original_title": "Dallas Buyers Club",
        "overview": "1986, Dallas, Texas, une histoire vraie. Ron Woodroof a 35 ans, des bottes, un Stetson, c'est un cow-boy, un vrai. Sa vie: sexe, drogue et rodéo. Tout bascule quand, diagnostiqué séropositif, il lui reste 30 jours à vivre. Révolté par l'impuissance du corps médical, il recourt à des traitements alternatifs non officiels. Au fil du temps, il rassemble d'autres malades en quête de guérison: le Dallas Buyers Club est né. Mais son succès gêne, Ron doit s'engager dans une bataille contre les laboratoires et les autorités fédérales. C'est son combat pour une nouvelle cause… et pour sa propre vie.",
        "popularity": 20.42,
        "poster_path": "/euuPpXZhVBZzD0JLghTX7foFY70.jpg",
        "release_date": "2013-11-01",
        "title": "Dallas Buyers Club",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 8026
    },
    {
        "adult": false,
        "backdrop_path": "/aPteaXAPp9RwdoecjMgkGKxpkMA.jpg",
        "genre_ids": [
            35,
            10752
        ],
        "id": 8290,
        "original_language": "fr",
        "original_title": "La Grande Vadrouille",
        "overview": "En 1942, un avion de la Royal Air Force est abattu au-dessus de Paris. Les trois pilotes sautent en parachute et sont recueillis par deux résistants français. Ils se lancent dans des aventures extravagantes pour conduire les Anglais en zone libre.",
        "popularity": 19.46,
        "poster_path": "/8mIIxQJu4vBk8Sfnv9zKeKcWJ2j.jpg",
        "release_date": "1966-12-08",
        "title": "La Grande Vadrouille",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1214
    },
    {
        "adult": false,
        "backdrop_path": "/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg",
        "genre_ids": [
            878,
            18,
            12
        ],
        "id": 522402,
        "original_language": "en",
        "original_title": "Finch",
        "overview": "Finch est le dernier homme sur Terre. Souffrant de sa condition de mortel, l'inventeur construit un robot afin de prendre soin de son chien bien-aimé. Le trio se lance dans un voyage à travers le pays. Le scientifique en profite pour apprendre à sa création le sens de l'amour et de l'amitié pour assumer la charge d'un animal et que ce dernier, en retour, puisse accepter ce nouveau maître.",
        "popularity": 36.959,
        "poster_path": "/jKuDyqx7jrjiR9cDzB5pxzhJAdv.jpg",
        "release_date": "2021-11-04",
        "title": "Finch",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 3101
    },
    {
        "adult": false,
        "backdrop_path": "/gTRXgigmgKpeJjW07iq686HZyBD.jpg",
        "genre_ids": [
            28,
            16,
            878
        ],
        "id": 9323,
        "original_language": "ja",
        "original_title": "GHOST IN THE SHELL",
        "overview": "Dans un Japon futuriste régi par l'Internet, le major Motoko Kusunagi, une femme cyborg ultra-perfectionnée, est hantée par des interrogations ontologiques. Elle appartient, malgré elle, à une cyber-police musclée dotée de moyens quasi-illimités pour lutter contre le crime informatique. Le jour où sa section retrouve la trace du 'Puppet Master', un hacker mystérieux et légendaire dont l'identité reste totalement inconnue, la jeune femme se met en tète de pénétrer le corps de celui-ci et d'en analyser le ghost (élément indéfinissable de la conscience, apparenté à l'âme) dans l'espoir d'y trouver les réponses à ses propres questions existentielles...",
        "popularity": 29.249,
        "poster_path": "/f4RuGi7MO7GcEtnEpQO4wqaBBUk.jpg",
        "release_date": "1995-11-18",
        "title": "Ghost in the Shell",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 3033
    },
    {
        "adult": false,
        "backdrop_path": "/ulVUa2MvnJAjAeRt7h23FFJVRKH.jpg",
        "genre_ids": [
            12,
            16,
            14
        ],
        "id": 81,
        "original_language": "ja",
        "original_title": "風の谷のナウシカ",
        "overview": "Dans un monde où la nature est hostile à l'Homme, Nausicaä – princesse de la Vallée du Vent – se bat pour protéger son village. Mais la guerre des hommes frappe à leur porte. Les vestiges d'une humanité industrielle menacent l'équilibre entre les rescapés humains du grand cataclysme et les insectes, protecteurs de la forêt toxique.",
        "popularity": 33.555,
        "poster_path": "/oFepxUN7SJ3kwuohhUoqzn5eNTA.jpg",
        "release_date": "1984-03-11",
        "title": "Nausicaä de la vallée du vent",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 3192
    },
    {
        "adult": false,
        "backdrop_path": "/lB8mrGjgOxVuiGzBNbHfUrFw02d.jpg",
        "genre_ids": [
            18,
            36,
            10751
        ],
        "id": 491480,
        "original_language": "en",
        "original_title": "The Boy Who Harnessed the Wind",
        "overview": "Le film raconte l'histoire de William Kamkwamba, un jeune garçon de 13 ans renvoyé de son école quand sa famille ne peut plus en payer les frais. Après s'être introduit en secret dans la bibliothèque de l'école, et en utilisant les débris de la bicyclette de son père Trywell, William trouve le moyen de construire un moulin à vent qui sauve son village malawien de la famine. Autour d'un voyage émotionnel entre un père et son fils prodige, l'histoire de William illustre l'incroyable détermination d'un garçon dont l'esprit curieux a surmonté tous les obstacles qui ont entravé son chemin.",
        "popularity": 28.064,
        "poster_path": "/rcCR9SiCHZd5fdDDjmznVmHpFRH.jpg",
        "release_date": "2019-02-14",
        "title": "Le Garçon qui dompta le vent",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1527
    },
    {
        "adult": false,
        "backdrop_path": "/gZ78dyRH9hXeH94ASjuvD9Vw4b5.jpg",
        "genre_ids": [
            10751,
            16,
            878,
            18
        ],
        "id": 10386,
        "original_language": "en",
        "original_title": "The Iron Giant",
        "overview": "Quelque chose de gigantesque se profile à l'horizon. Hogarth Hugues vient tout juste de sauver un énorme robot tombé du ciel. Le jeune Hogarth a désormais un très grand ami et un problème encore plus grand : Comment garder secrète l'existence d'un géant de 15 mètres ? Cette mission se complique encore plus lorsqu'un agent du gouvernement un peu trop curieux arrive en ville pour chasser « l'envahisseur alien » et que les forces terrestres, maritimes et aériennes des militaires américains sont envoyées pour démolir le géant.",
        "popularity": 33.646,
        "poster_path": "/1Z1Gn2bbyOygv8R2qE2uLjwualf.jpg",
        "release_date": "1999-08-06",
        "title": "Le Géant de fer",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 5124
    },
    {
        "adult": false,
        "backdrop_path": "/f3XrGXd34Ru7o39LUwWvk5igEV7.jpg",
        "genre_ids": [
            12,
            28
        ],
        "id": 85,
        "original_language": "en",
        "original_title": "Raiders of the Lost Ark",
        "overview": "L'Arche d'Alliance contenant les tables de la Loi brisées par Moïse, voici 3000 ans, est l'objet de la convoitise des nazis. L'archéologue aventurier Indiana Jones se lance à sa recherche, poursuivi par son ennemi Belloq.",
        "popularity": 51.54,
        "poster_path": "/ySr6a1Za5bt00hzPHTiKl4xbajr.jpg",
        "release_date": "1981-06-12",
        "title": "Les Aventuriers de l'arche perdue",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 11528
    },
    {
        "adult": false,
        "backdrop_path": "/tHR34A5n0my4maACNdLpWGd6QYq.jpg",
        "genre_ids": [
            18,
            53
        ],
        "id": 698948,
        "original_language": "en",
        "original_title": "Thirteen Lives",
        "overview": "Inspiré d'une histoire vraie qui a captivé le monde, \"Treize Vies\" retrace de manière palpitante le sauvetage de jeunes footballeurs dans la grotte de Tham Luang, en Thaïlande, piégés par des pluies torrentielles et une dangereuse inondation.",
        "popularity": 26.491,
        "poster_path": "/tgbfXKmK4LPPUniWE8novCPE6xR.jpg",
        "release_date": "2022-07-18",
        "title": "Treize vies",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1061
    },
    {
        "adult": false,
        "backdrop_path": "/j29ekbcLpBvxnGk6LjdTc2EI5SA.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            18,
            35
        ],
        "id": 150540,
        "original_language": "en",
        "original_title": "Inside Out",
        "overview": "Riley est déracinée du Mid-Ouest quand son père est muté à San Francisco. Comme tous, Riley est guidée par ses Émotions : Joie, Peur, Colère, Dégoût et Tristesse. Les Émotions vivent au Quartier Cérébral, où elles la conseillent au quotidien. Alors que Riley et ses Émotions se bagarrent, c'est la crise au Quartier Cérébral. Joie, l'Émotion principale de Riley, essaie de rester positive alors que les autres Émotions essaient de s'adapter à la nouvelle vie de Riley.",
        "popularity": 91.03,
        "poster_path": "/KUhrtJN02RNt3Sxc4IMTa1d9Lt.jpg",
        "release_date": "2015-06-09",
        "title": "Vice-versa",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 19526
    },
    {
        "adult": false,
        "backdrop_path": "/uR0FopHrAjDlG5q6PZB07a1JOva.jpg",
        "genre_ids": [
            16,
            878,
            28
        ],
        "id": 610150,
        "original_language": "ja",
        "original_title": "ドラゴンボール超 スーパーヒーロー",
        "overview": "L'armée du Ruban Rouge avait été détruite par Son Goku, mais des individus ont décidé de la faire renaître. Ils ont ainsi créé les cyborgs ultimes, Gamma 1 et Gamma 2. Autoproclamés les « Super Héros », ils lancent une attaque contre Piccolo et Son Gohan. Quel est le but de cette nouvelle organisation du Ruban Rouge ? Face à ce danger qui se rapproche, il est temps pour les vrais héros de se réveiller !",
        "popularity": 94.093,
        "poster_path": "/eGQ3XOWBBZwayO0j7era9L7Is5V.jpg",
        "release_date": "2022-06-11",
        "title": "Dragon Ball Super: Super Hero",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2564
    },
    {
        "adult": false,
        "backdrop_path": "/9ueD5NSVOn0dWTL93WciT9JoKN3.jpg",
        "genre_ids": [
            10751,
            18
        ],
        "id": 404378,
        "original_language": "en",
        "original_title": "A Street Cat Named Bob",
        "overview": "Réfugié dans la drogue depuis l'adolescence, James Bowen est un jeune SDF Anglais en manque de repères. Un jour, il trouve un chat abandonné qui s'appelle Bob et les deux deviennent inséparables. Un duo improbable et une amitié hors du commun qui vont aider James à sortir de l'enfer. Il rencontre l'amour et renoue avec sa famille, tout en devenant un livreur de journaux en compagnie de son nouvel animal de compagnie.",
        "popularity": 17.976,
        "poster_path": "/QX7pIn930iJua5Ke64G3J8XsiY.jpg",
        "release_date": "2016-11-04",
        "title": "Un chat pour la vie",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1295
    },
    {
        "adult": false,
        "backdrop_path": "/bsoAg22remHKL5O0xJH0m9DX6Pu.jpg",
        "genre_ids": [
            80,
            18,
            9648,
            53
        ],
        "id": 829,
        "original_language": "en",
        "original_title": "Chinatown",
        "overview": "Gittes, détective privé, reçoit la visite d'une fausse Mme Mulwray, qui lui demande de filer son mari, ingénieur des eaux à Los Angeles. Celui-ci est retrouvé mort, noyé. Gittes s'obstine dans son enquête, malgré les menaces de tueurs professionnels.",
        "popularity": 28.851,
        "poster_path": "/9chbM7rbh6o0Ok6v6mcT0a3GN9E.jpg",
        "release_date": "1974-06-20",
        "title": "Chinatown",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 3453
    },
    {
        "adult": false,
        "backdrop_path": "/7jjwdoIVPJp7gcDo9uE1sVZi2Rs.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 296096,
        "original_language": "en",
        "original_title": "Me Before You",
        "overview": "Une charmante petite ville de l'Angleterre rurale. Si elle est originale et artiste dans l'âme, Louisa «Lou» Clark, 26 ans, n'a aucune ambition particulière. Elle se contente d'enchaîner les boulots pour permettre à ses proches de joindre les deux bouts. Jeune et riche banquier, Will Traynor était un garçon plein d'audace et d'optimisme jusqu'à ce qu'il se retrouve paralysé, suite à un accident survenu deux ans plus tôt. Devenu cynique, il a renoncé à tout et n'est plus que l'ombre de lui-même. Autant dire que ces deux-là auraient pu ne jamais se rencontrer. Mais lorsque Lou accepte de travailler comme aide-soignante auprès de Will, elle est bien décidée à lui redonner goût à la vie. Et peu à peu, les deux jeunes gens s'éprennent passionnément l'un de l'autre. La force de leur amour pourra-t-elle survivre à leur destin qui semble inexorable ?",
        "popularity": 109.858,
        "poster_path": "/uNpiKNBkY2RV1uyYpDle9LAU0VH.jpg",
        "release_date": "2016-06-01",
        "title": "Avant toi",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 11448
    },
    {
        "adult": false,
        "backdrop_path": "/iSLXnEeZpkZQnxeCzp9ZjdhvAKK.jpg",
        "genre_ids": [
            878,
            16,
            28,
            12
        ],
        "id": 183011,
        "original_language": "en",
        "original_title": "Justice League: The Flashpoint Paradox",
        "overview": "Flash crée des ondulations qui modifie désastreusement l'Univers. Il doit faire équipe avec d'autres héros pour rétablir la chronologie tandis que la Terre est ravagée par une guerre entre l'Atlantide Aquaman et les Amazones de Wonder Woman",
        "popularity": 29.085,
        "poster_path": "/hV5OVcAkWlhaFUzTVs6x0Dq1k7f.jpg",
        "release_date": "2013-07-30",
        "title": "La Ligue des Justiciers : Le Paradoxe Flashpoint",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1700
    },
    {
        "adult": false,
        "backdrop_path": "/hziiv14OpD73u9gAak4XDDfBKa2.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 671,
        "original_language": "en",
        "original_title": "Harry Potter and the Philosopher's Stone",
        "overview": "Orphelin, Harry Potter a été élevé sans amour par son oncle et sa tante Dursley, béats devant leur exécrable fils, Dudley. Le jour de ses 11 ans, un brave colosse nommé Hagrid lui apprend qu'il est un grand magicien. Comme l'étaient ses parents, tués par le maléfique Voldemort. L'heure est venue pour Harry de rejoindre la célèbre école de sorcellerie de Poudlard",
        "popularity": 146.908,
        "poster_path": "/fbxQ44VRdM2PVzHSNajUseUteem.jpg",
        "release_date": "2001-11-16",
        "title": "Harry Potter à l'école des sorciers",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 25471
    },
    {
        "adult": false,
        "backdrop_path": "/n7zm7vcZ5m2nSV9Scyh2axpY8d4.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 1646,
        "original_language": "en",
        "original_title": "Freedom Writers",
        "overview": "Erin Gruwell, enseignante novice de 23 ans, a choisi comme premier poste un lycée difficile de Long Beach. Ses élèves l'ignorent superbement et se regroupent en clans, prêts à s'affronter au moindre prétexte. L'ambiance empire au fil des jours, en dépit des efforts sincères et maladroits d'Erin pour prendre en main cette classe d'«irrécupérables». Un incident mineur met finalement le feu aux poudres, donnant du même coup à Erin l'occasion d'ouvrir le dialogue avec les jeunes. Avec tact et humour, en évitant d'instinct le piège du paternalisme, Erin parvient à instaurer avec la classe un vrai rapport de confiance.",
        "popularity": 27.028,
        "poster_path": "/t6tqTwQYzCiImCgf3ZnvyyG8Ob6.jpg",
        "release_date": "2007-01-05",
        "title": "Écrire pour exister",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2023
    },
    {
        "adult": false,
        "backdrop_path": "/tMyVb5CXHnBLQ8V7s0FuFA5V9nP.jpg",
        "genre_ids": [
            12,
            18
        ],
        "id": 334533,
        "original_language": "en",
        "original_title": "Captain Fantastic",
        "overview": "Dans les forêts reculées du nord-ouest des États-Unis, vivant isolé de la société, un père dévoué a consacré sa vie tout entière à faire de ses six jeunes enfants d'extraordinaires adultes. Mais quand le destin frappe sa famille, ils doivent abandonner ce paradis qu'il avait créé pour eux. La découverte du monde extérieur va l'obliger à questionner ses méthodes d'éducation et remettre en cause tout ce qu'il leur a appris.",
        "popularity": 27.602,
        "poster_path": "/2sFME73GaD8UsUxPUKe60cPdLif.jpg",
        "release_date": "2016-07-08",
        "title": "Captain Fantastic",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 6040
    },
    {
        "adult": false,
        "backdrop_path": "/mUYV0ZdsDEliGaQahcQH1F3grsP.jpg",
        "genre_ids": [
            16,
            10751,
            12
        ],
        "id": 10674,
        "original_language": "en",
        "original_title": "Mulan",
        "overview": "Mulan, sous les traits du soldat « Ping », prend la place de son père dans l'armée impériale chinoise. Aidée par son dragon Mushu et un criquet appelé Cri-Kee, Mulan essaie de gagner le respect de ses camarades et du courageux Capitaine Shang. Ses aventures l'emmènent dans une bataille sur le toit du palais impérial où l'honneur de sa famille et le destin de l'Empereur reposent entre ses mains.",
        "popularity": 80.915,
        "poster_path": "/nWYuhyM8oQ4Gkktq0c2GCcKdJLv.jpg",
        "release_date": "1998-06-18",
        "title": "Mulan",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 8959
    },
    {
        "adult": false,
        "backdrop_path": "/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg",
        "genre_ids": [
            16,
            10751
        ],
        "id": 438695,
        "original_language": "en",
        "original_title": "Sing 2",
        "overview": "Dans le nouveau théâtre Moon, la troupe interprète sa version musicale d'Alice au pays des merveilles. Buster Moon tient à avoir l'avis de Suki Lane. Elle est celle qui décide quels talents peuvent auditionner devant Jimmy Crystal, grand producteur de spectacles à Redshore City. Pour elle, le niveau n'est pas suffisant et l'insistance de Buster Moon n'y fait rien.Remotivé par Nana Noodleman, le koala rassemble ses artistes et part infiltrer les auditions.",
        "popularity": 101.031,
        "poster_path": "/xsjgiztyEu9cEZetxFlvJz6Yibw.jpg",
        "release_date": "2021-12-01",
        "title": "Tous en scène 2",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 3943
    },
    {
        "adult": false,
        "backdrop_path": "/iFQzlUmO5QmMPcSHHDdfd522x33.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 7857,
        "original_language": "it",
        "original_title": "Amarcord",
        "overview": "Dans un bourg italien près de la mer, à l'heure du fascisme triomphant, les enfants trainassent, cherchant des victimes pour leurs blagues innocentes. L'un d'eux va connaître, en l'espace d'une année, une série d'expériences tour à tour drôles, savoureuses et poignantes.",
        "popularity": 17.983,
        "poster_path": "/dgZ9sO939Mwnix1CZ452PmABi6j.jpg",
        "release_date": "1973-12-18",
        "title": "Amarcord",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1012
    },
    {
        "adult": false,
        "backdrop_path": "/7O3ocR8n2ItqIgcxE1CY8ZHTJsz.jpg",
        "genre_ids": [
            37
        ],
        "id": 33,
        "original_language": "en",
        "original_title": "Unforgiven",
        "overview": "Après avoir été un impitoyable tueur, toujours entre deux verres, Bill Munny a raccroché ses colts pour l'amour d'une femme aujourd'hui disparue. Il élève péniblement des cochons dans un enclos boueux, avec pour seuls compagnons ses deux jeunes enfants. Bill reçoit un jour la visite de Schofield Kid, un apprenti desperado qui veut devenir le partenaire de cette légende vivante. Le Kid lui propose de partager les mille dollars offerts par des prostituées de Big Whiskey, une bourgade lointaine, pour l'élimination des deux cow-boys qui ont défiguré l'une d'entre elles. Munny finit par accepter la proposition et rend visite à son vieux complice, Ned Logan…",
        "popularity": 33.625,
        "poster_path": "/3O3whKDJYa8zKXHmlwJnLXReGI1.jpg",
        "release_date": "1992-08-07",
        "title": "Impitoyable",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 3984
    },
    {
        "adult": false,
        "backdrop_path": "/jKgLVAhoq4fXBs1C9Gjvap93fxd.jpg",
        "genre_ids": [
            9648,
            10749,
            53,
            18
        ],
        "id": 223,
        "original_language": "en",
        "original_title": "Rebecca",
        "overview": "Mrs. Edythe Van Hopper, respectable veuve déjà âgée, accompagnée de sa jeune demoiselle de compagnie, est en villégiature à Monte-Carlo dans l'hôtel Côte-d'Azur, lorsque leur chemin croise celui de Maxim de Winter, riche veuf, qui n'a aucun mal à séduire la jeune fille et, dans la foulée, à l'épouser et l'emmener dans sa demeure ancestrale de Manderley, quelque part sur la côte sud-est de l'Angleterre. Les premiers contacts avec le personnel du château, régenté par la peu amène gouvernante Mrs. Danvers, sont glaciaux. Cette dernière, en effet, attachée depuis toujours au service de la précédente Mrs. de Winter, Rebecca, et lui vouant une passion sans limite, même à titre posthume, n'accepte pas l'intrusion de l'« usurpatrice ». Le souvenir de l'épouse disparue et vénérée continue de hanter le château sombre.",
        "popularity": 19.797,
        "poster_path": "/6bHIZsfMDhuRUOCeJwOsp0RZRke.jpg",
        "release_date": "1940-03-23",
        "title": "Rebecca",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1591
    },
    {
        "adult": false,
        "backdrop_path": "/3gVo3f5We49VKk5BKEIRkxcibwz.jpg",
        "genre_ids": [
            18,
            80,
            36
        ],
        "id": 522212,
        "original_language": "en",
        "original_title": "Just Mercy",
        "overview": "Le combat historique du jeune avocat Bryan Stevenson. Après ses études à l'université de Harvard, Bryan Stevenson aurait pu se lancer dans une carrière des plus lucratives. Il décide pourtant de se rendre en Alabama pour défendre ceux qui ont été condamnés à tort, avec le soutien d'une militante locale, Eva Ansley. Un de ses premiers cas - le plus incendiaire - est celui de Walter McMillian qui, en 1987, est condamné à mort pour le meurtre retentissant d'une jeune fille de 18 ans. Et ce en dépit d'un grand nombre de preuves attestant de son innocence et d'un unique témoignage à son encontre provenant d'un criminel aux motivations douteuses. Au fil des années, Bryan se retrouve empêtré dans un imbroglio de manœuvres juridiques et politiques. Il doit aussi faire face à un racisme manifeste et intransigeant alors qu'il se bat pour Walter et d'autres comme lui au sein d'un système hostile.",
        "popularity": 27.951,
        "poster_path": "/t6gJp7Xf7nVjS2pMN8TZ7lJ5YXE.jpg",
        "release_date": "2019-12-25",
        "title": "La voie de la justice",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2046
    },
    {
        "adult": false,
        "backdrop_path": "/lrNKm3HNvGdZoAfiBKu7b04FLHN.jpg",
        "genre_ids": [
            18
        ],
        "id": 316029,
        "original_language": "en",
        "original_title": "The Greatest Showman",
        "overview": "The Greatest Showman célèbre la naissance du show-business et l'émerveillement que l'on éprouve lorsque les rêves deviennent réalité. Inspirée par l'ambition et l'imagination de P.T Barnum, voici l'histoire d'un visionnaire parti de rien qui a créé un spectacle devenu un phénomène planétaire.",
        "popularity": 34.051,
        "poster_path": "/sZbtOB5mpGSUy8aW6t4O3eF1fPf.jpg",
        "release_date": "2017-12-20",
        "title": "The Greatest Showman",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 8875
    },
    {
        "adult": false,
        "backdrop_path": "/uLtVbjvS1O7gXL8lUOwsFOH4man.jpg",
        "genre_ids": [
            28,
            878,
            12
        ],
        "id": 118340,
        "original_language": "en",
        "original_title": "Guardians of the Galaxy",
        "overview": "Peter Quill est un aventurier traqué par tous les chasseurs de primes pour avoir volé un mystérieux globe convoité par le puissant Ronan, dont les agissements menacent l'univers tout entier. Lorsqu'il découvre le véritable pouvoir de ce globe et la menace qui pèse sur la galaxie, il conclut une alliance fragile avec quatre aliens disparates : Rocket, un raton laveur fin tireur, Groot, un humanoïde semblable à un arbre, l'énigmatique et mortelle Gamora, et Drax le Destructeur, qui ne rêve que de vengeance. En les ralliant à sa cause, il les convainc de livrer un ultime combat aussi désespéré soit-il pour sauver ce qui peut encore l'être…",
        "popularity": 32.802,
        "poster_path": "/7fzEpgA30wv3InNs0fQ1N3GU451.jpg",
        "release_date": "2014-07-30",
        "title": "Les Gardiens de la Galaxie",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 26716
    },
    {
        "adult": false,
        "backdrop_path": "/X7zKxmyrVmYCfcyvDgVLH8iNzA.jpg",
        "genre_ids": [
            28,
            80,
            18
        ],
        "id": 949,
        "original_language": "en",
        "original_title": "Heat",
        "overview": "Neil McCauley est un braqueur qui a de l'expérience. Il veille, au cours de ses vols, à ne pas commettre d'impairs. Ses complices n'ont pas autant de scrupules ni de «conscience professionnelle». Lors d'une opération pourtant bien planifiée, l'un d'entre eux tire sur deux vigiles. Ce double meurtre intéresse au plus au point le lieutenant Hanna, qui ne met guère de temps à identifier McCauley comme étant le cerveau de la bande. Les deux hommes apprennent à se connaître par dossier et surveillance interposée. A tel point qu'il finissent par se rencontrer. Chacun jure alors de mettre l'autre en échec. Un duel s'engage, à la limite de la légalité.",
        "popularity": 50.675,
        "poster_path": "/e0xv5Y7UVrhKEVy1g3URMLLVDYB.jpg",
        "release_date": "1995-12-15",
        "title": "Heat",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 6593
    },
    {
        "adult": false,
        "backdrop_path": "/9TEUJy5aRP7LaM1LKTfcxVK34JK.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 194,
        "original_language": "fr",
        "original_title": "Le Fabuleux Destin d'Amélie Poulain",
        "overview": "Amélie, une jeune serveuse dans un bar de Montmartre, passe son temps à observer les gens et à laisser son imagination divaguer. Elle s'est fixée un but: faire le bien de ceux qui l'entourent. Elle invente alors des stratagèmes pour intervenir incognito dans leur existence. Le chemin d'Amélie est jalonné de rencontres: Georgette, la buraliste hypocondriaque, Lucien, le commis d'épicerie, Madeleine Wallace, la concierge portée sur le porto et les chiens empaillés, ou encore Raymond Dufayel alias «l'homme de verre», son voisin qui ne vit qu'à travers une reproduction d'un tableau de Renoir. Cette quête du bonheur amène Amélie à faire la connaissance de Nino Quincampoix, un étrange «prince charmant». Celui-ci partage son temps entre un train fantôme et un sex-shop, et cherche à identifier un inconnu dont la photo réapparaît sans cesse dans plusieurs cabines de photomaton.",
        "popularity": 27.95,
        "poster_path": "/tdXtLG6L1QMwrv0MNdW6B9IwC8B.jpg",
        "release_date": "2001-04-25",
        "title": "Le Fabuleux Destin d'Amélie Poulain",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 10797
    },
    {
        "adult": false,
        "backdrop_path": "/5ZoFGrFCKP0QrcfVwOIHiAwunBg.jpg",
        "genre_ids": [
            18,
            10749,
            14
        ],
        "id": 122906,
        "original_language": "en",
        "original_title": "About Time",
        "overview": "À 21 ans révolus, Tim Lake découvre qu'il a le pouvoir de voyager dans le temps... Au lendemain d'un réveillon de jour de l'an encore décevant, le père de Tim révèle à son fils que tous les hommes de la famille ont, depuis toujours, la faculté de voyager dans le temps. Tim ne peut pas changer le cours de l'histoire mais il peut changer ce qui se passe et s'est passé dans sa vie. Il décide d'améliorer son existence... en se trouvant une petite amie.",
        "popularity": 34.837,
        "poster_path": "/eoOvm8cUtjxmfHX6i6a3maEhjCj.jpg",
        "release_date": "2013-09-04",
        "title": "Il était Temps",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 7809
    },
    {
        "adult": false,
        "backdrop_path": "/gJUYGz37JFaTXc2TBXP4ea1oskS.jpg",
        "genre_ids": [
            16,
            18
        ],
        "id": 2011,
        "original_language": "fr",
        "original_title": "Persepolis",
        "overview": "Téhéran 1978 : Marjane, huit ans, songe à l'avenir et se rêve en prophète sauvant le monde. Choyée par des parents modernes et cultivés, particulièrement liée à sa grand-mère, elle suit avec exaltation les évènements qui vont mener à la révolution et provoquer la chute du régime du Chah.\r Avec l'instauration de la République islamique débute le temps des «commissaires de la révolution» qui contrôlent tenues et comportements. Marjane qui doit porter le voile, se rêve désormais en révolutionnaire.\r Bientôt, la guerre contre l'Irak entraîne bombardements, privations, et disparitions de proches. La répression intérieure devient chaque jour plus sévère. Dans un contexte de plus en plus pénible, sa langue bien pendue et ses positions rebelles deviennent problématiques. Ses parents décident alors de l'envoyer en Autriche pour la protéger.",
        "popularity": 19.593,
        "poster_path": "/3uFWf4ucKFW83mZ0KNVa7gllUg2.jpg",
        "release_date": "2007-06-27",
        "title": "Persepolis",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1773
    },
    {
        "adult": false,
        "backdrop_path": "/eHTZoXmB4vnDqANZXPZcdAiYQo5.jpg",
        "genre_ids": [
            16,
            18,
            10749,
            14
        ],
        "id": 667520,
        "original_language": "ja",
        "original_title": "泣きたい私は猫をかぶる",
        "overview": "Une collégienne se transforme en chat pour attirer l'attention d'un garçon, sans se rendre compte que la frontière entre l'humain et l'animal s'estompe peu à peu.",
        "popularity": 46.661,
        "poster_path": "/CTZJdG4XNiQMnYhyjJOm2uUGQV.jpg",
        "release_date": "2020-06-18",
        "title": "Loin de moi, près de toi",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1252
    },
    {
        "adult": false,
        "backdrop_path": "/hTvCGwbrpSgZ5QCZnYHM12bv7DH.jpg",
        "genre_ids": [
            35
        ],
        "id": 3034,
        "original_language": "en",
        "original_title": "Young Frankenstein",
        "overview": "Peu fier de son ascendance, le Docteur Frederick Frankenstein accepte pourtant de retourner sur les terres de ses ancêtres. Rattrapé par la folie familiale, il décide de suivre les traces de son aïeul et de créer à son tour une créature à partir de cadavres, avec l'aide de son fidèle serviteur Igor. Malheureusement, chargé de trouver le cerveau d'un génie, ce dernier se trompe et rapporte à Frankenstein un cerveau anormal…",
        "popularity": 24.685,
        "poster_path": "/3FtQ2AKfLjGmoKXzYlqygItjNDQ.jpg",
        "release_date": "1974-12-15",
        "title": "Frankenstein Junior",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2886
    },
    {
        "adult": false,
        "backdrop_path": "/nKOQiWjhv6LXXSR3PiIab3LrKtU.jpg",
        "genre_ids": [
            18
        ],
        "id": 1402,
        "original_language": "en",
        "original_title": "The Pursuit of Happyness",
        "overview": "Représentant de commerce, Chris Gardner a du mal à gagner sa vie. Il jongle pour s'en sortir, mais sa compagne supporte de moins en moins leur précarité. Elle finit par quitter Chris et leur petit garçon de cinq ans, Christopher. Désormais seul responsable de son fils, Chris se démène pour décrocher un job, sans succès. Lorsqu'il obtient finalement un stage dans une prestigieuse firme de courtage, il se donne à fond.",
        "popularity": 39.161,
        "poster_path": "/oEoVMLxQAgWlX0IUVty8orD7DrQ.jpg",
        "release_date": "2006-12-14",
        "title": "À la recherche du bonheur",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 9195
    },
    {
        "adult": false,
        "backdrop_path": "/xnHVX37XZEp33hhCbYlQFq7ux1J.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 597,
        "original_language": "en",
        "original_title": "Titanic",
        "overview": "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le « Titanic », appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. À son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.",
        "popularity": 134.006,
        "poster_path": "/vpsvHLkoeKUjceIMeNSqCp3xEyY.jpg",
        "release_date": "1997-11-18",
        "title": "Titanic",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 23735
    },
    {
        "adult": false,
        "backdrop_path": "/qJeU7KM4nT2C1WpOrwPcSDGFUWE.jpg",
        "genre_ids": [
            35,
            18,
            10749,
            10402
        ],
        "id": 313369,
        "original_language": "en",
        "original_title": "La La Land",
        "overview": "Au cœur de Los Angeles, une actrice en devenir prénommée Mia sert des cafés entre deux auditions. De son côté, Sebastian, passionné de jazz, joue du piano dans des clubs miteux pour assurer sa subsistance. Tous deux sont bien loin de la vie rêvée à laquelle ils aspirent… Le destin va réunir ces doux rêveurs, mais leur coup de foudre résistera-t-il aux tentations, aux déceptions, et à la vie trépidante d'Hollywood ?",
        "popularity": 39.149,
        "poster_path": "/5KIj6aioW1UtUT1IV0qqW5iZbNH.jpg",
        "release_date": "2016-11-29",
        "title": "La La Land",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 15677
    },
    {
        "adult": false,
        "backdrop_path": "/sFEYsEfzTx7hhjetlNrme8B5OUo.jpg",
        "genre_ids": [
            28,
            53,
            878
        ],
        "id": 752,
        "original_language": "en",
        "original_title": "V for Vendetta",
        "overview": "Londres, au 21ème siècle… Evey Hammond ne veut rien oublier de l'homme qui lui sauva la vie et lui permit de dominer ses peurs les plus lointaines. Mais il fut un temps où elle n'aspirait qu'à l'anonymat pour échapper à une police secrète omnipotente. Comme tous ses concitoyens, trop vite soumis, elle acceptait que son pays ait perdu son âme et se soit donné en masse au tyran Sutler et à ses partisans. Une nuit, alors que deux « gardiens de l'ordre » s'apprêtaient à la violer dans une rue déserte, Evey vit surgir son libérateur. Et rien ne fut plus comme avant. Son apprentissage commença quelques semaines plus tard sous la tutelle de « V ». Evey ne connaîtrait jamais son nom et son passé, ne verrait jamais son visage atrocement brûlé et défiguré, mais elle deviendrait à la fois son unique disciple, sa seule amie et le seul amour d'une vie sans amour…",
        "popularity": 37.491,
        "poster_path": "/4HFt1jyjZD3MssiyNPJLToqGd1v.jpg",
        "release_date": "2006-02-23",
        "title": "V pour Vendetta",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 13602
    },
    {
        "adult": false,
        "backdrop_path": "/kcXBa2ru0PXcGI8U3JiInsG6FRR.jpg",
        "genre_ids": [
            18
        ],
        "id": 60243,
        "original_language": "fa",
        "original_title": "جدایی نادر از سیمین",
        "overview": "Lorsque sa femme le quitte, Nader engage une aide-soignante pour s'occuper de son père malade. Il ignore alors que la jeune femme est enceinte et a accepté ce travail sans l'accord de son mari, un homme psychologiquement instable…",
        "popularity": 11.91,
        "poster_path": "/iSk9NfdwSeVvUyYvFNfZBPs5Ugj.jpg",
        "release_date": "2011-02-15",
        "title": "Une séparation",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1575
    },
    {
        "adult": false,
        "backdrop_path": "/lqxxwTRk0l7CubY6JkJdhnwJEkn.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 331482,
        "original_language": "en",
        "original_title": "Little Women",
        "overview": "Aux États-Unis, pendant la guerre de Sécession, 4 sœurs issues de la classe moyenne font face aux difficultés de la vie quotidienne en ce temps de conflit. La raisonnable Mege, l'intrépide Jo, la charitable Beth et l'orgueilleuse May vivent dans l'ombre protectrice et bienveillante de leur mère Marnee et de sa tante March. Mais la rencontre de leur voisin Laurie va transformer les premiers émois du bal des débutantes en véritables histoires d'amour…  Une nouvelle adaptation du classique de Louisa May Alcott.",
        "popularity": 37.591,
        "poster_path": "/A1OAKgItnKEilZkInZxUiKADhmZ.jpg",
        "release_date": "2019-12-25",
        "title": "Les Filles du docteur March",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 5728
    },
    {
        "adult": false,
        "backdrop_path": "/gUIVD0rFWVB8Okk8wU8dQxjOYnZ.jpg",
        "genre_ids": [
            18
        ],
        "id": 7984,
        "original_language": "en",
        "original_title": "In the Name of the Father",
        "overview": "En 1975, Gerry Conlon, jeune délinquant originaire de Belfast, est arrêté par la police londonienne qui l'accuse d'être l'instigateur des attentats terroristes à Guildford pour le compte de l'IRA. Sous la pression des policiers, Gerry signe des aveux fabriqués de toutes pièces qui non seulement le mettent en cause mais également Pau Hill son ami d'enfance, un couple d'amis hippies, ainsi que plusieurs membres de sa famille dont son propre père.",
        "popularity": 15.014,
        "poster_path": "/2RvxHN1XguEYz5KKbSVxaNXVO8w.jpg",
        "release_date": "1993-12-12",
        "title": "Au Nom du Père",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1590
    },
    {
        "adult": false,
        "backdrop_path": "/4hYxesnrRHiFLo1rctaKtzBiMvW.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 3112,
        "original_language": "en",
        "original_title": "The Night of the Hunter",
        "overview": "Au cœur des années 30, deux enfants, John et Pearl, sont pourchassés par un tueur en série, dissimulé en société sous des faux airs de prêcheur bienveillant. L'objet de la traque : la rumeur d'un pactole de 10 000 dollars bien mal acquis par le père des enfants, et dont ces derniers ont le secret de la localisation.",
        "popularity": 13.176,
        "poster_path": "/9iKKhtYUWgWjtc8EsXVwQ3IwOhm.jpg",
        "release_date": "1955-08-26",
        "title": "La Nuit du chasseur",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1407
    },
    {
        "adult": false,
        "backdrop_path": "/h2JaQWLKhapm7AuSViJwGiv8ngC.jpg",
        "genre_ids": [
            9648,
            53,
            18
        ],
        "id": 210577,
        "original_language": "en",
        "original_title": "Gone Girl",
        "overview": "Amy et Nick forment en apparence un couple modèle. Victimes de la crise, ils quittent Manhattan pour retourner s'installer dans la ville du Missouri où Nick a grandi. Mais le jour de leur 5ème anniversaire de mariage, Amy disparaît et Nick retrouve leur maison saccagée. Lors de l'enquête tout semble accuser Nick. Celui-ci décide, de son côté, de tout faire pour savoir ce qui est arrivé à Amy et découvre qu'elle lui dissimulait beaucoup de choses.",
        "popularity": 80.045,
        "poster_path": "/7xkJ1ACu40BjzLHVPRILWjFvW7.jpg",
        "release_date": "2014-10-01",
        "title": "Gone Girl",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 17442
    },
    {
        "adult": false,
        "backdrop_path": "/e4S1jhTMXJRjhG1S8doUW81DH2i.jpg",
        "genre_ids": [
            16,
            18,
            35
        ],
        "id": 13398,
        "original_language": "ja",
        "original_title": "東京ゴッドファーザーズ",
        "overview": "À Tokyo, dans le quartier populaire de Shinjuku, pendant les fêtes de Noël. Alors que le froid a envahi la ville, Gin, un homme bourru, Miyuki, un adolescent fugueur et Hana, un travesti, vivent ensemble dans les rues de la ville. Un soir, à la recherche de nourriture, ils trouvent un bébé abandonné dans une poubelle. Dans ses langes, une clef dont les comparses ignorent à quoi elle peut bien servir. Bien décidés à protéger le nourrisson des rigueurs du froid, les trois clochards cherchent également à retrouver les parents du bambin le plus rapidement possible. La clef s'avère être leur seul indice. Commence pour eux un parcours semé d'embûches…",
        "popularity": 16.544,
        "poster_path": "/3Em9fD7W5N8Wnr9lhq9kExHfYOe.jpg",
        "release_date": "2003-12-29",
        "title": "Tokyo Godfathers",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1070
    },
    {
        "adult": false,
        "backdrop_path": "/psYeKwKclG4XaIop5suj1J0Kg2C.jpg",
        "genre_ids": [
            12,
            28,
            878
        ],
        "id": 1892,
        "original_language": "en",
        "original_title": "Return of the Jedi",
        "overview": "L'Empire galactique est plus puissant que jamais : la construction de la nouvelle arme, l'Étoile de la Mort, menace l'univers tout entier... Arrêté après la trahison de Lando Calrissian, Han Solo est remis à l'ignoble contrebandier Jabba Le Hutt par le chasseur de primes Boba Fett. Après l'échec d'une première tentative d'évasion menée par la princesse Leia, également arrêtée par Jabba, Luke Skywalker et Lando parviennent à libérer leurs amis. Han, Leia, Chewbacca, C-3PO et Luke, devenu un Jedi, s'envolent dès lors pour une mission d'extrême importance sur la lune forestière d'Endor, afin de détruire le générateur du bouclier de l'Étoile de la Mort et permettre une attaque des pilotes de l'Alliance rebelle. Conscient d'être un danger pour ses compagnons, Luke préfère se rendre aux mains de Dark Vador, son père et ancien Jedi passé du côté obscur de la Force.",
        "popularity": 30.879,
        "poster_path": "/tEQlCGiiWvMvfD7Sz8d99Pouy39.jpg",
        "release_date": "1983-05-25",
        "title": "Le Retour du Jedi",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 14638
    },
    {
        "adult": false,
        "backdrop_path": "/rcUcYzGGicDvhDs58uM44tJKB9F.jpg",
        "genre_ids": [
            16,
            10751,
            14,
            28,
            12
        ],
        "id": 527774,
        "original_language": "en",
        "original_title": "Raya and the Last Dragon",
        "overview": "Il y a de cela fort longtemps, au royaume imaginaire de Kumandra, humains et dragons vivaient en harmonie. Mais un jour, une force maléfique s'abattit sur le royaume et les dragons se sacrifièrent pour sauver l'humanité. Lorsque cette force réapparait cinq siècles plus tard, Raya, une guerrière solitaire, se met en quête du légendaire dernier dragon pour restaurer l'harmonie sur la terre de Kumandra, au sein d'un peuple désormais divisé. Commence pour elle un long voyage au cours duquel elle découvrira qu'il lui faudra bien plus qu'un dragon pour sauver le monde, et que la confiance et l'entraide seront essentiels pour conduire au succès cette périlleuse mission.",
        "popularity": 59.565,
        "poster_path": "/qDnumcHRzK9ljWtG5L1zRPhFRJg.jpg",
        "release_date": "2021-03-03",
        "title": "Raya et le Dernier Dragon",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 6300
    },
    {
        "adult": false,
        "backdrop_path": "/gXSpNiP9a5uq0mo1hcfp2PVUsOV.jpg",
        "genre_ids": [
            28,
            878,
            16
        ],
        "id": 503314,
        "original_language": "ja",
        "original_title": "ドラゴンボール超スーパー ブロリー",
        "overview": "Quelque temps après le Tournoi du Pouvoir, la Terre est paisible. Son Goku et ses amis ont repris leur vie. Cependant, avec son expérience du Tournoi, Son Goku passe son temps à s'entraîner pour continuer à s'améliorer car ce dernier est conscient qu'il reste encore beaucoup d'individus plus forts à découvrir au sein des autres univers. Lorsqu'un jour, le vaisseau de Freezer refait surface sur la Terre. Celui-ci est accompagné d'un Saiyan, nommé Broly, avec son père, Paragus. La surprise de Son Goku et Vegeta est immense puisque les Saiyans sont censés avoir été complètement anéantis lors de la destruction de la planète Vegeta. Ils n'ont donc pas d'autre choix que de s'affronter, mais ce nouvel ennemi s'adapte très vite aux adversaires qu'il affronte…",
        "popularity": 13.764,
        "poster_path": "/baxPKXiQCNMdccDGebcnZdHhIzC.jpg",
        "release_date": "2018-12-14",
        "title": "Dragon Ball Super - Broly",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2719
    },
    {
        "adult": false,
        "backdrop_path": "/n0MyuZW9WJBGCYhzhfCI3d4zlRo.jpg",
        "genre_ids": [
            10749,
            35,
            18
        ],
        "id": 804,
        "original_language": "en",
        "original_title": "Roman Holiday",
        "overview": "Les tendres amours, le temps d'une journée, d'une princesse fugueuse et d'un séduisant journaliste américain, dans la Ville éternelle, Rome.",
        "popularity": 23.751,
        "poster_path": "/wnjs5tA2rqAi2LXU8Dv6KBKB8fj.jpg",
        "release_date": "1953-08-26",
        "title": "Vacances romaines",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1837
    },
    {
        "adult": false,
        "backdrop_path": "/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 11036,
        "original_language": "en",
        "original_title": "The Notebook",
        "overview": "Atteinte de la maladie d'Alzheimer, Allie vit en maison de retraite. Chaque jour, Noah lui lit le même livre. Il s'agit du carnet où Allie a consigné sa propre histoire, lorsqu'elle a appris sa maladie. Pour ne pas oublier ses sentiments, elle a écrit, et Noah, inlassablement, lui relit ses propres mots. A travers eux, on la découvre dans les années trente, éperdument amoureuse d'un jeune homme, Noah, que sa mère fera tout pour éloigner d'elle, sa situation n'étant pas jugée assez bonne. Après des années de séparation, à la fin de la Seconde Guerre mondiale, Allie s'apprête à épouser un avocat. Lorsque, par le journal, elle apprend le retour de Noah, l'envie lui prend de le revoir. Echappant à une vie de convenance, les deux jeunes gens se retrouvent et découvrent que leur amour est resté intact. Ils passeront le reste de leur vie ensemble, jusqu'à ce que la mémoire les sépare.",
        "popularity": 58.236,
        "poster_path": "/sP5f85ziKthDrAyXOwoBlnpPmNv.jpg",
        "release_date": "2004-06-25",
        "title": "N'oublie jamais",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 10671
    },
    {
        "adult": false,
        "backdrop_path": "/ww6f0XEn8aUbNsK1OQGdutJWwQf.jpg",
        "genre_ids": [
            35,
            10749,
            18,
            10402
        ],
        "id": 369557,
        "original_language": "en",
        "original_title": "Sing Street",
        "overview": "Dublin, années 80. Conor, un lycéen dont les parents sont au bord du divorce, est obligé à contrecœur de rejoindre les bancs de l'école publique dont les règles d'éducation diffèrent de celles de l'école privée qu'il avait l'habitude de fréquenter. Il se retrouve au milieu d'élèves turbulents qui le malmènent et de professeurs exigeants qui lui font rapidement comprendre qu'en tant que petit nouveau, il va devoir filer doux. Afin de s'échapper de cet univers violent, il n'a qu'un objectif : impressionner la plus jolie fille du quartier, la mystérieuse Raphina. Il décide alors de monter un groupe et de se lancer dans la musique, univers dans lequel il ne connait rien ni personne, à part les vinyles de sa chambre d'adolescent. Afin de la conquérir, il lui propose de jouer dans son futur clip.",
        "popularity": 16.643,
        "poster_path": "/bup7yO6gFNbKqie8Bd2GXkNmULn.jpg",
        "release_date": "2016-03-11",
        "title": "Sing Street",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2119
    },
    {
        "adult": false,
        "backdrop_path": "/70EtzaGfO2d8X5n8SLI4s61KuJh.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 393,
        "original_language": "en",
        "original_title": "Kill Bill: Vol. 2",
        "overview": "Après avoir éliminé ses deux anciennes collègues Vernita Green et O-Ren Ishii, la Mariée, alias Black Mamba, poursuit l'éradication du gang des Vipères Assassines. Prochaines cibles : Budd, puis Elle Driver, avant d'atteindre enfin son but ultime : tuer leur chef, Bill...",
        "popularity": 25.938,
        "poster_path": "/2O8FeZUGL4IuAmIikusSMdB8o2s.jpg",
        "release_date": "2004-04-16",
        "title": "Kill Bill: Volume 2",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 12962
    },
    {
        "adult": false,
        "backdrop_path": "/pW1sEV4R2GL99OoUq73Pvf7r7Ce.jpg",
        "genre_ids": [
            16,
            35,
            18
        ],
        "id": 24238,
        "original_language": "en",
        "original_title": "Mary and Max",
        "overview": "En faisant la chronique du voyage de Mary de l'adolescence à l'âge adulte et du passage de Max de la maturité à la vieillesse, Mary et Max explore un lien qui surmonte bien plus d'aléas qu'une amitié classique. Comme Harvie Krumpet, des mêmes auteurs, Oscar du meilleur court métrage d'animation, Mary et Max est un parcours à la fois hilarant et poignant à travers l'amitié, l'autisme, la taxidermie, la psychiatrie, l'alcoolisme, l'origine des bébés, l'obésité, la cleptomanie, les différences sexuelles, la confiance, l'accouplement des chiens, les différences religieuses, l'agoraphobie et bien d'autres surprises de la vie.",
        "popularity": 15.81,
        "poster_path": "/qCedjXNk74OqCI5ycY6GnbTVhXM.jpg",
        "release_date": "2009-02-09",
        "title": "Mary et Max.",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1783
    },
    {
        "adult": false,
        "backdrop_path": "/gs70htixF6j1oqrrwsM4lVfcgNN.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 16,
        "original_language": "en",
        "original_title": "Dancer in the Dark",
        "overview": "Selma Jezkova, émigrée tchèque et mère célibataire, travaille dans une usine de l'Amérique profonde. Elle trouve son salut dans sa passion pour la musique, spécialement les chansons et les danses des grandes comédies musicales hollywoodiennes. Selma garde un lourd secret : elle perd la vue et son fils Gene connaîtra le même sort sauf si elle réussit à mettre assez d'argent de côté pour lui payer une opération. Quand un voisin aux abois accuse à tort Selma d'avoir volé ses économies, le drame de sa vie s'intensifie pour se terminer en final tragique.",
        "popularity": 19.434,
        "poster_path": "/sBh45R8jwJRiN72tnjV49Amhu09.jpg",
        "release_date": "2000-06-30",
        "title": "Dancer in the Dark",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1624
    },
    {
        "adult": false,
        "backdrop_path": "/Z1JeznJExodyj0iUbL1wgkts88.jpg",
        "genre_ids": [
            18,
            80,
            53
        ],
        "id": 505192,
        "original_language": "ja",
        "original_title": "万引き家族",
        "overview": "Au retour d'une nouvelle expédition de vol à l'étalage, Osamu et son fils recueillent dans la rue une petite fille qui semble livrée à elle-même. D'abord réticente à l'idée d'abriter l'enfant pour la nuit, la femme d'Osamu accepte de s'occuper d'elle lorsqu‘elle comprend que ses parents la maltraitent. En dépit de leur pauvreté, survivant de petites rapines qui complètent leurs maigres salaires, les membres de cette famille semblent vivre heureux,  jusqu'à ce qu'un incident révèle brutalement leurs plus terribles secrets…",
        "popularity": 16.622,
        "poster_path": "/6dIDuy8SyY3uZvESWsNbBu1I8nC.jpg",
        "release_date": "2018-06-02",
        "title": "Une Affaire de famille",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1845
    },
    {
        "adult": false,
        "backdrop_path": "/m3BXK5y41kNap7uBHQjjmHf2W40.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 381341,
        "original_language": "it",
        "original_title": "Perfetti sconosciuti",
        "overview": "Chacun de nous a trois vies : une vie publique, une vie privée et une vie secrète. Il fut un temps où notre vie secrète était bien protégée, archivée dans notre mémoire. À présent, elle est dans notre carte SIM, mais qu'arriverait-il si cette dernière se mettait à parler ?",
        "popularity": 15.944,
        "poster_path": "/ufH0m1lq4DILL6D0Zzjw702FWfV.jpg",
        "release_date": "2016-02-11",
        "title": "Perfect Strangers",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 4153
    },
    {
        "adult": false,
        "backdrop_path": "/747dgDfL5d8esobk7h4odaOFhUq.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 275,
        "original_language": "en",
        "original_title": "Fargo",
        "overview": "Jerry Lundegaard, vendeur de voitures d'occasion à Minneapolis est endetté jusqu'au cou. Pour s'en sortir, il fait appel à Carl Showalter et Gaear Grimsrud, deux escrocs à la petite semaine, pour qu'ils enlèvent son épouse Jean. Il pourra ainsi partager avec les ravisseurs la rançon que son riche beau-père paiera pour la libération de sa fille. Mais le plan va rapidement tourner au désastre.",
        "popularity": 20.896,
        "poster_path": "/pkuNNMtJ40h3l0eQIMM8CYHXJlQ.jpg",
        "release_date": "1996-03-08",
        "title": "Fargo",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 7317
    },
    {
        "adult": false,
        "backdrop_path": "/sKobiTDiQbAvfp7TzxbHzHsRZmo.jpg",
        "genre_ids": [
            18,
            80,
            10752
        ],
        "id": 430424,
        "original_language": "fr",
        "original_title": "Au revoir là-haut",
        "overview": "Novembre 1918. À quelques jours de l'Armistice, Edouard Péricourt sauve Albert Maillard d'une mort certaine. Rien en commun entre ces deux hommes si ce n'est la guerre et le lieutenant Pradelle qui, en donnant l'ordre d'un assaut absurde, brise leurs vies en même temps qu'il lie leurs destins. Sur les ruines du carnage de la première guerre mondiale, chacun va tâcher de survivre: Pradelle s'apprête à faire fortune sur le dos des morts tandis qu'Albert et Edouard, condamnés à vivre, vont tenter de monter une arnaque monumentale.",
        "popularity": 11.426,
        "poster_path": "/3xTImsBYSIqLZfWCHfqWj9IC365.jpg",
        "release_date": "2017-10-25",
        "title": "Au revoir là-haut",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1181
    },
    {
        "adult": false,
        "backdrop_path": "/mF4atcYv9n0h4pTnodm2Adb4i9X.jpg",
        "genre_ids": [
            80,
            18,
            9648,
            10770
        ],
        "id": 379170,
        "original_language": "en",
        "original_title": "Sherlock: The Abominable Bride",
        "overview": "En 1895, Sherlock Holmes et le Dr Watson sont connus de tout Londres par les récits des aventures du détective romancés et publiés par l'ancien médecin militaire. Une affaire irrésolue par le détective, où une femme aurait tué son mari après son suicide, resurgit quand une femme vient demander de l'aide à Sherlock : son mari a reçu une lettre contenant cinq pépins d'orange et sait depuis sa mort prochaine.",
        "popularity": 20.055,
        "poster_path": "/hjWuU7zmVjY5N6PYbr4EYeEBePv.jpg",
        "release_date": "2016-01-01",
        "title": "Sherlock : L'Effroyable Mariée",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2151
    },
    {
        "adult": false,
        "backdrop_path": "/wxZrzT4WAS6PthKX1JtBpKBe5wl.jpg",
        "genre_ids": [
            35,
            10749
        ],
        "id": 3078,
        "original_language": "en",
        "original_title": "It Happened One Night",
        "overview": "Ellie Andrews, jeune fille gâtée, échappe à l'emprise de son père millionnaire qui veut à tout prix l'empêcher d'épouser un play boy sans avenir. En route pour New York, elle rencontre Peter Warner, journaliste au chômage. Mais le bus tombe en panne et le couple impromptu se lance dans une folle randonnée improvisée.",
        "popularity": 16.603,
        "poster_path": "/mjMgTY1RkcPD9O62WXIf7icO3NK.jpg",
        "release_date": "1934-02-22",
        "title": "New York - Miami",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 1093
    },
    {
        "adult": false,
        "backdrop_path": "/sU3gFo7Gn67zjtKXIvzJ4omcUbH.jpg",
        "genre_ids": [
            28,
            18,
            36,
            12
        ],
        "id": 665,
        "original_language": "en",
        "original_title": "Ben-Hur",
        "overview": "Judas Ben-Hur, prince de Judée, retrouve son ami d'enfance Messala, venu prendre la tête de la garnison de Jérusalem. Mais leur amitié ne peut résister à leurs caractères différents. Alors qu'une pierre tombe du balcon de la maison familiale de Ben-Hur, manquant de tuer le gouverneur qui paradait plus bas, Messala trahit son ami qu'il sait innocent en l'envoyant aux galères et en jetant en prison sa mère et sa sœur. Ben-Hur jure alors de reconquérir sa liberté et prépare sa vengeance.",
        "popularity": 30.786,
        "poster_path": "/4KH7VM5YyGwxe4kLSNxix2PNTn6.jpg",
        "release_date": "1959-11-18",
        "title": "Ben-Hur",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2478
    },
    {
        "adult": false,
        "backdrop_path": "/pBMqrmItjpOzfoRwUXp4gfy3FK7.jpg",
        "genre_ids": [
            18,
            53,
            35
        ],
        "id": 265195,
        "original_language": "es",
        "original_title": "Relatos salvajes",
        "overview": "L'inégalité, l'injustice et l'exigence auxquelles nous expose le monde où l'on vit provoquent du stress et des dépressions chez beaucoup de gens. Certains craquent. « Les Nouveaux Sauvages » est un film sur eux.",
        "popularity": 18.436,
        "poster_path": "/rF5vk0gyhNc2qOeDEWrFdrPzMdv.jpg",
        "release_date": "2014-08-21",
        "title": "Les Nouveaux Sauvages",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 3095
    },
    {
        "adult": false,
        "backdrop_path": "/sPPsR9f4K0movWVQ99u4uMqFzEL.jpg",
        "genre_ids": [
            10749,
            878,
            18
        ],
        "id": 152601,
        "original_language": "en",
        "original_title": "Her",
        "overview": "Los Angeles, dans un futur proche. Theodore Twombly, un homme sensible au caractère complexe, est inconsolable suite à une rupture difficile. Il fait alors l'acquisition d'un programme informatique ultramoderne, capable de s'adapter à la personnalité de chaque utilisateur. En lançant le système, il fait la connaissance de 'Samantha', une voix féminine intelligente, intuitive et étonnamment drôle. Les besoins et les désirs de Samantha grandissent et évoluent, tout comme ceux de Theodore, et peu à peu, ils tombent amoureux…",
        "popularity": 26.409,
        "poster_path": "/nkWXW5blXGmOEoDejRgy83sSb6T.jpg",
        "release_date": "2013-12-18",
        "title": "Her",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 13458
    },
    {
        "adult": false,
        "backdrop_path": "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
        "genre_ids": [
            16,
            35,
            14,
            12,
            10751
        ],
        "id": 508943,
        "original_language": "en",
        "original_title": "Luca",
        "overview": "Un jeune garçon, Luca, vit un été inoubliable, ponctué de délicieux gelato, de savoureuses pasta et de longues balades en scooter. Luca partage ses aventures avec son nouveau meilleur ami, mais ce bonheur est menacé par un secret bien gardé...",
        "popularity": 62.389,
        "poster_path": "/bADnZZZdzQtajVwJ8MVWYlQ6Iq2.jpg",
        "release_date": "2021-06-17",
        "title": "Luca",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 7657
    },
    {
        "adult": false,
        "backdrop_path": "/ke3lanTAgCqPMpOyutIfXzYih2s.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 266856,
        "original_language": "en",
        "original_title": "The Theory of Everything",
        "overview": "À l'âge de 21 ans, Stephen Hawking est un brillant étudiant en Cosmologie à l'Université de Cambridge, passionné par les mystères de l'univers. De nouveaux horizons s'ouvrent lorsqu'il tombe amoureux d'une étudiante en arts, Jane Wilde. Mais le jeune homme se heurte alors à un diagnostic médical sans appel qui vient bouleverser ce bonheur. Alors que ses jours sont comptés, l'amour et le soutien sans faille de Jane, vont lui donner la force de s'attaquer aux recherches sur ce qu'il a désormais de plus précieux : le temps. Ensemble, ils défient l'impossible, pour aller au-delà de ce qu'ils auraient pu imaginer : le vingt et unième siècle.",
        "popularity": 23.816,
        "poster_path": "/ab7iTHrBR0Ik1tJnLW3JauLImH9.jpg",
        "release_date": "2014-11-26",
        "title": "Une merveilleuse histoire du temps",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 10095
    },
    {
        "adult": false,
        "backdrop_path": "/jB5zHG1eHh0OC1S61itXNApZlLD.jpg",
        "genre_ids": [
            12,
            35,
            16
        ],
        "id": 399174,
        "original_language": "en",
        "original_title": "Isle of Dogs",
        "overview": "Lorsqu'une épidémie de grippe canine envahit la ville japonaise de Megasaki et menace de contaminer les hommes, le maire ordonne la mise en quarantaine de tous les chiens. L'île poubelle devient : l'Île aux Chiens. Un jeune garçon de 12 ans, Atari, se rend sur place à la recherche de son chien perdu, Spots. C'est alors qu'il fait la découverte,  à l'aide d'une meute de cinq chiens, d'une conspiration qui menace la ville.",
        "popularity": 21.934,
        "poster_path": "/i6PeSvCdpFnbWYi0M4BfyHMG0YG.jpg",
        "release_date": "2018-03-23",
        "title": "L'Île aux chiens",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 4457
    },
    {
        "adult": false,
        "backdrop_path": "/8GHxjXlI5rqyTBuVNekGTPjG5T6.jpg",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "id": 14836,
        "original_language": "en",
        "original_title": "Coraline",
        "overview": "Coraline Jones est une fillette intrépide et douée d'une curiosité sans limites. Ses parents, qui ont tout juste emménagé avec elle dans une étrange maison, n'ont guère de temps à lui consacrer. Pour tromper son ennui, Coraline décide donc de jouer les exploratrices. Ouvrant une porte condamnée, elle pénètre dans un appartement identique au sien… mais où tout est différent. Dans cet Autre Monde, chaque chose lui paraît plus belle, plus colorée et plus attrayante. Son Autre Mère est pleinement disponible, son Autre Père prend la peine de lui mitonner des plats exquis, et même le Chat, si hautain dans la Vraie vie, daigne s'entretenir avec elle. Coraline est bien tentée d'élire domicile dans ce Monde merveilleux, qui répond à toutes ses attentes. Mais le rêve va très vite tourner au cauchemar. Prisonnière de l'Autre Mère, Coraline va devoir déployer des trésors de bravoure, d'imagination et de ténacité pour rentrer chez elle et sauver sa Vraie famille…",
        "popularity": 178.921,
        "poster_path": "/4jeFXQYytChdZYE9JYO7Un87IlW.jpg",
        "release_date": "2009-02-05",
        "title": "Coraline",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 7019
    },
    {
        "adult": false,
        "backdrop_path": "/yjGllQUm28R4X9xD9T5xMszirgw.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 235,
        "original_language": "en",
        "original_title": "Stand by Me",
        "overview": "Un événement peu ordinaire va marquer la vie du jeune Gordie Lachance. Au cours de l'été 1959, un adolescent a disparu mystérieusement dans l'Oregon. Gordie et ses inséparables copains, Chris, Teddy et Vern savent qu'il est mort pour avoir approché de trop près la voie ferrée, un train l'a heurté. Son corps gît au fond des bois. C'est le frère de Vern qui l'a découvert. Les enfants décident de s'attribuer le scoop et partent pour la grande forêt de Castle Rock. Cette aventure va rester pour Gordie et ses trois amis la plus étrange et la plus exaltante de leur vie.",
        "popularity": 29.472,
        "poster_path": "/df0u65IdDoEPw6568apJUKTT7Ci.jpg",
        "release_date": "1986-08-08",
        "title": "Stand by Me",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 5346
    },
    {
        "adult": false,
        "backdrop_path": "/vVBcIN68kFq681b4lObiNJhEVro.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 453,
        "original_language": "en",
        "original_title": "A Beautiful Mind",
        "overview": "En 1947, étudiant les mathématiques à l'université de Princeton, John Forbes Nash Jr., un brillant élève, élabore sa théorie économique des jeux. Pour lui, les fluctuations des marchés financiers peuvent être calculées très précisément. Au début des années cinquante, ses travaux et son enseignement au Massachusetts Institute of Technology ne passent pas inaperçus et un représentant du Département de la Défense, William Parcher, se présente à lui pour lui proposer d'aider secrètement les États-Unis. La mission de John consiste à décrypter dans la presse les messages secrets d'espions russes, censés préparer un attentat nucléaire sur le territoire américain. Celui-ci y consacre rapidement tout son temps, et ce au détriment de sa vie de couple avec Alicia. Ce job n'est toutefois pas sans risques : des agents ennemis surveillent ses moindres faits et gestes. Mais personne ne le croit.",
        "popularity": 29.314,
        "poster_path": "/iYAGo8B2NIrtyPoRowe7wlT3twa.jpg",
        "release_date": "2001-12-14",
        "title": "Un homme d'exception",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 9507
    },
    {
        "adult": false,
        "backdrop_path": "/7fJAYM0rhzpEhCK6wxbQ412EoYW.jpg",
        "genre_ids": [
            18,
            10752,
            36
        ],
        "id": 14574,
        "original_language": "en",
        "original_title": "The Boy in the Striped Pyjamas",
        "overview": "Seconde Guerre mondiale. Bruno a tout juste 9 ans lorsque son père, un officier nazi remarqué par le Führer, se voit confier le commandement du camp de concentration polonais d'Auschwitz. Le petit garçon n'apprécie guère de devoir quitter la belle et grande maison de Berlin pour se retrouver dans une demeure isolée et triste. De sa chambre, il aperçoit des hommes, des femmes et des enfants tous vêtus de pyjamas rayés. Personne ne lui explique qui ils sont, mais l'innocence aidant, il va se lier d'amitié avec un enfant juif...",
        "popularity": 77.115,
        "poster_path": "/9OlMcVcuFl2cjUKLvLYBael6kkX.jpg",
        "release_date": "2008-05-07",
        "title": "Le Garçon au Pyjama rayé",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 6566
    },
    {
        "adult": false,
        "backdrop_path": "/qjPhauZx2vOi3gNKsQfJZHeGemB.jpg",
        "genre_ids": [
            18,
            878,
            9648
        ],
        "id": 593,
        "original_language": "ru",
        "original_title": "Солярис",
        "overview": "Solaris est une planète mystérieuse qu'étudie une station orbitale. D'étranges phénomènes s'y sont produits. Un physicien s'est donné la mort, et deux autres sont devenus fous. Kris Kelvin, un scientifique spécialisé en psychologie, y est envoyé en mission. À peine arrivé, il croit sentir une forme de vie non humaine à bord de la station. Une femme lui apparaît, qui devient sa maîtresse. Elle n'est que le double de sa propre femme, qui s'est suicidée quelques années plus tôt, par sa faute. Elle disparaît ou surgit au gré de ses désirs. Il comprend que la planète Solaris fonctionne comme une mémoire affective, qui matérialise les pulsions de ceux qui l'approchent…",
        "popularity": 17.592,
        "poster_path": "/wyRTlDFauciqkzvIanRDNAoangf.jpg",
        "release_date": "1972-03-20",
        "title": "Solaris",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1437
    },
    {
        "adult": false,
        "backdrop_path": "/xgAEfHByamMdRCA31oERQrsiutF.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 613,
        "original_language": "de",
        "original_title": "Der Untergang",
        "overview": "Berlin, avril 1945. Le IIIe Reich agonise. Les combats font rage dans les rues de la capitale. Hitler, accompagné de ses généraux et de ses plus proches partisans, s'est réfugié dans son bunker, situé dans les jardins de la Chancellerie. À ses côtés, Traudl Junge, la secrétaire particulière du Führer, refuse de l'abandonner. Tandis qu'à l'extérieur la situation se dégrade, Hitler vit ses dernières heures et la chute du régime.",
        "popularity": 20.429,
        "poster_path": "/65SbewZc6xPsQ9cydXZhF1hVOh2.jpg",
        "release_date": "2004-09-16",
        "title": "La Chute",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3480
    },
    {
        "adult": false,
        "backdrop_path": "/h5pAEVma835u8xoE60kmLVopLct.jpg",
        "genre_ids": [
            16,
            10751,
            14,
            12
        ],
        "id": 16859,
        "original_language": "ja",
        "original_title": "魔女の宅急便",
        "overview": "À l'âge de 13 ans, une future sorcière doit partir faire son apprentissage dans une ville inconnue durant un an. Une expérience que va vivre la jeune et espiègle Kiki aux côtés de Osono, une gentille boulangère qui lui propose un emploi de livreuse.",
        "popularity": 32.477,
        "poster_path": "/tdOJxx6PCzjPYViSnk0OPQ80X2d.jpg",
        "release_date": "1989-07-29",
        "title": "Kiki la petite sorcière",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3589
    },
    {
        "adult": false,
        "backdrop_path": "/1WpHOEFaOoP3cxVaPzEefcSLlJX.jpg",
        "genre_ids": [
            37
        ],
        "id": 391,
        "original_language": "it",
        "original_title": "Per un pugno di dollari",
        "overview": "Joe, un tireur d'élite, arrive dans une bourgade mexicaine proche de la frontière, San Miguel. Deux bandes rivales, les Baxter et les Rodos, se disputent le contrôle de la région. Joe, qui assiste à un massacre de soldats mexicains par les Rodos, décide de tirer profit de la situation pour gagner quelques dollars. Il incite les bandits à se battre entre eux dans l'espoir de récupérer l'or que détient Ramon, le chef des Rodos. Un premier affrontement entre les bandits élimine une bonne partie des Baxter. Joe se charge de tuer lui-même les Rodos survivants. Une opération d'autant plus facile à imaginer que Joe a découvert le point faible du plus farouche des fils Rodos, son amour pour Marisol, une jolie Mexicaine...",
        "popularity": 25.228,
        "poster_path": "/oRcs3wYSPls6PHxKfI9fryahdUP.jpg",
        "release_date": "1964-09-12",
        "title": "Pour une poignée de dollars",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3791
    },
    {
        "adult": false,
        "backdrop_path": "/j5VUdrnRBya3KE40t0ucAN2YqDs.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 1607,
        "original_language": "en",
        "original_title": "A Bronx Tale",
        "overview": "L'histoire de la communauté italienne des années 60 dans le Bronx à travers les yeux de Calogero, neuf ans, qui hésite entre la vie de son père, honnête travailleur, et celle des affranchis, qui semble plus prometteuse.",
        "popularity": 36.376,
        "poster_path": "/lN1czG0wuaun7IlpiadX9RrgI6C.jpg",
        "release_date": "1993-09-14",
        "title": "Il était une fois le Bronx",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2167
    },
    {
        "adult": false,
        "backdrop_path": "/2Y7nbXrDtHwAfcTX7KBN0z40OAy.jpg",
        "genre_ids": [
            12,
            28
        ],
        "id": 89,
        "original_language": "en",
        "original_title": "Indiana Jones and the Last Crusade",
        "overview": "Indiana Jones se lance cette fois-ci à la recherche du Saint Graal, accompagné de l'éminent et très maladroit Dr Henry Jones, son père. Malheureusement, ils ne sont pas les seuls lancés sur la trace du trésor, les nazis le convoitent également.",
        "popularity": 43.782,
        "poster_path": "/73gYk4vShggfajlthEcOsY5ZhQI.jpg",
        "release_date": "1989-05-24",
        "title": "Indiana Jones et la dernière croisade",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 9348
    },
    {
        "adult": false,
        "backdrop_path": "/4HWAQu28e2yaWrtupFPGFkdNU7V.jpg",
        "genre_ids": [
            35,
            80,
            9648
        ],
        "id": 546554,
        "original_language": "en",
        "original_title": "Knives Out",
        "overview": "Célèbre auteur de polars, Harlan Thrombey est retrouvé mort dans sa somptueuse propriété, le soir de ses 85 ans. L'esprit affûté et la mine débonnaire, le détective Benoit Blanc est alors engagé par un commanditaire anonyme afin d'élucider l'affaire. Mais entre la famille d'Harlan qui s'entre-déchire et son personnel qui lui reste dévoué, Blanc plonge dans les méandres d'une enquête mouvementée, mêlant mensonges et fausses pistes, où les rebondissements s'enchaînent à un rythme effréné jusqu'à la toute dernière minute…",
        "popularity": 43.264,
        "poster_path": "/4kxVUW4hMurLs7ascwahF7blEUs.jpg",
        "release_date": "2019-11-27",
        "title": "À couteaux tirés",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 11212
    },
    {
        "adult": false,
        "backdrop_path": "/ifnRFDSlMdLFs9Xjem6WewM68GD.jpg",
        "genre_ids": [
            12,
            18,
            37
        ],
        "id": 581,
        "original_language": "en",
        "original_title": "Dances with Wolves",
        "overview": "Durant la guerre de Sécession, le lieutenant John Dunbar, envoyé à un poste de reconnaissance dans les plaines du Dakota, rencontre le peuple sioux. Il se lie d'amitié avec la population indienne, au point d'intégrer une tribu et de s'éprendre de l'une des leurs.",
        "popularity": 29.743,
        "poster_path": "/eDOcvPDiV5o6MRZJfZrbRjgRjQx.jpg",
        "release_date": "1990-03-30",
        "title": "Danse avec les loups",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3853
    },
    {
        "adult": false,
        "backdrop_path": "/xWT5F1DNxciNLEMXRl49iq8zvN7.jpg",
        "genre_ids": [
            14,
            16,
            10751
        ],
        "id": 9479,
        "original_language": "en",
        "original_title": "The Nightmare Before Christmas",
        "overview": "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles », vit dans la ville d'Halloween.  En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween.  Mais le terrible épouvantail, lassé de cette vie répétitive et monotone, décide de partir. C'est alors qu'il découvre la ville de Noël.  Après cette aventure, il revient chez lui, avec une idée originale en tête : et si cette année, c'étaient les habitants de la ville d'Halloween qui allaient fêter Noël ?",
        "popularity": 189.007,
        "poster_path": "/e5hgZBkL1kvY0fGPixZD0468VIA.jpg",
        "release_date": "1993-10-09",
        "title": "L'Étrange Noël de monsieur Jack",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 8567
    },
    {
        "adult": false,
        "backdrop_path": "/1xTUtI25j3TpKtJ7dyFvqCP2qaO.jpg",
        "genre_ids": [
            80,
            18
        ],
        "id": 5924,
        "original_language": "en",
        "original_title": "Papillon",
        "overview": "Henri \"Papillon\" Charrière, un malfrat de petite envergure, est jugé à tort pour un meurtre qu'il n'a pas commis. Celui-ci est condamné à vie dans une prison d'une colonie française : le bagne de Cayenne. Mais Papillon n'a qu'une seule idée en tête : s'évader. Malheureusement, ses régulières tentatives sont toujours restées sans réussite. Devant son acharnement, les dirigeants l'envoient sur Devil's Island, une prison dans la prison, dont jamais personne n'a réussi à s'échapper. Une épreuve terrible pour Papillon, qui découvre l'enfer de l'environnement carcéral...",
        "popularity": 22.98,
        "poster_path": "/u6Sw897Bx7pPnyBhHXEGR29PKAR.jpg",
        "release_date": "1973-12-13",
        "title": "Papillon",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1726
    },
    {
        "adult": false,
        "backdrop_path": "/nevS6wjzCxZESvmjJZqdyZ3RNQ6.jpg",
        "genre_ids": [
            35,
            80
        ],
        "id": 115,
        "original_language": "en",
        "original_title": "The Big Lebowski",
        "overview": "Jeff Lebowski, prénommé le Duc, est un paresseux qui passe son temps à boire des coups avec son copain Walter et à jouer au bowling, jeu dont il est fanatique. Un jour deux malfrats le passent à tabac. Il semblerait qu'un certain Jackie Treehorn veuille récupérer une somme d'argent que lui doit la femme de Jeff. Seulement Lebowski n'est pas marié. C'est une méprise, le Lebowski recherché est un millionnaire de Pasadena. Le Duc part alors en quête d'un dédommagement auprès de son richissime homonyme…",
        "popularity": 28.217,
        "poster_path": "/dhZ0xWMvv4TU2QEpAJKL7XLU2se.jpg",
        "release_date": "1998-03-06",
        "title": "The Big Lebowski",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 10426
    },
    {
        "adult": false,
        "backdrop_path": "/txDX7lBx8bBhF7dRCEfDYmAmdnk.jpg",
        "genre_ids": [
            10749,
            18,
            35
        ],
        "id": 200727,
        "original_language": "en",
        "original_title": "Love, Rosie",
        "overview": "Rosie Dunne et Alex Stewart sont amis depuis qu'ils ont cinq ans. Cependant une barrière s'est formée, les enfermant tous les deux dans cette amitié. Cette barrière se brise le jour où ils décident de prendre des chemins éloignés.",
        "popularity": 36.835,
        "poster_path": "/3QrXMvAvfIJDD2LydUV2IzEkhy8.jpg",
        "release_date": "2014-10-16",
        "title": "Love, Rosie",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 5931
    },
    {
        "adult": false,
        "backdrop_path": "/tt5yH2gvuCbWGSsEVY4a63W24eQ.jpg",
        "genre_ids": [
            37
        ],
        "id": 301,
        "original_language": "en",
        "original_title": "Rio Bravo",
        "overview": "Après un meurtre, le shériff John Grant arrête Joe Burdette et l'enferme dans une cellule en attendant l'arrivée du prévôt des États-Unis. La prison est gardée par ses deux adjoints, Dude, un alcoolique et Stumpy, un vieillard estropié. Mais dehors, Nathan Burdette, son frère, et sa bande se réunissent et attendent patiemment le moment favorable pour attaquer la prison et libérer Joe...",
        "popularity": 25.618,
        "poster_path": "/pYOqsH9LEow7gAULZBmkWByHOIB.jpg",
        "release_date": "1959-03-18",
        "title": "Rio Bravo",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1025
    },
    {
        "adult": false,
        "backdrop_path": "/4EdN5rIT43xcqi4IVRrhxiDOz6z.jpg",
        "genre_ids": [
            18,
            10749,
            80
        ],
        "id": 152742,
        "original_language": "it",
        "original_title": "La migliore offerta",
        "overview": "Virgil Oldman est un commissaire priseur de renom. Véritable institution dans le milieu de l'art et misogyne assumé, il n'a de relation intime qu'avec la collection de tableaux qu'il a su constituer secrètement au cours des années. Personne ne le connaît vraiment, même pas son vieil ami marchand d'art Billy. Lorsqu'une cliente lui demande une expertise mais n'accepte de lui parler qu'au téléphone, Virgil est piqué de curiosité et ne peut se résoudre à laisser tomber l'affaire. Quand il la voit pour la première fois il tombe violemment sous son charme.",
        "popularity": 16.772,
        "poster_path": "/7rHT8tek4qXyVWiqOV3XphA7lz1.jpg",
        "release_date": "2013-01-01",
        "title": "The Best Offer",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2663
    },
    {
        "adult": false,
        "backdrop_path": "/1PnRPz4A4AguUEVOTcprIyctrax.jpg",
        "genre_ids": [
            18,
            28
        ],
        "id": 59440,
        "original_language": "en",
        "original_title": "Warrior",
        "overview": "Ancien Marine brisé, Tommy Conlon rentre au pays et demande à son père de le préparer pour un tournoi d'arts martiaux mixtes qui lui permettrait de gagner une fortune. Personne ne sait ce qu'il espère faire de cet argent. Le propre frère de Tommy, Brendan, décide lui aussi de s'engager dans la compétition pour essayer de sauver sa famille. Entre les deux frères, les années n'ont pas adouci les rancœurs. Immanquablement, les routes de Tommy et de Brendan vont bientôt se croiser. Au-delà de l'affrontement qui s'annonce, pour chacun, quelle que soit la cause qu'ils défendent, il n'est pas seulement question de remporter un prix, mais de mener le combat d'une vie…",
        "popularity": 39.077,
        "poster_path": "/pVfOffsjHPExpWu5mnbUDjh3pDf.jpg",
        "release_date": "2011-09-09",
        "title": "Warrior",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 4198
    },
    {
        "adult": false,
        "backdrop_path": "/vUTVUdfbsY4DePCYzxxDMXKp6v6.jpg",
        "genre_ids": [
            16,
            35,
            10751
        ],
        "id": 585,
        "original_language": "en",
        "original_title": "Monsters, Inc.",
        "overview": "Monstropolis est une petite ville peuplée de monstres dont la principale source d'énergie provient des cris des enfants. Monstres & Cie est la plus grande usine de traitement de cris de la ville. Grâce au nombre impressionnant de portes de placards dont dispose l'usine, une équipe de monstres d'élite pénètre dans le monde des humains pour terrifier durant la nuit les enfants et récolter leurs hurlements.  Le Terreur d'élite le plus réputé de Monstres & Cie s'appelle Jacques Sullivent, alias Sulli. C'est un monstre cornu de 2m40 de haut à la fourrure bleu-vert tachetée de violet. Une nuit, alors qu'il se trouve à « l'étage de la Terreur », il s'aperçoit qu'une porte de placard n'a pas été fermée correctement. Pour vérifier que tout est en place, il l'ouvre, permettant sans le vouloir à Bouh, une petite fille, de pénétrer dans son monde.",
        "popularity": 104.684,
        "poster_path": "/a99lbMSp4ScGT79FDKJeOEmcZaN.jpg",
        "release_date": "2001-11-01",
        "title": "Monstres & Cie",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 17251
    },
    {
        "adult": false,
        "backdrop_path": "/tqlCsB6AFjQ9dpAOHkd3sEdFS13.jpg",
        "genre_ids": [
            80,
            18,
            10749,
            53
        ],
        "id": 6075,
        "original_language": "en",
        "original_title": "Carlito's Way",
        "overview": "En 1975, à New York, Carlito Brigante, un ancien trafiquant de drogue, est libéré de prison grâce à David Kleinfeld, son avocat, qui a découvert plusieurs vices de forme dans la manière dont le procureur Bill Norwalk avait instruit le procès. Carlito est bien décidé à rentrer dans le droit chemin et, dès qu'il aura économisé assez d'argent, il compte se retirer aux Bahamas pour s'assurer une retraite paisible avec Gail, sa compagne danseuse dans une boîte de strip-tease. Mais le destin en décidera autrement.",
        "popularity": 20.475,
        "poster_path": "/xA5SkWT5u30tRbKMiTUp5jUTret.jpg",
        "release_date": "1993-11-10",
        "title": "L'Impasse",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2874
    },
    {
        "adult": false,
        "backdrop_path": "/sKvQUSyqsFq8e1ts6oo3Xp3dPH2.jpg",
        "genre_ids": [
            16,
            12,
            35,
            14
        ],
        "id": 585511,
        "original_language": "en",
        "original_title": "Luck",
        "overview": "La chance et la malchance, deux organisations secrètes, se livrent une bataille sans merci pour influencer notre quotidien. La chance poursuit la fille la plus malchanceuse du monde, qui après avoir découvert le monde inédit de la chance et du bonheur, doit s'associer à des créatures magiques pour découvrir une force plus puissante que la chance elle-même.",
        "popularity": 97.77,
        "poster_path": "/1a5ZNjSDf80nqWWq0oh9up2tPrt.jpg",
        "release_date": "2022-08-05",
        "title": "Luck",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1451
    },
    {
        "adult": false,
        "backdrop_path": "/m10uqk0HI5JcITAbxNJIIiGA8HP.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 968,
        "original_language": "en",
        "original_title": "Dog Day Afternoon",
        "overview": "Des gangsters débutants braquent une banque et se retrouvent cernés par la police et les médias. Ils prennent en otage les employés de la banque. Débute alors un cauchemar qui va durer des heures…",
        "popularity": 20.425,
        "poster_path": "/bIkVY8xpYL8c3GTlFP2NqnTjm2m.jpg",
        "release_date": "1975-09-21",
        "title": "Un après-midi de chien",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2683
    },
    {
        "adult": false,
        "backdrop_path": "/vbba0jXLjghW4nNzte51d8XWSvq.jpg",
        "genre_ids": [
            878,
            18,
            10749,
            14
        ],
        "id": 31011,
        "original_language": "en",
        "original_title": "Mr. Nobody",
        "overview": "En 2092, Nemo Nobody, âgé de 118 ans, est le dernier mortel vivant dans un monde d'immortels. Il est interrogé sur son passé et se retrouve sous les soins du docteur Feldheim, qui veut l'aider à mettre de l'ordre dans ses souvenirs brouillés. Profondément marqué par le divorce de ses parents et par ses échecs sentimentaux, le vieillard a des trous de mémoire et son témoignage est constitué d'épisodes contradictoires de son enfance, de ses amours et de sa vie conjugale.  Nemo Nobody se remémore à travers différents flashbacks ses différentes vies dans des espaces-temps différents. Il imagine alors douze vies parallèles dont chacune est caractérisée par une épouse différente. Les variations de cette arborescence s'en tiennent parfois à très peu de choses, soit une illustration de l'effet papillon. Nemo livre par intermittence au spectateur quelques réflexions sur l'espace-temps, notamment le Big Crunch.",
        "popularity": 23.288,
        "poster_path": "/sAUmchRpPrhKfJ7AZnyLYfXQOTl.jpg",
        "release_date": "2009-11-06",
        "title": "Mr. Nobody",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 5528
    },
    {
        "adult": false,
        "backdrop_path": "/4IkZXrbQPAGAfwzjzO1J3WG4fpX.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 826,
        "original_language": "en",
        "original_title": "The Bridge on the River Kwai",
        "overview": "En 1943, le colonel Saïto dirige un camp de prisonniers dans la jungle birmane. Il reçoit l'ordre de construire un pont sur la rivière Kwaï et d'y faire travailler les détenus, y compris les officiers, au mépris des conventions internationales. Le colonel anglais Nicholson, capturé à Singapour avec ses troupes, refuse énergiquement de participer au chantier. Saïto pense pouvoir le faire plier en le soumettant à toutes sortes de vexations et de sévices, mais Nicholson tient bon. Son geôlier finit par céder. Nicholson accepte alors, de son plein gré, de prendre la tête des opérations pour montrer aux Japonais de quoi sont capables les soldats de Sa Majesté. Pendant ce temps, un commando américain progresse prudemment vers le site, dans le but de faire sauter l'ouvrage…",
        "popularity": 16.861,
        "poster_path": "/8KglPveDRE9T8wrnx7esGwfGMo0.jpg",
        "release_date": "1957-10-11",
        "title": "Le Pont de la rivière Kwaï",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1866
    },
    {
        "adult": false,
        "backdrop_path": "/y1giivdsGLyo1LCvlsL6mLKyTZ7.jpg",
        "genre_ids": [
            53,
            18,
            9648
        ],
        "id": 1018,
        "original_language": "en",
        "original_title": "Mulholland Drive",
        "overview": "À Hollywood, durant la nuit, Rita, une jeune femme, devient amnésique suite à un accident de voiture sur la route de Mulholland Drive. Elle fait la rencontre de Betty Elms, une actrice en devenir qui vient juste de débarquer à Los Angeles. Aidée par celle-ci, Rita tente de retrouver la mémoire ainsi que son identité.",
        "popularity": 31.868,
        "poster_path": "/d5gefer4mHnL5kOmlOP5rGumdM7.jpg",
        "release_date": "2001-06-06",
        "title": "Mulholland Drive",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 5689
    },
    {
        "adult": false,
        "backdrop_path": "/mjEHsVeLWOpoUTOYXthIWgKdT0K.jpg",
        "genre_ids": [
            18,
            28,
            53,
            80,
            9648
        ],
        "id": 10775,
        "original_language": "cn",
        "original_title": "無間道",
        "overview": "Ming est une taupe dans la police de Hong Kong, implantée là par les bons soins du patron de la triade. Yan est un policier infiltré dans la triade depuis dix ans. Son casier judiciaire bien alourdi par les années est là pour témoigner de sa réussite.Parfaite symétrie des situations et des hommes : Ming et Yan sont également fatigués des rôles que leur font jouer, dans l'ombre, leurs patrons respectifs. Ming rêve de devenir un vrai policier. Yan est las de tuer au nom de la justice et voudrait pouvoir se retirer enfin.",
        "popularity": 21.017,
        "poster_path": "/zhBymxFqWCptZZiEtTRvscrEsS3.jpg",
        "release_date": "2002-12-12",
        "title": "Infernal Affairs",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1457
    },
    {
        "adult": false,
        "backdrop_path": "/1nR9mCsJD02j13wet0yAnVhEG6Y.jpg",
        "genre_ids": [
            18,
            53
        ],
        "id": 71157,
        "original_language": "fr",
        "original_title": "Polisse",
        "overview": "Le quotidien des policiers de la BPM (Brigade de Protection des Mineurs) ce sont les gardes à vue de pédophiles, les arrestations de pickpockets mineurs mais aussi la pause déjeuner où l'on se raconte ses problèmes de couple ; ce sont les auditions de parents maltraitants, les dépositions des enfants, les dérives de la sexualité chez les adolescents, mais aussi la solidarité entre collègues et les fous rires incontrôlables dans les moments les plus impensables ; c'est savoir que le pire existe, et tenter de faire avec… Comment ces policiers parviennent-ils à trouver l'équilibre entre leurs vies privées et la réalité à laquelle ils sont confrontés, tous les jours ? Fred, l'écorché du groupe, aura du mal à supporter le regard de Melissa, mandatée par le ministère de l'intérieur pour réaliser un livre de photos sur cette brigade.",
        "popularity": 12.485,
        "poster_path": "/v5X31x792D0T4mJwDsihkF8V10E.jpg",
        "release_date": "2011-10-06",
        "title": "Polisse",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1122
    },
    {
        "adult": false,
        "backdrop_path": "/bODIl4B857k20AhrHylKzpLprk4.jpg",
        "genre_ids": [
            18
        ],
        "id": 10774,
        "original_language": "en",
        "original_title": "Network",
        "overview": "Au milieu des années 70, les informations à la télévision changent. Le journalisme perd en effet pied face au pouvoir de l'argent et le besoin croissant de divertissement. Une rédaction se bat alors pour maintenir son audience sans se compromettre.",
        "popularity": 20.672,
        "poster_path": "/3hqxVEi0Qlcnl5ib8Uq7gGN7ZSe.jpg",
        "release_date": "1976-11-14",
        "title": "Network : Main basse sur la télévision",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1528
    },
    {
        "adult": false,
        "backdrop_path": "/h3uqFk7sZRJvLZDdLiFB9qwbL07.jpg",
        "genre_ids": [
            16,
            10751
        ],
        "id": 12,
        "original_language": "en",
        "original_title": "Finding Nemo",
        "overview": "Nemo, un jeune poisson-clown intrépide est capturé puis plongé dans l'aquarium d'un cabinet dentaire. Marin, son père, et Dory, un poisson-chirurgien bleu sympathique mais tête-en-l'air, entament un long périple pour le retrouver. Ils croiseront en chemin une éclectique faune tropicale plus ou moins bien intentionnée. Sauront-ils retrouver la piste de Nemo ?",
        "popularity": 85.089,
        "poster_path": "/8zR2vXoXfdlknEYjfHvCbb1rJbI.jpg",
        "release_date": "2003-05-30",
        "title": "Le Monde de Nemo",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 18123
    },
    {
        "adult": false,
        "backdrop_path": "/yukdRXb2bhpwDtCHKvQpQ0q77pd.jpg",
        "genre_ids": [
            18,
            27
        ],
        "id": 136,
        "original_language": "en",
        "original_title": "Freaks",
        "overview": "Des êtres difformes se produisent dans un célèbre cirque, afin de s'exhiber en tant que phénomènes de foire. Le lilliputien Hans, fiancé à l'écuyère naine Frieda, est fasciné par la beauté de l'acrobate Cléopâtre. Apprenant que son soupirant a hérité d'une belle somme, cette dernière décide de l'épouser pour l'empoisonner ensuite avec la complicité de son amant Hercule. Mais le complot est découvert, et les amis de Hans et Frieda vont se venger...",
        "popularity": 30.668,
        "poster_path": "/j5Yi9gn1xDHa7QdLRFMYnxylFM.jpg",
        "release_date": "1932-02-12",
        "title": "Freaks, la monstrueuse parade",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1071
    },
    {
        "adult": false,
        "backdrop_path": "/ss0Os3uWJfQAENILHZUdX8Tt1OC.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 545611,
        "original_language": "en",
        "original_title": "Everything Everywhere All at Once",
        "overview": "Evelyn Wang est à bout : elle ne comprend plus sa famille, son travail et croule sous les impôts… Soudain, elle se retrouve plongée dans le multivers, des mondes parallèles où elle explore toutes les vies qu'elle aurait pu mener. Face à des forces obscures, elle seule peut sauver le monde mais aussi préserver la chose la plus précieuse : sa famille.",
        "popularity": 54.826,
        "poster_path": "/qHy7BlA1I3iUEIGp7atsMjSNJSK.jpg",
        "release_date": "2022-03-24",
        "title": "Everything Everywhere All at Once",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 5281
    },
    {
        "adult": false,
        "backdrop_path": "/zwgDZw9dyrgkYz2RCOb2HvUDlt2.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 80,
        "original_language": "en",
        "original_title": "Before Sunset",
        "overview": "Neuf ans auparavant, Jesse et Céline se sont rencontrés par hasard à Vienne, et ont passé une nuit ensemble dans les rues désertes de la ville. En se séparant, quatorze heures plus tard, ils s'étaient promis de se revoir six mois après. Aujourd'hui, il se retrouvent à Paris alors que Jesse est venu présenter son nouveau roman. Ils passent l'après-midi ensemble dans des cafés, des parcs et sur les quais de la Seine, retrouvant instantanément leur ancienne complicité. Comme lors de leur première rencontre, ils ont énormément de choses à se raconter...",
        "popularity": 14.353,
        "poster_path": "/gycdE1ARByGQcK4fYR2mgpU6OO.jpg",
        "release_date": "2004-06-16",
        "title": "Before Sunset",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3093
    },
    {
        "adult": false,
        "backdrop_path": "/9X7YweCJw3q8Mcf6GadxReFEksM.jpg",
        "genre_ids": [
            28,
            18,
            878
        ],
        "id": 263115,
        "original_language": "en",
        "original_title": "Logan",
        "overview": "Dans un futur proche, un certain Logan, épuisé de fatigue, s'occupe d'un Professeur X souffrant, dans un lieu gardé secret à la frontière Mexicaine. Mais les tentatives de Logan pour se retrancher du monde et rompre avec son passé vont s'épuiser lorsqu'une jeune mutante traquée par de sombres individus va se retrouver soudainement face à lui.",
        "popularity": 66.746,
        "poster_path": "/5HB2SsrYNARm4Kom7Amwyb93O4M.jpg",
        "release_date": "2017-02-28",
        "title": "Logan",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 18170
    },
    {
        "adult": false,
        "backdrop_path": "/sDNpacyIpSL8YRNkVR4qOmteXBX.jpg",
        "genre_ids": [
            18,
            27,
            53
        ],
        "id": 805,
        "original_language": "en",
        "original_title": "Rosemary's Baby",
        "overview": "Malgré les conseils de leur vieil ami Hutch, Guy Woodhouse et sa jeune femme, enceinte, s'installent dans un immeuble new-yorkais vétuste, considéré par leur ami comme une demeure maléfique. Aussitôt, leurs voisins, Minnie et Roman Castevet, vieux couple d'Europe centrale, imposent leur amitié et leurs services. Si Guy accepte facilement ce voisinage, Rosemary s'en inquiète…",
        "popularity": 29.066,
        "poster_path": "/8xreLDdWHQZa2u3zObRuOdNJDpm.jpg",
        "release_date": "1968-06-12",
        "title": "Rosemary's Baby",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3556
    },
    {
        "adult": false,
        "backdrop_path": "/vkzeh2G7Gwapo4J1eqGWRph2hCs.jpg",
        "genre_ids": [
            10752,
            18,
            36
        ],
        "id": 335578,
        "original_language": "da",
        "original_title": "Under sandet",
        "overview": "1945 au Danemark à la fin de la Seconde Guerre Mondiale.  Plusieurs soldats allemands, à peine sortis de l'adolescence, sont faits prisonniers par l'armée danoise et envoyés en première ligne pour désamorcer les mines enfouies le long de la côte. Pour eux, la guerre est loin d'être terminée. Inspiré de faits réels, Les oubliés raconte cet épisode tragique de l'Histoire.",
        "popularity": 13.113,
        "poster_path": "/3KkQLds2XjhUBIZlgurw4o6lCqb.jpg",
        "release_date": "2015-12-03",
        "title": "Les oubliés",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1286
    },
    {
        "adult": false,
        "backdrop_path": "/5rrGVmRUuCKVbqUu41XIWTXJmNA.jpg",
        "genre_ids": [
            12,
            14
        ],
        "id": 674,
        "original_language": "en",
        "original_title": "Harry Potter and the Goblet of Fire",
        "overview": "La quatrième année à l'école de Poudlard est marquée par le « Tournoi des trois sorciers ». Les participants sont choisis par la fameuse « Coupe de feu » qui est à l'origine d'un scandale. Elle sélectionne Harry Potter alors qu'il n'a pas l'âge légal requis ! Accusé de tricherie et mis à mal par une série d'épreuves physiques de plus en plus difficiles, ce dernier sera enfin confronté à Celui dont on ne doit pas prononcer le nom, Lord V.",
        "popularity": 111.249,
        "poster_path": "/hBak1pn5pbI4ycAbrgMMn1YI7P1.jpg",
        "release_date": "2005-11-16",
        "title": "Harry Potter et la Coupe de feu",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 19361
    },
    {
        "adult": false,
        "backdrop_path": "/jkkw7YyfWO1Vc0i6YFU1JQef8DV.jpg",
        "genre_ids": [
            18,
            28,
            80
        ],
        "id": 47931,
        "original_language": "pt",
        "original_title": "Tropa de Elite 2",
        "overview": "Le colonel Nascimento est chargé de maîtriser une émeute dans l'une des prisons les plus violentes du Brésil où trois gangs sont en guerre ouverte. Les forces de la BOPE (Bataillon des opérations spéciales de police) sont contraintes d'accepter l'intervention d'un intermédiaire : un activiste politique qui est sensé calmer les tensions entre les émeutiers et la police. Cependant, la situation dégénère rapidement et tourne à la prise d'otage pour déboucher sur un véritable carnage. Démis de ses fonctions, Nascimento est nommé à un secrétariat d'État. Il va alors découvrir à quel point la corruption règne aux plus hauts niveaux de l'Etat.",
        "popularity": 21.852,
        "poster_path": "/knjQemocUH0o1S889nLDzee422K.jpg",
        "release_date": "2010-10-08",
        "title": "Troupe d'Élite : l'Ennemi Intérieur",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1715
    },
    {
        "adult": false,
        "backdrop_path": "/59vDC1BuEQvti24OMr0ZvtAK6R1.jpg",
        "genre_ids": [
            14,
            12,
            16,
            10751
        ],
        "id": 10191,
        "original_language": "en",
        "original_title": "How to Train Your Dragon",
        "overview": "L'histoire d'Harold, jeune Viking peu à son aise dans sa tribu où combattre les dragons est le sport national. Sa vie va être bouleversée par sa rencontre avec un dragon qui va peu à peu amener Harold et les siens à voir le monde d'un point de vue totalement différent.",
        "popularity": 51.258,
        "poster_path": "/zXl41G6QVSAHzNNKsDUG9TOPJin.jpg",
        "release_date": "2010-03-18",
        "title": "Dragons",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 12136
    },
    {
        "adult": false,
        "backdrop_path": "/8FbbcmwmpGd7brfiC7f7lWFNGdi.jpg",
        "genre_ids": [
            18,
            36
        ],
        "id": 314365,
        "original_language": "en",
        "original_title": "Spotlight",
        "overview": "Une équipe de journalistes d'investigation, baptisée Spotlight, a enquêté pendant 12 mois sur des suspicions d'abus sexuels au sein d'une des institutions les plus anciennes et les plus respectées au monde. L'enquête révèlera que L'Eglise Catholique a protégé pendant des décennies les personnalités religieuses, juridiques et politiques les plus en vue de Boston, et déclenchera par la suite une vague de révélations dans le monde entier.",
        "popularity": 18.394,
        "poster_path": "/bY4K4gkDjJCNsNLHhdDPApTZiE.jpg",
        "release_date": "2015-11-06",
        "title": "Spotlight",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 7793
    },
    {
        "adult": false,
        "backdrop_path": "/v2LilmCylr3bL9TCZSj6syjowZh.jpg",
        "genre_ids": [
            35,
            18
        ],
        "id": 937278,
        "original_language": "en",
        "original_title": "A Man Called Otto",
        "overview": "Depuis la mort de sa femme Sonya, Otto est devenu grincheux et dépressif. Il se sent vieux et n'attend plus qu'une seule chose : la mort. Renvoyé de son emploi, il erre sans but, surveille le quartier et se brouille avec ses voisins. C'est alors que l'arrivée d'une nouvelle famille dans la rue, avec notamment deux petites filles, va bouleverser son quotidien.",
        "popularity": 46.715,
        "poster_path": "/7Sc5hW5HhK2HWGF35MkGtv8guHF.jpg",
        "release_date": "2022-12-28",
        "title": "Le Pire Voisin au monde",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1909
    },
    {
        "adult": false,
        "backdrop_path": "/d3l7kgFJyLTTQSrR4ysCk5yeVyW.jpg",
        "genre_ids": [
            28,
            18
        ],
        "id": 579974,
        "original_language": "te",
        "original_title": "రౌద్రం రణం రుధిరం",
        "overview": "À l'époque coloniale, en Inde, les anglais enlèvent une jeune fille d'une communauté tribale. Mais ce qu'ils ignorent, c'est que cette tribu a un protecteur : Bheem. Peut-être que soleil ne se couche jamais sur l'empire britannique. Mais la force est du coté des justes.",
        "popularity": 46.523,
        "poster_path": "/sxI1qKDHZRAi2LPmJUPhQ2x1u07.jpg",
        "release_date": "2022-03-24",
        "title": "Roudram Ranam Rudhiram (RRR)",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1084
    },
    {
        "adult": false,
        "backdrop_path": "/mvyERNa0oNsBjbHqn5qSGMHk2FM.jpg",
        "genre_ids": [
            12,
            18
        ],
        "id": 5915,
        "original_language": "en",
        "original_title": "Into the Wild",
        "overview": "Tout juste diplômé de l'université, Christopher McCandless, 22 ans, est promis à un brillant avenir. Pourtant, tournant le dos à l'existence confortable et sans surprise qui l'attend, le jeune homme décide de prendre la route en laissant tout derrière lui. Des champs de blé du Dakota aux flots tumultueux du Colorado, en passant par les communautés hippies de Californie, Christopher va rencontrer des personnages hauts en couleur. Chacun, à sa manière, va façonner sa vision de la vie et des autres. Au bout de son voyage, Christopher atteindra son but ultime en s'aventurant seul dans les étendues sauvages de l'Alaska pour vivre en totale communion avec la nature.",
        "popularity": 23.665,
        "poster_path": "/a7c2Zeno5atkfvEAK6TcU5ZnpOd.jpg",
        "release_date": "2007-09-11",
        "title": "Into the Wild",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 9051
    },
    {
        "adult": false,
        "backdrop_path": "/xgDj56UWyeWQcxQ44f5A3RTWuSs.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14
        ],
        "id": 2062,
        "original_language": "en",
        "original_title": "Ratatouille",
        "overview": "Rémy est un jeune rat qui rêve de devenir un grand chef français. Ni l'opposition de sa famille, ni le fait d'être un rongeur dans une profession qui les déteste ne le démotivent. Rémy est prêt à tout pour vivre sa passion de la cuisine… et le fait d'habiter dans les égouts du restaurant ultra coté de la star des fourneaux, Auguste Gusteau, va lui en donner l'occasion ! Malgré le danger et les pièges, la tentation est grande de s'aventurer dans cet univers interdit. Ecartelé entre son rêve et sa condition, Rémy va découvrir le vrai sens de l'aventure, de l'amitié, de la famille… et comprendre qu'il doit trouver le courage d'être ce qu'il est : un rat qui veut être un grand chef…",
        "popularity": 97.662,
        "poster_path": "/iFcWBdTPeHQDS3OQxBcH3QaYXYv.jpg",
        "release_date": "2007-06-28",
        "title": "Ratatouille",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 15792
    },
    {
        "adult": false,
        "backdrop_path": "/7I6VUdPj6tQECNHdviJkUHD2u89.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 603692,
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "John Wick affronte ses adversaires les plus redoutables dans ce quatrième volet de la série.  De New York à Osaka, en passant par Paris et Berlin, John Wick mène un combat contre la Grande Table, la terrible organisation criminelle qui a mis sa tête à prix, en affrontant ses tueurs les plus dangereux...",
        "popularity": 397.571,
        "poster_path": "/jAMVKvqxdNbUY2YQWhCclYI6coP.jpg",
        "release_date": "2023-03-22",
        "title": "John Wick : Chapitre 4",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 4776
    },
    {
        "adult": false,
        "backdrop_path": "/3kzqUA3PGrOsTAeoXsY8VIMGy8L.jpg",
        "genre_ids": [
            16,
            35,
            18,
            10751,
            10749
        ],
        "id": 393559,
        "original_language": "fr",
        "original_title": "Ma vie de courgette",
        "overview": "Courgette n'a rien d'un légume, c'est un vaillant petit garçon. Il croit qu'il est seul au monde quand il perd sa mère. Mais c'est sans compter sur les rencontres qu'il va faire dans sa nouvelle vie au foyer pour enfants. Simon, Ahmed, Jujube, Alice et Béatrice : ils ont tous leurs histoires et elles sont aussi dures qu'ils sont tendres. Et puis il y a cette fille, Camille. Quand on a 10 ans, avoir une bande de copains, tomber amoureux, il y en a des choses à découvrir et à apprendre. Et pourquoi pas même, être heureux.",
        "popularity": 12.279,
        "poster_path": "/sDre2NQ5PYNagHww6bQTLO07MaS.jpg",
        "release_date": "2016-09-22",
        "title": "Ma vie de courgette",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1216
    },
    {
        "adult": false,
        "backdrop_path": "/3IkChGhTllTULVWht55UDFHTg6Q.jpg",
        "genre_ids": [
            16,
            9648,
            878,
            53
        ],
        "id": 4977,
        "original_language": "ja",
        "original_title": "パプリカ",
        "overview": "Dans le futur, un nouveau traitement psychothérapeutique nommé PT a été inventé. Grâce à une machine, le DC Mini, il est possible de rentrer dans les rêves des patients, et de les enregistrer afin de sonder les tréfonds de la pensée et de l'inconscient. Alors que le processus est toujours dans sa phase de test, l'un des prototypes du DC Mini est volé, créant un vent de panique au sein des scientifiques ayant développé cette petite révolution. Dans de mauvaises mains, une telle invention pourrait effectivement avoir des résultats dévastateurs. Le Dr. Atsuko Chiba, collègue de l'inventeur du DC Mini, le Dr. Tokita, décide, sous l'apparence de sa délurée alter-ego Paprika, de s'aventurer dans le monde des rêves pour découvrir qui s'est emparé du DC Mini et pour quelle raison. Elle découvre que l'assistant du Dr. Tokita, Himuro, a disparu…",
        "popularity": 17.941,
        "poster_path": "/kjOuNoHNy8IF6v6BHzfEbli1G3W.jpg",
        "release_date": "2006-10-01",
        "title": "Paprika",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2071
    },
    {
        "adult": false,
        "backdrop_path": "/eTvN54pd83TrSEOz6wbsXEJktCV.jpg",
        "genre_ids": [
            10752,
            28,
            53
        ],
        "id": 882569,
        "original_language": "en",
        "original_title": "Guy Ritchie's The Covenant",
        "overview": "Lors de sa dernière mission en Afghanistan, le sergent John Kinley fait équipe avec l'interprète Ahmed pour arpenter la région. Lorsque leur unité tombe dans une embuscade au cours d'une patrouille, Kinley et Ahmed sont les seuls survivants. Alors que des combattants ennemis les poursuivent, Ahmed risque sa vie pour transporter Kinley, blessé, en sécurité. De retour sur le sol américain, Kinley apprend qu'Ahmed et sa famille n'ont pas obtenu la possibilité d'entrer aux Etats-Unis comme promis. Déterminé à protéger son ami et à rembourser sa dette, Kinley retourne dans la zone de guerre pour récupérer Ahmed et les siens...",
        "popularity": 199.202,
        "poster_path": "/jZy73aPYrwwhuc37ALgnJUCaTnK.jpg",
        "release_date": "2023-04-19",
        "title": "The Covenant",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1733
    },
    {
        "adult": false,
        "backdrop_path": "/ysKahAEPP8h6MInuLjr0xuZOTjh.jpg",
        "genre_ids": [
            80,
            35
        ],
        "id": 107,
        "original_language": "en",
        "original_title": "Snatch",
        "overview": "Franky vient de voler un énorme diamant qu'il doit livrer à Avi, un mafieux new-yorkais. En chemin, il fait escale à Londres où il se laisse convaincre par Boris de parier sur un combat de boxe clandestin. Il ignore, bien sûr, qu'il s'agit d'un coup monté avec Vinny et Sol, afin de le délester de son magnifique caillou. Turkish et Tommy, eux, ont un problème avec leur boxeur, un gitan complètement fêlé qui refuse de se coucher au quatrième round comme prévu. C'est au tour d'Avi de débarquer, bien décidé à récupérer son bien, avec l'aide de Tony, une légende de la gâchette.",
        "popularity": 36.704,
        "poster_path": "/pP2o0ir6T1cnpZBdSuDN7MZwKGn.jpg",
        "release_date": "2000-09-01",
        "title": "Snatch, tu braques ou tu raques",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 8345
    },
    {
        "adult": false,
        "backdrop_path": "/ylqOWMU3nyZqg8hjJBG4EPdsGSk.jpg",
        "genre_ids": [
            53,
            27
        ],
        "id": 49797,
        "original_language": "ko",
        "original_title": "악마를 보았다",
        "overview": "Kyung-chul est un dangereux psychopathe qui tue pour le plaisir. Il commet des meurtres en série de manière que l'on ne peut même pas imaginer. Ses victimes sont aussi bien des femmes que des enfants. La police le traque depuis un long moment, mais est incapable de l'attraper. Un jour, Joo-yeon, la fille d'un Chef de police à la retraite devient sa proie et est retrouvé morte atrocement mutilée. Son fiancé Dae-hoon, un agent secret, décide de traquer le meurtrier lui-même. Il promet de tout faire pour se venger, même si cela signifie qu'il doit devenir un monstre lui-même.",
        "popularity": 26.973,
        "poster_path": "/wE0j7sqbpOJwGviVjETfixJSS2s.jpg",
        "release_date": "2010-08-12",
        "title": "J'ai rencontré le Diable",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2272
    },
    {
        "adult": false,
        "backdrop_path": "/3KyAxlakmcyHWqlcxgIxMQnSilk.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 142,
        "original_language": "en",
        "original_title": "Brokeback Mountain",
        "overview": "Été 1963, Wyoming. Deux jeunes cow-boys, Jack et Ennis, sont engagés pour garder ensemble un troupeau de moutons à Brokeback Mountain. Isolés au milieu d'une nature sauvage, leur complicité se transforme lentement en une attirance aussi irrésistible qu'inattendue. À la fin de la saison de transhumance, les deux hommes doivent se séparer. Ennis se marie avec sa fiancée, Alma, tandis que Jack épouse Lureen. Quand ils se revoient quatre ans plus tard, un seul regard suffit pour raviver l'amour né à Brokeback Mountain.",
        "popularity": 24.188,
        "poster_path": "/oyDdvdDZPcNNNOJJXNwmLDw9jGL.jpg",
        "release_date": "2005-09-10",
        "title": "Le Secret de Brokeback Mountain",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 6451
    },
    {
        "adult": false,
        "backdrop_path": "/nFtkNsd01rYZMQGyZJos2pagOHD.jpg",
        "genre_ids": [
            18,
            10749,
            80
        ],
        "id": 1280,
        "original_language": "ko",
        "original_title": "빈집",
        "overview": "Tae-suk arpente les rues à moto. Il laisse des prospectus sur les poignées de porte des maisons. Quand il revient quelques jours après, il sait ainsi lesquelles sont désertées. Il y pénètre alors, occupe ces lieux inhabités, sans jamais rien y voler. Il va même jusqu'à laver le linge, réparer les objets cassés qui l'entourent. Un jour, il s'installe dans une maison aisée où habite Sun-houa, une femme maltraitée par son mari. Dès qu'il découvre sa présence, il quitte les lieux. Pourtant, ne pouvant l'oublier, il revient sur ses pas pour l'emmener avec lui. Dès lors, d'appartements en villas, de demeures en maisons, le couple partage en silence la solitude qui les unit. Alors que tout le monde cherche à les séparer, un étrange lien aussi puissant qu'invisible semble les confondre.",
        "popularity": 20.675,
        "poster_path": "/tbOplbFYVrmslSv190n35MmGpSb.jpg",
        "release_date": "2004-10-15",
        "title": "Locataires",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1044
    },
    {
        "adult": false,
        "backdrop_path": "/npoUm3stzUM2lR46ClLDwBZDaeZ.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 262,
        "original_language": "en",
        "original_title": "The King of Comedy",
        "overview": "Un comique méconnu, pour se faire reconnaître, enlève le présentateur d'un show télévisé et n'accepte de le libérer qu'à la condition de participer à son spectacle.",
        "popularity": 20.938,
        "poster_path": "/zmb3PE0GEepF7wGHoCuazh4r90.jpg",
        "release_date": "1982-12-18",
        "title": "La Valse des pantins",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2033
    },
    {
        "adult": false,
        "backdrop_path": "/1KgXxv6tHXOnakqYvMPvFwYKWiw.jpg",
        "genre_ids": [
            12,
            35,
            14
        ],
        "id": 762,
        "original_language": "en",
        "original_title": "Monty Python and the Holy Grail",
        "overview": "Le roi Arthur et les Chevaliers de la Table Ronde se lancent à la conquête du Graal, chevauchant de fantômatiques montures dans un bruitage de noix de coco cognées. La petite troupe va devoir passer mille épreuves, dont un chevalier à trois têtes, des jouvencelles en chaleur, voire même un terrible lapin tueur.",
        "popularity": 25.228,
        "poster_path": "/5y6rOuxx9TnhL0HSx6v6BdloCm6.jpg",
        "release_date": "1975-05-25",
        "title": "Monty Python : Sacré Graal !",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 5311
    },
    {
        "adult": false,
        "backdrop_path": "/9T8sj5io4SGCBTHsk5H8LGcfKVe.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 419478,
        "original_language": "en",
        "original_title": "Midnight Sun",
        "overview": "Katie Price est une jolie jeune fille de 17 ans, intelligente et douée pour le chant et la guitare. Elle est atteinte d'une maladie rare qui lui interdit d'être touchée par le moindre UV. Déterminée à ne pas être vaincue par sa maladie, Katie profite de la nuit pour sortir et jouer de sa musique dans une station de train local. D'une rencontre fortuite avec Charlie Reed va naître un long été idyllique…",
        "popularity": 28.154,
        "poster_path": "/1TH4PwfcRPenIxce3BREDIV4mBd.jpg",
        "release_date": "2018-03-22",
        "title": "Midnight Sun",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3241
    },
    {
        "adult": false,
        "backdrop_path": "/wW7Wt5bXzPy4VOEE4LTIUDyDgBo.jpg",
        "genre_ids": [
            12,
            14,
            28
        ],
        "id": 22,
        "original_language": "en",
        "original_title": "Pirates of the Caribbean: The Curse of the Black Pearl",
        "overview": "Dans la mer des Caraïbes, au XVIIe siècle, Jack Sparrow, flibustier gentleman, voit sa vie idyllique basculer le jour où son ennemi, le perfide capitaine Barbossa, lui vole son bateau, le Black Pearl, puis attaque la ville de Port Royal, enlevant au passage la très belle fille du gouverneur, Elizabeth Swann. L'ami d'enfance de celle-ci, Will Turner, se joint à Jack pour se lancer aux trousses du capitaine. Mais Will ignore qu'une malédiction frappe Barbossa et ses pirates. Lorsque la lune brille, ils se transforment en morts-vivants. Leur terrible sort ne prendra fin que le jour où le fabuleux trésor qu'ils ont amassé sera restitué…",
        "popularity": 101.844,
        "poster_path": "/jFmc6zbnx6mSoxejECYvdi3IHIs.jpg",
        "release_date": "2003-07-09",
        "title": "Pirates des Caraïbes : La Malédiction du Black Pearl",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 19303
    },
    {
        "adult": false,
        "backdrop_path": "/uAfhsySkr1UzQg1zdg3dZQRz9Fd.jpg",
        "genre_ids": [
            16,
            10751,
            35
        ],
        "id": 10193,
        "original_language": "en",
        "original_title": "Toy Story 3",
        "overview": "Woody, Buzz l'Éclair et le reste des jouets reviennent dans une toute nouvelle aventure avec quelques nouveaux visages dont Ken et Barbie, le hérisson La Brosse et l'ours Lotso. Andy se prépare à partir pour l'université et Woody, Buzz, Jessie et les autres jouets se demandent ce qu'ils vont devenir. Quand ils arrivent à Sunnyside, c'est le début d'une nouvelle aventure.",
        "popularity": 69.082,
        "poster_path": "/cff59NLA6fRU3tt017zKSWe2yUX.jpg",
        "release_date": "2010-06-16",
        "title": "Toy Story 3",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 13832
    },
    {
        "adult": false,
        "backdrop_path": "/hGr0FrLI74vqpBWTBOPloDBwOAK.jpg",
        "genre_ids": [
            18,
            35
        ],
        "id": 705861,
        "original_language": "en",
        "original_title": "Hustle",
        "overview": "Après avoir repéré à l'étranger un joueur de basket phénoménal, mais au passé houleux, un recruteur en perte de vitesse (Adam Sandler) décide de le faire venir aux États-Unis sans avoir consulté son équipe. Contre toute attente, il va avoir l'occasion de prouver que sa recrue est digne de la NBA.",
        "popularity": 27.196,
        "poster_path": "/77YXITmwal3dPCLNzLDIiFMaa7U.jpg",
        "release_date": "2022-06-03",
        "title": "Le Haut du panier",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2207
    },
    {
        "adult": false,
        "backdrop_path": "/h1vBJ0uN4QCbBb5WVKxmtfTrHoY.jpg",
        "genre_ids": [
            37
        ],
        "id": 11697,
        "original_language": "en",
        "original_title": "The Man Who Shot Liberty Valance",
        "overview": "Stoddard, un jeune avocat, vient de s'installer dans l'Ouest, dans une région qui vit sous la terreur du bandit Liberty Valance. Celui-ci ne tarde pas à s'en prendre à Stoddard, sauvé in extremis du lynchage par Tom, le seul à qui Valance ne fait pas peur. Stoddard tente d'arrêter Valance, mais se rend vite compte qu'il ne se laissera jamais arrêter vivant.",
        "popularity": 18.127,
        "poster_path": "/6jTZ83zj8Uu2qVflOLmqbwWlu7v.jpg",
        "release_date": "1962-04-13",
        "title": "L'Homme qui tua Liberty Valance",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1008
    },
    {
        "adult": false,
        "backdrop_path": "/dalc1aMjUNIvTOVt5ZHt2zv6cm0.jpg",
        "genre_ids": [
            10751,
            35,
            16,
            12
        ],
        "id": 11621,
        "original_language": "ja",
        "original_title": "紅の豚",
        "overview": "Dans l'entre-deux-guerres quelque part en Italie, le pilote Marco, aventurier solitaire, vit dans le repaire qu'il a établi sur une île déserte de l'Adriatique. À bord de son splendide hydravion rouge, il vient en aide aux personnes en difficulté.",
        "popularity": 22.486,
        "poster_path": "/obcAsWuAIjWkoK6Yr5Gu1SYIH5A.jpg",
        "release_date": "1992-07-18",
        "title": "Porco Rosso",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2935
    },
    {
        "adult": false,
        "backdrop_path": "/fxXwBvym6DkqkO4AWn8OjwMfMc1.jpg",
        "genre_ids": [
            35
        ],
        "id": 9421,
        "original_language": "fr",
        "original_title": "Le Dîner de cons",
        "overview": "Tous les mercredis, Pierre Brochant et ses amis organisent un dîner où chacun doit amener un con. Celui qui a trouvé le plus spectaculaire est déclaré vainqueur. Ce soir, Brochant exulte, il est sûr d'avoir trouvé la perle rare, un con de classe mondiale: François Pignon, comptable au ministère des Finances et passionné de modèles réduits en allumettes. Ce qu'il ignore c'est que Pignon est passé maître dans l'art de déclencher des catastrophes.",
        "popularity": 13.3,
        "poster_path": "/7ukFDHExWul2Zz3L0OH8CaZCp2Z.jpg",
        "release_date": "1998-04-15",
        "title": "Le Dîner de cons",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1755
    },
    {
        "adult": false,
        "backdrop_path": "/jYEW5xZkZk2WTrdbMGAPFuBqbDc.jpg",
        "genre_ids": [
            878,
            12
        ],
        "id": 438631,
        "original_language": "en",
        "original_title": "Dune",
        "overview": "L'histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement. Car, s'il veut préserver l'avenir de sa famille et de son peuple, il devra se rendre sur Dune, la planète la plus dangereuse de l'Univers. Mais aussi la seule à même de fournir la ressource la plus précieuse capable de décupler la puissance de l'Humanité. Tandis que des forces maléfiques se disputent le contrôle de cette planète, seuls ceux qui parviennent à dominer leur peur pourront survivre…",
        "popularity": 89.61,
        "poster_path": "/qpyaW4xUPeIiYA5ckg5zAZFHvsb.jpg",
        "release_date": "2021-09-15",
        "title": "Dune",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 9498
    },
    {
        "adult": false,
        "backdrop_path": "/4bwsjrKcmIxHcKJlbxrqGkLVbvL.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 1366,
        "original_language": "en",
        "original_title": "Rocky",
        "overview": "Dans les quartiers populaires de Philadelphie, Rocky Balboa collecte des dettes non payées pour Tony Gazzo, un usurier, et dispute de temps à autre, pour quelques dizaines de dollars, des combats de boxe sous l'appellation de 'l'étalon italien'. Déçu de le voir gâcher son talent, son entraîneur Mickey le laisse tomber, tandis qu'Apollo Creed, champion en titre, cherche un nouveau challenger...",
        "popularity": 63.637,
        "poster_path": "/dqgVSjONm97j4kGYWkNyklRAIJ0.jpg",
        "release_date": "1976-11-21",
        "title": "Rocky",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 7176
    },
    {
        "adult": false,
        "backdrop_path": "/qb6WoLJ9YtfhV7pgsTfUDlRYaCH.jpg",
        "genre_ids": [
            18
        ],
        "id": 84892,
        "original_language": "en",
        "original_title": "The Perks of Being a Wallflower",
        "overview": "Au lycée où il vient d'arriver, on trouve Charlie bizarre. Sa sensibilité et ses goûts sont en décalage avec ceux de ses camarades de classe. Pour son prof de Lettres, c'est sans doute un prodige, pour les autres, c'est juste un « loser ». En attendant, il reste en marge – jusqu'au jour où deux terminales, Patrick et la jolie Sam, le prennent sous leur aile. Grâce à eux, il va découvrir la musique, les fêtes, le sexe… pour Charlie, un nouveau monde s'offre à lui.",
        "popularity": 36.132,
        "poster_path": "/xg0TYyzQMg5PnSaK5A7LU6VUvoy.jpg",
        "release_date": "2012-09-20",
        "title": "Le Monde de Charlie",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 9874
    },
    {
        "adult": false,
        "backdrop_path": "/qU4HDNKv7gjdlvMu74r70rISPwn.jpg",
        "genre_ids": [
            12,
            16,
            35,
            10751
        ],
        "id": 10315,
        "original_language": "en",
        "original_title": "Fantastic Mr. Fox",
        "overview": "M. Fox, le plus rusé des voleurs de poules, sa femme, Mme Fox, Ash, son fils, le cousin Kristofferson et tous les autres animaux de la forêt défient trois odieux fermiers. Ils vont vivre la plus périlleuse et délirante des aventures.",
        "popularity": 34.577,
        "poster_path": "/2l6PJ6ux9b7RqQuQOUg7eL29PLW.jpg",
        "release_date": "2009-10-23",
        "title": "Fantastic Mr. Fox",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 4837
    },
    {
        "adult": false,
        "backdrop_path": "/cpqWIjNrAzLIBUHhRWB79LJ39lr.jpg",
        "genre_ids": [
            18,
            10402,
            36
        ],
        "id": 277216,
        "original_language": "en",
        "original_title": "Straight Outta Compton",
        "overview": "En 1987, cinq jeunes hommes exprimaient leur frustration et leur colère pour dénoncer les conditions de vie de l'endroit le plus dangereux de l'Amérique, avec l'arme la plus puissante qu'ils possédaient : leur musique. Voici la véritable histoire de ces rebelles, armés uniquement de leur parole, de leur démarche assurée et de leur talent brut, qui ont résisté aux autorités qui les opprimaient. Ils ont ainsi formé le groupe de rappeur des N.W.A. en dénonçant la réalité de leur quartier. Leur voix a alors déclenché une révolution sociale qui résonne encore aujourd'hui.",
        "popularity": 27.083,
        "poster_path": "/kyBVUPrCM2QSCZw6paGs0MLAufL.jpg",
        "release_date": "2015-08-11",
        "title": "N.W.A : Straight Outta Compton",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 3613
    },
    {
        "adult": false,
        "backdrop_path": "/fGbM2cqPauRu7ALFPSTDBH9FgpU.jpg",
        "genre_ids": [
            80,
            9648,
            53
        ],
        "id": 2118,
        "original_language": "en",
        "original_title": "L.A. Confidential",
        "overview": "Los Angeles, années 50. Alors que la ville est sujette à une vague de règlements de comptes après la chute du caïd Mickey Cohen, la police criminelle se mobilise toute entière sur l'affaire de L'Oiseau de nuit, un massacre au cours duquel est tombé un ancien flic. Trois inspecteurs au style radicalement différent vont être amenés à coopérer pour démêler les fils d'une histoire plus compliquée qu'il n'y paraît…",
        "popularity": 23.79,
        "poster_path": "/jTKTh4wmxV47gSzAJo1EdylD3Af.jpg",
        "release_date": "1997-09-19",
        "title": "L.A. Confidential",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 4486
    },
    {
        "adult": false,
        "backdrop_path": "/zZiflZpuaZerugtfdyXcg6dcylD.jpg",
        "genre_ids": [
            18,
            16,
            10752
        ],
        "id": 149870,
        "original_language": "ja",
        "original_title": "風立ちぬ",
        "overview": "Inspiré par le fameux concepteur d'avions Giovanni Caproni, Jiro rêve de voler et de dessiner de magnifiques avions. Mais sa mauvaise vue l'empêche de devenir pilote, et il se fait engager dans le département aéronautique d'une importante entreprise d'ingénierie en 1927. Son génie l'impose rapidement comme l'un des plus grands ingénieurs du monde. Le Vent se lève raconte une grande partie de sa vie et dépeint les événements historiques clés qui ont profondément influencé le cours de son existence, dont le séisme de Kanto en 1923, la Grande Dépression, l'épidémie de tuberculose et l'entrée en guerre du Japon. Jiro connaîtra l'amour avec Nahoko et l'amitié avec son collègue Honjo. Inventeur extraordinaire, il fera entrer l'aviation dans une ère nouvelle.",
        "popularity": 27.665,
        "poster_path": "/bQcNJ8inwZuxAZ965jRCjjCti0D.jpg",
        "release_date": "2013-07-20",
        "title": "Le vent se lève",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2683
    },
    {
        "adult": false,
        "backdrop_path": "/msCHK5Kh1YbdZ0zPJ2nzPUhhSN9.jpg",
        "genre_ids": [
            14,
            18,
            9648
        ],
        "id": 141,
        "original_language": "en",
        "original_title": "Donnie Darko",
        "overview": "Donnie Darko est un adolescent de seize ans pas comme les autres. Intelligent et doté d'une grande imagination, il a pour ami Frank, une créature que lui seul peut voir et entendre. Lorsque Donnie survit par miracle à un accident, Frank lui propose un étrange marché. La fin du monde approche et ce dernier doit accomplir sa destinée. Des événements bizarres surviennent dans la petite ville tranquille, mais Donnie sait que derrière tout cela se cachent d'inavouables secrets. Frank l'aidera à les mettre à jour, semant ainsi le trouble au sein de la communauté.",
        "popularity": 40.243,
        "poster_path": "/z3gIuT4e4tjCKYEYJChcBI44U21.jpg",
        "release_date": "2001-10-24",
        "title": "Donnie Darko",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 11566
    },
    {
        "adult": false,
        "backdrop_path": "/nBxP0PY7yGfId9E12yo5R7x27ZQ.jpg",
        "genre_ids": [
            18
        ],
        "id": 336804,
        "original_language": "tr",
        "original_title": "Mustang",
        "overview": "C'est le début de l'été. Dans un village reculé de Turquie, Lale et ses quatre sœurs rentrent de l'école en jouant avec des garçons et déclenchent un scandale aux conséquences inattendues. La maison familiale se transforme progressivement en prison, les cours de pratiques ménagères remplacent l'école et les mariages commencent à s'arranger. Les cinq sœurs, animées par un même désir de liberté, détournent les limites qui leur sont imposées.",
        "popularity": 12.734,
        "poster_path": "/vmjjJCsGSuLoF4G6UGDirjOipsN.jpg",
        "release_date": "2015-06-17",
        "title": "Mustang",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1285
    },
    {
        "adult": false,
        "backdrop_path": "/geb9rshjxNqeLQAc8CS8VRzFDlF.jpg",
        "genre_ids": [
            14,
            16,
            18,
            878
        ],
        "id": 14069,
        "original_language": "ja",
        "original_title": "時をかける少女",
        "overview": "Makoto est une jeune lycéenne comme les autres, un peu garçon manqué, pas trop intéressée par l'école et absolument pas concernée par le temps qui passe ! Jusqu'au jour où elle reçoit un don particulier : celui de pouvoir traverser le temps. Améliorer ses notes, aider des idylles naissantes, manger à répétition ses plats préférés, tout devient alors possible pour Makoto. Mais influer sur le cours des choses est un don parfois bien dangereux, surtout lorsqu'il faut apprendre à vivre sans !",
        "popularity": 18.745,
        "poster_path": "/pyzz8M06RTzzeSrY85opuL88QyI.jpg",
        "release_date": "2006-07-15",
        "title": "La Traversée du temps",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1856
    },
    {
        "adult": false,
        "backdrop_path": "/7TlGXrB4WQ3wbpOCUQnBXseCuOl.jpg",
        "genre_ids": [
            18,
            14,
            10749
        ],
        "id": 144,
        "original_language": "de",
        "original_title": "Der Himmel über Berlin",
        "overview": "Deux anges, Daniel et Cassiel, descendent du ciel à Berlin. Ils peuvent côtoyer les humains sans être vus... Ils rencontrent un ancien ange devenu humain qui peut sentir leur présence et leur communique sa foi dans l'humanité. Daniel fait une autre rencontre qui sera pour lui décisive puisqu'il tombe amoureux...",
        "popularity": 15.633,
        "poster_path": "/4Z1qNboPUIAC22WpZgajioZgJDz.jpg",
        "release_date": "1987-05-17",
        "title": "Les Ailes du désir",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1155
    },
    {
        "adult": false,
        "backdrop_path": "/c3OHQncTAnKFhdOTX7D3LTW6son.jpg",
        "genre_ids": [
            28,
            80,
            18,
            53
        ],
        "id": 49026,
        "original_language": "en",
        "original_title": "The Dark Knight Rises",
        "overview": "Afin que l'image de l'ex-procureur Harvey Dent reste un modèle du genre pour les citoyens de Gotham City, Batman a endossé les crimes de ce dernier et a été chassé de la ville par les autorités.  Huit ans plus tard, alors que Gotham City est de nouveau sûre, le commissaire Gordon tombe sur un complot qui vise à détruire la ville de l'intérieur.  Il fait appel à Batman. Ce dernier devra faire face à la mystérieuse Selina Kyle et à Bane, un adversaire mortel, qui veut mettre en pièce le symbole Batman.",
        "popularity": 59.374,
        "poster_path": "/ApcGBERN0p9I0nDOIwJeEmpnLU5.jpg",
        "release_date": "2012-07-17",
        "title": "The Dark Knight Rises",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 21408
    },
    {
        "adult": false,
        "backdrop_path": "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
        "genre_ids": [
            80,
            18,
            53
        ],
        "id": 553,
        "original_language": "en",
        "original_title": "Dogville",
        "overview": "Dans les années trente, des coups de feu retentissent un soir dans Dogville, une petite ville des Rocheuses. Grace, une belle femme terrifiée, monte en courant un chemin de montagne où elle fait la rencontre de Tom, un jeune habitant de la bourgade. Elle lui explique qu'elle est traquée par des gangsters et que sa vie est en danger. Encouragée par Tom, la population locale consent à la cacher, en échange de quoi Grace accepte de travailler pour elle. Lorsqu'un avis de recherche est lancé contre la jeune femme, les habitants de Dogville s'estiment en droit d'exiger une compensation, vu le risque qu'ils courent à l'abriter. Mais la pauvre Grace garde en elle un secret fatal qui leur fera regretter leur geste…",
        "popularity": 17.737,
        "poster_path": "/tni05bilNb6zOqI5IqpTStfnDZH.jpg",
        "release_date": "2003-05-19",
        "title": "Dogville",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 2210
    },
    {
        "adult": false,
        "backdrop_path": "/cR8pWXPAUnGMXPc7MO3RVWQovjx.jpg",
        "genre_ids": [
            80,
            53,
            28
        ],
        "id": 13855,
        "original_language": "ko",
        "original_title": "추격자",
        "overview": "Joong-ho, ancien flic devenu proxénète, reprend du service lorsqu'il se rend compte que ses filles disparaissent les unes après les autres. Très vite, il réalise qu'elles avaient toutes rencontré le même client, identifié par les derniers chiffres de son numéro de portable. Joong-ho se lance alors dans une chasse à l'homme, persuadé qu'il peut encore sauver Mi-jin, la dernière victime du tueur.",
        "popularity": 14.437,
        "poster_path": "/31CdrSxIdMoGldfPnRp3AV8HFME.jpg",
        "release_date": "2008-02-14",
        "title": "The Chaser",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1172
    },
    {
        "adult": false,
        "backdrop_path": "/yw55hiqnDOwZiXpkraXu114rmGz.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 562,
        "original_language": "en",
        "original_title": "Die Hard",
        "overview": "John McClane, policier new-yorkais, est venu rejoindre pour les fêtes de Noël sa femme Holly, dont il est séparé depuis plusieurs mois, dans le secret espoir d'une réconciliation. Celle-ci est cadre dans une multinationale japonaise, la Nakatomi Corporation. Son patron, M. Takagi, donne une soirée en l'honneur de ses employés, à laquelle assiste McClane. Tandis qu'il s'isole pour téléphoner, un commando investit l'immeuble et coupe toutes les communications avec l'extérieur.",
        "popularity": 41.707,
        "poster_path": "/vav96OZPkzbZhCj3ahhnYhdwLw0.jpg",
        "release_date": "1988-07-15",
        "title": "Piège de cristal",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 10246
    },
    {
        "adult": false,
        "backdrop_path": "/3hvygFCUYB0A4Q1uu6DJ5M1GmpU.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 20126,
        "original_language": "it",
        "original_title": "Profondo rosso",
        "overview": "Une conférencière télépathe est sauvagement assassinée. Peu avant sa mort, elle avait ressentie une présence meurtrière très proche. C'est le début d'une série de crimes inexplicables.",
        "popularity": 17.778,
        "poster_path": "/lZsz9eA4Z2uQ12mTyg3pxVO5PzD.jpg",
        "release_date": "1975-03-07",
        "title": "Les Frissons de l'angoisse",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1320
    },
    {
        "adult": false,
        "backdrop_path": "/w7Z4BVMin49voNN61IUWyN9DopV.jpg",
        "genre_ids": [
            18,
            10749
        ],
        "id": 86837,
        "original_language": "fr",
        "original_title": "Amour",
        "overview": "Georges et Anne sont octogénaires, ce sont des gens cultivés, professeurs de musique à la retraite. Leur fille, également musicienne, vit à l'étranger avec sa famille. Un jour, Anne est victime d'une petite attaque cérébrale. Lorsqu'elle sort de l'hôpital et revient chez elle, elle est paralysée d'un côté. L'amour qui unit ce vieux couple va être mis à rude épreuve.",
        "popularity": 13.957,
        "poster_path": "/A0VPf9B3YhFlf7SHi3gBNBb3GFt.jpg",
        "release_date": "2012-09-20",
        "title": "Amour",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 1487
    },
    {
        "adult": false,
        "backdrop_path": "/i1oWUGVDNBhGBykcCRBlX326udb.jpg",
        "genre_ids": [
            80,
            18,
            36,
            53
        ],
        "id": 117,
        "original_language": "en",
        "original_title": "The Untouchables",
        "overview": "À Chicago en 1930, à l'époque de la prohibition, le trafic d'alcool bat son plein et permet à des truands de bâtir des fortunes colossales. Eliot Ness, jeune policier frais émoulu du FBI, est chargé de démanteler un réseau de contrebande d'alcool. L'ennemi est facilement identifiable : Al Capone, inattaquable officiellement, est pourtant impliqué dans les affaires les plus sordides. La première mission de Ness, maladroitement conduite, se solde par un échec humiliant. Loin de se laisser décourager par ce premier affront, Ness décide de s'entourer de personnes de confiance. Il recrute ainsi Jim Malone, un flic qui connaît bien le monde des truands…",
        "popularity": 27.939,
        "poster_path": "/xrdMy48NrJSJYRplKfuQT0sDfSI.jpg",
        "release_date": "1987-06-03",
        "title": "Les Incorruptibles",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 5203
    },
    {
        "adult": false,
        "backdrop_path": "/9n2tJBplPbgR2ca05hS5CKXwP2c.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            14,
            35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "Alors qu'ils tentent de réparer une canalisation souterraine, Mario et son frère Luigi, tous deux plombiers, se retrouvent plongés dans un nouvel univers féerique à travers un mystérieux conduit. Mais lorsque les deux frères sont séparés, Mario s'engage dans une aventure trépidante pour retrouver Luigi. Dans sa quête, il peut compter sur l'aide du champignon Toad, habitant du Royaume Champignon, et les conseils avisés, en matière de techniques de combat, de la Princesse Peach, guerrière déterminée à la tête du Royaume. C'est ainsi que Mario réussit à mobiliser ses propres forces pour aller au bout de sa mission.",
        "popularity": 386.241,
        "poster_path": "/ahMxyHMSJXingQr4yJBMzMU9k42.jpg",
        "release_date": "2023-04-05",
        "title": "Super Mario Bros., le film",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 6918
    }
]



export default movieList;