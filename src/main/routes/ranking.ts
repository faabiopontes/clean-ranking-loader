import { Router } from 'express';

import { makeLoadLastRankingController } from '@/main/factories/load-last-ranking-controller';
import { adaptRoute } from '@/main/adapters';

export default (router: Router): void => {
  router.get('/rankings/last', adaptRoute(makeLoadLastRankingController()));
};
