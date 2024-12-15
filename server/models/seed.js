const mongoose = require('mongoose');
const Room = require('./Room');

// Update this connection string to use your MongoDB Atlas database
mongoose.connect('mongodb+srv://harithmadu:myhoteldb@cluster0.klue1z8.mongodb.net/hotel-booking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  seedRooms();
}).catch(err => console.log('MongoDB connection error:', err));

const seedRooms = async () => {
  const rooms = [
    {
      name: 'Deluxe Room',
      type: 'Deluxe',
      description: 'Spacious room with great amenities.',
      rentPerDay: 150,
      imageUrls: [
        'https://example.com/deluxe1.jpg', 
        'https://example.com/deluxe2.jpg'
      ],
      currentBookings: []
    },
    {
      name: 'Standard Room',
      type: 'Standard',
      description: 'Comfortable room with essential facilities.',
      rentPerDay: 100,
      imageUrls: [
        'https://example.com/standard1.jpg', 
        'https://example.com/standard2.jpg'
      ],
      currentBookings: []
    },
  ];

  try {
    await Room.deleteMany(); // Optional: Clears previous entries
    await Room.insertMany(rooms);
    console.log('Rooms seeded successfully');
  } catch (error) {
    console.error('Error seeding rooms:', error);
  } finally {
    mongoose.connection.close();
  }
};
