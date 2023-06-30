# Prompt Engineering

[ChatGPT Prompt Engineering for Developers](https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers) 강의를 들으면서 TypeScript, Node.js를 사용하여 작성한 예제 코드입니다.

## Setup

이 프로젝트 디렉토리에서 `.env` 파일을 생성하고 `OPENAI_API_KEY`로 설정합니다. OpenAI의 secret key는 [OpenAI > API keys](https://platform.openai.com/account/api-keys) 페이지에서 만들 수 있습니다.

```bash
cd prompt-engineering
cp .env.example .env
```

프로젝트 디렉토리에서 다음 명령을 실행하여 의존성을 설치하고 스크립트를 실행할 수 있습니다. pnpm이 설치되어 있지 않다면 [여기에서 설치](https://pnpm.io/installation)하실 수 있습니다.

```bash
pnpm install
pnpm ts-node examples/summarizing.ts
```
