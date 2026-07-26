# `cause_id`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| cause_id | tinyint(4) | NO | PRI | 0 |  |  |
| cause_name | varchar(250) | YES |  | NULL |  |  |
| tot1 | int(11) | YES |  | NULL |  |  |
| tot2 | int(11) | YES |  | NULL |  |  |
| tot3 | int(11) | YES |  | NULL |  |  |
| tot4 | int(4) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | cause_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "cause_id": 1,
    "cause_name": "อุบัติเหตุการขนส่ง",
    "tot1": 297,
    "tot2": 276,
    "tot3": 0,
    "tot4": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cause_id": 2,
    "cause_name": "การบาดเจ็บอื่น ๆ  แยกตาม  <icdcause>",
    "tot1": 297,
    "tot2": 276,
    "tot3": 0,
    "tot4": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cause_id": 3,
    "cause_name": "  อุบัติเหตุ  พลัด  ตก  หรือ  หกล้ม",
    "tot1": 297,
    "tot2": 276,
    "tot3": 0,
    "tot4": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cause_id": 4,
    "cause_name": "  อุบัติเหตุแรงเชิงกล  วัตถุสิ่งของ",
    "tot1": 297,
    "tot2": 276,
    "tot3": 0,
    "tot4": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cause_id": 5,
    "cause_name": "  อุบัติเหตุแรงเชิงกล  สัตว์คน",
    "tot1": 297,
    "tot2": 276,
    "tot3": 0,
    "tot4": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cause_id": 6,
    "cause_name": "  อุบัติเหตุตกน้ำ  และจมน้ำ",
    "tot1": 297,
    "tot2": 276,
    "tot3": 0,
    "tot4": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cause_id": 7,
    "cause_name": "  อุบัติเหตุที่คุกคามการหายใจ",
    "tot1": 297,
    "tot2": 276,
    "tot3": 0,
    "tot4": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "cause_id": 8,
    "cause_name": "  อุบัติเหตุถูกไฟฟ้า  รังสี  อุณหภูมิ",
    "tot1": 297,
    "tot2": 276,
    "tot3": 0,
    "tot4": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
