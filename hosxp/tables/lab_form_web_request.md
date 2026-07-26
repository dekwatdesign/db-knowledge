# `lab_form_web_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_order_number | int(11) | NO | PRI | 0 |  |  |
| form_data | longtext | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| lab_form_web_id | int(11) | YES |  | NULL |  |  |
| manual_lab_items | varchar(3000) | YES |  | NULL |  |  |
| manual_lab_profile | varchar(3000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | lab_order_number | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
