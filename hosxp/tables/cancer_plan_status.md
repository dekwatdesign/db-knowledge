# `cancer_plan_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cancer_plan_status_id | int(11) | NO | PRI | 0 |  |  |
| cancer_plan_status_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | cancer_plan_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "cancer_plan_status_id": 1,
    "cancer_plan_status_name": "New",
    "hos_guid": null
  },
  {
    "cancer_plan_status_id": 2,
    "cancer_plan_status_name": "On treatment",
    "hos_guid": null
  },
  {
    "cancer_plan_status_id": 3,
    "cancer_plan_status_name": "On hold",
    "hos_guid": null
  },
  {
    "cancer_plan_status_id": 4,
    "cancer_plan_status_name": "Finished",
    "hos_guid": null
  }
]
```
