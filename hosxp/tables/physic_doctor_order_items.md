# `physic_doctor_order_items`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_doctor_order_items_id | int(11) | NO | PRI | 0 |  |  |
| physic_register_id | int(11) | YES | MUL | NULL |  |  |
| physic_items_id | int(11) | YES | MUL | NULL |  |  |
| physic_expected_results_id | int(11) | YES | MUL | NULL |  |  |
| physic_consult_for_id | int(11) | YES | MUL | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| physic_body_position_id | int(11) | YES |  | NULL |  |  |
| activity_time | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cf_id | physic_consult_for_id | no | 1 |
| ix_exp_id | physic_expected_results_id | no | 1 |
| ix_items_id | physic_items_id | no | 1 |
| ix_register_id | physic_register_id | no | 1 |
| PRIMARY | physic_doctor_order_items_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
