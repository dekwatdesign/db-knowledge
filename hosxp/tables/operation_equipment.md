# `operation_equipment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_equipment_id | int(11) | NO | PRI | 0 |  |  |
| operation_equipment_name | varchar(200) | YES | UNI | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_operation_equipment_name | operation_equipment_name | yes | 1 |
| PRIMARY | operation_equipment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
