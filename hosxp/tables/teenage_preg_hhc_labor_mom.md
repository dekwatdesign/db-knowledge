# `teenage_preg_hhc_labor_mom`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| teenage_preg_hhc_labor_mom_id | int(11) | NO | PRI | 0 |  |  |
| teenage_preg_hhc_labor_mom_bps | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_labor_mom_bpd | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_labor_mom_temp | varchar(10) | YES |  | NULL |  |  |
| teenage_preg_hhc_labor_mom_rr | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_labor_mom_dtx | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_id | int(11) | YES |  | NULL |  |  |
| teenage_preg_hhc_recommend | varchar(250) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | teenage_preg_hhc_labor_mom_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
