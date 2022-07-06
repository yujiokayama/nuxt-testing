import { rest } from "msw"
import { setupServer } from "msw/node";
import axios from "axios";


// mockサーバー
const mockServer = setupServer(
  rest.get('/greeting', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json('Hello'))
  })
)

// テスト対象の関数
const greeting = async (name) => {
  const word =  await axios.get('/greeting')
  return `${word.data} ${name}`
}

describe('greeting', () => {
  beforeAll(() => {
    // インターセプトスタート
    mockServer.listen()
  })
  afterAll(() => {
    // インターセプトストップ
    mockServer.close()
  })

  test('挨拶を返す', async () => {
    const result = await greeting('hoge')

    expect(result).toEqual('Hello hoge') // Green
  })
})
