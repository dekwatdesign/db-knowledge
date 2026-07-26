# `dt_lab_order_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_order_list_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_order_id | int(11) | YES |  | NULL |  |  |
| dt_lab_items_id | int(11) | YES |  | NULL |  |  |
| dt_lab_order_list_qty | int(11) | YES |  | NULL |  |  |
| dt_lab_order_list_note | text | YES |  | NULL |  |  |
| dt_lab_order_list_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_order_list_confirm | char(1) | YES |  | NULL |  |  |
| dt_lab_order_list_start_date | date | YES |  | NULL |  |  |
| dt_lab_order_list_other | char(1) | YES |  | NULL |  |  |
| dt_lab_order_list_finish_date | date | YES |  | NULL |  |  |
| dt_lab_order_items_status_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_lab_order_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
