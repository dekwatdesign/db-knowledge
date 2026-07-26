# `ipt_admit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_admit_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_admit_type_name | varchar(200) | YES | UNI | NULL |  |  |
| is_ambulatory | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_admit_type_name | ipt_admit_type_name | yes | 1 |
| PRIMARY | ipt_admit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "ipt_admit_type_id": 1,
    "ipt_admit_type_name": "ทั่วไป",
    "is_ambulatory": null
  },
  {
    "ipt_admit_type_id": 2,
    "ipt_admit_type_name": "อุบัติเหตุ/Refer",
    "is_ambulatory": null
  },
  {
    "ipt_admit_type_id": 3,
    "ipt_admit_type_name": "คลอดบุตร",
    "is_ambulatory": null
  },
  {
    "ipt_admit_type_id": 4,
    "ipt_admit_type_name": "แรกเกิด",
    "is_ambulatory": null
  },
  {
    "ipt_admit_type_id": 5,
    "ipt_admit_type_name": "Ambulatory(ODS)",
    "is_ambulatory": "Y"
  }
]
```
