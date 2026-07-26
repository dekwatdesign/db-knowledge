# `psychiatric_from_receive_firstchild_famiry`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_from_receive_firstchild_famiry_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_from_receive_firstchild_id | int(11) | YES |  | NULL |  |  |
| name | varchar(50) | YES |  | NULL |  |  |
| age | varchar(10) | YES |  | NULL |  |  |
| occupation | varchar(50) | YES |  | NULL |  |  |
| muny | varchar(10) | YES |  | NULL |  |  |
| tel | varchar(10) | YES |  | NULL |  |  |
| famiry_f | varchar(10) | YES |  | NULL |  |  |
| famiry_m | varchar(10) | YES |  | NULL |  |  |
| famiry_other | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psychiatric_from_receive_firstchild_famiry_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
