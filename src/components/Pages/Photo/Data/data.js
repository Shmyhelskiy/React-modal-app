const wondersOfTheWorld = [
  {
    name: "Great Pyramid of Giza",
    create: "2580–2560 BC is.",
    location: "Giza, Egypt",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Kheops-Pyramid.jpg/274px-Kheops-Pyramid.jpg",
  },
  {
    name: "Hanging Gardens of Semiramis",
    create: "Not established",
    location: "Iraq",
    image:
      "https://historyurok.com.ua/wp-content/uploads/2018/04/Rekonstruktsiya.jpg",
  },
  {
    name: "Statue of Zeus",
    create: "430s BC is.",
    location: "Greece",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    name: "Temple of Artemis",
    create: "Not established",
    location: "Turkey",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Miniaturk_009.jpg/250px-Miniaturk_009.jpg",
  },
  {
    name: "Mausoleum in Halicarnassus",
    create: "351 BC is..",
    location: "Halicarnassus",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Mausoleum_at_Halicarnassus_by_Ferdinand_Knab_%281886%29_cropped.png/280px-Mausoleum_at_Halicarnassus_by_Ferdinand_Knab_%281886%29_cropped.png",
  },
  {
    name: "Colossus of Rhodes",
    create: "Not established",
    location: "Greece",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/El_Coloso_De_Rodas.jpg/250px-El_Coloso_De_Rodas.jpg",
  },
  {
    name: "Alexandria lighthouse",
    create: "279 BC is.",
    location: "Ancient Egypt, Alexandria",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Pharos_of_Alexandria%2C_reconstruction_2021.jpg/300px-Pharos_of_Alexandria%2C_reconstruction_2021.jpg",
  },
];
export default wondersOfTheWorld;
