# `code506`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | int(11) | NO | PRI | 0 |  |  |
| min | varchar(6) | NO | PRI |  |  |  |
| max | varchar(6) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| code506 | char(3) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_code | code | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_min_max | min | no | 1 |
| ix_min_max | max | no | 2 |
| ix_min_max_index | max | no | 1 |
| ix_min_max_index | min | no | 2 |
| PRIMARY | code | yes | 1 |
| PRIMARY | max | yes | 2 |
| PRIMARY | min | yes | 3 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "code": 1,
    "min": "A000",
    "max": "A000",
    "hos_guid": null,
    "code506": null
  },
  {
    "code": 1,
    "min": "A001",
    "max": "A001",
    "hos_guid": null,
    "code506": null
  },
  {
    "code": 1,
    "min": "A009",
    "max": "A009",
    "hos_guid": "",
    "code506": null
  },
  {
    "code": 2,
    "min": "A020",
    "max": "A020",
    "hos_guid": "",
    "code506": null
  },
  {
    "code": 2,
    "min": "A040",
    "max": "A049",
    "hos_guid": null,
    "code506": null
  },
  {
    "code": 2,
    "min": "A080",
    "max": "A085",
    "hos_guid": "",
    "code506": null
  },
  {
    "code": 2,
    "min": "A090",
    "max": "A090",
    "hos_guid": null,
    "code506": null
  },
  {
    "code": 2,
    "min": "A099",
    "max": "A099",
    "hos_guid": null,
    "code506": null
  }
]
```
