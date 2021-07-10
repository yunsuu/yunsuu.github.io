### 전화번호 목록

- 규칙성을 만들면 좀더 효율적인 방법들이 나온다 → 규칙을 못찾겠으면 정렬해서 규칙을 찾아보기

### 위장

- 없는 경우까지 계산할때 편하게 하기위해서 가짜 데이터 +1(없는 경우) 하고 -1(모두 없는 경우 )하기
- for 문 간략하게 하면서 코드를 보기 쉽게 할 수 있음

### 프린터

- 최대한 직관적으로 짜기
- reverse를 해버려서 햇갈려서 꼬여가지고 시간낭비를 많이함
- 파이썬 any : 반복 가능한 자료형 내 element 중 하나라도 True인지 확인해주는 메소드
- for문을 이용한 직관적인 선언
- for문을 이용한 직관적인 if 처리

[https://technote.kr/241](https://technote.kr/241) 

### 더 맵게

- heapq 사용법 익히기
- 최소힙이니 맨 앞에만 검사하면 나머지 다 체킹이 되는 것 → 정렬되어 있다는 건 하나로 모든 데이터의 상태를 알 수 있다는 것이다

### 소수 찾기

- itertools를 이용해서 조합과 순열을 메소드 하나로 만들 수 있다.

---

### heapq 사용방법

- [https://www.daleseo.com/python-heapq/](https://www.daleseo.com/python-heapq/)

### functools 사용법

- sort 할때 key 기준을 람다 안쓰고 좀더 직관적으로 만들 수 있다
- -1이나 1로 리턴해주기 → 순서 안바꿀때는 -1 바꿀때는 1

### itertools

- 이걸 사용해서 리스트 원소를 이용한 조합과 순열을 간단하게

[https://docs.python.org/ko/3/library/itertools.html#itertools.groupby](https://docs.python.org/ko/3/library/itertools.html#itertools.groupby)