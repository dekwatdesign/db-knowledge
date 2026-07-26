# `tmt_tp_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tp_code | varchar(10) | NO | PRI |  |  |  |
| tp_name | varchar(250) | YES | MUL | NULL |  |  |
| manufacturer | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | tp_name | no | 1 |
| PRIMARY | tp_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tp_code": "1049227",
    "tp_name": "0.0001% DPCP (F 12249) (diphenylcyclopropenone 100 mcg/100 mL) cutaneous solution (TP)",
    "manufacturer": "สถาบันโรคผิวหนัง"
  },
  {
    "tp_code": "1049270",
    "tp_name": "0.0005% DPCP (F 12249) (diphenylcyclopropenone 500 mcg/100 mL) cutaneous solution (TP)",
    "manufacturer": "สถาบันโรคผิวหนัง"
  },
  {
    "tp_code": "1049329",
    "tp_name": "0.001% DPCP (F 12249) (diphenylcyclopropenone 1 mg/100 mL) cutaneous solution (TP)",
    "manufacturer": "สถาบันโรคผิวหนัง"
  },
  {
    "tp_code": "1049372",
    "tp_name": "0.005% DPCP (F 12249) (diphenylcyclopropenone 5 mg/100 mL) cutaneous solution (TP)",
    "manufacturer": "สถาบันโรคผิวหนัง"
  },
  {
    "tp_code": "1270843",
    "tp_name": "0.01% ATROPINE EYE DROP 10 ML (M 13756) (atropine sulfate 10 mg/100 mL) eye drops, solution (TP)",
    "manufacturer": "จุฬาลงกรณ์ สภากาชาดไทย,รพ."
  },
  {
    "tp_code": "1049420",
    "tp_name": "0.01% DPCP (F 12249) (diphenylcyclopropenone 10 mg/100 mL) cutaneous solution (TP)",
    "manufacturer": "สถาบันโรคผิวหนัง"
  },
  {
    "tp_code": "1182048",
    "tp_name": "0.02% MITOMYCIN-C EYE DROPS (F 13777) (mitomycin 20 mg/100 mL) eye drops, solution (TP)",
    "manufacturer": "โรงพยาบาลศรีนครินทร์"
  },
  {
    "tp_code": "1354261",
    "tp_name": "0.02% TA CREAM 30 G (F 10666) (triamcinolone acetonide 20 mg/100 g) cream (TP)",
    "manufacturer": "โรงพยาบาลมหาราชนครราชสีมา"
  }
]
```
