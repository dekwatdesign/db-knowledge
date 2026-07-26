# `supply_job_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_job_list_id | int(11) | NO | PRI | 0 |  |  |
| supply_item_id | int(11) | YES |  | NULL |  |  |
| supply_job_qty | int(11) | YES |  | NULL |  |  |
| supply_job_returnqty | int(11) | YES |  | NULL |  |  |
| supply_job_remainqty | int(11) | YES |  | NULL |  |  |
| supply_job_id | int(11) | YES | MUL | NULL |  |  |
| supply_item_list_id | int(11) | YES | MUL | NULL |  |  |
| supply_sterile_item_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_item_list68 | supply_item_list_id | no | 1 |
| ix_Refsupply_job66 | supply_job_id | no | 1 |
| ix_Refsupply_sterile_item69 | supply_sterile_item_id | no | 1 |
| PRIMARY | supply_job_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
