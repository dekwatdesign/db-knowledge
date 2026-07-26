# `rx_summary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_summary_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| rx_date | date | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| sum_price | double(15,3) | YES |  | NULL |  |  |
| income | char(2) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_icode | icode | no | 1 |
| ix_rx_date | rx_date | no | 1 |
| PRIMARY | rx_summary_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
