import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class Vault {
  @Field(() => ID, { description: 'Vault ID' })
  readonly _id: string;

  @Field()
  googleId: string;

  @Field({ description: 'Vault Data' })
  readonly data: string;
}
