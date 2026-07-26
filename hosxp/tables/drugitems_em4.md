# `drugitems_em4`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_em4_id | int(11) | NO | PRI | 0 |  |  |
| em4_code | varchar(15) | YES | UNI | NULL |  |  |
| em3_code | varchar(15) | YES |  | NULL |  |  |
| em2_code | varchar(15) | YES |  | NULL |  |  |
| em1_code | varchar(15) | YES |  | NULL |  |  |
| em4_name | varchar(200) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_em4_code | em4_code | yes | 1 |
| PRIMARY | drugitems_em4_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
