const listings = [
  {
    title: 'Home Goods',
    boldTitle: true,
    showAddToFav: true,
    listings: [
      {
        id: 0,
        photo: require('./photos/listing1.png'),
        title: 'Sail skipper',
        borough: 'Brooklyn',
        address: '545 Prospect Place',
        coordinate: [ 40.765298, -73.976022 ],
        category: 'Books',
        stars: '29'
      },
      {
        id: 1,
        photo: require('./photos/listing2.png'),
        type: 'CHEESE TASTING',
        title: 'Funny cheesemonger',
        borough: 'Manhattan',
        coordinate: [ 40.791939, -73.963466 ],
        category: 'furniture',
        stars: '4'
      },
      {
        id: 2,
        photo: require('./photos/listing3.png'),
        type: 'Brooklyn',
        title: 'Cycle through side streets with a local',
        borough: 'Queens',
        address: '545 Prospect Place',
        coordinate: [ 40.747067, -74.004496 ],
        category: 'Home Goods',
        stars: '70'
      },
      {
        id: 3,
        photo: require('./photos/listing4.png'),
        type: 'BIKE RIDE',
        title: 'Cycling for your Seoul',
        borough: 'Manhattan',
        address: '545 Prospect Place',
        category: 'Home Goods',
        coordinate: [ 40.764838, -73.981193 ],
        stars: '30'
      },
      {
        id: 4,
        photo: require('./photos/listing5.png'),
        type: 'Brooklyn',
        title: 'Surf',
        borough: 'Queens',
        address: '545 Prospect Place',
        coordinate: [ 40.764466, -73.974488 ],
        category: 'Books',
        stars: '66'
      },
      {
        id: 5,
        photo: require('./photos/listing6.png'),
        type: 'DRAWING CLASS',
        title: 'A drawing/walking tour in Montmartre',
        borough: 'Manhattan',
        address: '545 Prospect Place',
        category: 'Home Goods',
        coordinate: [ 40.764656, -73.980907 ],
        stars: '15'
      }
    ]
  },
  {
    title: 'Furniture',
    boldTitle: true,
    showAddToFav: true,
    listings: [
      {
        id: 6,
        photo: require('./photos/listing7.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'BALIAN TREEHOUSE with beautiful pool',
        borough: 'Queens',
        address: '545 Prospect Place',
        coordinate: [ 40.765298, -73.976022 ],
        category: 'Books',
        stars: '1'
      },
      {
        id: 7,
        photo: require('./photos/listing8.png'),
        type: 'ENTIRE VILLA - 3 BEDS',
        title: 'Casa de Rio - Beach and Mountains',
        borough: 'Brooklyn',
        address: '545 Prospect Place',
        coordinate: [ 40.748418, -73.985702 ],
        category: 'Books',
        stars: '5'
      },
      {
        id: 8,
        photo: require('./photos/listing9.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'Cozy A-Frame Cabin in the Redwoods',
        borough: 'Manhattan',
        address: '545 Prospect Place',
        category: 'Home Goods',
        coordinate: [ 40.762389, -73.973817 ],
        stars: '4'
      },
      {
        id: 9,
        photo: require('./photos/listing10.png'),
        type: 'ENTIRE GUESTHOUSE - 1 BED',
        title: '1880s Carriage House in Curtis Park',
        borough: 'Queens',
        address: '545 Prospect Place',
        category: 'Clothes',
        coordinate: [ 40.762389, -73.973817 ],
        stars: '5'
      },
      {
        id: 10,
        photo: require('./photos/listing11.png'),
        type: 'ENTIRE BOAT - 2 BEDS',
        title: 'A Pirate\'s Life For Me Houseboat!',
        borough: 'Brooklyn',
        address: '545 Prospect Place',
        category: 'Home Goods',
        coordinate: [ 40.763241, -73.975782 ],
        stars: '3'
      }
    ]
  },
  {
    title: 'Books',
    boldTitle: true,
    showAddToFav: true,
    listings: [
      {
        id: 11,
        photo: require('./photos/listing12.png'),
        type: 'RESERVATION',
        title: 'G\'raj Mahal',
        borough: 'Queens',
        address: '545 Prospect Place',
        category: 'Clothes',
        coordinate: [ 40.771156, -73.979802 ],
        stars: '0'
      },
      {
        id: 12,
        photo: require('./photos/listing13.png'),
        type: 'RESERVATION',
        title: 'Le Fond',
        borough: 'Queens',
        address: '545 Prospect Place',
        coordinate: [ 40.761432, -73.977645 ],
        category: 'Books',
        stars: '0'
      },
      {
        id: 13,
        photo: require('./photos/listing14.png'),
        type: 'RESERVATION',
        title: 'The Glass Onion',
        borough: 'Brooklyn',
        address: '545 Prospect Place',
        category: 'Home Goods',
        coordinate: [ 40.761432, -73.977645 ],
        stars: '0'
      },
      {
        id: 14,
        photo: require('./photos/listing15.png'),
        type: 'RESERVATION',
        title: 'The Waiting Room',
        borough: 'Manhattan',
        address: '545 Prospect Place',
        category: 'Misc',
        coordinate: [ 40.758889, -73.985125 ],
        stars: '0'
      },
      {
        id: 15,
        photo: require('./photos/listing16.png'),
        type: 'RESERVATION',
        title: 'Bar Boulud',
        borough: 'Brooklyn',
        address: '545 Prospect Place',
        coordinate: [ 40.765298, -73.976022 ],
        category: 'Books',
        stars: '0'
      },
    ]
  },
  {
    title: 'Music',
    boldTitle: true,
    showAddToFav: true,
    listings: [
      {
        id: 16,
        photo: require('./photos/listing7.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'BALIAN TREEHOUSE with beautiful pool',
        borough: 'Queens',
        address: '545 Prospect Place',
        coordinate: [ 40.765298, -73.976022 ],
        category: 'Books',
        stars: '1'
      },
      {
        id: 17,
        photo: require('./photos/listing8.png'),
        type: 'ENTIRE VILLA - 3 BEDS',
        title: 'Casa de Rio - Beach and Mountains',
        borough: 'Brooklyn',
        address: '545 Prospect Place',
        coordinate: [ 40.748418, -73.985702 ],
        category: 'Books',
        stars: '5'
      },
      {
        id: 18,
        photo: require('./photos/listing9.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'Cozy A-Frame Cabin in the Redwoods',
        borough: 'Manhattan',
        address: '545 Prospect Place',
        category: 'Home Goods',
        coordinate: [ 40.762389, -73.973817 ],
        stars: '4'
      },
      {
        id: 19,
        photo: require('./photos/listing10.png'),
        type: 'ENTIRE GUESTHOUSE - 1 BED',
        title: '1880s Carriage House in Curtis Park',
        borough: 'Queens',
        address: '545 Prospect Place',
        category: 'Clothes',
        coordinate: [ 40.762389, -73.973817 ],
        stars: '5'
      },
      {
        id: 20,
        photo: require('./photos/listing11.png'),
        type: 'ENTIRE BOAT - 2 BEDS',
        title: 'A Pirate\'s Life For Me Houseboat!',
        borough: 'Brooklyn',
        address: '545 Prospect Place',
        category: 'Home Goods',
        coordinate: [ 40.763241, -73.975782 ],
        stars: '3'
      }
    ]
  },
  {
    title: 'Clothes',
    boldTitle: true,
    showAddToFav: true,
    listings: [
      {
        id: 21,
        photo: require('./photos/listing7.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'BALIAN TREEHOUSE with beautiful pool',
        borough: 'Queens',
        address: '545 Prospect Place',
        coordinate: [ 40.765298, -73.976022 ],
        category: 'Books',
        stars: '1'
      },
      {
        id: 22,
        photo: require('./photos/listing8.png'),
        type: 'ENTIRE VILLA - 3 BEDS',
        title: 'Casa de Rio - Beach and Mountains',
        borough: 'Brooklyn',
        address: '545 Prospect Place',
        coordinate: [ 40.748418, -73.985702 ],
        category: 'Books',
        stars: '5'
      },
      {
        id: 23,
        photo: require('./photos/listing9.png'),
        type: 'ENTIRE HOUSE - 1 BED',
        title: 'Cozy A-Frame Cabin in the Redwoods',
        borough: 'Manhattan',
        address: '545 Prospect Place',
        category: 'Home Goods',
        coordinate: [ 40.762389, -73.973817 ],
        stars: '4'
      },
      {
        id: 24,
        photo: require('./photos/listing10.png'),
        type: 'ENTIRE GUESTHOUSE - 1 BED',
        title: '1880s Carriage House in Curtis Park',
        borough: 'Queens',
        address: '545 Prospect Place',
        category: 'Clothes',
        coordinate: [ 40.762389, -73.973817 ],
        stars: '5'
      },
      {
        id: 25,
        photo: require('./photos/listing11.png'),
        type: 'ENTIRE BOAT - 2 BEDS',
        title: 'A Pirate\'s Life For Me Houseboat!',
        borough: 'Brooklyn',
        address: '545 Prospect Place',
        category: 'Home Goods',
        coordinate: [ 40.763241, -73.975782 ],
        stars: '3'
      }
    ]
  }
]

export default listings;