# `home_visit_signed_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| home_vt_signed_type_id | int(11) | NO | PRI | 0 |  |  |
| home_vt_signed_type_name | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | home_vt_signed_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "home_vt_signed_type_id": 1,
    "home_vt_signed_type_name": "patient"
  },
  {
    "home_vt_signed_type_id": 2,
    "home_vt_signed_type_name": "relative"
  },
  {
    "home_vt_signed_type_id": 3,
    "home_vt_signed_type_name": "doctor"
  }
]
```
