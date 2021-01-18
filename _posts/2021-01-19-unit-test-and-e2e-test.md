---
title: "웹/앱 테스트(e2e test, unit test)의 필요성 (cypress, react testing library)"
date: 2020-01-19 04:23:00 -0400
categories: 공부
---



# 어플 테스트가 필요한 이유

내가 코딩하면서 가장 재밌을때는 내가 만들고 싶은 프로젝트를 만들 때 가장 재밌었다.
그리고 내가 코딩하면서 가장 귀찮을때는 내가 만든 프로젝트에 어떤 버그가 있는지 테스트 할 때

그리고 막상 테스트를 해봐도 내 컴퓨터에서는 그렇게 잘 돌아 갈 수가 없다. 마치 버그가 하나도 없는 것 처럼...

그래서 막상 테스트를 한다고 해도 그렇게 꼼꼼하게 하지는 못했던 것 같다.
하지만 6개월간 SW마에스트로 과정을 거치면서 이런 생각은 점차 바뀌게 되었다.

협업을 통해 긴 기간동안 실제 유저들에게 사용할만한 SW를 만들다보면 규모가 커질 수 밖에 없으며 개인 프로젝트와 했던 것과 달리 혹시 작동하지 않는 부분이 있는지 꼼꼼해야 한다.
하지만 수많은 기능추가와 수많은 빌드 과정속에서 이를 꼼꼼하게 체크하는 건 쉽지 않은 일이다.
실제 회사에서는 이런 테스트 부분을 담당하고 있는 부서인 QA부서도 존재한다.

어플 테스트의 필요성을 느끼는 도중 운이 좋게 sequence 인턴 과정을 통해 React 웹 테스트를 작성해 볼 수 있게 되었다. 
직접 테스팅 코드를 작성하며 배우고 느낀점들을 정리해두고 싶어 이 글을 적게 되었다.

# e2e test와 unit test

![download](https://user-images.githubusercontent.com/40769820/104951785-899cf280-5a06-11eb-98a4-a9e1d2fabeaf.png)

테스트에는 여러가지 종류가 있다.

아니 테스트를 하면 한번만 하면 되지 귀찮게 뭐이리 많나... 싶었다.
하지만 직접 코드를 짜보면서 각각 테스트 단계에서 역할과 중요성이 있는걸 배울 수 있었다.
세세하게 나누면 끝도 없으니까 크게 2가지만 나눠보자.

## 1. e2e test
e2e test는 유저가 앱을 이용하며 눈에 보이는 것들을 테스트 하는 과정이다. 예를들어 로그인 하는데 로그인이 안된다거나, 클릭해야할 버튼이 비활성화 되어 있다던가 등등... 유저가 직접 이용하면서 발생하는 에러들을 체크하는 레벨이며 테스트 레벨에서 가장 유저와 직접적인 연관성이 있는 테스트 단계이다. e2e test를 지원하는 많은 sw들이 있겠지만 나는 Cypress를 이용해 e2e test를 작성해 보았다.

## 2. unit test
unit test는 e2e test에 비해서는 low level(유저보단 코드와 좀더 가까운)인 테스트이다.
e2e test가 유저의 눈에서 보이는 버그들을 확인하는 test였다면, unit test는 유저가 볼수없는
웹/앱의 내부의 세세한 데이터까지 테스트가 가능하다. unit test를 지원하는 많은 sw들이 있지만 나는 react testing library를 unit test를 작성해 보았다.


# Cypress를 이용한 e2e test 작성해보기

## Cypress란?
![0_ru_HmY-6fP498VkF](https://user-images.githubusercontent.com/40769820/104952691-4cd1fb00-5a08-11eb-8648-2f31eda6d534.png)

Cypress는 크롬 브라우저에서 개발자 도구를 사용하듯이 내가 만든 프로젝트를 테스트 해볼 수 있다. 왼쪽 창에는 내가 만든 테스트 코드가 돌아가는 console이 있고 오른쪽 화면에서는 내가 만든 프로젝트가 테스트 코드를 따라 동작하는 모습이 확인이 가능하다.


## 간단한 테스트 코드 예시

>! 유의사항 cypress를 사용하기 위해서는 js에서 지원하는 테스트 프레임워크인 Jest의 선행지식이 필요하다.
혹시 이글을 읽는 여러분이 Jest를 잘 모르고 있다면 Jest에 대한 간단한 공부를 한 후 이 글을 읽길 바란다 :)


## 간단한 로그인 테스트 코드를 작성해보자

cypress는 css selector를 이용해 html상에 표시되어있는 요소들을 선택할 수 있다.
render가 된 나의 프로젝트의 html의 tag, class, id값을 이용해 적절히 선택해보자!

다음은 이메일과 비밀번호를 입력해 버튼을 클릭하면 "/success"로 redirect가 되었는지 테스트하는 코드이다.

```js
describe("/signin", () => {

  it("login test", () => {

      // id가 "email인" 요소를 선택(get)해 그 안에 test@gmail.com을 채워 넣는다
    cy.get("[id='email']").type("test@gmail.com");

      // id가 "password" 요소를 선택(get)해 그 안에 123456789*을 채워 넣는다
    cy.get("[id='password']").type("123456789*");

    // type이 "submit"인 버튼을 선택해 click 이벤트를 실행한다.
    cy.get("[type='submit']").click();

    // 위의 테스트 코드를 실행후 url success가 뜨면 true 아니라면 false를 출력한다.
    cy.url().should("include", "/success");
  });
});

```

공식 홈페이지를 들어가면 더 다양한 요소를 선택하는 방법, 다양한 이벤트를 실행시키는 방법들이 있으니 관심이 있으면 Cypress 공식 홈페이지를 방문해보자.

# react testing library를 이용한 unit test 작성해보기

## react testing library란?
react testing library 에서는 Enzyme 과 달리 모든 테스트를 DOM 위주로 진행한다. 그리고, 컴포넌트의 props 나 state 를 조회하는 일은 없다. 때문에 실제 state값이 예상한대로 바뀌지 않아도 예상대로 동작이 진행된다면 성공이라고 띄워준다.

 추가적으로, Enzyme 은 엄청나게 다양한 기능을 제공하는 반면, react testing library 에는 정말 필요한 기능들만 지원을 해줘서 매우 가볍다. 프로젝트의 사이즈가 커지면 Enzyme를 사용하는 것이 좋겠지만 간단한 프로젝트에서는 react testing library를 사용하는 것이 좋은 방법이 될 것이다.


## 간단한 테스트 코드 예시

>! 유의사항 react testing library 사용하기 위해서는 js에서 지원하는 테스트 프레임워크인 Jest의 선행지식이 필요하다.
혹시 이글을 읽는 여러분이 Jest를 잘 모르고 있다면 Jest에 대한 간단한 공부를 한 후 이 글을 읽길 바란다 :)

