# `moo_home_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| entity_name | varchar(25) | NO | PRI |  |  |  |
| code | varchar(5) | NO | PRI |  |  |  |
| name | varchar(200) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| code | code | no | 1 |
| entity_name | entity_name | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | entity_name | yes | 1 |
| PRIMARY | code | yes | 2 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "entity_name": "actrl",
    "code": "0",
    "name": "ไม่ควบคุม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "actrl",
    "code": "1",
    "name": "ควบคุม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "bctrl",
    "code": "0",
    "name": "ไม่ควบคุม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "bctrl",
    "code": "1",
    "name": "ควบคุม",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "clean",
    "code": "0",
    "name": "ไม่สะอาด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "clean",
    "code": "1",
    "name": "สะอาด",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "community_character",
    "code": "01",
    "name": "ชุมชนเกษตร",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "entity_name": "community_character",
    "code": "02",
    "name": "ชุมชนบ้านจัดสรร",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
