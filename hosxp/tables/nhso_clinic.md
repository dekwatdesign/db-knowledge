# `nhso_clinic`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(2) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": "01",
    "name": "อายุรกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "02",
    "name": "ศัลยกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "03",
    "name": "สูติกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "04",
    "name": "นรีเวชกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "05",
    "name": "กุมารเวชกรรม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "06",
    "name": "โสต ศอ นาสิก",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "07",
    "name": "จักษุ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "code": "08",
    "name": "ศัลยกรรมกระดูก",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
