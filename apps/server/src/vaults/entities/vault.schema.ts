import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Document } from 'mongoose';

export type VaultDocument = Vault & Document;

@Schema()
export class Vault {
  @Prop({
    type: String,
    default: uuidv4,
  })
  _id: string;

  @Prop()
  googleId: string;

  @Prop()
  data: string;
}

export const VaultSchema = SchemaFactory.createForClass(Vault);
