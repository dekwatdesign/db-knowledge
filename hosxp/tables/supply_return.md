# `supply_return`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_return_id | int(11) | NO | PRI | 0 |  |  |
| supply_return_barcode | varchar(100) | YES |  | NULL |  |  |
| supply_return_date | date | YES |  | NULL |  |  |
| supply_return_refno | varchar(60) | YES |  | NULL |  |  |
| supply_return_depcode | varchar(10) | YES |  | NULL |  |  |
| supply_return_remark | varchar(200) | YES |  | NULL |  |  |
| supply_return_status | char(1) | YES |  | NULL |  |  |
| supply_return_confirm | char(1) | YES |  | NULL |  |  |
| supply_return_complete | char(1) | YES |  | NULL |  |  |
| supply_return_staff | varchar(60) | YES |  | NULL |  |  |
| supply_return_last_update | datetime | YES |  | NULL |  |  |
| supply_sterile_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refsupply_sterile63 | supply_sterile_id | no | 1 |
| PRIMARY | supply_return_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
