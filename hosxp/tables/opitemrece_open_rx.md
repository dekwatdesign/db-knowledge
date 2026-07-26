# `opitemrece_open_rx`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hos_guid | varchar(38) | NO | PRI |  |  |  |
| vn | varchar(12) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_vn | vn | no | 1 |
| PRIMARY | hos_guid | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hos_guid": "{0EC1EF45-67CE-41BD-A3AA-C2BA6501C4DD}",
    "vn": "590523110052",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{12454FE9-E8AD-461B-95F0-FFB229422B0C}",
    "vn": "551008133012",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{2E33E65E-1D1F-47B9-9A5B-DC7CE75FA306}",
    "vn": "590523110052",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{3E70BEB9-D012-4883-ADE8-08275195E047}",
    "vn": "680306090036",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{411CB6B2-1E4E-41E8-AFE6-39A3A3FB8ABF}",
    "vn": "610911110006",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{6371FD85-8505-41C6-A229-4B8BD1F49A5B}",
    "vn": "680306090036",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{68B947B4-A087-453E-B90A-BD4E13E69624}",
    "vn": "610911110006",
    "hos_guid_ext": null
  },
  {
    "hos_guid": "{6ECE2ACA-F20C-41C9-B09E-0A7BABD10697}",
    "vn": "610911110006",
    "hos_guid_ext": null
  }
]
```
