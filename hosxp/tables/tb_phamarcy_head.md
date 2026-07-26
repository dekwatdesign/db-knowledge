# `tb_phamarcy_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(10) | NO | PRI |  |  |  |
| pname | varchar(50) | YES |  | NULL |  |  |
| fname | varchar(255) | YES |  | NULL |  |  |
| lname | varchar(255) | YES |  | NULL |  |  |
| regdate | datetime | YES |  | NULL |  |  |
| insert_user | varchar(50) | YES |  | NULL |  |  |
| insert_datetime | datetime | YES |  | NULL |  |  |
| edit_user | varchar(50) | YES |  | NULL |  |  |
| edit_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
