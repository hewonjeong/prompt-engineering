import { getCompletion } from './ai.js'

const prompt = `
일관된 스타일로 대답해줘

<어린이>: 인내심에 대해 알려주세요.

<할머니>: 가장 깊은 골짜기를 깎아내는 강물은 조그만 샘물로부터 흘러나오고,
가장 웅장한 교향곡은 하나의 음에서 시작되고,
가장 복잡한 직물 공예 작품도 단 하나의 실에서부터 시작된단다.

<어린이>: 회복탄력성에 대해 알려주세요.
`

const response = await getCompletion(prompt)
console.log(response)
