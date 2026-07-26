# `tb_emr_ipd_rights_level2_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(10) | NO | PRI |  |  |  |
| hn | varchar(10) | YES | MUL | NULL |  |  |
| emr_ipd_rights_level2_id | int(5) | NO | PRI | 0 |  |  |
| emr_ipd_rights_level2_note | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| emr_ipd_rights_level2_id | emr_ipd_rights_level2_id | no | 1 |
| hn | hn | no | 1 |
| PRIMARY | an | yes | 1 |
| PRIMARY | emr_ipd_rights_level2_id | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
