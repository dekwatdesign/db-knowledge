# `opd_qs_limit_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opd_qs_limit_type_id | int(11) | NO | PRI | 0 |  |  |
| opd_qs_limit_type_name | varchar(200) | YES | UNI | NULL |  |  |
| check_access | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opd_qs_limit_type_name | opd_qs_limit_type_name | yes | 1 |
| PRIMARY | opd_qs_limit_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "opd_qs_limit_type_id": 1,
    "opd_qs_limit_type_name": "ทดสอบ W:5 A:3 O:2 = 10",
    "check_access": null
  }
]
```
