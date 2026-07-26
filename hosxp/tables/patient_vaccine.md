# `patient_vaccine`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_vaccine_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| baby_code | int(11) | YES | MUL | NULL |  |  |
| vaccine_date | date | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | hn | yes | 1 |
| ix_unique | baby_code | yes | 2 |
| ix_unique_index | baby_code | yes | 1 |
| ix_unique_index | hn | yes | 2 |
| PRIMARY | patient_vaccine_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
