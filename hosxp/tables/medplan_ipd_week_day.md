# `medplan_ipd_week_day`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medplan_ipd_week_day_id | int(11) | NO | PRI | 0 |  |  |
| med_plan_number | int(11) | YES | MUL | NULL |  |  |
| week_day_id | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_med_plan_number | med_plan_number | no | 1 |
| PRIMARY | medplan_ipd_week_day_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "medplan_ipd_week_day_id": 1,
    "med_plan_number": 43030,
    "week_day_id": 6,
    "hos_guid": null
  },
  {
    "medplan_ipd_week_day_id": 2,
    "med_plan_number": 45065,
    "week_day_id": 0,
    "hos_guid": null
  },
  {
    "medplan_ipd_week_day_id": 3,
    "med_plan_number": 45065,
    "week_day_id": 3,
    "hos_guid": null
  },
  {
    "medplan_ipd_week_day_id": 4,
    "med_plan_number": 45206,
    "week_day_id": 0,
    "hos_guid": null
  },
  {
    "medplan_ipd_week_day_id": 5,
    "med_plan_number": 45206,
    "week_day_id": 3,
    "hos_guid": null
  }
]
```
