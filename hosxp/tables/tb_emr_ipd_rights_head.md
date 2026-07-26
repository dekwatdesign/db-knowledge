# `tb_emr_ipd_rights_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(10) | NO | PRI |  |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| emr_ipd_rights_note | text | YES |  | NULL |  |  |
| user_insert | varchar(50) | YES |  | NULL |  |  |
| user_insert_datetime | datetime | YES |  | NULL |  |  |
| user_edit | varchar(50) | YES |  | NULL |  |  |
| user_edit_datetime | datetime | YES |  | NULL |  |  |
| emr_ipd_rights_head_status | char(2) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| emr_ipd_rights_head_status | emr_ipd_rights_head_status | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
