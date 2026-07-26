# `operation_workload_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| operation_workload_type_id | int(11) | NO | PRI | 0 |  |  |
| operation_workload_type_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_operation_workload_type_name | operation_workload_type_name | yes | 1 |
| PRIMARY | operation_workload_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "operation_workload_type_id": 1,
    "operation_workload_type_name": "เจ้าหน้าที่เปลรับ",
    "hos_guid": null
  },
  {
    "operation_workload_type_id": 2,
    "operation_workload_type_name": "เจ้าหน้าที่เปลส่ง",
    "hos_guid": null
  },
  {
    "operation_workload_type_id": 3,
    "operation_workload_type_name": "เจ้าหน้าที่รับผู้ป่วยห้องผ่าตัด",
    "hos_guid": null
  }
]
```
