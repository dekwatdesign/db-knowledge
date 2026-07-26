# `nhso_eclaim_occupation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_eclaim_occupation_code | char(3) | NO | PRI |  |  |  |
| nhso_eclaim_occupation_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_eclaim_occupation_name | nhso_eclaim_occupation_name | yes | 1 |
| PRIMARY | nhso_eclaim_occupation_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
