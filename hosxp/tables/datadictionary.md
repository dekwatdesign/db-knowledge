# `datadictionary`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tablename | varchar(50) | NO | PRI |  |  |  |
| fieldname | varchar(50) | NO | PRI |  |  |  |
| field_type | varchar(150) | YES |  | NULL |  |  |
| description | text | YES |  | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| mark_update | char(1) | YES |  | NULL |  |  |
| update_staff | varchar(25) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_fieldname_tablename_unique | fieldname | yes | 1 |
| ix_fieldname_tablename_unique | tablename | yes | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | tablename | yes | 1 |
| PRIMARY | fieldname | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "tablename": "ANINSERT",
    "fieldname": "---",
    "field_type": null,
    "description": "ตาราง ANINSERT ใช้.......",
    "last_update": null,
    "mark_update": null,
    "update_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "tablename": "clinic",
    "fieldname": "clinic",
    "field_type": null,
    "description": "รหัสคลีนิค",
    "last_update": null,
    "mark_update": null,
    "update_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "tablename": "clinic",
    "fieldname": "name",
    "field_type": null,
    "description": "ชื่อคลีนิค",
    "last_update": null,
    "mark_update": null,
    "update_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "tablename": "onlineuser",
    "fieldname": "clinic",
    "field_type": null,
    "description": "การนัด ผู้ป่วยนอก",
    "last_update": null,
    "mark_update": null,
    "update_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "tablename": "OPDScreen",
    "fieldname": "---",
    "field_type": null,
    "description": "ตารางที่ใช้ในการเก็บข้อมูล ณ จุดซักประวัติและอาการสำคัญที่มา เพื่อใช้ในการส่งต่อไปยังห้องตรวจโรค และจุดอื่นๆ",
    "last_update": null,
    "mark_update": null,
    "update_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "tablename": "ovst",
    "fieldname": "vn",
    "field_type": null,
    "description": "visit no",
    "last_update": null,
    "mark_update": null,
    "update_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "tablename": "ovst",
    "fieldname": "vstdate",
    "field_type": null,
    "description": "วันที่มารับการรักษา",
    "last_update": null,
    "mark_update": null,
    "update_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "tablename": "ovstist",
    "fieldname": "icd10",
    "field_type": null,
    "description": "กรณีมีหลาย icd10 จะมีหลาย แถว",
    "last_update": null,
    "mark_update": null,
    "update_staff": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
