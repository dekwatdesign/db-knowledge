# `iclaim_rcpt_debt_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iclaim_rcpt_debt_id | int(11) | NO | PRI | 0 |  |  |
| income | char(2) | NO | PRI |  |  |  |
| amount | decimal(10,0) | YES |  | NULL |  |  |
| discount | decimal(10,0) | YES |  | NULL |  |  |
| total_amount | decimal(10,0) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES |  | NULL |  |  |
| special_discount | decimal(10,0) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | iclaim_rcpt_debt_id | yes | 1 |
| PRIMARY | income | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
