# `drugitems_synonym`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_synonym_id | int(11) | NO | PRI | 0 |  |  |
| icode | varchar(7) | YES | MUL | NULL |  |  |
| synonym_name | varchar(200) | YES |  | NULL |  |  |
| synonym_note | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_icode | icode | no | 1 |
| PRIMARY | drugitems_synonym_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
