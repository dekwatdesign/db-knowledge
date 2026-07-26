# `eriscode`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | varchar(12) | NO | PRI |  |  |  |
| preabb | varchar(10) | YES |  | NULL |  |  |
| prefix | varchar(30) | YES |  | NULL |  |  |
| describ | varchar(60) | YES | MUL | NULL |  |  |
| preqx | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| describ | describ | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "",
    "preabb": null,
    "prefix": null,
    "describ": null,
    "preqx": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "011",
    "preabb": null,
    "prefix": null,
    "describ": "ชาย",
    "preqx": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "012",
    "preabb": null,
    "prefix": null,
    "describ": "หญิง",
    "preqx": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "021",
    "preabb": null,
    "prefix": null,
    "describ": "ในจังหวัด",
    "preqx": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "022",
    "preabb": null,
    "prefix": null,
    "describ": "นอกจังหวัด",
    "preqx": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "02N",
    "preabb": null,
    "prefix": null,
    "describ": "ไม่ทราบ",
    "preqx": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0300",
    "preabb": null,
    "prefix": null,
    "describ": "ไม่มีอาชีพ",
    "preqx": "0",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "0301",
    "preabb": null,
    "prefix": null,
    "describ": "ข้าราชการ",
    "preqx": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
