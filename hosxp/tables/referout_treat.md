# `referout_treat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_no | varchar(50) | YES |  | NULL |  |  |
| hn | varchar(50) | YES |  | NULL |  |  |
| subsuffix | varchar(50) | YES |  | NULL |  |  |
| makedate | datetime | YES |  | NULL |  |  |
| stockname | varchar(500) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "refer_no": "11147-1-55999003",
    "hn": "0248015",
    "subsuffix": "1",
    "makedate": "2012-09-18 00:00:00",
    "stockname": "วัดจำนวนOxygen"
  },
  {
    "refer_no": "11147-1-55999003",
    "hn": "0248015",
    "subsuffix": "2",
    "makedate": "2012-09-18 00:00:00",
    "stockname": "วัดจำนวนOxygen"
  },
  {
    "refer_no": "11147-1-55999003",
    "hn": "0248015",
    "subsuffix": "3",
    "makedate": "2012-09-18 00:00:00",
    "stockname": "วัดสัญญาณชีพ (T,P,R,BP)"
  },
  {
    "refer_no": "11147-1-55999003",
    "hn": "0248015",
    "subsuffix": "4",
    "makedate": "2012-09-18 00:00:00",
    "stockname": "วัดสัญญาณชีพ (T,P,R,BP)"
  }
]
```
