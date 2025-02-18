import { EventBridgeEvent } from 'aws-lambda';
import { NewsService } from '../services/news.service';

export const fetchAndSendNews = async (event: EventBridgeEvent<'Scheduled Event', {}>) => {
  console.log('[Scheduled Task] Fetching anime news...');
  await new NewsService().fetchAndSendNews();
  console.log('[Scheduled Task] News sent.');
};
