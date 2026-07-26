# `health_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| health_check | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

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
    "vn": "560315113004",
    "health_check": "Y",
    "hos_guid": null
  },
  {
    "vn": "560322133002",
    "health_check": "Y",
    "hos_guid": null
  },
  {
    "vn": "560529075120",
    "health_check": "Y",
    "hos_guid": null
  },
  {
    "vn": "560603083046",
    "health_check": "N",
    "hos_guid": null
  },
  {
    "vn": "560814133006",
    "health_check": "N",
    "hos_guid": null
  },
  {
    "vn": "561022083038",
    "health_check": "Y",
    "hos_guid": null
  },
  {
    "vn": "570709140028",
    "health_check": "Y",
    "hos_guid": null
  },
  {
    "vn": "580527155429",
    "health_check": "N",
    "hos_guid": null
  }
]
```
