# `opdscreen_advice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdscreen_advice_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| opdscreen_advice_item_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| doctor_code | varchar(10) | YES |  | NULL |  |  |
| advice_datetime | datetime | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| advice_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | opdscreen_advice_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
