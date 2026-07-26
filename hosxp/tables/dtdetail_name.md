# `dtdetail_name`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtcode | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| code_type | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dtcode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dtcode": 101,
    "name": "ไม่พบฟันผุ",
    "code_type": 1,
    "hos_guid": null
  },
  {
    "dtcode": 102,
    "name": "ไม่พบหินน้ำลาย",
    "code_type": 1,
    "hos_guid": null
  },
  {
    "dtcode": 103,
    "name": "ไม่มีฟันเหลืออยู่",
    "code_type": 1,
    "hos_guid": null
  },
  {
    "dtcode": 104,
    "name": "มีฟันผุที่ยังไม่ได้อุด",
    "code_type": 1,
    "hos_guid": null
  },
  {
    "dtcode": 105,
    "name": "ไม่มีหินน้ำลาย",
    "code_type": 1,
    "hos_guid": null
  },
  {
    "dtcode": 106,
    "name": "มีฟันต้องถอน",
    "code_type": 1,
    "hos_guid": null
  },
  {
    "dtcode": 107,
    "name": "สมัครเข้าโครงการ 102 ปี สมเด็จย่า",
    "code_type": 1,
    "hos_guid": null
  },
  {
    "dtcode": 108,
    "name": "Plaque Control",
    "code_type": 1,
    "hos_guid": null
  }
]
```
