# `operation_anes_workload_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_anes_workload_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_anes_workload_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_anes_workload_type_name | operation_anes_workload_type_name | yes | 1 |
| PRIMARY | operation_anes_workload_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "operation_anes_workload_type_id": 1,
    "operation_anes_workload_type_name": "ให้ยาระงับความรู้สึก",
    "hos_guid": null
  },
  {
    "operation_anes_workload_type_id": 2,
    "operation_anes_workload_type_name": "ช่วยให้ยาระงับความรู้สึก",
    "hos_guid": null
  },
  {
    "operation_anes_workload_type_id": 3,
    "operation_anes_workload_type_name": "ดูแลผู้ป่วยห้องพักฟื้น",
    "hos_guid": null
  },
  {
    "operation_anes_workload_type_id": 4,
    "operation_anes_workload_type_name": "เยี่ยมผู้ป่วยก่อนผ่าตัด",
    "hos_guid": null
  },
  {
    "operation_anes_workload_type_id": 5,
    "operation_anes_workload_type_name": "เยี่ยมผู้ป่วยหลังผ่าตัด",
    "hos_guid": null
  },
  {
    "operation_anes_workload_type_id": 6,
    "operation_anes_workload_type_name": "ให้คำปรึกษา",
    "hos_guid": null
  }
]
```
