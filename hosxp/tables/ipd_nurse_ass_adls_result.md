# `ipd_nurse_ass_adls_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_nurse_ass_adls_result_id | int(11) | NO | PRI | 0 |  |  |
| ipd_nurse_ass_adls_result_max | int(11) | YES |  | NULL |  |  |
| ipd_nurse_ass_adls_result_min | int(11) | YES |  | NULL |  |  |
| result_name_en | varchar(250) | YES |  | NULL |  |  |
| result_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ipd_nurse_ass_adls_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ipd_nurse_ass_adls_result_id": 1,
    "ipd_nurse_ass_adls_result_max": 4,
    "ipd_nurse_ass_adls_result_min": 0,
    "result_name_en": "Very low initial score, total depencdence",
    "result_name": "ภาวะพึ่งพาโดยสมบูรณ์"
  },
  {
    "ipd_nurse_ass_adls_result_id": 2,
    "ipd_nurse_ass_adls_result_max": 8,
    "ipd_nurse_ass_adls_result_min": 5,
    "result_name_en": "Low initial score, severe dependence",
    "result_name": "ภาวะพึ่งพารุนแรง"
  },
  {
    "ipd_nurse_ass_adls_result_id": 3,
    "ipd_nurse_ass_adls_result_max": 11,
    "ipd_nurse_ass_adls_result_min": 9,
    "result_name_en": "intermediate initial score, moderately server dependence",
    "result_name": "ภาวะพึ่งพาปานกลาง"
  },
  {
    "ipd_nurse_ass_adls_result_id": 4,
    "ipd_nurse_ass_adls_result_max": 20,
    "ipd_nurse_ass_adls_result_min": 12,
    "result_name_en": "intermediate high, midly severs dependence considerstion of discharging home",
    "result_name": "ไม่เป็นการพึ่งพา"
  }
]
```
