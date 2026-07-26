# `finance_ticket`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| finance_ticket_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| ticket_date | date | YES | MUL | NULL |  |  |
| ticket_time | time | YES |  | NULL |  |  |
| ticket_start_date | date | YES |  | NULL |  |  |
| ticket_end_date | date | YES |  | NULL |  |  |
| ticket_money | double(15,3) | YES |  | NULL |  |  |
| ticket_detail | varchar(200) | YES |  | NULL |  |  |
| ticket_expire | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_ticket_date | ticket_date | no | 1 |
| PRIMARY | finance_ticket_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
