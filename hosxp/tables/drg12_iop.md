# `drg12_iop`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| an | char(9) | YES |  | NULL |  |  |
| oper | varchar(9) | YES |  | NULL |  |  |
| optype | char(1) | YES |  | NULL |  |  |
| dropid | varchar(10) | YES |  | NULL |  |  |
| datein | date | YES |  | NULL |  |  |
| timein | char(4) | YES |  | NULL |  |  |
| dateout | date | YES |  | NULL |  |  |
| timeout | char(4) | YES |  | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |
| export_month | char(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode_export_month | hospcode | no | 1 |
| ix_hospcode_export_month | export_month | no | 2 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
