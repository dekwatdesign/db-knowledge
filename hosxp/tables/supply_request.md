# `supply_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_request_id | int(11) | NO | PRI | 0 |  |  |
| supply_request_barcode | varchar(100) | YES |  | NULL |  |  |
| supply_request_date | date | YES |  | NULL |  |  |
| supply_request_refno | varchar(60) | YES |  | NULL |  |  |
| supply_request_depcode | varchar(10) | YES |  | NULL |  |  |
| supply_request_remark | varchar(200) | YES |  | NULL |  |  |
| supply_request_status | char(1) | YES |  | NULL |  |  |
| supply_request_complete | char(1) | YES |  | NULL |  |  |
| supply_request_confirm | char(1) | YES |  | NULL |  |  |
| supply_request_stafff | varchar(60) | YES |  | NULL |  |  |
| supply_request_last_update | datetime | YES |  | NULL |  |  |
| supply_request_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_request_type4 | supply_request_type_id | no | 1 |
| PRIMARY | supply_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
