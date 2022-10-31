import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VaultsService } from './vaults.service';
import { Vault } from './entities/vault.entity';
import { CreateVaultInput } from './dto/create-vault.input';
import { UpdateVaultInput } from './dto/update-vault.input';
import { RemoveVaultInput } from './dto/remove-vault.input';
import { GetVaultInput } from './dto/get-vault.input';

@Resolver(() => Vault)
export class VaultsResolver {
  constructor(private readonly vaultsService: VaultsService) {}

  @Mutation(() => Vault)
  createVault(@Args('createVaultInput') createVaultInput: CreateVaultInput) {
    return this.vaultsService.create(createVaultInput);
  }

  @Mutation(() => Vault)
  updateVault(@Args('updateVaultInput') updateVaultInput: UpdateVaultInput) {
    return this.vaultsService.update(updateVaultInput);
  }

  @Query(() => [Vault], { name: 'vaults' })
  findAll(
    @Args('googleCredential', { type: () => String }) googleCredential: string,
  ) {
    return this.vaultsService.findAll(googleCredential);
  }

  @Query(() => Vault, { name: 'vault' })
  findOne(@Args('getVaultInput') getVaultInput: GetVaultInput) {
    return this.vaultsService.findOne(getVaultInput);
  }

  @Mutation(() => Vault)
  removeVault(@Args('removeVaultInput') removeVaultInput: RemoveVaultInput) {
    return this.vaultsService.remove(removeVaultInput);
  }
}
