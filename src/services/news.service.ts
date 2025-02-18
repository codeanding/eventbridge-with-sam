import axios from 'axios';
import { SlackHelper } from '../helper/slack.helper';
import { XMLHelper } from '../helper/xml.helper';

export class NewsService {
  async fetchAndSendNews() {
    try {
      const response = await axios.get(process.env.CRUNCHYROLL_RSS_URL!);
      const xmlData = response.data;

      const newsJson = await XMLHelper.parseXML(xmlData);
      const items = newsJson.rss.channel[0].item;

      if (items.length === 0) {
        console.log('No news found.');
        return;
      }

      let message = `📰 *Last Anime News:*\n\n`;
      items.forEach((news: any) => {
        message += `🔹 *${news.title[0]}*\n🔗 ${news.link[0]}\n\n`;
      });

      await SlackHelper.sendMessage(message);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }
}
