# `ovst_vaccine_tpl_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_vaccine_tpl_list_id | int(11) | NO | PRI | 0 |  |  |
| ovst_vaccine_tpl_id | int(11) | YES | MUL | NULL |  |  |
| person_vaccine_id | int(11) | YES |  | NULL |  |  |
| vaccine_lot_no | varchar(50) | YES |  | NULL |  |  |
| expire_date | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_idx_ovst_vaccine_tpl_list_m | ovst_vaccine_tpl_id | no | 1 |
| PRIMARY | ovst_vaccine_tpl_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
