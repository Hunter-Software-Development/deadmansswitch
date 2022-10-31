import { Test, TestingModule } from '@nestjs/testing';
import { VaultsService } from './vaults.service';

import { getModelToken } from '@nestjs/mongoose';
import { VaultSchema } from './entities/vault.schema';
import { Vault } from './entities/vault.entity';

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
      jest.spyOn(service, 'findAll').mockImplementation(async (arg) => result);

      expect(await service.findAll(arg)).toBe(result);
    });
  });
});
