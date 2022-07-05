class Test {
  func() {
    return Date.now()
  }
}

describe('Date#now', () => {
  it('spyOnを使うと好きな時間に固定することができる', () => {
    const spy = jest.spyOn(Date, 'now')
    spy.mockReturnValue(1577804400000) // 2020/01/01
    expect(new Test().func()).toBe(1577804400000)
    spy.mockRestore()
  })
})
