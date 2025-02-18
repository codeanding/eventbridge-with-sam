import axios from 'axios';

export class SlackHelper {
  static async sendMessage(message: string) {
    await axios.post(process.env.SLACK_WEBHOOK_URL!, { text: message });
    console.log('Message sent to Slack:', message);
  }
}
