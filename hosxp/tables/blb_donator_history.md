# `blb_donator_history`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_donator_history_id | int(11) | NO | PRI | 0 |  |  |
| blb_donator_history_datetime | datetime | YES |  | NULL |  |  |
| blb_donator_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_donator_history_symptom | text | YES |  | NULL |  |  |
| blb_donation_center_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_donation_center_id | blb_donation_center_id | no | 1 |
| ix_blb_donator_id | blb_donator_id | no | 1 |
| PRIMARY | blb_donator_history_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
