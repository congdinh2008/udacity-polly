import moment from "moment";

export function formatDate(timestamp) {
  return moment(timestamp).format("HH:MM A | MM-DD-YYYY");
}

export function formatQuestion(question, users) {
  const { id, timestamp, optionOne, optionTwo, author } = question;
  const authorInfo = Object.values(users).find((user) => {
    return user.id === author;
  });

  return {
    id,
    authorName: authorInfo.name,
    timestamp: formatDate(timestamp),
    optionOne,
    optionTwo,
    avatarURL: authorInfo.avatarURL,
  };
}
