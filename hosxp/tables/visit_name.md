# `visit_name`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| hn | varchar(9) | YES |  | NULL |  |  |
| patient_name | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "051017175759",
    "hn": "530054348",
    "patient_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "vn": "240614151330",
    "hn": "530043241",
    "patient_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "vn": "250101153511",
    "hn": "570002047",
    "patient_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "vn": "250109164252",
    "hn": "530122152",
    "patient_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "vn": "250112144831",
    "hn": "600000969",
    "patient_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "vn": "250119130001",
    "hn": "530107252",
    "patient_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "vn": "250201113358",
    "hn": "560000577",
    "patient_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "vn": "250201135641",
    "hn": "580001270",
    "patient_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  }
]
```