## 로그인 테스트 코드를 작성해보자.

다음은 이메일과 비밀번호를 입력해 버튼을 클릭하면 "/success"로 redirect가 되었는지 테스트하는 코드이다. 이해를 위에 좀더 설명해보자면 react-router-dom에서 제공하는 useHistory 함수를 이용해 redirect를 확인하는 과정이 있다고 생각하자

```js
import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, waitFor, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SignIn from '../../../pages/signIn';

// useHistory의 가짜(mock)함수를 만들어준다
const mockPush = jest.fn(() => { console.log("history push working") });
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockPush,
  }),
}));

test('Check if redirection after successful signup is handled', async () => {
    // SignIn 컴포넌트를 테스트를 위해 render을 해준다
    render(
        <Router>
            <SignIn />
        </Router>
    );;

    //  email, password, submitButton을 선택해준다
  const email = screen.getByTestId('email');
  const password = screen.getByTestId('password');
  const submitButton = screen.getByTestId('submitButton');

  userEvent.type(email, "user@test.com"); //email 칸에 user@test.com를 입력해준다
  userEvent.type(password, "123456789*"); //password 칸에 123456789*를 입력해준다
  userEvent.click(submitButton) // submit button을 클릭해준다.

//모든 이벤트들이 끝내길 기다려준다 (waitFor)
  await waitFor(() => {
      //모든 이벤트들이 끝난 후 useHistory를 통해 "/success"으로 잘 redirect가 되었는지 확인한다.
      // "/success"라면 true 아니라면 false
    expect(mockPush).toHaveBeenCalledWith('/success');
  });
});


```

unit test는 e2e 테스트보다 코드레벨에 가까운 테스트 과정이다 보니 공부할게 e2e test보단 좀더 많고 공식문서를 좀더 많이 봐야한다.





# 실제 테스트 코드를 짜면서 느낀점
인턴을 하며 실제 테스트 코드를 짜면서 느낀 점은 e2e test보다 unit test 테스트 코드를 짜는게 더 까다롭다는 점이다. 아무래도 unit test가 보다 코드레벨과 가까운 테스트다 보니 프로젝트의 구조를 잘 알고 있어야 하며 기본 js 지식도 탄탄해야 코드와 딱 맞는 테스트 코드를 짤 수 있게된다. 혹시 테스트 코드를 한번 작성해 보고싶은 사람이라면 e2e test부터 배워보는 걸 추천한다.















