# `ipt_pregnancy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| deliver_type | tinyint(4) | YES |  | NULL |  |  |
| deliver_abnormal_type | tinyint(4) | YES |  | NULL |  |  |
| preg_number | tinyint(4) | YES |  | NULL |  |  |
| death | char(1) | YES |  | NULL |  |  |
| abort | char(1) | YES |  | NULL |  |  |
| co1 | char(1) | YES |  | NULL |  |  |
| co2 | char(1) | YES |  | NULL |  |  |
| co3 | char(1) | YES |  | NULL |  |  |
| co4 | char(1) | YES |  | NULL |  |  |
| co5 | char(1) | YES |  | NULL |  |  |
| co6 | char(1) | YES |  | NULL |  |  |
| co7 | char(1) | YES |  | NULL |  |  |
| co8 | char(1) | YES |  | NULL |  |  |
| co9 | char(1) | YES |  | NULL |  |  |
| co10 | char(1) | YES |  | NULL |  |  |
| co11 | char(1) | YES |  | NULL |  |  |
| co12 | char(1) | YES |  | NULL |  |  |
| co13 | char(1) | YES |  | NULL |  |  |
| labor_date | date | YES |  | NULL |  |  |
| ga | tinyint(4) | YES |  | NULL |  |  |
| last_child_month | int(11) | YES |  | NULL |  |  |
| anc_type | tinyint(4) | YES |  | NULL |  |  |
| child_count | tinyint(4) | YES |  | NULL |  |  |
| anc_complete | char(1) | YES |  | NULL |  |  |
| twin_child_count | int(11) | YES |  | NULL |  |  |
| pregnancy_abort_type_id | int(11) | YES |  | NULL |  |  |
| dead_child_count | int(11) | YES |  | NULL |  |  |
| last_child_year | int(11) | YES |  | NULL |  |  |
| entry_staff | varchar(50) | YES |  | NULL |  |  |
| last_abort_year | int(11) | YES |  | NULL |  |  |
| last_abort_month | int(11) | YES |  | NULL |  |  |
| ipt_pregnancy_service_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| anc_place_name | varchar(200) | YES |  | NULL |  |  |
| ga_day | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
