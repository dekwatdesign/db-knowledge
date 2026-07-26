# `blb_request_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_request_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_request_id | int(11) | YES | MUL | NULL |  |  |
| blb_blood_items_id | int(11) | YES | MUL | NULL |  |  |
| blb_request_list_qty | int(11) | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| last_update | date | YES |  | NULL |  |  |
| blb_request_sum_price | double(13,3) | YES |  | NULL |  |  |
| blb_bag_cc | int(11) | YES |  | NULL |  |  |
| blb_request_ans_list_qty | int(11) | YES |  | NULL |  |  |
| blb_bag_cc_ans | int(11) | YES |  | NULL |  |  |
| answer_note_group_id | varchar(100) | YES |  | NULL |  |  |
| answer_note_group_text | varchar(255) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_blood_type_id | blb_blood_items_id | no | 1 |
| ix_blb_request_id | blb_request_id | no | 1 |
| PRIMARY | blb_request_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
