# `medplan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | YES | MUL | NULL |  |  |
| doctor | varchar(6) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| iperday | double(22,3) | YES |  | NULL |  |  |
| offdate | date | YES |  | NULL |  |  |
| orderdate | date | YES |  | NULL |  |  |
| orderstatus | char(1) | YES |  | NULL |  |  |
| sig | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
