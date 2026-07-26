# `tmt_tpp_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tpp_code | varchar(15) | NO | PRI |  |  |  |
| tpp_name | varchar(500) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_tpp_name | tpp_name | no | 1 |
| PRIMARY | tpp_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tpp_code": "1270862",
    "tpp_name": "0.01% ATROPINE EYE DROP 10 ML (M 13756) (atropine sulfate 10 mg/100 mL) eye drops, solution, 10 mL bottle (TPP)"
  },
  {
    "tpp_code": "1182076",
    "tpp_name": "0.02% MITOMYCIN-C EYE DROPS (F 13777) (mitomycin 20 mg/100 mL) eye drops, solution, 10 mL bottle (TPP)"
  },
  {
    "tpp_code": "1354290",
    "tpp_name": "0.02% TA CREAM 30 G (F 10666) (triamcinolone acetonide 20 mg/100 g) cream, 30 g tube (TPP)"
  },
  {
    "tpp_code": "1182133",
    "tpp_name": "0.04% MITOMYCIN-C EYE DROPS (F 13777) (mitomycin 40 mg/100 mL) eye drops, solution, 10 mL bottle (TPP)"
  },
  {
    "tpp_code": "1271717",
    "tpp_name": "0.05% VORICONAZOLE EYE INJECTION (M 13777) (voriconazole 50 mg/100 mL) solution for injection, 0.2 mL prefilled syr (TPP)"
  },
  {
    "tpp_code": "1178112",
    "tpp_name": "0.1 %TA + 5 % LCD CREAM (F 12499) (coal tar 5 mL/100 g + triamcinolone acetonide 100 mg/100 g) cream, 10 g jar (TPP)"
  },
  {
    "tpp_code": "1201725",
    "tpp_name": "0.1 %TA + 5 % LCD CREAM (F 12499) (coal tar 5 mL/100 g + triamcinolone acetonide 100 mg/100 g) cream, 50 g jar (TPP)"
  },
  {
    "tpp_code": "1174146",
    "tpp_name": "0.1 %TA + 5 % LCD CREAM (สำนักอนามัยกรุงเทพมหานคร) (coal tar 5 mL/100 g + triamcinolone acetonide 100 mg/100 g) cream, 250 g jar (TPP)"
  }
]
```
