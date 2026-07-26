# `provis_pname`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| provis_pname_code | varchar(3) | NO | PRI |  |  |  |
| provis_pname_short_name | varchar(100) | YES | MUL | NULL |  |  |
| provis_pname_long_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_shortname | provis_pname_short_name | no | 1 |
| PRIMARY | provis_pname_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "provis_pname_code": "001",
    "provis_pname_short_name": "[MASKED_FULLNAME]",
    "provis_pname_long_name": "เด็กชาย",
    "hos_guid": null
  },
  {
    "provis_pname_code": "002",
    "provis_pname_short_name": "[MASKED_FULLNAME]",
    "provis_pname_long_name": "เด็กหญิง",
    "hos_guid": null
  },
  {
    "provis_pname_code": "003",
    "provis_pname_short_name": "[MASKED_FULLNAME]",
    "provis_pname_long_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "provis_pname_code": "004",
    "provis_pname_short_name": "[MASKED_FULLNAME]",
    "provis_pname_long_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "provis_pname_code": "005",
    "provis_pname_short_name": "[MASKED_FULLNAME]",
    "provis_pname_long_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "provis_pname_code": "006",
    "provis_pname_short_name": "น.ช.ม.ล.",
    "provis_pname_long_name": "นักโทษชายหม่อมหลวง",
    "hos_guid": null
  },
  {
    "provis_pname_code": "007",
    "provis_pname_short_name": "น.ช.",
    "provis_pname_long_name": "นักโทษชาย",
    "hos_guid": null
  },
  {
    "provis_pname_code": "008",
    "provis_pname_short_name": "น.ญ.",
    "provis_pname_long_name": "นักโทษหญิง",
    "hos_guid": null
  }
]
```
