# `visit_protect_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_protect_type_id | int(11) | NO | PRI | 0 |  |  |
| visit_protect_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_visit_protect_type_name | visit_protect_type_name | yes | 1 |
| PRIMARY | visit_protect_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "visit_protect_type_id": 1,
    "visit_protect_type_name": "ห้ามทุกคนเข้าถึงยกเว้นผู้ทำการปกปิด"
  },
  {
    "visit_protect_type_id": 2,
    "visit_protect_type_name": "เข้าถึงได้เฉพาะแพทย์"
  },
  {
    "visit_protect_type_id": 3,
    "visit_protect_type_name": "ห้ามทุกคนเข้าถึง"
  }
]
```
