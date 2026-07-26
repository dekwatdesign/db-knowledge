# `lab_head_rlu_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_head_rlu_detail_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_rlu_rule_id | int(11) | YES | MUL | NULL |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| tmlt_code | varchar(10) | YES |  | NULL |  |  |
| severity | char(1) | YES |  | NULL |  |  |
| outcome | char(1) | YES |  | NULL |  |  |
| message | varchar(500) | YES |  | NULL |  |  |
| lab_head_reason_id | int(11) | YES |  | NULL |  |  |
| evaluated_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_order_number | lab_order_number | no | 1 |
| ix_order_rule | lab_order_number | no | 1 |
| ix_order_rule | lab_rlu_rule_id | no | 2 |
| ix_rule | lab_rlu_rule_id | no | 1 |
| PRIMARY | lab_head_rlu_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
