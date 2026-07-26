# `asset_care_repair_plan_sub`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REPAIR_PLAN_SUB_ID | int | NO | PRI | NULL | auto_increment |  |
| REPAIR_PLAN_ID | int | YES |  | NULL |  |  |
| REPAIR_PLAN_SUB_NAME | varchar(255) | YES |  | NULL |  |  |
| REPAIR_PLAN_SUB_REMARK | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| REPAIR_PLAN_SUB_RESULT | varchar(20) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REPAIR_PLAN_SUB_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
