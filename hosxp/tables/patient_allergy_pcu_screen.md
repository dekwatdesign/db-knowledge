# `patient_allergy_pcu_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| patient_allergy_pcu_screen_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| agent | varchar(250) | YES |  | NULL |  |  |
| symptom | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| screen_date | date | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | patient_allergy_pcu_screen_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
