# `psych_assess_bdi_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_bdi_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_bdi_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | psych_assess_bdi_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "psych_assess_bdi_type_id": 1,
    "psych_assess_bdi_type_name": "5 - 9 ปกติ"
  },
  {
    "psych_assess_bdi_type_id": 2,
    "psych_assess_bdi_type_name": "10 - 18 เล็กน้อยถึงปานกลาง"
  },
  {
    "psych_assess_bdi_type_id": 3,
    "psych_assess_bdi_type_name": "19 - 29 ปานกลางถึงมาก"
  },
  {
    "psych_assess_bdi_type_id": 4,
    "psych_assess_bdi_type_name": "30 ขึ้นไป สูงมาก"
  }
]
```
