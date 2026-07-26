# `lab_head_order_no`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_head_order_no_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| lab_items_code | int(11) | YES | MUL | NULL |  |  |
| lab_order_no | varchar(50) | YES | UNI | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_order_no_uni | lab_order_no | yes | 1 |
| ix_lab_order_number | lab_order_number | no | 1 |
| ix_lab_order_number_uni | lab_order_number | yes | 1 |
| ix_lab_order_number_uni | lab_items_code | yes | 2 |
| ix_lab_order_number_uni_index | lab_items_code | yes | 1 |
| ix_lab_order_number_uni_index | lab_order_number | yes | 2 |
| PRIMARY | lab_head_order_no_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
