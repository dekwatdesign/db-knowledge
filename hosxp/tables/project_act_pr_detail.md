# `project_act_pr_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_act_pr_detail_id | int(11) | NO | PRI | 0 |  |  |
| project_act_pr_id | int(11) | YES |  | NULL |  |  |
| pr_item_name | varchar(200) | YES |  | NULL |  |  |
| pr_item_qty | int(11) | YES |  | NULL |  |  |
| pr_item_price | double(15,3) | YES |  | NULL |  |  |
| pr_item_total_price | double(15,3) | YES |  | NULL |  |  |
| pr_item_std_price | double(15,3) | YES |  | NULL |  |  |
| project_act_1_detail_id | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | project_act_pr_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
