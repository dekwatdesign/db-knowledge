# `drugitems_dose_chk_tpl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_dose_chk_tpl_id | int(11) | NO | PRI | 0 |  |  |
| drugitems_dose_chk_tpl_name | varchar(200) | YES |  | NULL |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| drugitems_dose_check_type_id | int(11) | YES |  | NULL |  |  |
| check_max_qty | double(15,3) | YES |  | NULL |  |  |
| notice_note | text | YES |  | NULL |  |  |
| interval_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | drugitems_dose_chk_tpl_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
