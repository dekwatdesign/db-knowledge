# `supply_sterile`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| supply_sterile_id | int(11) | NO | PRI | 0 |  |  |
| supply_sterile_barcode | varchar(100) | YES |  | NULL |  |  |
| supply_sterile_date | date | YES |  | NULL |  |  |
| supply_sterile_refno | varchar(60) | YES |  | NULL |  |  |
| supply_sterile_depcode | varchar(10) | YES |  | NULL |  |  |
| supply_sterile_remark | varchar(200) | YES |  | NULL |  |  |
| supply_sterile_status | char(1) | YES |  | NULL |  |  |
| supply_sterile_confirm | char(1) | YES |  | NULL |  |  |
| supply_sterile_complete | char(1) | YES |  | NULL |  |  |
| supply_sterile_staff | varchar(60) | YES |  | NULL |  |  |
| supply_sterile_last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | supply_sterile_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
