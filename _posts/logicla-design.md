# ER 모델

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/704c631a-5539-4b49-b627-ecdc27a4526a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/704c631a-5539-4b49-b627-ecdc27a4526a/Untitled.png)

데이터 베이스의 디자인의 순서는

1. 사용자 요구사항 분석
2. 개념설계 (ERD를 통해 릴레이션 스키마 만들기 )
3. 논리적 설계(정규화 과정 거쳐 이상 현상을 없에기) 
4. 물리적 디자인 (피지컬 인덱싱)

## 구성요소

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/154fe0c2-b2b7-411a-acde-c1f11f2090ca/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/154fe0c2-b2b7-411a-acde-c1f11f2090ca/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c35b9353-1eac-473a-a1bd-0a9fc9f4cd14/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c35b9353-1eac-473a-a1bd-0a9fc9f4cd14/Untitled.png)

엔티티는 시스템을 이루고 있는 사물이나 사건, 게체라고도 부름

엔티티는 속성으로 설명이 된다

점선원 : 추론가능한 속성을 말한다 예를들어 광진구에 있다고 하면 서울에 있다는 정보는 자연스럽게 추론이 가능하다

## key 종류

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68f733b5-e97c-47c0-849f-dd5729394651/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68f733b5-e97c-47c0-849f-dd5729394651/Untitled.png)

후보키 : 튜플을 유일하게 구분할 수 있는 최조한의 속성들의 모임

슈퍼키 : 한 릴레이션 내의 특정 튜플을 고유하게 식별하는 하나의 속성 혹은 속성들의 집합 슈퍼키는 유일성만 만족하면 바로 슈퍼키가 된다. 유일성은 특정 행을 바로 찾아낼 수 있는 고유한 데이터 속성 즉 기본키를 포함하고 있으면 만족

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e96da2b0-1846-4e25-a85b-ca9789b834be/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e96da2b0-1846-4e25-a85b-ca9789b834be/Untitled.png)

엔티티를 오른쪽과 같이 표기할 수 있다

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e70e8cc7-e0fd-4d51-8518-d0571fd133fe/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e70e8cc7-e0fd-4d51-8518-d0571fd133fe/Untitled.png)

관계를 속성을 사용해 표현할 수 있다

관계의 차수는 관계에 속해있는 엔티티의 개수이다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6edf9b72-3494-457b-828d-2e4e6cd7da40/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6edf9b72-3494-457b-828d-2e4e6cd7da40/Untitled.png)

1:1, n:1, n:n의 관계를 화살표로 표현할 수 있다.

화살표가 없는쪽이 n이라고 생각하면 된다

erd는 관계에 대한 관계를 표현할 수 없다.

때문에 aggregation 이라는 걸 둬서 (사각형) 관계와 연결 함으로써 이를 표현한다.

## 약한 개체란?

약한 개체란 자신의 Key Attribute가 없는 Entity Type을 뜻합니다.

예를 들어 "학사 관리 시스템"에서 강의번호 10043는 10043-01 , 10043-02와 같이 여러 개의 분반이 있을 수 있습니다.

이 때 분반이라는 개체는 자신의 key Attribute가 없고, 강의 테이블에 의존하기 때문에 **약한 개체**라 합니다.

다시 말하면 분반이 존재하기 위해서는 꼭 Course Entity Type이 있어야 합니다.

강의와 분반의 관계를 ER 다이어그램으로 표현하면 다음과 같습니다.

[https://t1.daumcdn.net/cfile/tistory/996B0B485A77CEA52A](https://t1.daumcdn.net/cfile/tistory/996B0B485A77CEA52A)

ER 다이어그램에서 약한 개체는 두 개의 네모로 표현하고, 약한 개체의 key인 bun_no를 **partial key**( 부분 키 )라고 합니다.

부분 키는 단독으로 존재할 수 없고 자신을 소유하고 있는 Owner Entity Type인 Course Entity type의 key와 합쳐서 표현되어야 합니다.

ER 다이어그램에서 부분 키는 점선으로 된 밑줄로 표현합니다.

또한 Entity type이 약한 개체와 관계를 맺을 때는 **식별 관계성 타입**으로 표현하고, ER 다이어그램에서 두 개의 마름모로 표현합니다.

약한 개체는 항상 의존적이기 때문에 참여 제약 조건은 **전체 참여**( total participation )입니다.

## ISA 관계

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cfd12611-ca09-4b4b-826d-9929b1a1b3ec/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cfd12611-ca09-4b4b-826d-9929b1a1b3ec/Untitled.png)

특수화(specialization) : 하나의 엔티티를 몇가지의 하위 엔티티로 분리하는 것

일반화(generalization) : 몇개의 개체 타입을 합쳐서 상위레벨의 엔티티로 만드는 것

