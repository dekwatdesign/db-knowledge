# `project_act_1_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| project_act_1_detail_id | int(11) | NO | PRI | 0 |  |  |
| project_activity_id | int(11) | YES |  | NULL |  |  |
| project_act_item_name | varchar(250) | YES |  | NULL |  |  |
| project_act_item_qty | int(11) | YES |  | NULL |  |  |
| project_act_item_unit_price | double(15,3) | YES |  | NULL |  |  |
| project_act_item_total | double(15,3) | YES |  | NULL |  |  |
| item_note | text | YES |  | NULL |  |  |
| project_act_std_price | double(15,3) | YES |  | NULL |  |  |
| spec_ok | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | project_act_1_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
