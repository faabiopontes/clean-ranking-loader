import { RankingScore } from '@/domain/entities';
import { LastRankingLoader } from '@/domain/usecases';
import { LoadLastRankingRepository } from '@/data/contracts';

export class LastRankingLoaderService implements LastRankingLoader {
  constructor (private readonly loadLastRankingRepository: LoadLastRankingRepository) {}

  async load(): Promise<RankingScore[]> {
    return this.loadLastRankingRepository.loadLastRanking();
  }

}