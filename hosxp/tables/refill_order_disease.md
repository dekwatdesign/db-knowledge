# `refill_order_disease`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| order_disease_id | int(11) | NO | PRI | 0 |  |  |
| order_id | int(11) | YES | MUL | NULL |  |  |
| plan_disease_id | int(11) | YES |  | NULL |  |  |
| icd10 | varchar(7) | YES |  | NULL |  |  |
| diagtype | varchar(5) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_order_disease_order | order_id | no | 1 |
| PRIMARY | order_disease_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
