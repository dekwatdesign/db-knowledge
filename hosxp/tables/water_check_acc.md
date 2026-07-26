# `water_check_acc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| water_check_acc_id | int(11) | NO | PRI | 0 |  |  |
| water_check_acc_name | varchar(250) | YES |  | NULL |  |  |
| water_check_acc_price | double(13,3) | YES |  | NULL |  |  |
| last_update | datetime | YES | MUL | NULL |  |  |
| staff | varchar(250) | YES |  | NULL |  |  |
| water_check_acc_date | date | YES | MUL | NULL |  |  |
| water_check_id | int(11) | YES | MUL | NULL |  |  |
| water_check_cost_code | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_last_update | last_update | no | 1 |
| ix_water_check_acc_date | water_check_acc_date | no | 1 |
| ix_water_check_id | water_check_id | no | 1 |
| PRIMARY | water_check_acc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
