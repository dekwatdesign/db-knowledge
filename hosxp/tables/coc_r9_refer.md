# `coc_r9_refer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| coc_r9_refer_id | int(11) | NO | PRI | 0 |  |  |
| department | char(3) | YES |  | NULL |  |  |
| vnan | varchar(13) | YES | UNI | NULL |  |  |
| coc_r9_refer_no | varchar(10) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vnan | vnan | yes | 1 |
| PRIMARY | coc_r9_refer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
