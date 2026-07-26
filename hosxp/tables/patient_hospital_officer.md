# `patient_hospital_officer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| is_officer | char(1) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "530000454",
    "is_officer": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530001550",
    "is_officer": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530001651",
    "is_officer": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530001950",
    "is_officer": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530002148",
    "is_officer": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530002152",
    "is_officer": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530003352",
    "is_officer": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530003454",
    "is_officer": "Y",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
