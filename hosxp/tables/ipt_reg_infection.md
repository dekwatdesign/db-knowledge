# `ipt_reg_infection`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_reg_infection_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| is_infect | char(1) | YES |  | NULL |  |  |
| ci_infect_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | yes | 1 |
| PRIMARY | ipt_reg_infection_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
