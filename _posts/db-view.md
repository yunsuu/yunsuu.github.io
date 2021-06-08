---
title: DB view란?
date: 2021-06-08 01:09:00 -0400
categories: DB
---

# View

view는 특정한 놈에게만 view를 제공해준다

가상적인 테이블이다.

이를 이용해서 이용해서 접근 제어 기능을 쉽게 구현할 수 있다.

데이터를 저장하는 것이 아니라 정의를 저장하는 형태이다

장점은 복잡한 쿼리, 테이블 설계를 건드리지 않고도 간단하게 원하는 정보를 조회할 수 있다.

## view의 장단점

### 장점

1. 특정 사용자에게 테이블 전체가 아닌 필요한 필드만을 보여줄 수 있습니다.

2. 복잡한 쿼리를 단순화해서 사용할 수 있습니다.

3. 쿼리를 재사용할 수 있습니다.

### 단점

하지만 이러한 뷰도 다음과 같은 단점을 가지고 있습니다.

1. 한 번 정의된 뷰는 변경할 수 없습니다.

2. 삽입, 삭제, 갱신 작업에 많은 제한 사항을 가집니다.

3. 자신만의 인덱스를 가질 수 없습니다.

### view expansion이란

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/854ed265-4387-4c24-9312-8e8645c7e278/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/854ed265-4387-4c24-9312-8e8645c7e278/Untitled.png)

view에 저장됭 정의를 실제 데이터가 들어가 있는 sql 문으로 치환해간다는 개념

## view 문법

### create

```sql
CREATE VIEW 뷰이름[(속성이름1,...)] AS //속성 이름은 생략 가능
SELECT 필드이름1, 필드이름2, ...
FROM 테이블이름
WHERE 조건

CREATE VIEW MyView(a,b) AS
SELECT Name, Date - Curdate() AS Dday
FROM Reservation WHERE Name = 'James';
```

### drop

뷰는 변경이 불가능하므로 내용을 변경하려면 삭제후 다시 만들기

```sql
DROP VIEW 뷰이름
DROP VIEW 뷰이름 CASCADE
DROP VIEW 뷰이름 RESTRICT

DROP VIEW 서울고객 RESTRICT;
```

RESTRICT : 삭제하려는 뷰를 어느곳에서 참조하고 있다면 삭제가 취소

CASCADE : 뷰를 참조하는 모든 뷰, 제약조건까지도 삭제가 이루어진다.

### 종류

- column subset view
- row subset view
- join view
- statistical summary view