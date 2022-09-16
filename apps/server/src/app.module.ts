import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VaultsModule } from './vaults/vaults.module';
import { Vault, VaultSchema } from './vaults/entities/vault.schema';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: process.cwd() + '/src/schema.gql',
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION),
    MongooseModule.forFeature([{ name: Vault.name, schema: VaultSchema }]),
    VaultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
