import axios from 'axios';
import { SlackHelper } from '../helper/slack.helper';
import { XMLHelper } from '../helper/xml.helper';
import { AnimeNewsItem } from '../interfaces/news';

export class NewsService {
  async fetchAndSendNews() {
    try {
      const response = await axios.get(process.env.CRUNCHYROLL_RSS_URL!);
      const xmlData = response.data;

      const newsJson = await XMLHelper.parseXML(xmlData);
      const rawItems = newsJson.rss.channel[0].item;

      if (!rawItems || rawItems.length === 0) {
        console.log('No news found.');
        return;
      }

      const items: AnimeNewsItem[] = rawItems.map((news: any) => ({
        title: news.title[0] as string,
        link: news.link[0] as string,
      }));

      let message = `📰 *Last Anime News:*\n\n`;
      items.forEach((news) => {
        message += `🔹 *${news.title}*\n🔗 ${news.link}\n\n`;
      });

      await SlackHelper.sendMessage(message);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
}
