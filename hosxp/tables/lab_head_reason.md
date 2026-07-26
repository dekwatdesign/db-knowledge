# `lab_head_reason`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_head_reason_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_head_reason_type_id | int(11) | YES |  | NULL |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_order_number | lab_order_number | no | 1 |
| ix_lui | lab_items_code | yes | 1 |
| ix_lui | lab_order_number | yes | 2 |
| PRIMARY | lab_head_reason_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
