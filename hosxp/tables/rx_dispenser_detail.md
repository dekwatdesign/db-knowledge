# `rx_dispenser_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_dispenser_detail_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| officer_id | int(11) | YES |  | NULL |  |  |
| rx_dispenser_datetime | datetime | YES |  | NULL |  |  |
| rx_dispenser_type_id | int(11) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| dispenser_note | text | YES |  | NULL |  |  |
| confirm_substock_transaction | char(1) | YES |  | NULL |  |  |
| no_dispense | char(1) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| ix_vn_dispenser_type | vn | no | 1 |
| ix_vn_dispenser_type | rx_dispenser_type_id | no | 2 |
| ix_vn_dispenser_type_index | rx_dispenser_type_id | no | 1 |
| ix_vn_dispenser_type_index | vn | no | 2 |
| PRIMARY | rx_dispenser_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
