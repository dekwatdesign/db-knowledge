# `patient_color`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_color_id | int(11) | NO | PRI | 0 |  |  |
| patient_color_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_patient_color_name | patient_color_name | yes | 1 |
| PRIMARY | patient_color_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "patient_color_id": 1,
    "patient_color_name": "ขาว"
  },
  {
    "patient_color_id": 2,
    "patient_color_name": "เหลือง"
  },
  {
    "patient_color_id": 3,
    "patient_color_name": "ดำแดง"
  },
  {
    "patient_color_id": 4,
    "patient_color_name": "ดำ"
  }
]
```
