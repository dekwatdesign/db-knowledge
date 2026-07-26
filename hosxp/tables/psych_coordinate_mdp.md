# `psych_coordinate_mdp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_coordinate_mdp_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| psych_coordinate_mdp_date | date | YES |  | NULL |  |  |
| psych_coordinate_mdp_time | time | YES |  | NULL |  |  |
| psych_mdp_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_coordinate_mdp_note | text | YES |  | NULL |  |  |
| psych_coordinate_mdp_doctor | varchar(7) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| lastupdate | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_psych_mdp_type_id | psych_mdp_type_id | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | psych_coordinate_mdp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
