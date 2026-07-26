# `ipd_doctor_order_tpl_exm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_tpl_exm_id | int(11) | NO | PRI | 0 |  |  |
| ipd_doctor_order_tpl_detail_id | int(11) | YES | UNI | NULL |  |  |
| examination_item_id | int(11) | YES |  | NULL |  |  |
| examination_type_id | int(11) | YES |  | NULL |  |  |
| exam_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_doctor_order_tpl_detail_id | ipd_doctor_order_tpl_detail_id | yes | 1 |
| PRIMARY | ipd_doctor_order_tpl_exm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
