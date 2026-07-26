# `drugitems_em1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_em1_id | int(11) | NO | PRI | 0 |  |  |
| em1_code | varchar(15) | YES | UNI | NULL |  |  |
| em1_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_em1_code | em1_code | yes | 1 |
| PRIMARY | drugitems_em1_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
