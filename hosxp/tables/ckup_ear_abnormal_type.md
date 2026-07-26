# `ckup_ear_abnormal_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_ear_abnormal_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_ear_abnormal_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_ear_abnormal_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ckup_ear_abnormal_type_id": 1,
    "ckup_ear_abnormal_type_name": "เสียน้อย"
  },
  {
    "ckup_ear_abnormal_type_id": 2,
    "ckup_ear_abnormal_type_name": "เสียปานกลาง"
  },
  {
    "ckup_ear_abnormal_type_id": 3,
    "ckup_ear_abnormal_type_name": "เสียมาก"
  },
  {
    "ckup_ear_abnormal_type_id": 4,
    "ckup_ear_abnormal_type_name": "เสียรุนแรง"
  }
]
```
