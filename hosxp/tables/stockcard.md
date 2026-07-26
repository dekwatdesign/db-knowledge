# `stockcard`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pcode | varchar(5) | NO | PRI |  |  |  |
| docno | varchar(12) | NO | PRI |  |  |  |
| stocktype | varchar(5) | NO | PRI |  |  |  |
| cprice | double(20,2) | NO | PRI | 0.00 |  |  |
| s_qty | int(11) | YES |  | NULL |  |  |
| r_qty | int(11) | YES |  | NULL |  |  |
| stock_id | varchar(12) | YES |  | NULL |  |  |
| lot_id | varchar(38) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | cprice | yes | 1 |
| PRIMARY | docno | yes | 2 |
| PRIMARY | pcode | yes | 3 |
| PRIMARY | stocktype | yes | 4 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
