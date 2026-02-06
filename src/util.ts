export const getEmotionById = (emotionId: number | string): string => {
  const id = Number(emotionId);
  if (1 <= id && id <= 5) {
    return `/emotion${id}.png`;
  }
  return '/emotion.png';
};
