# `operation_set_pc_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_set_pc_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_set_pc_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_set_pc_type_name | operation_set_pc_type_name | yes | 1 |
| PRIMARY | operation_set_pc_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "operation_set_pc_type_id": 1,
    "operation_set_pc_type_name": "รอผล"
  },
  {
    "operation_set_pc_type_id": 2,
    "operation_set_pc_type_name": "Positive"
  }
]
```
