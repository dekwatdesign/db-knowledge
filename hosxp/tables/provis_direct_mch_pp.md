# `provis_direct_mch_pp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_direct_mch_id | int(11) | NO | PRI | 0 |  |  |
| export_date | date | YES | MUL | NULL |  |  |
| pcucode | char(5) | YES |  | NULL |  |  |
| pid | varchar(13) | YES |  | NULL |  |  |
| gravida | varchar(2) | YES |  | NULL |  |  |
| lmp | char(8) | YES |  | NULL |  |  |
| edc | char(8) | YES |  | NULL |  |  |
| vdrl_rs | char(1) | YES |  | NULL |  |  |
| hb_rs | char(1) | YES |  | NULL |  |  |
| hiv_rs | char(1) | YES |  | NULL |  |  |
| datehct | char(8) | YES |  | NULL |  |  |
| hct_rs | varchar(2) | YES |  | NULL |  |  |
| thalass | char(1) | YES |  | NULL |  |  |
| dental | char(1) | YES |  | NULL |  |  |
| tcaries | varchar(2) | YES |  | NULL |  |  |
| tartar | char(1) | YES |  | NULL |  |  |
| guminf | char(1) | YES |  | NULL |  |  |
| bdate | char(8) | YES |  | NULL |  |  |
| bresult | varchar(5) | YES |  | NULL |  |  |
| bplace | char(1) | YES |  | NULL |  |  |
| bhosp | char(5) | YES |  | NULL |  |  |
| btype | char(1) | YES |  | NULL |  |  |
| bdoctor | char(1) | YES |  | NULL |  |  |
| lborn | char(1) | YES |  | NULL |  |  |
| sborn | char(1) | YES |  | NULL |  |  |
| ppcare1 | char(8) | YES |  | NULL |  |  |
| ppcare2 | char(8) | YES |  | NULL |  |  |
| ppcare3 | char(8) | YES |  | NULL |  |  |
| ppres | char(1) | YES |  | NULL |  |  |
| d_update | varchar(14) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| person_anc_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_date | export_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_anc_id | person_anc_id | no | 1 |
| PRIMARY | provis_direct_mch_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
