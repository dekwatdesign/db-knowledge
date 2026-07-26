# `examination_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| examination_type_id | int(11) | NO | PRI | 0 |  |  |
| examination_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_examination_type_name | examination_type_name | yes | 1 |
| PRIMARY | examination_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "examination_type_id": 1,
    "examination_type_name": "Lab Profile"
  },
  {
    "examination_type_id": 2,
    "examination_type_name": "Lab Item"
  },
  {
    "examination_type_id": 3,
    "examination_type_name": "Radiology"
  },
  {
    "examination_type_id": 4,
    "examination_type_name": "Lab"
  }
]
```
