# `sss_measurements`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ID | int(11) | NO | PRI | 0 |  |  |
| hn | char(9) | YES |  | NULL |  |  |
| vn | char(13) | YES |  | NULL |  |  |
| measure | varchar(10) | YES |  | NULL |  |  |
| value_int | tinyint(3) unsigned | YES |  | NULL |  |  |
| value_char | char(2) | YES |  | NULL |  |  |
| note | varchar(25) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