단일 상속

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9858e16a-fc82-4746-a15a-2a8cfebaa01e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9858e16a-fc82-4746-a15a-2a8cfebaa01e/Untitled.png)

disjoint란

saving_account와 checking_account 이 두개가 같을 수 없다는 의미

하나의 객체는 반드시 하나의 하위 개체 집합에만 속할 수 있다 → 서로소, 서로 독립적이다

overlapping이란 ?

중첩(overlapping): 한 객체가 하나 이상의 하위 개체 집합에 속할 수 있다. 중첩이 기본 사항이므로 따로 표기하지 않는다.

삼각형 옆에 disjoint라고 써주지 않는다면 기본적으로 overlapping이라는 뜻이다

account가 두줄로 되어있는건

saving_account = account 완전히 동일하다 불필요한 정보가 없다 account 그자체로 saving_account로 설명될 수 있다

이를 total specialization이라고 되어있고 두줄로 표현한다.

---

# Logical Database Design1

논리적 설계란 DB 설계 단계중 요구사항분석 단계에서 얻은 유저의 요구사항기반으로 만들어진 ER 다이어그램 위에서 이루어지는 작업들이다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2ac1850e-03f3-48e0-99d2-04a14aa17e18/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2ac1850e-03f3-48e0-99d2-04a14aa17e18/Untitled.png)

DB 설계 단계

1. ER 다이어그램을 스키마로 추출
2. 도출된 스키마를 정규화 과정을 거쳐 이상현상을 제거하기

## E-R 모델 관계 종류

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab399112-ad50-4165-8cb6-6c9111a9e62a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab399112-ad50-4165-8cb6-6c9111a9e62a/Untitled.png)

N:M은 두 키 모두 pk로 설정하기

A, B에 대한 속성이 다음과 같이 있을때

관계에 대한 기본키 설정 규칙은 위 사진과 같다.

unary n:1 (차수가 1인 N:1) N쪽걸 pk로 하고 그 pk를 복제해서 set 해두기

## 관계 표현 예제

foreign key가 왜 저런식으로 쓰이는지

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc9d4f86-1aad-4bf0-80a7-e92ba4e519e4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fc9d4f86-1aad-4bf0-80a7-e92ba4e519e4/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1070ba85-a5b6-480a-964c-72a9d4915265/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1070ba85-a5b6-480a-964c-72a9d4915265/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc578eb1-f9e4-456f-a6e0-f912ae205615/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc578eb1-f9e4-456f-a6e0-f912ae205615/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17b819b0-6ecd-416c-ab7b-001e3a48440d/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/17b819b0-6ecd-416c-ab7b-001e3a48440d/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8c3fefde-8ae8-4743-b3ed-d0a26a2689c6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8c3fefde-8ae8-4743-b3ed-d0a26a2689c6/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3371271c-1f32-4644-a3cf-db3a0e297a31/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3371271c-1f32-4644-a3cf-db3a0e297a31/Untitled.png)

여기서 실선 2개는?

**참여 제약조건 ( Participation Constraint )**

관계를 맺는 두 Entity Type에 대해 한 개체의 존재가 다른 개체의 존재에 의존하는지 여부를 나타내는 제약조건을 뜻합니다.

- **전체 참여 ( Total Participation ) → 선 두개**
    - 하나 또는 그 이상의 개체가 참여
- **부분 참여 ( Partial Participation ) → 선 한개**
    - 선택적인 참여

에를 들어, 학생은 과목을 꼭 수강 할 필요가 없지만 과목은 항상 수강생이 있어야 합니다.

수강생이 없는 과목은 폐강되기 때문이죠. 

[https://t1.daumcdn.net/cfile/tistory/9985DE3C5A77BC6A15](https://t1.daumcdn.net/cfile/tistory/9985DE3C5A77BC6A15)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ccee33c1-2e61-4adf-a788-55bd76e6217e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ccee33c1-2e61-4adf-a788-55bd76e6217e/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e024144-e17f-4bf2-824a-7d656037b3b7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1e024144-e17f-4bf2-824a-7d656037b3b7/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79ce8328-6faf-4353-b991-274e218039a1/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/79ce8328-6faf-4353-b991-274e218039a1/Untitled.png)

n:1 totlal particpation 인 경우 아예 릴레이션을 만들지 않고 account에 다 병합시키는게 더 효율적이다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dddbd49d-dbec-4c34-8487-0cd4d0ca26af/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dddbd49d-dbec-4c34-8487-0cd4d0ca26af/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4150bb93-5586-49d5-8b53-54e3aaaa4152/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4150bb93-5586-49d5-8b53-54e3aaaa4152/Untitled.png)

엔진넘버를 car에 붙여버리면 따로 assembling 필요없다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab807ac8-c2da-416a-8ead-ac1559eccbef/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab807ac8-c2da-416a-8ead-ac1559eccbef/Untitled.png)

