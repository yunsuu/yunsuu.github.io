---

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/dd355cac-c8f4-4a89-9d1b-eef49e60125d.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=7cc6bcae54be4ee3aa1b5f3c9754f821&start=223.532685)

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/c57fe209-de19-40bb-a667-36ab32afdcda.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=7cc6bcae54be4ee3aa1b5f3c9754f821&start=336.295732)

일반군집화 -> 딱딱 나뉨

퍼지군집화 -> 데이터가 양다리 새다리씩 걸침

아웃라이어 -> 중심에서 얼마나 떨어진 값이냐

얼마나 군집을 잘했는가 판단하는 기준은 각 군집간 거리가 얼마나 먼지, 멀면 멀수록 좋은 군집이다.

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/b80f3c32-9d30-4fe0-9fa1-444681a42bec.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=7cc6bcae54be4ee3aa1b5f3c9754f821&start=480.49047)

데이터의 분포를 잘 맞추는게 중요하다.

이 데이터를 알고있다 -> 이 데이터의 분포를 알고있다 -> 이 데이터가 들어갔을때 output 값을 알고있다 는 의미로 연결된다

밀도 : 주어진 위치에서 얼마나 데이터가 모여있느냐?

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/c8f462be-1e91-4441-91ee-552f76928642.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=7cc6bcae54be4ee3aa1b5f3c9754f821&start=893.336745)

밀도추정의 방법은 다음과 같이 새가지가 있다.

모수적 -> 가정하고 ㄱㄱ , 비모수적 -> 가정안하고 ㄱㄱ

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/e9e9ecaf-6079-4dc5-821e-b9ef9bca6f60.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=7cc6bcae54be4ee3aa1b5f3c9754f821&start=1062.616705)

차원축소는 고차원의 데이터 -> 저차원의 데이터 로 변환하는 것이다

얼굴 3d모델을 표현했을땐 저런식으로 표현할 수 있다.

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/f8886c0d-e14b-4842-a1bd-50724a49646c.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=7cc6bcae54be4ee3aa1b5f3c9754f821&start=1272.737685)

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/1bfcab84-5f37-4730-8fca-fd2a5a7f2d88.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=162140689ab3400392c209761e1d0402&start=42.015241)

차원의 저주는 차원이 커질수록 x값에 대한 y값의 차이들이 점점 줄어드는 걸 말한다 -> 데이터간의 식별하기가 점점 힘들어진다

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/1c68be5b-ec64-46de-975a-e4c551c9e375.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=162140689ab3400392c209761e1d0402&start=303.803904)

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/02866fca-3bfb-4a41-a0ea-e145a9e77241.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=162140689ab3400392c209761e1d0402&start=518.238808)

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/0b088172-90d1-42df-a7e8-9b9f2cd0fb39.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=162140689ab3400392c209761e1d0402&start=727.354308)

아주 중요하다!! 뒤에서도 나온다

아웃 라이어 : 좀 튀는새끼들 아웃라이어는 부정사용감지 시스템, 침입탐지 시스템을 이용해서 탐지한다

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/ec2e6cea-ac5b-44ea-8bd3-a884d0ceb3f8.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=162140689ab3400392c209761e1d0402&start=935.907283)

탐지의 종류는 정상을 학습하고 비정상을 탐지하면 anomaly, 비정상을 학습하고 이와 같음을 비교하면 misuse 정사이 너무 적으면 misuse를 이용해 판단할 수도 있다. 대부분의 실질적인 바이러스는 misuse를 이용해 판단한다고 한다.

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/82d7b8b9-731d-40e9-aa51-761a9def6a90.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=162140689ab3400392c209761e1d0402&start=1228.632276)

반지도 학습은 **입력값에 대한 결과값이 없는 데이터**를 지도학습하는 방법 , 같은 군집에 속하는건 동일한 부류에 소속하도록 학습한다.

[![4.군집화, 차원축소, 이상치 탐지, 반지도 학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/aadf7ff43a604fae9de5b4e6e70eff4b/106f9f44-0a5b-4b32-a224-e312121129fb.png)](https://slid.cc/vdocs/aadf7ff43a604fae9de5b4e6e70eff4b?v=162140689ab3400392c209761e1d0402&start=1282.872437)

반지도 학습의 가정 한번 보고 넘어가기
