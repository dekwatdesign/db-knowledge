# `blb_template_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_template_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_blood_items_id | int(11) | YES |  | NULL |  |  |
| blb_request_list_qty | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| blb_request_sum_price | double(13,3) | YES |  | NULL |  |  |
| blb_bag_cc | int(11) | YES |  | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |
| blb_template_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | blb_template_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
