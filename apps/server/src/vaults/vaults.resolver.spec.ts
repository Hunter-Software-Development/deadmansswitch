import { Test, TestingModule } from '@nestjs/testing';
import { VaultsResolver } from './vaults.resolver';
import { VaultsService } from './vaults.service';

import { getModelToken } from '@nestjs/mongoose';
import { Vault, VaultSchema } from './entities/vault.schema';
import { CreateVaultInput } from './dto/create-vault.input';

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

  describe('create', () => {
    it('should run create', async () => {
      const result: Vault = {
        _id: 'test_id',
        googleId: 'test_google_id',
        data: 'test_data',
      };
      const arg: CreateVaultInput = {
        googleCredential: 'test_google_cred',
        data: 'test_data',
      };
      jest
        .spyOn(resolver, 'createVault')
        .mockImplementation(async () => result);

      expect(await resolver.createVault(arg)).toBe(result);
    });
  });
});
