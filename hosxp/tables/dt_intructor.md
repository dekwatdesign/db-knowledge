# `dt_intructor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_intructor_id | int(11) | NO | PRI | 0 |  |  |
| dt_intructor_date | datetime | YES |  | NULL |  |  |
| doctorcode | varchar(6) | YES |  | NULL |  |  |
| dt_dep_id | int(11) | YES |  | NULL |  |  |
| dt_depcode | varchar(10) | YES |  | NULL |  |  |
| dt_clinic_unit_id | int(11) | YES |  | NULL |  |  |
| dt_start_time_tx_id | int(11) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_intructor_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
