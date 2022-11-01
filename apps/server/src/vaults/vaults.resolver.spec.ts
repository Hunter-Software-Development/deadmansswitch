import { Test, TestingModule } from '@nestjs/testing';
import { VaultsResolver } from './vaults.resolver';
import { VaultsService } from './vaults.service';

import { getModelToken } from '@nestjs/mongoose';
import { Vault, VaultSchema } from './entities/vault.schema';
import { CreateVaultInput } from './dto/create-vault.input';
import { UpdateVaultInput } from './dto/update-vault.input';
import { GetVaultInput } from './dto/get-vault.input';
import { RemoveVaultInput } from './dto/remove-vault.input';

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

  describe('update', () => {
    it('should run update', async () => {
      const result: Vault = {
        _id: 'test_id',
        googleId: 'test_google_id',
        data: 'test_data',
      };
      const arg: UpdateVaultInput = {
        _id: 'test_id',
        googleCredential: 'test_google_cred',
        data: 'test_data',
      };
      jest
        .spyOn(resolver, 'updateVault')
        .mockImplementation(async () => result);

      expect(await resolver.updateVault(arg)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should run findAll', async () => {
      const result: Vault[] = [
        {
          _id: 'test_id',
          googleId: 'test_google_id',
          data: 'test_data',
        },
      ];
      const arg = 'test_google_cred';

      jest.spyOn(resolver, 'findAll').mockImplementation(async () => result);

      expect(await resolver.findAll(arg)).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should run findOne', async () => {
      const result: Vault = {
        _id: 'test_id',
        googleId: 'test_google_id',
        data: 'test_data',
      };
      const arg: GetVaultInput = {
        _id: 'test_id',
      };
      jest.spyOn(resolver, 'findOne').mockImplementation(async () => result);

      expect(await resolver.findOne(arg)).toBe(result);
    });
  });

  describe('removeVault', () => {
    it('should run removeVault', async () => {
      const result: Vault = {
        _id: 'test_id',
        googleId: 'test_google_id',
        data: 'test_data',
      };
      const arg: RemoveVaultInput = {
        _id: 'test_id',
        googleCredential: 'test_google_id',
      };
      jest
        .spyOn(resolver, 'removeVault')
        .mockImplementation(async () => result);

      expect(await resolver.removeVault(arg)).toBe(result);
    });
  });
});
