# `dtmain_ipd`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | YES | MUL | NULL |  |  |
| tmcode | varchar(10) | YES | MUL | NULL |  |  |
| tmdate | date | YES | MUL | NULL |  |  |
| ttcode | varchar(250) | YES |  | NULL |  |  |
| tcount | int(11) | YES |  | NULL |  |  |
| scount | int(11) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| doctor | varchar(6) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| dtmain_ipd_id | int(11) | NO | PRI | 0 |  |  |
| rcount | int(11) | YES |  | NULL |  |  |
| icd9 | varchar(9) | YES |  | NULL |  |  |
| qty_count | int(11) | YES |  | NULL |  |  |
| begin_time | datetime | YES |  | NULL |  |  |
| end_time | datetime | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| pregnancy | char(1) | YES |  | NULL |  |  |
| post_labour | char(1) | YES |  | NULL |  |  |
| report_update | char(1) | YES |  | NULL |  |  |
| pregnancy_caries_count | int(11) | YES |  | NULL |  |  |
| pregnancy_gingivitis | char(1) | YES |  | NULL |  |  |
| pregnancy_checkup | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| doctor | doctor | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | dtmain_ipd_id | yes | 1 |
| tmcode | tmcode | no | 1 |
| tmdate | tmdate | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
