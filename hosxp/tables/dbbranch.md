# `dbbranch`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| branch | varchar(100) | YES |  | NULL |  |  |
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
    "branch": "กระดูกและข้อ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "branch": "จักษุ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "branch": "จิตเวช",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "branch": "เด็ก",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "branch": "ศัลยกรรมทั่วไป",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "branch": "ศัลยกรรมระบบประสาท",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "branch": "สูติกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "branch": "โสต ศอ นาสิก",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
