// Todo: Create Artist Model
import mongoose from 'mongoose';
import AlbumSchema from './album';

const ArtistSchema = new mongoose.Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema]
});

const Artist = new mongoose.model('artist', ArtistSchema);

export default Artist;
