# `physic_tool_service`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_tool_service_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| anvn | varchar(13) | YES | MUL | NULL |  |  |
| physic_main_regist_id | int(11) | YES |  | NULL |  |  |
| physic_plan_id | int(11) | YES | MUL | NULL |  |  |
| department | char(3) | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| staff | varchar(150) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_xi_anvn | anvn | no | 1 |
| ix_xi_physic_plan_id | physic_plan_id | no | 1 |
| PRIMARY | physic_tool_service_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
