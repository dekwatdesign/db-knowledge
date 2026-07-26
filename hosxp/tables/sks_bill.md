# `sks_bill`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sks_bill_id | int(11) | NO | PRI | 0 |  |  |
| hcode | char(5) | YES |  | NULL |  |  |
| hname | varchar(150) | YES |  | NULL |  |  |
| bill_datetime | datetime | YES |  | NULL |  |  |
| sessno | int(11) | YES |  | NULL |  |  |
| reccount | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | sks_bill_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
