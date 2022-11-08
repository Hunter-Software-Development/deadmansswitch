import { Module } from '@nestjs/common';
import { VaultsService } from './vaults.service';
import { VaultsResolver } from './vaults.resolver';

import { Vault, VaultSchema } from './entities/vault.schema';
import { MongooseModule } from '@nestjs/mongoose';

/**
 * Vaults Module
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vault.name, schema: VaultSchema }]),
  ],
  providers: [VaultsResolver, VaultsService],
})
export class VaultsModule {}
