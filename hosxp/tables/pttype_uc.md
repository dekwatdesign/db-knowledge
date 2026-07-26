# `pttype_uc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pttype_uc_id | int(11) | NO | PRI | 0 |  |  |
| subinscl | varchar(2) | YES | UNI | NULL |  |  |
| pttype_uc_type_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_subinscl | subinscl | yes | 1 |
| PRIMARY | pttype_uc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
