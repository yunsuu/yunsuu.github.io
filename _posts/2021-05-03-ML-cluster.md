---

## 분류 : 데이터를 정해진 몇 개의 부류(class)로 대응시키는 문제

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/75e59a7f-6778-4b03-85a1-d87dfe80abcc.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8dda2a91c17241119fc57e292e0e9f57&start=23.838616)

분류는 정해진 영역에서 하나로 결정해야 한다. 가짓수가 5가지면 주어진 5가지 안에서 반드시 y값이 정해져야 한다. ex) 알파벳의 속성의 값이 A~Z라면 반드시 A~Z안에서 정해져야 한다

분류의 예시

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/b605eeb3-354b-46aa-ac2a-f2895561dc99.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8dda2a91c17241119fc57e292e0e9f57&start=579.620995)

분류 알고리즘의 종류

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/07081a9d-b6d7-49f8-bee7-2fff46315319.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8dda2a91c17241119fc57e292e0e9f57&start=793.211655)

**이상적인 분류기**

- 학습에 사용되지 않는 데이터에 대해서 분류를 잘하는 것 -> **일반화(generalizaion)** 능력이 좋은 것!

**데이터의 구분**

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/af90faa5-79c4-4d52-8c4a-9769c2b727b9.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=593ecbdaae1043c6aee21e65e4f55a5a&start=1006.813832)

- 학습 데이터 -> 학습시킬때 필요한 데이터
- 테스트 데이터 -> 학습시킨 모델을 테스트할때 사용하는 데이터
- 검증 데이터 -> 어느시점에서 학습을 중단할지 사용하는 데이터

**과적합과 부적합**

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/d16273bc-99f3-4d9a-bcc9-963d42e572a6.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=593ecbdaae1043c6aee21e65e4f55a5a&start=1124.502544)

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/36ef7a5e-0858-482a-b2d5-91e8b4a2e0eb.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8753f4b2a7654570838f8a8b0536a037&start=77.980858)

- 과적합 -> 학습 데이터에서만 ㅈㄴ 잘돌아 가는거 , 학습 안되있는 데이터에는 잘 안돌아 가는거 ㅠㅠ
- 부적합 -> 배우지도 못한놈 ㅠㅠ

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/7ab48128-0683-44d6-87e9-34bede8a5f7e.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8753f4b2a7654570838f8a8b0536a037&start=87.58999)

과적합을 회피하기 위해서는 검증데이터의 기울기의 부호가 바뀔때 학습을 멈추기!

**성능평가**

정확도 (accuracy) = (옳게 분류된 데이터) / (전체 데이터 개수)

정확도를 기준으로 성능평가를 한다.

정확도를 높이려면 **많은 학습데이터**를 사용해야하고 학습데이터와 테스트 데이터는 **겹치지 않아야 한다**

**데이터가 부족한 경우 어떻게 성능평가를 해야할까?**

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/90ba052f-b6bc-4456-902b-22950b19ea44.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8753f4b2a7654570838f8a8b0536a037&start=548.530498)

---

title: 기계학습의 분류, 회귀, 군집화
date: 2021-05-03 01:09:00 -0400
categories: 머신러닝

---

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/5301f751-970a-4ae4-85dc-12615d396665.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8753f4b2a7654570838f8a8b0536a037&start=827.780573)

너무 특정한 case에 대한 데이터만 많아 특정한 case만 학습이 잘되는 경우 -> 데이터가 불균형하다!

**불균형 데이터를 해결하는 방법**

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/39bdabc3-8e0d-42b6-80df-530b2970903c.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8753f4b2a7654570838f8a8b0536a037&start=934.837126)

**분류기 성능평가**

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/0a9b7bd3-457a-40fc-ac53-105a2df65e7c.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8753f4b2a7654570838f8a8b0536a037&start=952.656277)

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/f05f3d25-b650-48c9-9d2a-d6fafcbf32c9.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=8753f4b2a7654570838f8a8b0536a037&start=1204.631381)

