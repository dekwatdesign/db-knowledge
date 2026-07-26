# `tb_plan_drug_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_plan_drug_status_id | int(11) | NO | PRI | 0 |  |  |
| tb_plan_drug_status_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_plan_drug_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "tb_plan_drug_status_id": 1,
    "tb_plan_drug_status_name": "อยู่ระหว่างการใช้แผน",
    "hos_guid": null
  },
  {
    "tb_plan_drug_status_id": 2,
    "tb_plan_drug_status_name": "สิ้นสุดการใช้แผน",
    "hos_guid": null
  },
  {
    "tb_plan_drug_status_id": 3,
    "tb_plan_drug_status_name": "ยกเลิกแผน",
    "hos_guid": null
  }
]
```
