# `blb_reaction_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| blb_reaction_list_id | int(11) | NO | PRI | 0 |  |  |
| blb_reaction_id | int(11) | YES | MUL | NULL |  |  |
| blb_reaction_symptom_id | int(11) | YES | MUL | NULL |  |  |
| blb_bag_id | int(11) | YES | MUL | NULL |  |  |
| blb_reaction_list_note | varchar(250) | YES |  | NULL |  |  |
| staff | varchar(100) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_blb_bag_id | blb_bag_id | no | 1 |
| ix_blb_reaction_id | blb_reaction_id | no | 1 |
| ix_blb_reaction_symptom_id | blb_reaction_symptom_id | no | 1 |
| PRIMARY | blb_reaction_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
