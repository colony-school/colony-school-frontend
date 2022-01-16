export default function actionClassName(importance: number) {
  return `btn ${
    importance == 1
      ? "btn-filled"
      : importance == 2
      ? "btn-outlined"
      : "btn-text"
  }`
}