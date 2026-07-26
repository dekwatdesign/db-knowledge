# `visit_plan`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| visit_plan_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| plan_date_time | datetime | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| send_to_depcode | char(3) | YES |  | NULL |  |  |
| job | text | YES |  | NULL |  |  |
| precaution | text | YES |  | NULL |  |  |
| complete | char(1) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| complete_date_time | datetime | YES |  | NULL |  |  |
| comment | text | YES |  | NULL |  |  |
| priority_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | visit_plan_id | yes | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
