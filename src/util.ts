// 숫자 하나를 받아서 해당하는 번호의 emotion.png 파일의 경로를 반환하는 함수
export const getEmotionById = (emotionId: number | string): string => {
  const id = Number(emotionId);
  if (1 <= id && id <= 5) {
    return `/emotion${id}.png`;
  }
  return '/emotion.png';
};
