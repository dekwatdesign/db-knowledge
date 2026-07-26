# `patient_st5_value`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_st5_value_id | int(11) | NO | PRI | 0 |  |  |
| patient_st5_value_min | int(11) | YES |  | NULL |  |  |
| patient_st5_value_max | int(11) | YES |  | NULL |  |  |
| patient_st5_value_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | patient_st5_value_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "patient_st5_value_id": 1,
    "patient_st5_value_min": 0,
    "patient_st5_value_max": 4,
    "patient_st5_value_name": "ไม่มีความเครียด"
  },
  {
    "patient_st5_value_id": 2,
    "patient_st5_value_min": 5,
    "patient_st5_value_max": 7,
    "patient_st5_value_name": "เครียดปานกลาง"
  },
  {
    "patient_st5_value_id": 3,
    "patient_st5_value_min": 8,
    "patient_st5_value_max": 100,
    "patient_st5_value_name": "เครียดมาก"
  }
]
```
