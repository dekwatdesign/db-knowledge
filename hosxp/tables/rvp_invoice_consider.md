# `rvp_invoice_consider`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rvp_invoice_consider_id | int(11) | NO | PRI | 0 |  |  |
| rvp_invoice_id | int(11) | YES | MUL | NULL |  |  |
| rvp_consider_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_rvp_invoice_id | rvp_invoice_id | no | 1 |
| PRIMARY | rvp_invoice_consider_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
