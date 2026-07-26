# `elder_home_visit_plan_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| elder_home_visit_plan_status_id | int(11) | NO | PRI | 0 |  |  |
| elder_home_visit_plan_statas_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | elder_home_visit_plan_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "elder_home_visit_plan_status_id": 1,
    "elder_home_visit_plan_statas_name": "อยู่ระหว่างการดำเนินการ",
    "hos_guid": null
  },
  {
    "elder_home_visit_plan_status_id": 2,
    "elder_home_visit_plan_statas_name": "สิ้นสุดการดำเนินการ",
    "hos_guid": null
  }
]
```
