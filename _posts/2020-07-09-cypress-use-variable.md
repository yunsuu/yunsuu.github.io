---
title: cypress를 사용할때 변수개념을 사용하는 방법'
date: 2020-03-11 01:09:00 -0400
categories: cypress
---

# cypress를 사용할때 변수개념을 사용하는 방법

## 문제

cypress를 이용해 e2e test를 진행하면서 삭제 기능 테스트 코드를 작성해야할 일이 있었다.

![20210311105721](https://user-images.githubusercontent.com/40769820/110724189-a7454600-8258-11eb-8630-6009c0c1f083.png)

다음 사진과 같이 card를 한개 삭제하는 작업이였다.

```html
<div>
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <button class="delete__button">삭제 버튼</button>
</div>
```

처음엔 이런식으로 코드를 작성했다. 하지만 바로 에러가 떠버렸다 ㅠㅠ

```js
const cardCount = cy.get('.card').length;
cy.get('.delete__button').click();
cy.wait(1000);
cy.get('.card').should('have.length', cardCount - 1);
```

cardCount에 삭제하기 전 card수를 저장하고 삭제한 후 이를 비교하는 작업을 했다.

근데 자꾸 NaN에러(cardCount의 값이 설정되지 않았다고 뜸)가 났다. 삽질좀 해보니 cypress에서 변수개념을 사용하려면 다른방식으로 코딩을 해야한다는 걸 알 수 있었다

## 해결방법

다음과 같이 코딩하면 문제를 해결할 수 있다

```js
cy.get('.card').then((cardElement) => {
  const cardCount = cardElement.length;
  cy.get('.delete__button').click();
  cy.wait(1000);
  cy.get('.card').should('have.length', cardCount - 1);
});
```

공식문서 해결 링크 [Variables and Aliases
]

https://docs.cypress.io/guides/core-concepts/variables-and-aliases.html#Closures

cypress는 각 명령어 단위마다 독립적으로 구분되기 때문에 위에서 선언하고 세팅해준 변수값을 기역하지 못한다는 행동특성이 있다는걸 알아냈다. 그래서 변수개념을 사용하고 싶다면 promise를 이용해 실행 명령을 묶어주면 된다.
