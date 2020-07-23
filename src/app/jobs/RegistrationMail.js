import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Tester <tester@tester.com>",
      to: `${user.name} <${user.email}>`,
      subject: "Testing email sender",
      html: "Hello fella, this is my <b>test</b>",
    });
  },
};
