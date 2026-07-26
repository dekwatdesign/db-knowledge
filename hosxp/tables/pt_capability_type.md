# `pt_capability_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_capability_type_id | int(11) | NO | PRI | 0 |  |  |
| pt_capability_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pt_capability_type_name | pt_capability_type_name | yes | 1 |
| PRIMARY | pt_capability_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "pt_capability_type_id": 1,
    "pt_capability_type_name": "มาครั้งแรก"
  },
  {
    "pt_capability_type_id": 2,
    "pt_capability_type_name": "ไม่ดีขึ้น"
  },
  {
    "pt_capability_type_id": 3,
    "pt_capability_type_name": "ทำกิจกรรมได้ปกติ"
  },
  {
    "pt_capability_type_id": 4,
    "pt_capability_type_name": "ทำกิจกรรมได้ดีขึ้น"
  }
]
```
