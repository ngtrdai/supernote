import { BadRequestException, Injectable } from '@nestjs/common';
import { SpaceRepository } from '@supernote/database/repositories/space/space.repository';
import { SpaceMemberRepository } from '@supernote/database/repositories/space/space-member.repository';
import { InjectKysely } from 'nestjs-kysely';
import { KyselyDB, KyselyTransaction } from '@supernote/database/types/kysely.types';
import { SpaceMemberService } from './space-member.service';
import { CreateSpaceDto } from '../dto/create-space.dto';

@Injectable()
export class SpaceService {
  constructor(
    private spaceRepository: SpaceRepository,
    private spaceMemberService: SpaceMemberService,
    @InjectKysely() private readonly db: KyselyDB,
  ) {}

  async create(
    userId: string,
    workspaceId: string,
    createSpaceDto: CreateSpaceDto,
    trx?: KyselyTransaction,
  ) {
    const slugExists = await this.spaceRepository.slugExists(
      createSpaceDto.slug,
      workspaceId,
      trx,
    );

    if (slugExists) {
      throw new BadRequestException('Space slug exists. Please use a unique space slug');
    }

    return await this.spaceRepository.insertSpace(
      {
        name: createSpaceDto.name ?? 'untitled space',
        description: createSpaceDto.description ?? '',
        creatorId: userId,
        workspaceId: workspaceId,
        slug: createSpaceDto.slug,
      },
      trx,
    );
  }
}