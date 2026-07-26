# `pttype_uc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_uc_type_id | int(11) | NO | PRI | 0 |  |  |
| pttype_uc_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_pttype_uc_type_name | pttype_uc_type_name | yes | 1 |
| PRIMARY | pttype_uc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "pttype_uc_type_id": 1,
    "pttype_uc_type_name": "บัตรทองมี ท."
  },
  {
    "pttype_uc_type_id": 2,
    "pttype_uc_type_name": "บัตรทอง ไม่มี ท."
  }
]
```
