# `drug_incompatibility`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_incompatibility_id | int(11) | NO | PRI | 0 |  |  |
| generic_name | varchar(200) | YES | UNI | NULL |  |  |
| di_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_generic_name | generic_name | yes | 1 |
| PRIMARY | drug_incompatibility_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
