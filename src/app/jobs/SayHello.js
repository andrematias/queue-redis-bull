export default {
  key: "SayHello",
  handle({ data }) {
    const { user } = data;
    console.log(`Hello ${user.name}, my Friend`);
  },
};
