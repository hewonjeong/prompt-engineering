import { getCompletion } from '../ai.js'

const review = `침실을 위한 멋진 램프가 필요했는데, 이 제품은 수납공간이 추가로 있고 가격대가 너무 높지 않았어요. 빠르게 도착했어요.  배송 중에 램프 줄이 끊어졌는데, 회사에서 흔쾌히 새 것을 보내주었습니다. 그것도 며칠 안에 도착했어요. 조립도 쉬웠습니다.  빠진 부품이 있어서 고객지원팀에 연락했더니 매우 빠르게 필요한 부품을 보내주었어요! Lumina는 고객과 제품을 아끼는 훌륭한 회사인 것 같습니다!!!`

const prompt = `
리뷰 텍스트에서 다음 항목을 식별합니다: 
- 감정(positive 또는 negative)
- 리뷰 작성자가 분노를 표현하고 있나요? (true 또는 false)
- 리뷰어가 구매한 제품
- 해당 제품을 만든 회사

리뷰는 따옴표 세 개로 구분됩니다.
응답의 형식은 다음을 사용하여 JSON 객체로 지정합니다.
"sentiment", "anger", "item" 및 "brand"를 키로 사용합니다.
정보가 없는 경우 null을 값으로 사용합니다.
anger 값은 boolean 형식으로 지정합니다.

리뷰 텍스트: """${review}"""
`

const response = await getCompletion(prompt)
console.log(response)
