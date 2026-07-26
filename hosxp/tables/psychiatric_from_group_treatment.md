# `psychiatric_from_group_treatment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_from_group_treatment_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_from_group_treatment_group | varchar(5) | YES |  | NULL |  |  |
| fdate | date | YES |  | NULL |  |  |
| ftime | time | YES |  | NULL |  |  |
| name | varchar(70) | YES |  | NULL |  |  |
| help | text | YES |  | NULL |  |  |
| approach | text | YES |  | NULL |  |  |
| estimate | text | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| hn | varchar(10) | YES |  | NULL |  |  |
| license | varchar(70) | YES |  | NULL |  |  |
| license_date | date | YES |  | NULL |  |  |
| agencies | varchar(70) | YES |  | NULL |  |  |
| name_id | varchar(70) | YES |  | NULL |  |  |
| agencies_date | date | YES |  | NULL |  |  |
| name_a_id | varchar(3) | YES |  | NULL |  |  |
| name_b_id | varchar(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_from_group_treatment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
