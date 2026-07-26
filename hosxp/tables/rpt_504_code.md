# `rpt_504_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| id | int(11) | NO | PRI | 0 |  |  |
| code1 | varchar(10) | NO | PRI |  |  |  |
| code2 | varchar(10) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | id | yes | 1 |
| PRIMARY | code1 | yes | 2 |
| PRIMARY | code2 | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "id": 1,
    "code1": "A00",
    "code2": "B9999",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 2,
    "code1": "C00",
    "code2": "D4899",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 3,
    "code1": "D50",
    "code2": "D8999",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 4,
    "code1": "E00",
    "code2": "E9099",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 5,
    "code1": "F00",
    "code2": "F9999",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 6,
    "code1": "G00",
    "code2": "G9999",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 7,
    "code1": "H00",
    "code2": "H5999",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 8,
    "code1": "H60",
    "code2": "H9599",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
