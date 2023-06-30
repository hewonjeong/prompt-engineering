import { getCompletion } from '../ai.js'

const review = `그래서 11월 한 달 동안은 17피스 시스템을 약 절반 할인된 49달러에 시즌 한정으로 판매했지만, 12월 둘째 주에 어떤 이유에서인지(가격 폭리라고 부릅니다) 같은 시스템의 가격이 모두 70달러에서 89달러 사이로 올라갔습니다. 그리고 11피스 시스템도 이전 판매 가격인 29달러에서 10달러 정도 가격이 올랐습니다. 그래서 괜찮아 보이지만 본체를 보면 칼날이 제자리에 고정되는 부분이 몇 년 전의 이전 버전만큼 좋아 보이지는 않는데, 저는 아주 부드럽게 사용할 계획입니다 (예를 들어 콩, 얼음, 쌀 등 아주 단단한 재료를 먼저 분쇄한 다음 믹서기에서 분쇄합니다). 먼저 블렌더에서 원하는 크기로 분쇄한 다음 휘핑 날로 전환하여 더 고운 가루로 만들고, 스무디를 만들 때는 먼저 십자 칼날을 사용한 다음 더 곱거나 덜 펄프가 필요한 경우 납작 칼날을 사용합니다). 스무디를 만들 때 특별한 팁: 과일과 채소를 잘게 썰어 얼려두면(시금치를 사용할 경우 시금치를 살짝 데친 후 사용할 때까지 얼려두고 셔벗을 만들 경우 중소형 푸드 프로세서를 사용하세요) 스무디를 만들 때 얼음을 너무 많이 넣지 않을 수 있습니다. 약 1년이 지나자 모터에서 이상한 소리가 났어요. 고객 서비스에 전화했지만 이미 보증 기간이 만료되어서 다른 제품을 구입해야 했습니다. 참고: 이런 유형의 제품에서는 전반적인 품질이 떨어지기 때문에 브랜드 인지도와 소비자 충성도에 의존해 판매를 유지하고 있습니다. 약 이틀 만에 받았습니다.`

const prompt = `
고객 서비스 AI 어시스턴트로써 소중한 고객에게 이메일 답장을 보내야합니다.
고객의 리뷰가 세 개의 따옴표로 구분되어 주어지면, 리뷰에 대한 감사의 답장을 생성합니다.
감정이 긍정적이거나 중립적이면 고객의 리뷰에 대해 감사를 표합니다.
감정이 부정적이면 사과하고 고객 서비스 센터에 연락할 수 있도록 제안합니다.
리뷰의 구체적인 세부 정보를 언급하세요. 간결하고 전문적인 어조로 작성하세요.
이메일에 'AI 고객 상담원'으로 서명합니다.
고객 리뷰: """${review}"""
`

const response = await getCompletion(prompt)
console.log(response)