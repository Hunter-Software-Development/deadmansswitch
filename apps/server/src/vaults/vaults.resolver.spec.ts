import { Test, TestingModule } from '@nestjs/testing';
import { VaultsResolver } from './vaults.resolver';
import { VaultsService } from './vaults.service';

import { getModelToken } from '@nestjs/mongoose';
import { Vault, VaultSchema } from './entities/vault.schema';

describe('VaultsResolver', () => {
  let resolver: VaultsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VaultsResolver,
        VaultsService,
        {
          provide: getModelToken(Vault.name),
          useValue: VaultSchema,
        },
      ],
    }).compile();

    resolver = module.get<VaultsResolver>(VaultsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
