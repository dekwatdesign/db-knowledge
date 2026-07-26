# `dtdetail2`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| dtcode | int(11) | NO | PRI | 0 |  |  |
| dtvalue | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| dtcode | dtcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | vn | yes | 1 |
| PRIMARY | dtcode | yes | 2 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "vn": "601009100020",
    "dtcode": 202,
    "dtvalue": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "vn": "601009100020",
    "dtcode": 203,
    "dtvalue": 1,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
