# `ff_biography`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hid | int(11) | NO | PRI | 0 |  |  |
| biography | longtext | YES |  | NULL |  |  |
| income_detail | text | YES |  | NULL |  |  |
| problem_decision_detail | text | YES |  | NULL |  |  |
| community_relation_detail | text | YES |  | NULL |  |  |
| attitude_detail | text | YES |  | NULL |  |  |
| home_food_detail | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | hid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
