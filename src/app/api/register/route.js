import { User } from '@/app/models/User';
import mongoose from 'mongoose';

export async function POST(req) {

  const body = await req.json()
  mongoose.connect(process.env.MONGO_URL);
  //a variable createdUser, is used to record the input
  const createdUser = await User.create(body)
  //Then it returns
  return Response.json(createdUser)
}