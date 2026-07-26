# `dtacthistory`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| yr | int(11) | YES | MUL | NULL |  |  |
| pr | int(11) | YES | MUL | NULL |  |  |
| actcode | varchar(10) | YES | MUL | NULL |  |  |
| qty | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| actcode | actcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| pr | pr | no | 1 |
| yr | yr | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "yr": 2545,
    "pr": 1,
    "actcode": "P1",
    "qty": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "yr": 2545,
    "pr": 1,
    "actcode": "P1",
    "qty": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "yr": 2545,
    "pr": 1,
    "actcode": "P2",
    "qty": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "yr": 2545,
    "pr": 1,
    "actcode": "P1",
    "qty": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "yr": 2545,
    "pr": 1,
    "actcode": "P2",
    "qty": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "yr": 2545,
    "pr": 1,
    "actcode": "P3",
    "qty": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "yr": 2545,
    "pr": 1,
    "actcode": "P1",
    "qty": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "yr": 2545,
    "pr": 1,
    "actcode": "P2",
    "qty": 0,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
