# `inv_durable_good_repair_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| inv_durable_good_rstatus_id | int(11) | NO | PRI | 0 |  |  |
| inv_durable_good_rstatus_name | varchar(100) | YES |  | NULL |  |  |
| inv_durable_good_rstatus_color | varchar(10) | YES |  | NULL |  |  |
| repair_status_priority | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | inv_durable_good_rstatus_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "inv_durable_good_rstatus_id": 1,
    "inv_durable_good_rstatus_name": "ซ่อมอยู่",
    "inv_durable_good_rstatus_color": null,
    "repair_status_priority": null
  },
  {
    "inv_durable_good_rstatus_id": 2,
    "inv_durable_good_rstatus_name": "ซ่อมเสร็จแล้ว",
    "inv_durable_good_rstatus_color": null,
    "repair_status_priority": null
  }
]
```
