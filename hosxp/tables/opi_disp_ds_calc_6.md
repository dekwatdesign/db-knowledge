# `opi_disp_ds_calc_6`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_disp_ds_calc_6_id | int(11) | NO | PRI | 0 |  |  |
| opi_guid | varchar(38) | YES | UNI | NULL |  |  |
| date_start | date | YES |  | NULL |  |  |
| date_end | date | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| dose_note | varchar(200) | YES |  | NULL |  |  |
| total_day | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_opi_guid | opi_guid | yes | 1 |
| PRIMARY | opi_disp_ds_calc_6_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
