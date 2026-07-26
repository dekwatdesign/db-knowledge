# `blb_bag_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_bag_lab_id | int(11) | NO | PRI | 0 |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_lab_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_lab_result | varchar(250) | YES |  | NULL |  |  |
| blb_bag_lab_result_note | varchar(250) | YES |  | NULL |  |  |
| blb_bag_lab_confirm | char(1) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_lab_type_id | blb_lab_type_id | no | 1 |
| PRIMARY | blb_bag_lab_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
