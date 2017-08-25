// Todo: create Album Schema
import mongoose from 'mongoose';

 const AlbumSchema = new mongoose.Schema({
   title: String,
   date: Date,
   copiesSold: Number,
   numberTracks: Number,
   image: String,
   revenue: Number
 });

export default AlbumSchema;
