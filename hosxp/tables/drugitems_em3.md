# `drugitems_em3`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_em3_id | int(11) | NO | PRI | 0 |  |  |
| em3_code | varchar(15) | YES | UNI | NULL |  |  |
| em2_code | varchar(15) | YES |  | NULL |  |  |
| em1_code | varchar(15) | YES |  | NULL |  |  |
| em3_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_em3_code | em3_code | yes | 1 |
| PRIMARY | drugitems_em3_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
