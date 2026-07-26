# `project_procurement_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_procurement_list_id | int(11) | NO | PRI | 0 |  |  |
| project_procurement_id | int(11) | YES | MUL | NULL |  |  |
| project_act_1_detail_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_act_id | project_act_1_detail_id | no | 1 |
| ix_list_act_id | project_procurement_id | yes | 1 |
| ix_list_act_id | project_act_1_detail_id | yes | 2 |
| ix_list_act_id_index | project_act_1_detail_id | yes | 1 |
| ix_list_act_id_index | project_procurement_id | yes | 2 |
| ix_procurement_id | project_procurement_id | no | 1 |
| PRIMARY | project_procurement_list_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
