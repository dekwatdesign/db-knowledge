# `universal_item_class`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| universal_item_class_id | int(11) | NO | PRI | 0 |  |  |
| universal_item_class_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_universal_item_class_name | universal_item_class_name | yes | 1 |
| PRIMARY | universal_item_class_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "universal_item_class_id": 1,
    "universal_item_class_name": "แบบบันทึกข้อมูลการรับยาเดิม",
    "hos_guid": "{1FC3179E-00F4-486D-AAB0-FCE48EB7F880}"
  },
  {
    "universal_item_class_id": 2,
    "universal_item_class_name": "TECHNICIAN S OBSERVATIONS",
    "hos_guid": "{D3F853D4-865D-4F6C-B606-647FE83D959E}"
  },
  {
    "universal_item_class_id": 3,
    "universal_item_class_name": "แบบเฝ้าระวังการติดเชื้อในโรงพยาบาลยุวประสาทไวทโยปถัมภ์",
    "hos_guid": null
  },
  {
    "universal_item_class_id": 4,
    "universal_item_class_name": "คัดกรอง Stress test",
    "hos_guid": "{4E35E24F-E5E1-4BF4-A0B8-2BA9C87949BB}"
  },
  {
    "universal_item_class_id": 5,
    "universal_item_class_name": "คัดกรอง Burden",
    "hos_guid": "{94A40562-CF51-4621-A64D-54E1195497B6}"
  },
  {
    "universal_item_class_id": 6,
    "universal_item_class_name": "PDDSQ 4-18 ปี",
    "hos_guid": "{D897959D-3314-439D-A89D-73822A565020}"
  },
  {
    "universal_item_class_id": 7,
    "universal_item_class_name": "แบบประเมินสภาพผู้ป่วยจิตเวชเด็กและวัยรุ่น หอผู้ป่วยใน(1)",
    "hos_guid": null
  },
  {
    "universal_item_class_id": 8,
    "universal_item_class_name": "แบบประเมินสภาพผู้ป่วยจิตเวชเด็กและวัยรุ่น หอผู้ป่วยใน(2)",
    "hos_guid": null
  }
]
```
