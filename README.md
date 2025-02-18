# **AWS EventBridge + Lambda: Crunchyroll News to Slack**

🚀 **This project uses AWS EventBridge and Lambda to fetch Crunchyroll news and automatically send them to a Slack channel.**

## **📌 Technologies Used**

- AWS Lambda
- AWS EventBridge
- AWS SAM
- Slack Webhooks

## **⚡ Deployment**

1. Install dependencies:
   ```bash
   yarn install
   ```
2. Compile TypeScript:
   ```bash
   yarn build
   ```
3. Deploy with AWS SAM:
   ```bash
   yarn deploy
   ```

## **🛠 Configuration**

🔹 **Set up your Slack Webhook URL** in the `SLACK_WEBHOOK_URL` environment variable in AWS Lambda.  
🔹 **The event runs daily at 10 AM UTC.**

## **📬 Contact**

💡 **@codeanding** on social media
