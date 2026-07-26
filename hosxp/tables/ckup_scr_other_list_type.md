# `ckup_scr_other_list_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_scr_other_list_type_id | int(11) | NO | PRI | 0 |  |  |
| ckup_scr_other_list_type_name | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ckup_scr_other_list_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "ckup_scr_other_list_type_id": 1,
    "ckup_scr_other_list_type_name": "ลักษณะงานที่รับผิดชอบ"
  },
  {
    "ckup_scr_other_list_type_id": 2,
    "ckup_scr_other_list_type_name": "โรคหรือผลกระทบที่ได้รับจากการทำงาน"
  },
  {
    "ckup_scr_other_list_type_id": 3,
    "ckup_scr_other_list_type_name": "งานอดิเรก"
  }
]
```
