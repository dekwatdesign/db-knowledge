# `dbnation`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| idnation | int(11) | YES |  | NULL |  |  |
| Dnation | varchar(50) | YES |  | NULL |  |  |
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
    "idnation": 1,
    "Dnation": "ไทย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idnation": 2,
    "Dnation": "จีน/ฮ่องกง/ไต้หวัน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idnation": 3,
    "Dnation": "พม่า",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idnation": 4,
    "Dnation": "มาเลเซีย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idnation": 5,
    "Dnation": "กัมพูชา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idnation": 6,
    "Dnation": "ลาว",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idnation": 7,
    "Dnation": "เวียดนาม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "idnation": 8,
    "Dnation": "อื่นๆ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
