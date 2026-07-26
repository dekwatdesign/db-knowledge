# `moph_refer_expire_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| moph_refer_expire_type_id | int(11) | NO | PRI | 0 |  |  |
| moph_refer_expire_type_name | varchar(255) | YES |  | NULL |  |  |
| moph_refer_expire_type_ename | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | moph_refer_expire_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "moph_refer_expire_type_id": 1,
    "moph_refer_expire_type_name": "ระบุวันหมดอายุของใบส่งตัว",
    "moph_refer_expire_type_ename": "date"
  },
  {
    "moph_refer_expire_type_id": 2,
    "moph_refer_expire_type_name": "สำหรับการรักษาครั้งนี้เท่านั้น (ใช้ได้ 1 ครั้ง)",
    "moph_refer_expire_type_ename": "current_treatment_only"
  },
  {
    "moph_refer_expire_type_id": 3,
    "moph_refer_expire_type_name": "ตามความเห็นแพทย์ รพ.ปลายทาง",
    "moph_refer_expire_type_ename": "until_approval_return"
  }
]
```
