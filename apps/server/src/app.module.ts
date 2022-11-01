import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VaultsModule } from './vaults/vaults.module';

/**
 * Main Nest Module
 *
 * Serves as an entry point to the application
 */
@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: process.cwd() + '/apps/server/src/schema.gql',
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    MongooseModule.forRoot(process.env.MONGO_DB_CONNECTION, {
      dbName: 'deadmansswitch',
    }),
    VaultsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
