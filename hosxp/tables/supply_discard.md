# `supply_discard`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_discard_id | int(11) | NO | PRI | 0 |  |  |
| supply_discard_barcode | varchar(100) | YES |  | NULL |  |  |
| supply_discard_date | date | YES |  | NULL |  |  |
| supply_discard_refno | varchar(60) | YES |  | NULL |  |  |
| supply_discard_depcode | varchar(10) | YES |  | NULL |  |  |
| supply_discard_remark | varchar(200) | YES |  | NULL |  |  |
| supply_discard_status | char(1) | YES |  | NULL |  |  |
| supply_discard_confirm | char(1) | YES |  | NULL |  |  |
| supply_discard_staff | varchar(60) | YES |  | NULL |  |  |
| supply_discard_last_update | date | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | supply_discard_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
