# `ipt_doctor_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_doctor_type_id | int(11) | NO | PRI | 0 |  |  |
| ipt_doctor_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipt_doctor_type_name | ipt_doctor_type_name | yes | 1 |
| PRIMARY | ipt_doctor_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ipt_doctor_type_id": 1,
    "ipt_doctor_type_name": "แพทย์เจ้าของคนไข้"
  },
  {
    "ipt_doctor_type_id": 3,
    "ipt_doctor_type_name": "แพทย์ที่ปรึกษา"
  },
  {
    "ipt_doctor_type_id": 2,
    "ipt_doctor_type_name": "แพทย์ผู้ร่วมรักษา"
  }
]
```
