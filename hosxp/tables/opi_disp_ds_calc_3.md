# `opi_disp_ds_calc_3`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_disp_ds_calc_3_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| dose_qty | double(15,3) | YES |  | NULL |  |  |
| unit_per_day | double(15,3) | YES |  | NULL |  |  |
| day_per_qty | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | opi_disp_ds_calc_3_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
