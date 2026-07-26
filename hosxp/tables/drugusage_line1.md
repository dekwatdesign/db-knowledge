# `drugusage_line1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(250) | NO | PRI |  |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": " ฉีดเข้าเส้น (iv)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(...) ฉีดครั้งละ 1 ml (10 mg)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(...) ฉีดยาแล้วให้นำไปคืนที่ห้องฉีดยา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "(ใช้ตามแพทย์สั่ง)",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "1 amp + 50% glucose 50 cc.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "1 amp IM dose 3",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "1 amp IM STAT",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "1 amp IM TEST",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
