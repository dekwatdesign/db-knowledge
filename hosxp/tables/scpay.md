# `scpay`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lnnum | varchar(5) | YES | MUL | NULL |  |  |
| lnmonth | date | YES |  | NULL |  |  |
| amount | double(22,3) | YES |  | NULL |  |  |
| payed | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| lnnum | lnnum | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
