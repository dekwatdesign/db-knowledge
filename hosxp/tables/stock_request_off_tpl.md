# `stock_request_off_tpl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_request_off_tpl_id | int(11) | NO | PRI | 0 |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| stock_committee_id | int(11) | YES |  | NULL |  |  |
| stock_officer_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_staff | staff | no | 1 |
| PRIMARY | stock_request_off_tpl_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
