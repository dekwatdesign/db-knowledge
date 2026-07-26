# `ipd_finance_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| dx_name1 | varchar(150) | YES |  | NULL |  |  |
| dx_name2 | varchar(150) | YES |  | NULL |  |  |
| oper_name1 | varchar(150) | YES |  | NULL |  |  |
| oper_name2 | varchar(150) | YES |  | NULL |  |  |
| claim_code | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
