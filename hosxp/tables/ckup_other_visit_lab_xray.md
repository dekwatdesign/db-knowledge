# `ckup_other_visit_lab_xray`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ckup_other_visit_lab_xray_id | int(11) | NO | PRI | 0 |  |  |
| ckup_ovst_id | int(11) | YES | MUL | NULL |  |  |
| use_vn | varchar(13) | YES |  | NULL |  |  |
| other_order_type | char(3) | YES |  | NULL |  |  |
| lab_order_number | int(11) | YES |  | NULL |  |  |
| xn | int(11) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ckup_ovst_id | ckup_ovst_id | no | 1 |
| PRIMARY | ckup_other_visit_lab_xray_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
