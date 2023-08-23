export default class EmailTemplateParams {
  from_name: string;
  reply_to: string;
  topic: string;
  message: string;

  constructor(contactData: {
    name: string;
    email: string;
    topic: string;
    message: string;
  }) {
    this.from_name = contactData.name;
    this.reply_to = contactData.email;
    this.topic = contactData.topic;
    this.message = contactData.message;
  }

  get params() {
    const { from_name, reply_to, topic, message } = this;

    return {
      from_name,
      reply_to,
      topic,
      message,
    };
  }
}
