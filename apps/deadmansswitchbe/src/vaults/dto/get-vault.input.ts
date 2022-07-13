import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GetVaultInput {
  @Field(() => String)
  _id: string;
}
