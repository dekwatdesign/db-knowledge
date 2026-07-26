# `blb_discharge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_discharge_id | int(11) | NO | PRI | 0 |  |  |
| blb_discharge_date | date | YES |  | NULL |  |  |
| blb_discharge_time | time | YES |  | NULL |  |  |
| blb_discharge_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_discharge_staff | varchar(50) | YES |  | NULL |  |  |
| blb_discharge_note | text | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_discharge_stock_confirm | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_discharge_type_id | blb_discharge_type_id | no | 1 |
| PRIMARY | blb_discharge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
