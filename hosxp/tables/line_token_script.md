# `line_token_script`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sqlno | int(11) | NO | PRI | 0 |  |  |
| sqlname | varchar(200) | YES |  | NULL |  |  |
| sqlscript | text | YES |  | NULL |  |  |
| dayscript | varchar(20) | YES |  | NULL |  |  |
| timescript | time | YES |  | NULL |  |  |
| timefreq | char(2) | YES |  | NULL |  |  |
| message | text | YES |  | NULL |  |  |
| linetoken | varchar(100) | YES |  | NULL |  |  |
| auto | char(1) | YES |  | NULL |  |  |
| onprocess | char(1) | YES |  | NULL |  |  |
| note | text | YES |  | NULL |  |  |
| linrtoken | varchar(100) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | sqlno | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
