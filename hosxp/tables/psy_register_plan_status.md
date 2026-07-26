# `psy_register_plan_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_plan_status_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_plan_status_name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_register_plan_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psy_register_plan_status_id": 1,
    "psy_register_plan_status_name": "ระหว่างดำเนินการ",
    "hos_guid": null
  },
  {
    "psy_register_plan_status_id": 2,
    "psy_register_plan_status_name": "สิ้นสุดการดำเนินการ",
    "hos_guid": null
  },
  {
    "psy_register_plan_status_id": 3,
    "psy_register_plan_status_name": "ยกเลิก",
    "hos_guid": null
  }
]
```
