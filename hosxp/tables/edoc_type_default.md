# `edoc_type_default`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_type_default_id | int(11) | NO | PRI | 0 |  |  |
| edoc_type_default_name | varchar(100) | YES |  | NULL |  |  |
| edoc_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_type_default_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "edoc_type_default_id": 1,
    "edoc_type_default_name": "หนังสือเข้าสารบรรญกลาง",
    "edoc_type_id": 1
  },
  {
    "edoc_type_default_id": 2,
    "edoc_type_default_name": "หนังสือเข้ากอง",
    "edoc_type_id": 3
  },
  {
    "edoc_type_default_id": 3,
    "edoc_type_default_name": "หนังสือออกกอง",
    "edoc_type_id": 16
  }
]
```
