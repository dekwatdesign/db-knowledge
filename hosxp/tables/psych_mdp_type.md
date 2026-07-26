# `psych_mdp_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_mdp_type_id | int(11) | NO | PRI | 0 |  |  |
| psych_mdp_type_name | varchar(255) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| doctor_position_id | int(11) | YES | MUL | NULL |  |  |
| active | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_position_id | doctor_position_id | no | 1 |
| PRIMARY | psych_mdp_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
