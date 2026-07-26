# `referout_hosp_department`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(250) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
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
    "name": "EENT",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "จิตเวช",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "เด็ก",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ต่อมไร้ท่อ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "นรีเวชกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "ศัลยกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "สูติกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "อายุรกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
