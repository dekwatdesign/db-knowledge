# `health_med_provider_category`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| health_med_provider_category_id | int(11) | NO | PRI | 0 |  |  |
| health_med_provider_category_name | varchar(150) | YES | UNI | NULL |  |  |
| health_med_provider_category_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_health_med_provider_category_name | health_med_provider_category_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | health_med_provider_category_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "health_med_provider_category_id": 1,
    "health_med_provider_category_name": "ผู้ให้บริการนวด การประคบสมุนไพร และการอบไอน้ำสมุนไพร เพื่อการส่งเสริมสุขภาพและป้องกันโรค",
    "health_med_provider_category_code": "01",
    "hos_guid": null
  },
  {
    "health_med_provider_category_id": 2,
    "health_med_provider_category_name": "ผู้ให้บริการนวด เพื่อการบำบัดรักษาและฟื้นฟูสภาพ",
    "health_med_provider_category_code": "02",
    "hos_guid": null
  },
  {
    "health_med_provider_category_id": 3,
    "health_med_provider_category_name": "ผู้ให้บริการประคบสมุนไพร การอบไอน้ำสมุนไพร เพื่อการบำบัดรักษาและฟื้นฟูสภาพ",
    "health_med_provider_category_code": "03",
    "hos_guid": null
  },
  {
    "health_med_provider_category_id": 4,
    "health_med_provider_category_name": "ผู้ให้บริการทับหม้อเกลือการรัดหน้าท้อง การอาบสมุนไพร การนาบอิฐ",
    "health_med_provider_category_code": "04",
    "hos_guid": null
  }
]
```
