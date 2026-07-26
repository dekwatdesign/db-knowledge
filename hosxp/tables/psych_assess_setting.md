# `psych_assess_setting`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psych_assess_setting_id | int(11) | NO | PRI | 0 |  |  |
| psych_assess_setting_name | varchar(255) | YES |  | NULL |  |  |
| psych_assess_setting_active | char(1) | YES |  | NULL |  |  |
| psych_assess_setting_summary | char(1) | YES |  | NULL |  |  |
| psych_assess_setting_be_af | char(1) | YES |  | NULL |  |  |
| psych_assess_setting_all | char(1) | YES |  | NULL |  |  |
| psych_mdp_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_psych_mdp_type_id | psych_mdp_type_id | no | 1 |
| PRIMARY | psych_assess_setting_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
