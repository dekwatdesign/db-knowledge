# `universal_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| universal_item_id | int(11) | NO | PRI | 0 |  |  |
| universal_item_name | varchar(200) | YES | MUL | NULL |  |  |
| universal_item_class_id | int(11) | YES |  | NULL |  |  |
| universal_item_note | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_universal_item_name | universal_item_name | no | 1 |
| PRIMARY | universal_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "universal_item_id": 2,
    "universal_item_name": "วันที่รับยา",
    "universal_item_class_id": 1,
    "universal_item_note": null,
    "hos_guid": "{57359C8B-EF26-45F7-8E1C-0E7E722B5677}"
  },
  {
    "universal_item_id": 3,
    "universal_item_name": "ความสัมพันธ์กับผู้ป่วย",
    "universal_item_class_id": 1,
    "universal_item_note": null,
    "hos_guid": "{1BCE0330-53BE-4F9A-B640-B3CED08E5E8F}"
  },
  {
    "universal_item_id": 4,
    "universal_item_name": "สาเหตุที่มารับบริการ",
    "universal_item_class_id": 1,
    "universal_item_note": null,
    "hos_guid": "{04BEDD43-09D9-4993-A5B8-2EA3BE568629}"
  },
  {
    "universal_item_id": 5,
    "universal_item_name": "การขาดยา",
    "universal_item_class_id": 1,
    "universal_item_note": null,
    "hos_guid": "{D02DA151-0E38-4F24-BB00-F360EAB341B0}"
  },
  {
    "universal_item_id": 6,
    "universal_item_name": "ระบุเวลา",
    "universal_item_class_id": 1,
    "universal_item_note": null,
    "hos_guid": "{7A62A583-E07E-4800-AD7C-D799635346C3}"
  },
  {
    "universal_item_id": 7,
    "universal_item_name": "การรับประทานยา",
    "universal_item_class_id": 1,
    "universal_item_note": null,
    "hos_guid": null
  },
  {
    "universal_item_id": 8,
    "universal_item_name": "ระบุ",
    "universal_item_class_id": 1,
    "universal_item_note": null,
    "hos_guid": "{51482582-D7B2-47BD-819A-B1629B3760DF}"
  },
  {
    "universal_item_id": 10,
    "universal_item_name": "กินได้แต่ต้องบังคับ",
    "universal_item_class_id": 1,
    "universal_item_note": null,
    "hos_guid": "{4FD4A885-6D8F-4F5E-8D68-0B5A8FF1BB5E}"
  }
]
```
