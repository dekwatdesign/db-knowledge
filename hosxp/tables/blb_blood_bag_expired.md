# `blb_blood_bag_expired`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_blood_bag_expired_id | int(11) | NO | PRI | 0 |  |  |
| blb_blood_bag_expired_age | int(11) | YES |  | NULL |  |  |
| blb_bag_type_id | int(11) | YES | MUL | NULL |  |  |
| blb_blood_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_type_id | blb_bag_type_id | no | 1 |
| ix_blb_blood_type_id | blb_blood_type_id | no | 1 |
| PRIMARY | blb_blood_bag_expired_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
