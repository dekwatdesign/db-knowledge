# `psych_mdp_reason_match`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_mdp_reason_match_id | int(11) | NO | PRI | 0 |  |  |
| psych_mdp_type_id | int(11) | YES | MUL | NULL |  |  |
| psych_reason_refer_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_mdp_type_id | psych_mdp_type_id | no | 1 |
| ix_psych_reason_refer_type_id | psych_reason_refer_type_id | no | 1 |
| PRIMARY | psych_mdp_reason_match_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
