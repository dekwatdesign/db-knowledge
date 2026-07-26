# `physic_berg_balance_scale`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_berg_balance_scale_id | int(11) | NO | PRI | 0 |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |
| anvn | varchar(13) | YES |  | NULL |  |  |
| berg_balance_scale_date | date | YES | MUL | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| doctor | varchar(15) | YES |  | NULL |  |  |
| physic_berg_balance_result_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_berg_balance_scale_date | berg_balance_scale_date | no | 1 |
| ix_physic_register_id | physic_register_id | no | 1 |
| PRIMARY | physic_berg_balance_scale_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
