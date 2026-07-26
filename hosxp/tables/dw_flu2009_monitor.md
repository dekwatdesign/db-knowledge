# `dw_flu2009_monitor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dw_flu2009_monitor_id | int(11) | NO | PRI | 0 |  |  |
| monitor_date | date | YES |  | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES |  | NULL |  |  |
| cid | varchar(13) | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| patient_name | varchar(150) | YES |  | NULL |  |  |
| age_y | int(11) | YES |  | NULL |  |  |
| age_m | int(11) | YES |  | NULL |  |  |
| age_d | int(11) | YES |  | NULL |  |  |
| pdx | varchar(10) | YES |  | NULL |  |  |
| cc | text | YES |  | NULL |  |  |
| temperature | double(15,3) | YES |  | NULL |  |  |
| dx0 | varchar(10) | YES |  | NULL |  |  |
| dx1 | varchar(10) | YES |  | NULL |  |  |
| dx2 | varchar(10) | YES |  | NULL |  |  |
| dx3 | varchar(10) | YES |  | NULL |  |  |
| dx4 | varchar(10) | YES |  | NULL |  |  |
| patient_type | char(1) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| death | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_s1 | hospcode | no | 1 |
| ix_s1 | monitor_date | no | 2 |
| ix_s1 | patient_type | no | 3 |
| ix_unique | hospcode | yes | 1 |
| ix_unique | vn | yes | 2 |
| ix_unique | monitor_date | yes | 3 |
| ix_unique | patient_type | yes | 4 |
| PRIMARY | dw_flu2009_monitor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
