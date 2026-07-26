# `ipd_profile_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| med_plan_number | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| offdate | date | YES |  | NULL |  |  |
| orderdate | date | YES |  | NULL |  |  |
| orderstatus | varchar(5) | YES |  | NULL |  |  |
| drugusage | varchar(7) | YES |  | NULL |  |  |
| sp_use | varchar(7) | YES |  | NULL |  |  |
| frequency | int(11) | YES |  | NULL |  |  |
| name | varchar(250) | YES |  | NULL |  |  |
| shortlist | varchar(250) | YES |  | NULL |  |  |
| d1 | int(11) | YES |  | NULL |  |  |
| d2 | int(11) | YES |  | NULL |  |  |
| d3 | int(11) | YES |  | NULL |  |  |
| d4 | int(11) | YES |  | NULL |  |  |
| d5 | int(11) | YES |  | NULL |  |  |
| d6 | int(11) | YES |  | NULL |  |  |
| d7 | int(11) | YES |  | NULL |  |  |
| d8 | int(11) | YES |  | NULL |  |  |
| d9 | int(11) | YES |  | NULL |  |  |
| d10 | int(11) | YES |  | NULL |  |  |
| d11 | int(11) | YES |  | NULL |  |  |
| d12 | int(11) | YES |  | NULL |  |  |
| d13 | int(11) | YES |  | NULL |  |  |
| d14 | int(11) | YES |  | NULL |  |  |
| number | int(11) | YES |  | NULL |  |  |
| icode_type | char(3) | YES |  | NULL |  |  |
| return_qty | int(11) | YES |  | NULL |  |  |
| vorder | int(11) | YES |  | NULL |  |  |
| start_date | date | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| off_time | time | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | med_plan_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
