import { Controller, HttpResponse } from '@/presentation/contracts';
import { RankingScoreViewModel } from '@/presentation/view-models';
import { LastRankingLoader } from '@/domain/usecases';

export class LoadLastRankingController implements Controller {
  constructor(private readonly lastRankingLoader: LastRankingLoader) {}
  async handle(): Promise<HttpResponse<RankingScoreViewModel[]>> {
    const ranking = await this.lastRankingLoader.load();
    return {
      statusCode: 200,
      data: ranking.map(item => ({
        ... item,
        matchDate: item.matchDate.toISOString()
      })),
    }
  }
}
