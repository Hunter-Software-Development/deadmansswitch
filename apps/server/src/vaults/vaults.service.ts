import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVaultInput } from './dto/create-vault.input';
import { UpdateVaultInput } from './dto/update-vault.input';
import { GetVaultInput } from './dto/get-vault.input';

import jwt_decode from 'jwt-decode';

import { Vault } from './entities/vault.schema';

@Injectable()
export class VaultsService {
  constructor(@InjectModel(Vault.name) private vaultModel: Model<Vault>) {}
  async create(createVaultInput: CreateVaultInput) {
    const decodedCredential: { sub: string } = jwt_decode(
      createVaultInput.googleCredential,
    );

    const newVault = {
      googleId: decodedCredential.sub,
      data: createVaultInput.data,
    };

    const createdVault = new this.vaultModel(newVault);
    const savedVault = await createdVault.save();
    return savedVault;
  }

  async findAll(googleCredential: string): Promise<Vault[]> {
    const decodedCredential: { sub: string } = jwt_decode(googleCredential);
    const foundVaults: Vault[] = await this.vaultModel.find({
      googleId: decodedCredential.sub,
    });
    return foundVaults;
  }

  async update(updateVaultInput: UpdateVaultInput) {
    const decodedCredential: { sub: string } = jwt_decode(
      updateVaultInput.googleCredential,
    );

    const updatedVault = await this.vaultModel.findOneAndUpdate(
      { _id: updateVaultInput._id, googleId: decodedCredential.sub },
      { data: updateVaultInput.data },
      // This new tag tells Mongoose to return the updated version of the document instead of the old one
      { new: true },
    );

    console.log(updatedVault);
    return updatedVault;
  }

  async remove(removeVaultInput) {
    const decodedCredential: { sub: string } = jwt_decode(
      removeVaultInput.googleCredential,
    );
    return await this.vaultModel.findOneAndDelete({
      _id: removeVaultInput._id,
      googleId: decodedCredential.sub,
    });
  }

  async findOne(getVaultInput: GetVaultInput) {
    return await this.vaultModel.findOne({ _id: getVaultInput._id });
  }
}
