# `ipd_med_trolley`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_med_trolley_id | int(11) | NO | PRI | 0 |  |  |
| ipd_med_trolley_name | varchar(200) | YES | UNI | NULL |  |  |
| ipd_med_trolley_no | varchar(25) | YES |  | NULL |  |  |
| bedno_list | varchar(250) | YES |  | NULL |  |  |
| ward | varchar(6) | YES |  | NULL |  |  |
| ipd_med_trolley_model_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ipd_med_trolley_name | ipd_med_trolley_name | yes | 1 |
| PRIMARY | ipd_med_trolley_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
