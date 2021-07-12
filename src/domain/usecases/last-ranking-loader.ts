import { RankingScore } from '@/domain/entities/ranking-score';

export type LastRankingLoader = {
  load: () => Promise<RankingScore[]>;
};
