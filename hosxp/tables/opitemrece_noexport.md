# `opitemrece_noexport`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| Seq | varchar(50) | NO | PRI | NULL |  |  |
| ICode | varchar(15) | NO | PRI | NULL |  |  |
| Type | varchar(1) | NO | PRI | NULL |  |  |
| No_Export | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | Seq | yes | 1 |
| PRIMARY | ICode | yes | 2 |
| PRIMARY | Type | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
