# `clinic_miss_dose`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| miss_dose_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| clinic | char(3) | YES | MUL | NULL |  |  |
| miss_dose_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| clinic | clinic | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | miss_dose_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
