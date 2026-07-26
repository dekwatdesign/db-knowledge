# `df_depcode_age_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| df_depcode_age_type_id | int(11) | NO | PRI | 0 |  |  |
| depcode | char(3) | YES | MUL | NULL |  |  |
| age_min | int(11) | YES |  | NULL |  |  |
| age_max | int(11) | YES |  | NULL |  |  |
| df_percent | double(15,3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_depcode | depcode | no | 1 |
| PRIMARY | df_depcode_age_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