이런경우는 모든 table 합쳐버리기

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6614d13c-3717-4f8a-a28a-bc7ae935964a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6614d13c-3717-4f8a-a28a-bc7ae935964a/Untitled.png)

2가지 특별한 속성들은 어떻게 처리해야할까?

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/74524aec-20db-496e-b09c-252ae08bf0cc/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/74524aec-20db-496e-b09c-252ae08bf0cc/Untitled.png)

복합속성의 경우 복합속성이 아니라고 생각해두고 풀기

###

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71c42f19-70b6-4c94-abfe-14beb2dda27e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/71c42f19-70b6-4c94-abfe-14beb2dda27e/Untitled.png)

다중값 속성은 어떻게 해야하나? hobby라는 릴레이션 스키마를 만들어버리기 프라이머리 키는 hobby와 customer_id 이 2가지가 된다

다중값 속성이란? → 예를들어 기본적으로 사람은 휴대폰을 한가지 사용한다고 했을때 예외적으로 두가지 이상을 쓰는 사람이 있다고 해보자. 두가지 이상 쓰는 사람을 표현할때 다중값을 사용한다.

### overlapping 인 경우

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de3cfb1a-a81b-44fd-b094-72cd49b40e81/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de3cfb1a-a81b-44fd-b094-72cd49b40e81/Untitled.png)

### total disjoint 경우

employee는 person의 일부분 + 추가한 항목 으로 해석할 수 있으므로

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c3b85ed-0da7-4ab2-9708-b3c7d9167ad4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2c3b85ed-0da7-4ab2-9708-b3c7d9167ad4/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1b9dffb-2e27-48b9-bd6a-211a64749c31/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f1b9dffb-2e27-48b9-bd6a-211a64749c31/Untitled.png)

aggregation(집합)

## ER 모델 →릴레이션 순서

1. strong entity를 스키마로 변환
2. weak entity를 스키마로 변환
3. N : M 관계를 스키마로 변환
4. N : 1 관계를 스키마로 변환
5. 일반화 추상화 관계를 스키마로 변환

---

# Logical Database Design2

ER 다이어그램으로 릴레이션이 잘 뽑아냈을때

이제는 정규화를 통해 뽑아낸 릴레이션을 잘 다듬을 시간!

## 데이터 이상 현상

데이터가 잘 분리되지 않는다면(정규화가 안되었다면) 데이터 이상 현상이 일어날 수 있다.

데이터 이상현상이 일어나는 이유는 서로 연관된, 종속성을 가지고 있는 정보를 한곳에 저장을 하기 때문이다.

**1. 삭제 이상**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7df490a4-debe-4580-b61f-62a39fce3b89/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7df490a4-debe-4580-b61f-62a39fce3b89/Untitled.png)

정보를 삭제할때 중요한 정보까지 삭제되어 버리는 현상

주황색 데이터를 삭제하려고 하면 원치않는 3(semester)도 같이 삭제가 되어버릴 수 밖에 없는 구조

**2. 삽입이상**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/01d92924-ed80-4695-be97-d0bfd8c5b2cd/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/01d92924-ed80-4695-be97-d0bfd8c5b2cd/Untitled.png)

데이터를 삽입할때 빈 공간에 어떤 데이터를 삽입해야할지 알 수 없는 문제

**3.  갱신이상**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a940279f-6bfa-4a96-98b7-355c7fa1e486/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a940279f-6bfa-4a96-98b7-355c7fa1e486/Untitled.png)

반복된 데이터 중에 일부를 갱신 할 시 데이터의 불일치가 발생한다.

## 함수적 종속성

**함수적 종속(Functional Dependency)**

함수적 종속이란 어떤 릴레이션 R이 있을때 X와 Y를 각각 속성의 부분집합이라고 가정해봅니다. 

여기서 X의 값을 알면 Y의 값을 바로 식별할 수 있고, X의 값에 Y의 값이 달라질 때, **Y는 X에 함수적 종속**이라고 합니다. 

이 경우 **X를 결정자**, **Y를 종속자**라고 합니다. 이를 기호로 표현하면 **X→Y**입니다. 

이런 함수적 종속관계에는 **완전 함수적 종속**과 **부분 함수적 종속** 및 **이행적 함수 종속**이 있습니다.

**[예시]**

[제목 없음](https://www.notion.so/e8e633bfd86445f0a6eba82cb799cd19)

이 릴레이션에서는 '학번'을 알면 '이름', '나이', '성별' 속성을 식별할 수 있으며, 

'학번'이 다르면 그에따른 값도 다릅니다.

따라서 '이름', '나이', '성별' 속성은 '힉번'에 함수적인 종속관계입니다.

같은 이유로 전공 속성또한 '전공코드'에 함수적인 종속관계에 있습니다.

학번→이름, 학번→나이, 학번→성별

###

## 바람직한 일반화의 3가지 조건

- BCNF
- Lossless-join decomposition
- Dependency preserving decomposition

## FD 다이어그램 및 용어정리

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3aaf9739-cf42-4e3e-9717-b9a30ed30d4c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3aaf9739-cf42-4e3e-9717-b9a30ed30d4c/Untitled.png)

