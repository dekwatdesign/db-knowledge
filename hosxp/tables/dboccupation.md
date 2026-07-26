# `dboccupation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| idoccupation | int(11) | YES |  | NULL |  |  |
| Doccupation | varchar(50) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "idoccupation": 1,
    "Doccupation": "เกษตร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idoccupation": 2,
    "Doccupation": "ข้าราชการ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idoccupation": 3,
    "Doccupation": "รับจ้าง,กรรมกร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idoccupation": 4,
    "Doccupation": "ค้าขาย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idoccupation": 5,
    "Doccupation": "งานบ้าน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idoccupation": 6,
    "Doccupation": "นักเรียน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idoccupation": 7,
    "Doccupation": "ทหาร,ตำรวจ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idoccupation": 8,
    "Doccupation": "ประมง",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
