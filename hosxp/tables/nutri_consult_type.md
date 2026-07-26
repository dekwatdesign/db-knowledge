# `nutri_consult_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nutri_consult_type_id | int(11) | NO | PRI | 0 |  |  |
| nutri_consult_type_name | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | nutri_consult_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "nutri_consult_type_id": 1,
    "nutri_consult_type_name": "โภชนศึกษา"
  },
  {
    "nutri_consult_type_id": 2,
    "nutri_consult_type_name": "Consult"
  }
]
```
