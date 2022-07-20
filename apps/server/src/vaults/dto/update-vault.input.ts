import { CreateVaultInput } from './create-vault.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVaultInput extends PartialType(CreateVaultInput) {
  @Field(() => String)
  _id: string;
}
