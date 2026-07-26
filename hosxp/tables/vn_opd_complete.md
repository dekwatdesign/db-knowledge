# `vn_opd_complete`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| complete | char(1) | YES |  | NULL |  |  |
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
    "vn": "0",
    "complete": "Y",
    "hos_guid": null
  },
  {
    "vn": "160310100000",
    "complete": "Y",
    "hos_guid": null
  },
  {
    "vn": "330825090038",
    "complete": "Y",
    "hos_guid": null
  },
  {
    "vn": "340227110018",
    "complete": "Y",
    "hos_guid": null
  },
  {
    "vn": "340308103030",
    "complete": "Y",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "complete": "Y",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "complete": "Y",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "complete": "Y",
    "hos_guid": null
  }
]
```
