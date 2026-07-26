# `bb_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_department_id | int(11) | NO | PRI | 0 |  |  |
| bb_department_code | varchar(10) | YES | UNI | NULL |  |  |
| bb_department_name | varchar(100) | YES |  | NULL |  |  |
| bb_branch_id | int(11) | YES |  | NULL |  |  |
| bb_department_nm | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bb_department_code | bb_department_code | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_department_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
