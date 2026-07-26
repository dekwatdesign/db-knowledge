# `ipd_refer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_refer_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES |  | NULL |  |  |
| refer_date | date | YES |  | NULL |  |  |
| refer_time | time | YES |  | NULL |  |  |
| refer_to_hospcode | varchar(9) | YES |  | NULL |  |  |
| refer_staff | varchar(25) | YES |  | NULL |  |  |
| refer_doctor | varchar(10) | YES |  | NULL |  |  |
| refer_number | varchar(10) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipd_refer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
