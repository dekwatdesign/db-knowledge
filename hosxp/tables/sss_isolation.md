# `sss_isolation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | varchar(9) | YES | MUL | NULL |  |  |
| VN | varchar(25) | NO | PRI |  |  |  |
| HN | varchar(9) | YES | MUL | NULL |  |  |
| Dchdate | date | YES |  | NULL |  |  |
| DchTime | time | YES |  | NULL |  |  |
| Type | varchar(2) | YES |  | NULL |  |  |
| Pttype | varchar(2) | YES |  | NULL |  |  |
| Flag | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| hn | HN | no | 1 |
| id | ID | no | 1 |
| PRIMARY | VN | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
