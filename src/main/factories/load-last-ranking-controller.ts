import { FakeRankingRepository } from '@/infra/repositories/fake-ranking';
import { LastRankingLoaderService } from '@/data/services/last-ranking-loader';
import { LoadLastRankingController } from '@/presentation/controllers/load-last-ranking';

export const makeLoadLastRankingController = (): LoadLastRankingController => {
  const repo = new FakeRankingRepository();
  const loader = new LastRankingLoaderService(repo);
  return new LoadLastRankingController(loader);
};
