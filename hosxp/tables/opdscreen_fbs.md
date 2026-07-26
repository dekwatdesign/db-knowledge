# `opdscreen_fbs`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| dtx1 | double(15,3) | YES |  | NULL |  |  |
| dtx2 | double(15,3) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| lab_dtx | double(15,3) | YES |  | NULL |  |  |

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
    "vn": "-VN-",
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null,
    "lab_dtx": null
  },
  {
    "vn": "240614151330",
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null,
    "lab_dtx": null
  },
  {
    "vn": "290104120808",
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null,
    "lab_dtx": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null,
    "lab_dtx": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null,
    "lab_dtx": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null,
    "lab_dtx": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null,
    "lab_dtx": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "dtx1": 0.0,
    "dtx2": 0.0,
    "hos_guid": null,
    "lab_dtx": null
  }
]
```