## 클로저

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c308e7e-025c-493e-9d9c-a10290c982c6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c308e7e-025c-493e-9d9c-a10290c982c6/Untitled.png)

클로저란 관계의 집합 F를 통해 추가적으로 추론할 수 있는 관계들의 집합을 클로저라 F+ 라고 한다.

### canonical cover란 어떠한 것에대해 추론이 가능한 관계는 지우는게 좋다 라는 뜻

### 클로저의 연산 규칙

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f6e5723-9303-4dc6-9bae-d0972598e6b5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f6e5723-9303-4dc6-9bae-d0972598e6b5/Untitled.png)

### 클로저 예시

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1104ccfd-42bf-49d2-bff5-b0a58ad11020/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1104ccfd-42bf-49d2-bff5-b0a58ad11020/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/45c25b80-44d1-4c8e-9b62-1fc82d96b81c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/45c25b80-44d1-4c8e-9b62-1fc82d96b81c/Untitled.png)

## 클로저를 구하는 순서? → 영상 한번 봐보기

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2060ae1-64b5-4e68-8c07-c21caaa36e30/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f2060ae1-64b5-4e68-8c07-c21caaa36e30/Untitled.png)

## BCNF

### BCNF란

X -> Y 가 있을때 X와 Y 모두 릴레이션 R에 속해있어야 하고

X -> Y 가 trivial해야 한다.

그리고 X 는 릴레이션 R 의 슈퍼키이다

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ac097a57-2220-4df4-994a-3ac104afb660/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ac097a57-2220-4df4-994a-3ac104afb660/Untitled.png)

BCNF를 위반하는 경우

BCNF는 기본키가 모든 종속성을 속성을 결정해야하는 구조를 가지고 있어야 하며 혹시 그외 다른 종속성을 가지고 있다면 BCNF를 위반한다고 볼 수 있다.

### BCNF를 만드는 법

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/21657389-b387-41a9-ba77-2f64e30bca08/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/21657389-b387-41a9-ba77-2f64e30bca08/Untitled.png)

BCNF가 아닌 테이블이 있고 BCNF를 위반하는 종속성 A → B가 있다고 한다면

릴레이션 R - (B - A) 

이 식을 통해 나오는 속성들을 통해 테이블을 구성하면 BCNF를 만족하는 테이블을 구성할 수 있다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ada5866c-0216-4d83-b316-8179054b5bb5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ada5866c-0216-4d83-b316-8179054b5bb5/Untitled.png)

BCNF는 결국 테이블을 나누는 과정이다. 때문에 BCNF 도출 과정을 진행한 후 좋은 일반화의 조건인 dependency preserving descomposition를 만족하는지 체크 하는게 좋다.

## Dependency preserving decomposition

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5cafa6d6-136c-419c-ab07-bef77b45a25e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5cafa6d6-136c-419c-ab07-bef77b45a25e/Untitled.png)

Dependency preserving decomposition이란

릴레이션 R과 그에대한 함수적 종속성 F라고할때

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e543008-23fd-4ecd-9e78-35b20ca5088f/20210609162501.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0e543008-23fd-4ecd-9e78-35b20ca5088f/20210609162501.png)

마지막 줄을 만족하면 DPD라고 말할 수 있다.

 쉽게 말하면 테이블을 나누어도 각 데이터들의 연결도가 손상이 안된상태라고 할 수 있다.

### 예제

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc4bfa34-cd2b-4dcf-9c6e-ad155aab9bc5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc4bfa34-cd2b-4dcf-9c6e-ad155aab9bc5/Untitled.png)

F = ABCD

F1 구하려면 ABCD에서 없는거 지우기

A+ 는 D없으니까 지우기 A→BC

### 클로저 활용 3가지

슈퍼키

함수적 종속성 hold 관계

클로저 구하기

## Lossless join Decomposition

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0cfb1376-4af0-464c-83f9-99589d23c9f9/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0cfb1376-4af0-464c-83f9-99589d23c9f9/Untitled.png)

간단히 말하면 두테이블을 자연 조인을 했을때 

테이블의 형태가 카디션 곱 형태가 아닌 형태로 이루어지는 것이 Lossless Join Decomposition 이다.

**정의로 말한다면**

 R을 R1, R2로 나누었을때 R1 join R2를 했을때 R이 나오는 것

**이를 확인 하는 방법은** 

R1 n R2 의 교집합이 어느 한쪽의 슈퍼키이면 LJD를 만족한다.

---
