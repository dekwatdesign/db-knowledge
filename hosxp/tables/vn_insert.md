# `vn_insert`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| clinic_list | varchar(150) | YES |  | NULL |  |  |
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
    "vn": "690722072838",
    "clinic_list": "\"\"",
    "hos_guid": null
  },
  {
    "vn": "690722072844",
    "clinic_list": "\"\"",
    "hos_guid": null
  },
  {
    "vn": "690722072928",
    "clinic_list": "\"\"",
    "hos_guid": null
  },
  {
    "vn": "690722073016",
    "clinic_list": "\"\"",
    "hos_guid": null
  },
  {
    "vn": "690722073104",
    "clinic_list": "\"\"",
    "hos_guid": null
  },
  {
    "vn": "690722073156",
    "clinic_list": "\"\"",
    "hos_guid": null
  },
  {
    "vn": "690722073248",
    "clinic_list": "\"\"",
    "hos_guid": null
  },
  {
    "vn": "690722073330",
    "clinic_list": "\"\"",
    "hos_guid": null
  }
]
```
