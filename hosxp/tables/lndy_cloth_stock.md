# `lndy_cloth_stock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lndy_cloth_stock_id | int(11) | NO | PRI | 0 |  |  |
| lndy_cloth_stock_staff | varchar(40) | YES |  | NULL |  |  |
| lndy_cloth_stock_date | datetime | YES |  | NULL |  |  |
| lndy_cloth_transection_id | int(11) | YES | MUL | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lndy_cloth_transection_id | lndy_cloth_transection_id | no | 1 |
| PRIMARY | lndy_cloth_stock_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
