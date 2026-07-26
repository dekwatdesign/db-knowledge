# `ndrugpayref`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| guarantor | varchar(35) | YES |  | NULL |  |  |
| linkref | varchar(100) | YES |  | NULL |  |  |
| ngroup | varchar(100) | YES |  | NULL |  |  |
| payamount | double(22,3) | YES |  | NULL |  |  |
| paydate | date | YES |  | NULL |  |  |
| payref | varchar(6) | YES | UNI | NULL |  |  |
| ptype | char(2) | YES |  | NULL |  |  |
| recpcode | varchar(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| payref_unique | payref | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
