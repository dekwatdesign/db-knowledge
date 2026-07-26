# `blb_lab_order_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_lab_order_list_id | int(11) | NO | PRI | 0 |  |  |
| dt_lab_order_id | int(11) | YES | MUL | NULL |  |  |
| dt_lab_items_id | int(11) | YES | MUL | NULL |  |  |
| dt_lab_order_list_qty | int(11) | YES |  | NULL |  |  |
| dt_lab_order_list_note | varchar(250) | YES |  | NULL |  |  |
| dt_lab_order_list_doctor | char(6) | YES |  | NULL |  |  |
| dt_lab_order_list_confirm | char(1) | YES |  | NULL |  |  |
| dt_lab_order_list_conf_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dt_lab_items_id | dt_lab_items_id | no | 1 |
| ix_dt_lab_order_id | dt_lab_order_id | no | 1 |
| PRIMARY | dt_lab_order_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
