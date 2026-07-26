# `ipt_spclty`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_spclty | char(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES | MUL | NULL |  |  |
| sss_code | varchar(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| name | name | no | 1 |
| PRIMARY | ipt_spclty | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_spclty": "01",
    "name": "อายุรกรรม",
    "sss_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ipt_spclty": "02",
    "name": "ศัลยกรรม",
    "sss_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ipt_spclty": "03",
    "name": "สูติกรรม",
    "sss_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ipt_spclty": "04",
    "name": "นรีเวชกรรม",
    "sss_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ipt_spclty": "05",
    "name": "กุมารเวชกรรม",
    "sss_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ipt_spclty": "06",
    "name": "โสต ศอ นาสิก",
    "sss_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ipt_spclty": "07",
    "name": "จักษุ",
    "sss_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ipt_spclty": "08",
    "name": "ศัลยกรรมกระดูก",
    "sss_code": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
