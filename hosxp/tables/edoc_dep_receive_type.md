# `edoc_dep_receive_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| edoc_dep_receive_type_id | int(11) | NO | PRI | 0 |  |  |
| edoc_dep_receive_type_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | edoc_dep_receive_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "edoc_dep_receive_type_id": 1,
    "edoc_dep_receive_type_name": "รับทราบ"
  },
  {
    "edoc_dep_receive_type_id": 2,
    "edoc_dep_receive_type_name": "เพื่อสั่งการ"
  }
]
```
