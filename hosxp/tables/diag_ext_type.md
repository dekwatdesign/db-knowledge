# `diag_ext_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| diag_ext_type_id | int(11) | NO | PRI | 0 |  |  |
| diag_ext_type_name | varchar(200) | YES | UNI | NULL |  |  |
| ext_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_diag_ext_type_name | diag_ext_type_name | yes | 1 |
| PRIMARY | diag_ext_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "diag_ext_type_id": 1,
    "diag_ext_type_name": "ซ้าย",
    "ext_code": "1"
  },
  {
    "diag_ext_type_id": 2,
    "diag_ext_type_name": "ขวา",
    "ext_code": "1"
  },
  {
    "diag_ext_type_id": 3,
    "diag_ext_type_name": "ทั้งสองด้าน",
    "ext_code": "2"
  }
]
```
