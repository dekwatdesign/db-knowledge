# `physic_berg_balance_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_berg_balance_list_id | int(11) | NO | PRI | 0 |  |  |
| physic_berg_balance_scale_id | int(11) | YES | MUL | NULL |  |  |
| physic_berg_balance_type_id | int(11) | YES | MUL | NULL |  |  |
| physic_berg_balance_value_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_physic_berg_balance_scale_id | physic_berg_balance_scale_id | no | 1 |
| ix_physic_berg_balance_type_id | physic_berg_balance_type_id | no | 1 |
| ix_physic_berg_balance_value_id | physic_berg_balance_value_id | no | 1 |
| PRIMARY | physic_berg_balance_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
