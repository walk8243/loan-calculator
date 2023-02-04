# loan-calculator

ローンの返済額を計算する

## 実行方法

```sh
$ npm ci
$ npm start -- -h
```

## 計算式

### 毎月の返済額

```math
monthlyPayment = \frac{corpus \times interest \times ( 1 + interest ) ^ {count}}{( 1 + interest ) ^ {count} - 1}
```

| 計算式で用いる変数名 | 用語 | 備考 |
|---|---|---|
| corpus | 元金 | |
| interest | 月利 | `年利 / 12` で計算 |
| count | 支払回数 | `ローン年数 * 12` で計算 |
| monthlyPayment | 毎月返済額 | |

### ボーナス払いの返済額

年2回のボーナス払いを想定

```math
bonusPayment = \frac{corpus \times interest \times ( 1 + interest ) ^ {count}}{( 1 + interest ) ^ {count} - 1}
```

| 計算式で用いる変数名 | 用語 | 備考 |
|---|---|---|
| corpus | 元金 | |
| interest | 金利 | `年利 / 2` で計算 |
| count | 支払回数 | `ローン年数 * 2` で計算 |
| bonusPayment | 返済額 | |
