import { RankingScoreModel } from '@/data/models';

export type LoadLastRankingRepository = {
  loadLastRanking: () => Promise<RankingScoreModel[]>
}