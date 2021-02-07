---
title: 'react testing library를 사용할때 주의할점'
date: 2021-02-08 02:40:00 -0400
categories: 개인공부
---

## 목차

- screen 을 사용할 것
- getByText의 사용에 주의할 것
- 검증 메소드를 제대로 쓸 것
- fireEvent보단 userEvent를 사용할 것
- find에 waitFor이 내장 되어 있다는 점

참고글

[Common mistakes with React Testing Library](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library).

## act error

- mocking
- 함수의 깊은 수동 복사?
- 비동기 처리

# react testing library을 사용할때 주의할 점

인턴 과정에서 react testing library를 사용하면서 unit test도 짜고 코드리뷰도
해보면서 배운 것들을 적어보려고 한다.

내가 쓸 주의사항만 지키면 unit test를 깔끔하게 짤 수 있을 뿐만 아니라 test 과정에서 일어나는 디버깅도 쉽게 해결 할 수 있을 것이다.

1. 어떻게 하면 간결한 코드로 짤 수 있을까?
2. 어떻게 하면 디버깅을 원활하게 할 수 있을까?

이 두가지에 중점을 두고 글을 써보았다.

# screen을 사용할 것

```js
// ❌ 사용해야 할 기능이 많아 질 수 있다.
const { getByRole } = render(<Example />);
const errorMessageNode = getByRole('alert');

// ✅ 사용해야 할 기능이 많아져도 추가되는 코드가 없다.
render(<Example />);
const errorMessageNode = screen.getByRole('alert');
```

react testing library에서는 메소드를 불러오는 방식으로 두가지 방식으로 지원한다

1. 메소드를 import 해오는 방법
2. screen 객체에서 참조해 쓰는방법

서비스를 운영하다 보면 기능이 추가되거나 버그를 수정하게 된다. 그러면서 해야할 테스트가 늘어나기 마련이다. 자연스럽게 사용해야 할 메소드도 들어나게 되게 되는데 1번 방법을 사용한다면 서비스의 운영기간이 길어질 수 록 테스트 코드가 복잡해 질 가능성이 있다.

# getByText 사용에 지양

```html
<button data-testid="helloWorld">Hello World</button>
```

```js
// 1. Wrong! 😓
screen.getByText(/hello world/i);

// 2. Best! 😄
screen.getByTestId('helloWorld');
```

이 라이브러리에서는 element를 선택하는 방법을 크게 2가지로 나눌 수 잇다.

## 1. getByText

```html
<!-- 모두 선택된다ㅠㅠ -->
<button>
  Hello World<button>
    <h1>
      Hello World
      <h1>
        <div>Hello World</div>
      </h1>
    </h1>
  </button>
</button>
```

getByText는 tag안에 들어있는 text를 기준으로 element를 선택한다.
때문에 내가 의도치 않은 다른 element를 선택하게 될 확률이 매우 높다. 때문에 크게 추천되지 않는 방법이다.

의도치 않은 element가 선택되면서 test 에 에러를 가져오기 쉬운 방법이다.

## 2. getByTestId

```html
<!-- 이놈만 선택된다!! -->
<button data-testid="helloWorld">
  Hello World<button>
    <!-- 선택안됨 ㅠ -->
    <h1>
      Hello World
      <h1>
        <!-- 선택안됨 ㅠ -->
        <div>Hello World</div>
      </h1>
    </h1>
  </button>
</button>
```

getByTestId는 data-testid 속성의 값을 기준으로 선택 되기 때문에 1번 방법과 비교했을때
속성값이 일치하는 것만 선택하기 때문에 안정성을 높일 수 있다.

# expect의 검증 메소드를 정확하게 사용하도록 할 것

```js
const button = screen.screen.getByTestId('button');

// ❌
expect(button.disabled).toBe(true);
// error message:
//  expect(received).toBe(expected) // Object.is equality
//
//  Expected: true
//  Received: false
// ✅
expect(button).toBeDisabled();
// error message:
//   Received element is not disabled:
//     <button />
```

다음 코드와 같이 expect 뒤에 들어갈 메소드가 좀더 구체적일 경우 에러메세지를 디버깅이
수월하게 띄워준다. 원활한 디버깅을 위해 정확한 검증 메소드를 사용하자

# fireEvent 사용에 주의할 것

```js
// ❌
fireEvent.change(input, { target: { value: 'hello world' } });
// ✅
userEvent.type(input, 'hello world');
```

fireEvent는 userEvent에 비해 더 유저 행동에 친숙한 방식으로 메소드 설계가 되어있다.
얼핏 들어보면 좋은 말 같지만 코딩하는 프로그래머 입장에서 보면 그렇지 않다.

예를들어 fireEvent의 chage 메소드는 input 값이 바뀔 때만 동작하지 않는다.
keyDown, keyPress, keyUp 등등 말그대로 변경사항이 있을때마다 코드가 동작하게 된다

그와 다르게 userEvent는 유저보단 프로그래머에게 좀더 친숙하게 메소드 설계가 되어있다.
원활한 디버깅을 위해 가능하면 userEvent를 사용하도록 하자

# find에 waitFor이 내장되어 있다.

```js
// ❌
const submitButton = await waitFor(() =>
  screen.screen.getByTestId('submit');
)

// ✅
const submitButton = await screen.findByTestId('submit');
```

react-testing-library에서 위의 코드들이 모두 동작한 후 다음동작이 되도록 코딩을할때
waitFor 메소드를 사용한다.

이 라이브러리에 익숙치 않는 사람들은 오류가 무서워서 waitFor을 남발하게 되는 상황이 오기도 하는데 (나처럼...ㅎㅎ) 이거 하나만 주의하면서 코딩을하자

find로 조합되는 메소드들은 모두 waitFor이 내장 되어있다. find 혹은 waitFor을 쓰게 된다면
이점 주의해서 사용하도록 하자.
