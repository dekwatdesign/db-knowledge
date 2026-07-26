# `provis_mch`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_mch_id | int(11) | NO | PRI | 0 |  |  |
| export_month | char(6) | YES | MUL | NULL |  |  |
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
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_export_month | export_month | no | 1 |
| PRIMARY | provis_mch_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
