# `person_lab_order`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_lab_order_id | int(11) | NO | PRI | 0 |  |  |
| person_lab_head_id | int(11) | YES | MUL | NULL |  |  |
| lab_items_code | int(11) | YES |  | NULL |  |  |
| lab_result | varchar(250) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_person_lab_head_id | person_lab_head_id | no | 1 |
| PRIMARY | person_lab_order_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
