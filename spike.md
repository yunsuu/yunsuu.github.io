## 설계 스파이크

* 기본적인 버튼 ui들은 차크라 ui 이용하기 
-> text copy도 차크라 ui 커스텀 훅으로 지원해 이를 이용

* 다른 유저에게 공유할때 링크로 공유하는 경우는 playback 홈페이지를
컴포넌트들을 이용한다. 로그인 세션이 없어도 들어갈 수 있는 playback 페이지 하나 더만들어 구현

* firebase에 영상 길이시간은 없는 것 같다. 새로 저장해야될거같다 
-> 얻을 수 없다면  firebase에 저장할때 영상 길이도 같이 저장

아이디어
---
* updated tag 구현
```js
vedio = {
    created: 1610520761853,

    // userLastVisited : ~ //로그인한 유저가 마지막으로 이 영상 playback 페이지에 들어간 시간
    // => 유저가 playback 페이지를 나간 순간 update,

    // inviteeLastUpdated: ~ //초대된 유저가 마지막으로 댓글을 적은 시간
    // => 링크로 초대된 유저들이 댓글을 쓸때마다 update

    // userLastVisited < inviteeLastUpdated 가 ture면
    //업데이트 되었다고 판단하고 update 태그 달기

    name: "프로모션 영상.mp4",

    src: "https://firebasestorage.googleapis.com/v0/b/seq...",
}

// 
```
물어볼꺼
---

* created, updated는 생성된 순 업데이트 된 순인건가?

* 이메일을 어떻게 보낼꺼냐? 이메일을 보낼때에는 초대링크를 이메일로 보내는 건가?
->모듈 찾아보기, 혹시 지금 사용하는게 있나


오늘 할꺼
===
예린님 cypress 리뷰

내꺼 unit test 코드리뷰 수정해서 고쳐서 반영해두기 

내꺼 cypress 짜기


컬러코드 안쓰고 puple 500처럼 쓰기

디자인 회의
//////////////////////////////////////////////////////

upload할 수 있는 파일은 vedio 파일만

progress 차크라 ui progress

정렬은 신경 안써도 될듯 ㅇㅇㅇ

component , 모바일 뷰로 -> breakpoint defualt값으로 구현



