# `dt_treatment_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_treatment_type_id | int(11) | NO | PRI | 0 |  |  |
| dt_treatment_type_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_treatment_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "dt_treatment_type_id": 1,
    "dt_treatment_type_name": "เคลือบหลุมร่องฟัน"
  },
  {
    "dt_treatment_type_id": 2,
    "dt_treatment_type_name": "อุดฟัน"
  },
  {
    "dt_treatment_type_id": 3,
    "dt_treatment_type_name": "ถอนฟัน"
  },
  {
    "dt_treatment_type_id": 4,
    "dt_treatment_type_name": "รักษารากฟัน"
  },
  {
    "dt_treatment_type_id": 5,
    "dt_treatment_type_name": "ใส่ฟันเทียม"
  },
  {
    "dt_treatment_type_id": 6,
    "dt_treatment_type_name": "ขูดหินน้ำลาย"
  },
  {
    "dt_treatment_type_id": 7,
    "dt_treatment_type_name": "เกลารากฟัน"
  }
]
```
