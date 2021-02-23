function nSecondsLater(n) {
  console.log(`🚩 n=${n} Start`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log(`✅ ${n} Seconds Later`));
    }, n * 1000);
  });
}
const arr = [0, 1, 2, 3];
var promises = '';
function asyncParallel() {
  promises = arr.map((n) => nSecondsLater(n));
  console.log(promises);
  //   Promise.all(promises).then(() => console.log('promises'));
}
asyncParallel();
setTimeout(() => {
  console.log('프로미스 결과', promises);
}, 1000 * 5);
// https://interacting.tistory.com/162

// promise.all은 병렬로 실행시켜주는 트리거가 아닌 실행잘했나 잘못했나 검사하는 선생님
// 실제 실행할때는 new Promise로 선언할때 실행됨
