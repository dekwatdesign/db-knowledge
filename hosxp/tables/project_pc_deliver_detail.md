# `project_pc_deliver_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_pc_deliver_detail_id | int(11) | NO | PRI | 0 |  |  |
| project_pc_deliver_id | int(11) | YES | MUL | NULL |  |  |
| project_act_1_detail_id | int(11) | YES |  | NULL |  |  |
| deliver_qty | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_deliver_id | project_pc_deliver_id | no | 1 |
| PRIMARY | project_pc_deliver_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
