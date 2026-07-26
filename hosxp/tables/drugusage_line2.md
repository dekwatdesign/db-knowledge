# `drugusage_line2`

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
    "name": "+    D-5-W 100 ml OD x     day",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "-กิน 3 เม็ด เย็น หลังอาหาร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "...... เม็ด ตอนบ่าย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "..............  ............ .............  ...",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "..................................",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "........................................",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "1 hrly.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "1 ครั้ง ต่อ สัปดาห์",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
