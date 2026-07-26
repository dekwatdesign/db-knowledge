# `bb_branch`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bb_branch_id | int(11) | NO | PRI | 0 |  |  |
| bb_branch_code | varchar(5) | YES |  | NULL |  |  |
| bb_branch_name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bb_branch_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
