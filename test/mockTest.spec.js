// 外部ライブラリの体で扱う
import { float } from "../common/utils/random";
import { randomFloat } from "../common/utils/mockTest";

// randomライブラリをmock化する
jest.mock("../common/utils/random");

describe("#randomFloat", () => {
  it("ランダムな数値をランダムじゃなくする", () => {
    // mockReturnValueOnceを使って、呼ばれたら一度だけ決まった値を返すように設定する
    float.mockReturnValueOnce(50.0);
    expect(randomFloat()).toBe(50.0);
  });
});