재현율과 정밀도가 중요하다!

정확도는 전체 데이터에서 얼마나 정확하게 측정했냐

조화평균 : 정밀도가 높지만 재현율 개판인걸 걸러낼 수 있다. 얼마나 조화롭게 이우러져있나? 하나만 치우쳐지지 않는가? -> 곱샘은 서로 수가 비슷할때 가장 크기때문에 조화를 이룰때가 조화평균 값이 가장 크다

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/5d319058-0825-407d-a349-e052e3bee786.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=228f4257f0cb489db45035ee2864ad06&start=413.003236)

민감도와 재현율로 그래프를 그려보왔을때

위로갈수록 더 좋다, 1곡선이 2곡선보다 훨씬 좋고 정확한 곡선이다.

곡선을 그려 이진분류기의 성능을 측정한다

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/b2e840c8-347b-4d3e-affd-689042c77ad2.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=228f4257f0cb489db45035ee2864ad06&start=575.759253)

y는 정답, f(x)는 모델에서 만들어낸 값

회귀는 정답과 모델값의 차이를 이용해 구한다.

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/c9163659-0e11-4617-bde4-036a9281c26f.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=228f4257f0cb489db45035ee2864ad06&start=878.071076)

함수에 따라서 평평히 될수도있고 굴곡이 질 수도 있다.

성능으로 따져보면 오른쪽이 더 성능이 좋다고 판단한다. -> 점들과 평면의 차이가 오른쪽이 더 작기때문에(회귀가 더 작기 때문에) ->복잡한 모델이 더 좋다 -> 근데 항상 더 복잡한 모델이 더 좋은걸까?

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/e07c5f34-4c7e-44fd-b1d7-7915d90a6a77.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=228f4257f0cb489db45035ee2864ad06&start=1101.145199)

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/b95b7a5c-e707-4331-bb0a-75446596b73e.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=228f4257f0cb489db45035ee2864ad06&start=1225.018738)

첫번째가 부적합, 새번째가 과적합

과적합이 안좋은 이유는 미래의 새로운 데이터가 들어올때 좋은 퍼포먼스를 기대하기 힘들끼 때문이다

목적함수를 통해 부적합인지 과적합인지 정적합인지 확인한다

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/fd5d2ee0-cd9a-4b7b-bf13-513bd8967801.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=d646ba3c3ab147788721ccdb92fb1fed&start=29.907884)

원하는 값이 0,1 두가지 경우라면 로지스틱 회귀를 이용해서 모델의 적합도를 판단한다.

확률을 표현할때 로지스틱 회귀를 많이 쓴다, -> x1의 확률은 0.8, x2는 0.6 .....

크로스 엔트로피는 퀴즈에 나올 수 있다!!!! 크로스 엔트로피에 목적함수가 어떤식으로 적용되는가

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/ec8bda9b-5edc-4f60-8b3b-dc34d1a413ec.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=d646ba3c3ab147788721ccdb92fb1fed&start=880.939276)

정규분포의 형태를 나타낼 수록 더 좋은 함수이다.

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/9c5563fc-aecb-4141-a7b6-a9d98bd77dd5.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=d646ba3c3ab147788721ccdb92fb1fed&start=1095.522022)

앞에 분류와 회귀는 답이 있었지만 비지도 학습은 답이 없다!

[![3. 분류, 회귀 군집화 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/efb3e2a723c24f03b3cdb4d522e3d542/6a9bd2fa-5906-4c87-99bb-8ba3ae2a183e.png)](https://slid.cc/vdocs/efb3e2a723c24f03b3cdb4d522e3d542?v=d646ba3c3ab147788721ccdb92fb1fed&start=1200.095877)

군집화는 보는사람에 따라 달려있다!!(주관적이다) 왼쪽을 오른쪽으로 군집화 할 수는 있지만 다른사람이 군집화를 하면 다른식으로 군집화가 될 수 있다.
