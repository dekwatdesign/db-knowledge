# `ipd_doctor_order_customview`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_customview_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_type_id | int(11) | YES | MUL | NULL |  |  |
| doctorcode | varchar(15) | YES | MUL | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_ipd_order_customview_doctorcode | doctorcode | no | 1 |
| ix_idx_ipd_order_customview_type_id | ipd_doctor_order_type_id | no | 1 |
| PRIMARY | ipd_doctor_order_customview_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
