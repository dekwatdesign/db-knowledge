# `blb_bag_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_bag_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_lab_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_list_result | char(10) | YES |  | NULL |  |  |
| blb_bag_list_result_note | varchar(150) | YES |  | NULL |  |  |
| blb_bag_list_confirm | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_lab_type_id | blb_lab_type_id | no | 1 |
| PRIMARY | blb_bag_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
