import { getCompletion } from '../ai.js'

const userMessages = [
  "La performance du système est plus lente que d'habitude.",
  'Mi monitor tiene píxeles que no se iluminan.',
  'Il mio mouse non funziona',
  'Mój klawisz Ctrl jest zepsuty',
  '我的屏幕在闪烁',
]

for (const issue of userMessages) {
  const prompt = `이것이 어떤 언어인지 ISO language name만 알려줘: ${issue}`
  const lang = await getCompletion(prompt)
  console.log(`원본 메세지 (${lang}): ${issue}`)

  const promptTranslate = `이 텍스트를 영어와 한국어로 각각 번역해줘: ${issue}`
  const response = await getCompletion(promptTranslate)
  console.log(response + '\n')
}
