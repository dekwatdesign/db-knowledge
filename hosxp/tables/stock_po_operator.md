# `stock_po_operator`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_operator_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_id | int(11) | YES | MUL | NULL |  |  |
| stock_committee_id | int(11) | YES |  | NULL |  |  |
| stock_committee_position_id | int(11) | YES |  | NULL |  |  |
| operator_note | varchar(200) | YES |  | NULL |  |  |
| stock_officer_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_id | stock_po_id | no | 1 |
| PRIMARY | stock_po_operator_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
