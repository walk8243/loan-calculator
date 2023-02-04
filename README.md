# loan-calculator

ローンの返済額を計算する

## 計算式

| 計算式で用いる変数名 | 用語 | 備考 |
|---|---|---|
| corpus | 元金 | |
| interest | 月利 | `年利 / 12` で計算 |
| count | 支払回数 | `ローン年数 * 12` で計算 |
| monthlyPayment | 毎月返済額 | |

### 毎月の返済額

```math
monthlyPayment = \frac{corpus \times interest \times ( 1 + interest ) ^ {count}}{( 1 + interest ) ^ {count} - 1}
```
