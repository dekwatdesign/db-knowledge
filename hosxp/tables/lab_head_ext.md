# `lab_head_ext`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_head_ext_id | int(11) | NO | PRI | 0 |  |  |
| lab_order_number | int(11) | YES | MUL | NULL |  |  |
| cb_name | varchar(200) | YES |  | NULL |  |  |
| update_flag | int(11) | YES |  | NULL |  |  |
| order_type | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_order_number | lab_order_number | no | 1 |
| ix_lab_order_number_t | lab_order_number | no | 1 |
| ix_lab_order_number_t | order_type | no | 2 |
| PRIMARY | lab_head_ext_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
