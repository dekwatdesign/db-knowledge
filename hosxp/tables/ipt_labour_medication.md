# `ipt_labour_medication`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_med_id | int(11) | NO | PRI | 0 |  |  |
| ipt_labour_id | int(11) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| tx_date | date | YES |  | NULL |  |  |
| tx_time | time | YES |  | NULL |  |  |
| tx_period | int(11) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| drugusage | varchar(9) | YES |  | NULL |  |  |
| sp_use | varchar(9) | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_labour_med_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
