# `stock_vendor_contract_cm`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_vendor_contract_cm_id | int(11) | NO | PRI | 0 |  |  |
| stock_vendor_contract_id | int(11) | YES | MUL | NULL |  |  |
| stock_committee_id | int(11) | YES |  | NULL |  |  |
| stock_committee_position_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_stock_vendor_cm_id | stock_vendor_contract_id | no | 1 |
| PRIMARY | stock_vendor_contract_cm_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
