# `thaiaddress_region`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| chwpart | char(2) | NO | PRI |  |  |  |
| region_code | char(2) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | chwpart | yes | 1 |
| region_code | region_code | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "chwpart": "10",
    "region_code": "1",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "chwpart": "11",
    "region_code": "2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "chwpart": "12",
    "region_code": "2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "chwpart": "13",
    "region_code": "2",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "chwpart": "14",
    "region_code": "3",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "chwpart": "15",
    "region_code": "3",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "chwpart": "16",
    "region_code": "3",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "chwpart": "17",
    "region_code": "3",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
