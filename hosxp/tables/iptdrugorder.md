# `iptdrugorder`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | YES | MUL | NULL |  |  |
| authority | varchar(20) | YES |  | NULL |  |  |
| drugtaken | varchar(250) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| inote | varchar(250) | YES |  | NULL |  |  |
| iready | tinyint(4) | YES |  | NULL |  |  |
| odate | date | YES | MUL | NULL |  |  |
| otime | time | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| setcompletetime | datetime | YES |  | NULL |  |  |
| unitprice | double(22,3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| odate | odate | no | 1 |
| otime | otime | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
