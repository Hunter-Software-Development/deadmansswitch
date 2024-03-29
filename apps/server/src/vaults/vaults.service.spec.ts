import { Test, TestingModule } from '@nestjs/testing';
import { VaultsService } from './vaults.service';

import { getModelToken } from '@nestjs/mongoose';
import { VaultSchema } from './entities/vault.schema';
import { Vault } from './entities/vault.entity';
import { CreateVaultInput } from './dto/create-vault.input';
import { UpdateVaultInput } from './dto/update-vault.input';
import { RemoveVaultInput } from './dto/remove-vault.input';
import { GetVaultInput } from './dto/get-vault.input';

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
      jest.spyOn(service, 'create').mockImplementation(async () => result);

      expect(await service.create(arg)).toBe(result);
    });
  });

  describe('findAll', () => {
    it('should return an array of Vaults', async () => {
      const result: Vault[] = [
        {
          _id: 'test_id',
          googleId: 'test_google_id',
          data: 'test_data',
        },
      ];
      const arg = 'test_google_cred';
      jest.spyOn(service, 'findAll').mockImplementation(async () => result);

      expect(await service.findAll(arg)).toBe(result);
    });
  });

  describe('update', () => {
    it('should update', async () => {
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
      jest.spyOn(service, 'update').mockImplementation(async () => result);

      expect(await service.update(arg)).toBe(result);
    });
  });

  describe('remove', () => {
    it('should remove', async () => {
      const result: Vault = {
        _id: 'test_id',
        googleId: 'test_google_id',
        data: 'test_data',
      };
      const arg: RemoveVaultInput = {
        _id: 'test_id',
        googleCredential: 'test_google_cred',
      };
      jest.spyOn(service, 'remove').mockImplementation(async () => result);

      expect(await service.remove(arg)).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should find one', async () => {
      const result: Vault = {
        _id: 'test_id',
        googleId: 'test_google_id',
        data: 'test_data',
      };
      const arg: GetVaultInput = {
        _id: 'test_id',
      };
      jest.spyOn(service, 'findOne').mockImplementation(async () => result);

      expect(await service.findOne(arg)).toBe(result);
    });
  });
});
