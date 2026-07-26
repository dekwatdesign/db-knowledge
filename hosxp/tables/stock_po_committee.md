# `stock_po_committee`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| stock_po_committee_id | int(11) | NO | PRI | 0 |  |  |
| stock_po_id | int(11) | YES | MUL | NULL |  |  |
| stock_committee_id | int(11) | YES |  | NULL |  |  |
| stock_committee_position_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| stock_doctor_id | varchar(20) | YES |  | NULL |  |  |
| stock_co_po_detail_id | int(11) | YES |  | NULL |  |  |
| stock_mastercommitteeposition_id | int(11) | YES |  | NULL |  |  |
| mastercommitteeposition_id | int(11) | YES |  | NULL |  |  |
| committee_note | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_po_id | stock_po_id | no | 1 |
| PRIMARY | stock_po_committee_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
