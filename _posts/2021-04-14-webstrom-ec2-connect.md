---
title: 'AWS ec2를 webstorm에 연결하기'
date: 2021-04-14 02:40:00 -0400
categories: 개인공부
---

# 웹스톰과 aws ec2 연결하기

내가 자주쓰는 조합이다. 종종 개인프로젝트할때마다 쓸일이 있는데 까먹어가지고 적어둔다. 이 글의 가정은 aws ec2인스턴스를 만들고 web storm을 설치했다는 가정하에 시작한다.

- ec2 생성하기 : https://victorydntmd.tistory.com/61
- 웹스톰 설치하기 : https://corock.tistory.com/391

## 웹스톰과 ec2 연결하기

File을 클릭해 새로운 프로젝트를 만들어주기
![20210414224839](https://user-images.githubusercontent.com/40769820/114723894-ff9ac680-9d75-11eb-81f1-9411f89d0071.png)

Tool > Depolyment > Browse Remote Host를 클릭하기
클릭하면 우측에 창이하나 생긴다
![2png](https://user-images.githubusercontent.com/40769820/114723906-0295b700-9d76-11eb-8785-ad3eaf060ce4.png)

우측에 생긴 창에서 점 3개 아이콘을 클릭해준다.
![3](https://user-images.githubusercontent.com/40769820/114723911-04f81100-9d76-11eb-9e7e-390b5350b5e1.png)

클릭하면 다음과 같은 연결설정을 시작할 수 있는 화면이 나온다 이름은 아무거나 해도 되므로 난 test라고 지었다. SFTP로 선택해줄 것!
![20210414225014](https://user-images.githubusercontent.com/40769820/114723968-16411d80-9d76-11eb-9855-9968b38e4f08.png)

생성하면 이런화면이 나오는데 여기서 점 3개를 또 클릭해준다.
![20210414225036](https://user-images.githubusercontent.com/40769820/114723976-180ae100-9d76-11eb-8b5d-e7c87c99d9bb.png)

클릭하면 다음과 같은 화면이 나온다.

- port : 22 번호로 설정해주기
- Host : EC2의 퍼블릭 IP4를 써주기
- User name : ubuntu로 적어주기 (ec2 os를 우분투로 설정했을때 기준)
- authentication type : key 형식으로 바꿔주고 경로를 ec2에서 받은 pem 키 파일경로를 설정해주기

test connection을 눌러 연결이 잘 되는지 확인할 수 있다. 만약 안된다고 하면 EC2의 보안그룹을 제대로 설정해뒀는지 확인해보자

(22번 포트를 모든 ip 상관없음으로 해두던가 or 내 IP를 허용해주면 연결이 될꺼다)
![20210414225222](https://user-images.githubusercontent.com/40769820/114723987-1b05d180-9d76-11eb-8fd9-175996bc90b9.png)

연결이 완료되면 다음과 같이 우측에 ec2에 있는 파일 목록들을 볼 수 있다.
![20210414230452](https://user-images.githubusercontent.com/40769820/114723994-1ccf9500-9d76-11eb-936c-bce5c1d2b52b.png)

## 리눅스 명령어로 파일 만들기

```
mkdir project
```

프로젝트를 작업할 퐅더를 만든다

```
chmod -R 777 project
```

파일권한 읽기, 쓰기, 편집 가능하게 해주기

이걸해야 webstrom GUI로 편리하게 CRUD가 가능하다.
