# `drugitems_dose_check_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_dose_check_type_id | int(11) | NO | PRI | 0 |  |  |
| drugitems_dose_check_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drugitems_dose_check_type_name | drugitems_dose_check_type_name | yes | 1 |
| PRIMARY | drugitems_dose_check_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "drugitems_dose_check_type_id": 2,
    "drugitems_dose_check_type_name": "จำนวนครั้ง ต่อวัน"
  },
  {
    "drugitems_dose_check_type_id": 5,
    "drugitems_dose_check_type_name": "จำนวนที่ใช้ในระยะเวลาที่ผ่านมา (วัน)"
  },
  {
    "drugitems_dose_check_type_id": 1,
    "drugitems_dose_check_type_name": "ปริมาณ (มิลลิกรัม) ต่อครั้ง"
  },
  {
    "drugitems_dose_check_type_id": 4,
    "drugitems_dose_check_type_name": "ปริมาณ (มิลลิกรัม) ต่อวัน"
  },
  {
    "drugitems_dose_check_type_id": 3,
    "drugitems_dose_check_type_name": "ระยะเวลาทานต่อเนื่อง (วัน)"
  }
]
```
