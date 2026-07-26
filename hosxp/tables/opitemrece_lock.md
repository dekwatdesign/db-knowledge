# `opitemrece_lock`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| doctor | varchar(25) | YES |  | NULL |  |  |
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
    "vn": "600403083048",
    "doctor": "",
    "hos_guid": null
  },
  {
    "vn": "600403130018",
    "doctor": "",
    "hos_guid": null
  },
  {
    "vn": "600403130022",
    "doctor": "",
    "hos_guid": null
  },
  {
    "vn": "600403130030",
    "doctor": "",
    "hos_guid": null
  },
  {
    "vn": "600403134319",
    "doctor": "",
    "hos_guid": null
  },
  {
    "vn": "600403140012",
    "doctor": "",
    "hos_guid": null
  },
  {
    "vn": "600403140016",
    "doctor": "",
    "hos_guid": null
  },
  {
    "vn": "600403140018",
    "doctor": "",
    "hos_guid": null
  }
]
```
