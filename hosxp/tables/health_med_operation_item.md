# `health_med_operation_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_operation_item_id | int(11) | NO | PRI | 0 |  |  |
| health_med_operation_item_name | varchar(250) | YES | UNI | NULL |  |  |
| health_med_operation_item_code | varchar(10) | YES |  | NULL |  |  |
| icode | varchar(7) | YES |  | NULL |  |  |
| price | double(15,3) | YES |  | NULL |  |  |
| health_med_operation_type_id | int(11) | YES | MUL | NULL |  |  |
| operation_time_default | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| icd10tm | varchar(15) | YES |  | NULL |  |  |
| active_status | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_operation_item_name | health_med_operation_item_name | yes | 1 |
| ix_health_med_operation_type_id | health_med_operation_type_id | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_operation_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "health_med_operation_item_id": 1,
    "health_med_operation_item_name": "การบริบาลหญิงตั้งครรภ์ด้วยการนวด - 00",
    "health_med_operation_item_code": "00",
    "icode": null,
    "price": null,
    "health_med_operation_type_id": 1,
    "operation_time_default": null,
    "hos_guid": null,
    "icd10tm": null,
    "active_status": null
  },
  {
    "health_med_operation_item_id": 2,
    "health_med_operation_item_name": "การบริบาลหญิงตั้งครรภ์ด้วยการประคบ - 01",
    "health_med_operation_item_code": "01",
    "icode": null,
    "price": null,
    "health_med_operation_type_id": 1,
    "operation_time_default": null,
    "hos_guid": null,
    "icd10tm": null,
    "active_status": null
  },
  {
    "health_med_operation_item_id": 3,
    "health_med_operation_item_name": "การบริบาลหญิงตั้งครรภ์ด้วยวิธีอื่น - 08",
    "health_med_operation_item_code": "08",
    "icode": null,
    "price": null,
    "health_med_operation_type_id": 1,
    "operation_time_default": null,
    "hos_guid": null,
    "icd10tm": null,
    "active_status": null
  },
  {
    "health_med_operation_item_id": 4,
    "health_med_operation_item_name": "การบริบาลหญิงตั้งครรภ์ ไม่ระบุวิธี - 09",
    "health_med_operation_item_code": "09",
    "icode": null,
    "price": null,
    "health_med_operation_type_id": 1,
    "operation_time_default": null,
    "hos_guid": null,
    "icd10tm": null,
    "active_status": null
  },
  {
    "health_med_operation_item_id": 5,
    "health_med_operation_item_name": "การบริบาลหญิงหลังคลอดด้วยการใช้ยาสมุนไพร - 10",
    "health_med_operation_item_code": "10",
    "icode": null,
    "price": null,
    "health_med_operation_type_id": 1,
    "operation_time_default": null,
    "hos_guid": null,
    "icd10tm": null,
    "active_status": null
  },
  {
    "health_med_operation_item_id": 6,
    "health_med_operation_item_name": "การบริบาลหญิงหลังคลอดด้วยการรัดหน้าท้อง - 11",
    "health_med_operation_item_code": "11",
    "icode": null,
    "price": null,
    "health_med_operation_type_id": 1,
    "operation_time_default": null,
    "hos_guid": null,
    "icd10tm": null,
    "active_status": null
  },
  {
    "health_med_operation_item_id": 7,
    "health_med_operation_item_name": "การบริบาลหญิงหลังคลอดด้วยการทับหม้อเกลือ - 12",
    "health_med_operation_item_code": "12",
    "icode": null,
    "price": null,
    "health_med_operation_type_id": 1,
    "operation_time_default": null,
    "hos_guid": null,
    "icd10tm": null,
    "active_status": null
  },
  {
    "health_med_operation_item_id": 8,
    "health_med_operation_item_name": "การบริบาลหญิงหลังคลอดด้วยการนวด - 13",
    "health_med_operation_item_code": "13",
    "icode": null,
    "price": null,
    "health_med_operation_type_id": 1,
    "operation_time_default": null,
    "hos_guid": null,
    "icd10tm": null,
    "active_status": null
  }
]
```
