
import { video } from "../common/utils/spyTest"

it('plays video', () => {
  // spyOn()してあげることで、関数をmock化して、そのふるまいを自由に定義できる。
  const spy = jest.spyOn(video, 'play').mockReturnValue(false); // ここではfalseを返すように変更
  const isPlaying = video.play();

  // 上でfalseを返すように変更しているので、このテストはNGになる。
  expect(isPlaying).toBe(true);

  // `jest.spyOn()`でモック化した場合は、`mockRestore()`を実行することで、オリジナルの関数へ戻すことができる。
  spy.mockRestore();
});


describe.only("Date#now", () => {
  it("spyOnを使うと好きな時間に固定することができる", () => {

    const date = {
      now() {
        return Date.now();
      }
    }
    // spyOn()してあげることで、関数をmock化して、そのふるまいを自由に定義できる。
    const spy = jest.spyOn(date, "now").mockReturnValue(1643641200); // ここでは2022/01/01を返すように変更
    const dateNow = date.now();

    // 上で2022/01/01を返すように変更しているので、このテストはNGになる。
    expect(dateNow).toBe(1675090800); // 2022/12/31

    // `jest.spyOn()`でモック化した場合は、`mockRestore()`を実行することで、オリジナルの関数へ戻すことができる。
    spy.mockRestore();
  });
});
