# `operation_equipment_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_equipment_list_id | int(11) | NO | PRI | 0 |  |  |
| operation_detail_id | int(11) | YES |  | NULL |  |  |
| operation_id | int(11) | YES |  | NULL |  |  |
| operation_equipment_id | int(11) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| equipment_position | varchar(200) | YES |  | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| total_price | double(15,3) | YES |  | NULL |  |  |
| operation_equipment_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | operation_equipment_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
