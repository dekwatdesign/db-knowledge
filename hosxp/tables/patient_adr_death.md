# `patient_adr_death`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_adr_death_id | int(11) | NO | PRI | 0 |  |  |
| patient_adr_id | int(11) | YES |  | NULL |  |  |
| adr_death_id | int(11) | YES |  | NULL |  |  |
| adr_death_icd | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_adr_death_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
