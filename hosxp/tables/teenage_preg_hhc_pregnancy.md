# `teenage_preg_hhc_pregnancy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_pregnancy_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_pregnancy_ua | varchar(250) | YES |  | NULL |  |  |
| teenage_preg_hhc_pregnancy_bps | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_pregnancy_bpd | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_pregnancy_temp | varchar(10) | YES |  | NULL |  |  |
| teenage_preg_hhc_pregnancy_rr | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_pregnancy_hr | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_pregnancy_sugar | varchar(250) | YES |  | NULL |  |  |
| teenage_preg_hhc_id | int(11) | YES | MUL | NULL |  |  |
| teenage_preg_hhc_pregnancy_fhs | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_pregnancy_recommend | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refteenage_preg_hhc84 | teenage_preg_hhc_id | no | 1 |
| PRIMARY | teenage_preg_hhc_pregnancy_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
