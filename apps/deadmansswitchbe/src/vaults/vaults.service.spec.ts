import { Test, TestingModule } from '@nestjs/testing';
import { VaultsService } from './vaults.service';

import { getModelToken } from '@nestjs/mongoose';
import { Vault, VaultSchema } from './entities/vault.schema';

describe('VaultsService', () => {
  let service: VaultsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VaultsService,
        {
          provide: getModelToken(Vault.name),
          useValue: VaultSchema,
        },
      ],
    }).compile();

    service = module.get<VaultsService>(VaultsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
