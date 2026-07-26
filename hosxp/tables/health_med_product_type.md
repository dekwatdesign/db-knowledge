# `health_med_product_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_product_type_id | int(11) | NO | PRI | 0 |  |  |
| health_med_product_type_name | varchar(150) | YES | UNI | NULL |  |  |
| health_med_product_type_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_product_type_name | health_med_product_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_product_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "health_med_product_type_id": 1,
    "health_med_product_type_name": "ยาสมุนไพรประเภทกลุ่มยาสมุนไพรเดี่ยว",
    "health_med_product_type_code": "11",
    "hos_guid": null
  },
  {
    "health_med_product_type_id": 2,
    "health_med_product_type_name": "ยาสมุนไพรประเภทยาสมุนไพรตำหรับ",
    "health_med_product_type_code": "12",
    "hos_guid": null
  },
  {
    "health_med_product_type_id": 3,
    "health_med_product_type_name": "ผลิตภัณฑ์จากสมุนไพรประเภทเครื่องสำอาง",
    "health_med_product_type_code": "21",
    "hos_guid": null
  },
  {
    "health_med_product_type_id": 4,
    "health_med_product_type_name": "ผลิตภัณฑ์จากสมุนไพรประเภทเครื่องดื่ม",
    "health_med_product_type_code": "22",
    "hos_guid": null
  },
  {
    "health_med_product_type_id": 5,
    "health_med_product_type_name": "ผลิตภัณฑ์จากสมุนไพรประเภทอื่นๆ",
    "health_med_product_type_code": "23",
    "hos_guid": null
  }
]
```
