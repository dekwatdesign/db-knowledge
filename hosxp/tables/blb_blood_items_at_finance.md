# `blb_blood_items_at_finance`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_blood_items_at_finance_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| event_type | char(3) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |
| per_unit | char(1) | YES |  | NULL |  |  |
| blb_blood_items_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_blood_items_at_finance_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
