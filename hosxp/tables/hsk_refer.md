# `hsk_refer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| refer_id | int(10) | NO | PRI | 0 |  |  |
| rdate | date | YES | MUL | NULL |  |  |
| rtime | time | YES |  | NULL |  |  |
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | NO | PRI |  |  |  |
| an | varchar(9) | NO | PRI |  |  |  |
| ward | varchar(50) | YES | MUL | NULL |  |  |
| refer_to | varchar(50) | YES | MUL | NULL |  |  |
| refer_type | varchar(100) | YES | MUL | NULL |  |  |
| refer_note | text | YES |  | NULL |  |  |
| staff_refer | varchar(50) | YES |  | NULL |  |  |
| refer_status | varchar(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | refer_id | yes | 1 |
| PRIMARY | hn | yes | 2 |
| PRIMARY | an | yes | 3 |
| PRIMARY | vn | yes | 4 |
| rdate | rdate | no | 1 |
| refer_to | refer_to | no | 1 |
| refer_type | refer_type | no | 1 |
| vn | vn | no | 1 |
| ward | ward | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
