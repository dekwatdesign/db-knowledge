# `drugitems_em2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_em2_id | int(11) | NO | PRI | 0 |  |  |
| em2_code | varchar(15) | YES | UNI | NULL |  |  |
| em1_code | varchar(15) | YES |  | NULL |  |  |
| em2_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_em2_code | em2_code | yes | 1 |
| PRIMARY | drugitems_em2_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
