# `anc_member`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| anc_number | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| preg_no | tinyint(4) | YES |  | NULL |  |  |
| last_menses_date | date | YES |  | NULL |  |  |
| estimate_delivery_date | date | YES | MUL | NULL |  |  |
| delivery_code | int(11) | YES | MUL | NULL |  |  |
| real_delivery_date | date | YES |  | NULL |  |  |
| first_baby_shake_date | date | YES |  | NULL |  |  |
| midwife_code | int(11) | YES |  | NULL |  |  |
| alive | char(1) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| has_birth_control | char(1) | YES |  | NULL |  |  |
| has_birth_control_name | varchar(50) | YES |  | NULL |  |  |
| discharge | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| delivery_code | delivery_code | no | 1 |
| estimate_delivery_date | estimate_delivery_date | no | 1 |
| hn | hn | no | 1 |
| hn_preg_no_unique | hn | yes | 1 |
| hn_preg_no_unique | preg_no | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | anc_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
