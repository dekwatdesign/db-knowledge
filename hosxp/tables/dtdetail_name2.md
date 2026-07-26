# `dtdetail_name2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtcode | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| code_type | int(11) | YES |  | NULL |  |  |
| group_name | varchar(50) | YES |  | NULL |  |  |
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
    "name": "ตรวจ 1",
    "code_type": 2,
    "group_name": "ทันตวินิจฉัย",
    "hos_guid": null
  },
  {
    "dtcode": 102,
    "name": "ตรวจ 2",
    "code_type": 2,
    "group_name": "ทันตวินิจฉัย",
    "hos_guid": null
  },
  {
    "dtcode": 103,
    "name": "ตรวจ 3",
    "code_type": 2,
    "group_name": "ทันตวินิจฉัย",
    "hos_guid": null
  },
  {
    "dtcode": 104,
    "name": "ไม่รอตรวจ",
    "code_type": 2,
    "group_name": "ทันตวินิจฉัย",
    "hos_guid": null
  },
  {
    "dtcode": 201,
    "name": "ทันตรังสี 1",
    "code_type": 2,
    "group_name": "ทันตรังสี",
    "hos_guid": null
  },
  {
    "dtcode": 202,
    "name": "ทันตรังสี 2",
    "code_type": 2,
    "group_name": "ทันตรังสี",
    "hos_guid": null
  },
  {
    "dtcode": 203,
    "name": "จำนวนฟิลม์",
    "code_type": 3,
    "group_name": "ทันตรังสี",
    "hos_guid": null
  },
  {
    "dtcode": 301,
    "name": "เวชศาสตร์ช่องปาก 1",
    "code_type": 2,
    "group_name": "เวชศาสตร์ช่องปาก",
    "hos_guid": null
  }
]
```
