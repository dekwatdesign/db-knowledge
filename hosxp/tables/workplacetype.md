# `workplacetype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| workplacetype_id | char(10) | NO | PRI |  |  |  |
| workplacetype_name | varchar(500) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | workplacetype_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "workplacetype_id": "1",
    "workplacetype_name": "การสำรวจ การทำเหมืองแร่ และการประกอบกิจการเกี่ยวกับ แร่ กรวด หิน ดิน ทราย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "workplacetype_id": "10",
    "workplacetype_name": "การผลิต การประกอบ การซ่อม ยานพาหนะ และอุปกรณ์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "workplacetype_id": "1001",
    "workplacetype_name": "การต่อ การซ่อม การรื้อเรือ ที่ทำด้วยโลหะ หรือโลหะเป็นส่วนใหญ่",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "workplacetype_id": "1002",
    "workplacetype_name": "การต่อ การซ่อมเรือประเภทอื่น",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "workplacetype_id": "1003",
    "workplacetype_name": "การผลิต การซ่อมรถจักร รถพ่วง อุปกรณ์รถไฟ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "workplacetype_id": "1004",
    "workplacetype_name": "การผลิต การประกอบรถยนต์ รถแทรกเตอร์ ตัวถัง และโครงหลังคารถยนต์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "workplacetype_id": "1005",
    "workplacetype_name": "การผลิต การประกอบจักรยาน จักรยานยนต์ทุกประเภท",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "workplacetype_id": "1006",
    "workplacetype_name": "การผลิตรถชนิดลากจูงด้วยแรงสัตว์ และรถเข็น",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
