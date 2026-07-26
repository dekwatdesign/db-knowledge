# `clinic_visit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES | MUL | NULL |  |  |
| clinic | char(3) | NO | PRI |  |  |  |
| vn | varchar(13) | NO | PRI |  |  |  |
| visit_type | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| afb_check | char(1) | YES |  | NULL |  |  |
| afb_month_number | int(11) | YES |  | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| clinic | clinic | no | 1 |
| hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | clinic | yes | 1 |
| PRIMARY | vn | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "610000430",
    "clinic": "000",
    "vn": "631102060003",
    "visit_type": 1,
    "hos_guid": null,
    "afb_check": null,
    "afb_month_number": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530118852",
    "clinic": "000",
    "vn": "631102060015",
    "visit_type": 1,
    "hos_guid": null,
    "afb_check": null,
    "afb_month_number": null,
    "hos_guid_ext": null
  },
  {
    "hn": "610000430",
    "clinic": "000",
    "vn": "640104060030",
    "visit_type": 1,
    "hos_guid": null,
    "afb_check": null,
    "afb_month_number": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530118852",
    "clinic": "000",
    "vn": "640104060041",
    "visit_type": 1,
    "hos_guid": null,
    "afb_check": null,
    "afb_month_number": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530118852",
    "clinic": "000",
    "vn": "640301143002",
    "visit_type": 1,
    "hos_guid": null,
    "afb_check": null,
    "afb_month_number": null,
    "hos_guid_ext": null
  },
  {
    "hn": "610000430",
    "clinic": "000",
    "vn": "640401060018",
    "visit_type": 1,
    "hos_guid": null,
    "afb_check": null,
    "afb_month_number": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530118852",
    "clinic": "000",
    "vn": "640427083001",
    "visit_type": 1,
    "hos_guid": null,
    "afb_check": null,
    "afb_month_number": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530118852",
    "clinic": "000",
    "vn": "640601060024",
    "visit_type": 1,
    "hos_guid": null,
    "afb_check": null,
    "afb_month_number": null,
    "hos_guid_ext": null
  }
]
```
