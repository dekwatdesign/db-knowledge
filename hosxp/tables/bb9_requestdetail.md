# `bb9_requestdetail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| requestdetail_id | int(11) | NO | PRI | 0 |  |  |
| request_id | int(11) | YES | MUL | NULL |  |  |
| bloodtype_id | int(11) | YES | MUL | NULL |  |  |
| bloodgroup_id | int(11) | YES | MUL | NULL |  |  |
| quantity | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| bloodgroup_id | bloodgroup_id | no | 1 |
| bloodtype_id | bloodtype_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | requestdetail_id | yes | 1 |
| request_id | request_id | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
