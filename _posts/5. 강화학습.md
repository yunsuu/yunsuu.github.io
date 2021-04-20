[→ Open in Slid](https://slid.cc/vdocs/19678884f93e4d5188a513d54664b456)


---




[![5. 강화학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/19678884f93e4d5188a513d54664b456/3ee0ddac-3df8-4e0a-b4ba-d13b71fa13bb.png)](https://slid.cc/vdocs/19678884f93e4d5188a513d54664b456?v=5703155c4c754b269e889b538eccdef2&start=247.327022)


에이전트 = 프로그램


순서 : 엑션 -> 보상 -> 상태변경, 이걸 계에에에속 반복하면서 학습하기




[![5. 강화학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/19678884f93e4d5188a513d54664b456/e121f66b-4519-42de-9c31-e059ee122a9c.png)](https://slid.cc/vdocs/19678884f93e4d5188a513d54664b456?v=5703155c4c754b269e889b538eccdef2&start=508.957587)


비지도 학습 vs 지도학습 vs 강화학습


비지도학습 : input만 주어지고 정답없음, 함수찾기


지도학습 : input과 정답이 같이 주어짐 , 패턴(군집) 구분하기


강화학습 : 행위와 보상의 관계, 최대 보상을 받는 경우 찾기(제일 개꿀빨 수 있는 알고리즘 찾기)




[![5. 강화학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/19678884f93e4d5188a513d54664b456/957f8160-171a-453e-8c7a-605522facf88.png)](https://slid.cc/vdocs/19678884f93e4d5188a513d54664b456?v=5703155c4c754b269e889b538eccdef2&start=815.509871)

[![5. 강화학습 image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/19678884f93e4d5188a513d54664b456/8984bb3e-5e75-4461-a8b8-f069725b4bda.png)](https://slid.cc/vdocs/19678884f93e4d5188a513d54664b456?v=5703155c4c754b269e889b538eccdef2&start=1033.344034)


마르코프 결정과정 : 과거의 영향을 생각하지 않으면서 미래의 상태를 예측하는 모델


과거의 영향을 고려하지 않는 이유는 궤적에서 **어떠한 상태는 이전의 모든 상태에 대한 정보를 포함한다고 가정하는데**, 이를 마르코프 속성(markov property)이라고 부른다.


강화학습 예시 : 막대기 중앙에 새우기 위해서는 강하게 새게 치는것보단 약하게 살삭 치는게 좋다 -> 적당히 약하게 치면 보상 많이 주기



