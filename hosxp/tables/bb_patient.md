# `bb_patient`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_patient_hn | varchar(9) | NO | PRI |  |  |  |
| bb_patient_group | varchar(5) | YES |  | NULL |  |  |
| bb_patient_plus | char(1) | YES |  | NULL |  |  |
| bb_patient_remark | varchar(255) | YES |  | NULL |  |  |
| bb_crossmatch_idn_spe_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | bb_patient_hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
