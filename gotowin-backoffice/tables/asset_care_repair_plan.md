# `asset_care_repair_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| REPAIR_PLAN_ID | int | NO | PRI | NULL | auto_increment |  |
| REPAIR_PLAN_ARTICLE_ID | int | YES |  | NULL |  |  |
| REPAIR_PLAN_ARTICLE_NUM | varchar(100) | YES |  | NULL |  |  |
| REPAIR_PLAN_DATE | date | YES |  | NULL |  |  |
| REPAIR_PLAN_BEGIN_TIME | time | YES |  | NULL |  |  |
| REPAIR_PLAN_END_TIME | time | YES |  | NULL |  |  |
| REPAIR_PLAN_REMARK | varchar(255) | YES |  | NULL |  |  |
| REPAIR_PESON_CHECK_ID | int | YES |  | NULL |  |  |
| REPAIR_PESON_CHECK_NAME | varchar(255) | YES |  | NULL |  |  |
| updated_at | datetime | YES |  | NULL |  |  |
| created_at | datetime | YES |  | NULL |  |  |
| REPAIR_LEADER_CHECK_ID | int | YES |  | NULL |  |  |
| REPAIR_LEADER_CHECK_NAME | varchar(255) | YES |  | NULL |  |  |
| REPAIR_RESULT | varchar(255) | YES |  | NULL |  |  |
| REPAIR_TYPE_CHECK | enum('plan','notplan') | YES |  | plan |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | REPAIR_PLAN_ID | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
