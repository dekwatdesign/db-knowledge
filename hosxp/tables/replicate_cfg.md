# `replicate_cfg`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| server | varchar(20) | YES | UNI | NULL |  |  |
| lastreplicate | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| server_unique | server | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "server": "192.168.1.3",
    "lastreplicate": 131723,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "server": "192.168.1.2",
    "lastreplicate": 208868221,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "server": "192.168.1.249",
    "lastreplicate": 21439850,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "server": "192.168.11.2",
    "lastreplicate": 301753091,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
