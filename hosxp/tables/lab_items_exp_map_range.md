# `lab_items_exp_map_range`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_items_exp_map_range_id | int(11) | NO | PRI | 0 |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| lab_items_exp_range_type_id | int(11) | YES |  | NULL |  |  |
| value1 | double(22,3) | YES |  | NULL |  |  |
| value2 | double(22,3) | YES |  | NULL |  |  |
| export_value | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_items_code | lab_items_code | no | 1 |
| PRIMARY | lab_items_exp_map_range_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
