import "../scss/styles.scss";

// webpack이 현재 async를 이해하지 못하므로
// 새로운 패키지를 추가해야한다. bable/polyfill
// npm install @babel/polyfill 옆의 명령어 !
const something = async () => {
  console.log("something");
};
