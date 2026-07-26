# `village_factory_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_factory_type_id | int(11) | NO | PRI | 0 |  |  |
| village_factory_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_village_factory_type_name | village_factory_type_name | yes | 1 |
| PRIMARY | village_factory_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "village_factory_type_id": 1,
    "village_factory_type_name": "โรงงานประกอบกิจการเกี่ยวกับการบ่มใบชาหรือใบยาสูบ",
    "hos_guid": null
  },
  {
    "village_factory_type_id": 2,
    "village_factory_type_name": "โรงงานประกอบกิจการเกี่ยวกับผลิตผลเกษตรกรรมอย่างใดอย่างหนึ่งหรือหลายอย่าง",
    "hos_guid": null
  },
  {
    "village_factory_type_id": 3,
    "village_factory_type_name": "โรงงานประกอบกิจการเกี่ยวกับหิน กรวด ทราย หรือดินสำหรับใช้ในการก่อสร้างอย่างใดอย่างหนึ่งหรือหลายอย่าง",
    "hos_guid": null
  },
  {
    "village_factory_type_id": 4,
    "village_factory_type_name": "โรงงานประกอบกิจการเกี่ยวกับสัตว์ ซึ่งมิใช่สัตว์น้ำ อย่างใดอย่างหนึ่งหรือหลายอย่าง",
    "hos_guid": null
  },
  {
    "village_factory_type_id": 5,
    "village_factory_type_name": "โรงงานประกอบกิจการเกี่ยวกับน้ำนมอย่างใดอย่างหนึ่งหรือหลายอย่าง",
    "hos_guid": null
  },
  {
    "village_factory_type_id": 6,
    "village_factory_type_name": "โรงงานประกอบกิจการเกี่ยวกับสัตว์น้ำ อย่างใดอย่างหนึ่งหรือหลายอย่าง",
    "hos_guid": null
  },
  {
    "village_factory_type_id": 7,
    "village_factory_type_name": "โรงงานประกอบกิจการเกี่ยวกับน้ำมัน จากพืชหรือ สัตว์ หรือไขมันจากสัตว์อย่างใดอย่างหนึ่ง หรือหลายอย่าง",
    "hos_guid": null
  },
  {
    "village_factory_type_id": 8,
    "village_factory_type_name": "โรงงานประกอบกิจการเกี่ยวกับผัก พืช หรือผลไม้อย่างใดอย่างหนึ่งหรือหลายอย่าง",
    "hos_guid": null
  }
]
```
