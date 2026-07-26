# `refertype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refertype_id | varchar(5) | NO | PRI |  |  |  |
| refertype_name | varchar(50) | YES |  | NULL |  |  |
| refergroup_id | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | refertype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "refertype_id": "01",
    "refertype_name": "โรคทั่วไป",
    "refergroup_id": "01"
  },
  {
    "refertype_id": "02",
    "refertype_name": "อุบัติเหตุ",
    "refergroup_id": "02"
  },
  {
    "refertype_id": "03",
    "refertype_name": "Stroke Fast Track",
    "refergroup_id": "02"
  },
  {
    "refertype_id": "04",
    "refertype_name": "คลอดบุตร",
    "refergroup_id": "02"
  },
  {
    "refertype_id": "05",
    "refertype_name": "หัวใจ",
    "refergroup_id": "02"
  },
  {
    "refertype_id": "06",
    "refertype_name": "ทารกแรกเกิด",
    "refergroup_id": "02"
  }
]
```
