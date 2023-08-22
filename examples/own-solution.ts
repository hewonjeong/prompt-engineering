import { getCompletion } from '../ai.js'

const question = `첫번째 항이 10, 다섯번째 항이 -2인 등차수열에 대하여 -29는 몇 번째 항인지 구하시오.`

const solution = `a₅ - a₁ = -2 - 10 = -12\nd = (a₅ - a₁) / (5 - 1) = -12 / 4 = -3\naₙ = a₁ + (n - 1)d\n-29 = 10 + (n - 1)(-3)\n-29 = 10 + -3n + 3\nn = 12
`

const prompt = `
학생이 제출한 답을 채점하려고해. 다음 주어진 순서대로 작업을 수행해

1. 이 문제에 대한 너의 문제 풀이와 답을 먼저 작성해
문제: ${question}

2. 학생이 제출한 답과 너의 답을 비교하여 정답인지 아닌지 판단해
학생이 제출한 답: ${solution}

다음 형식으로 응답해줘
실제 정답: {너가 작성한 문제 풀이와 구한 최종 정답}
학생의 정답 여부: {학생의 답이 위에서 구한 실제 답의 일치 여부 (정답 또는 오답)}
`

console.log(await getCompletion(prompt))
