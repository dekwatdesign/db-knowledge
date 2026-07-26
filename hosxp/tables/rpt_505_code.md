# `rpt_505_code`

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
    "code1": "A01",
    "code2": "A0299",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 2,
    "code1": "A03",
    "code2": "A0999",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 3,
    "code1": "A15",
    "code2": "A1999",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 4,
    "code1": "A30",
    "code2": "A3099",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 5,
    "code1": "A83",
    "code2": "A8699",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 6,
    "code1": "A91",
    "code2": "A9299",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 7,
    "code1": "B15",
    "code2": "B1999",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "id": 8,
    "code1": "B20",
    "code2": "B2499",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
