# `ovst_control_doctor`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| doctor | varchar(9) | YES |  | NULL |  |  |
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
    "vn": "521125100402",
    "doctor": "055",
    "hos_guid": null
  },
  {
    "vn": "521125100925",
    "doctor": "055",
    "hos_guid": null
  },
  {
    "vn": "521125110115",
    "doctor": "055",
    "hos_guid": null
  },
  {
    "vn": "521125115240",
    "doctor": "055",
    "hos_guid": null
  },
  {
    "vn": "521125115414",
    "doctor": "055",
    "hos_guid": null
  },
  {
    "vn": "521125124931",
    "doctor": "055",
    "hos_guid": null
  },
  {
    "vn": "521125132346",
    "doctor": "055",
    "hos_guid": null
  },
  {
    "vn": "521126011325",
    "doctor": "055",
    "hos_guid": null
  }
]
```
