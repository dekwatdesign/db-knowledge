# `canaccess`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| computer | varchar(50) | NO | PRI |  |  |  |
| accessright | varchar(250) | YES |  | NULL |  |  |
| begin_time | time | YES |  | NULL |  |  |
| end_time | time | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | computer | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "computer": "A54-0062",
    "accessright": "[FINANCE]",
    "begin_time": "0:00:01",
    "end_time": "23:59:59",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A54-0097",
    "accessright": "[FINANCE]",
    "begin_time": "0:00:01",
    "end_time": "23:59:59",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A56-0114",
    "accessright": "[FINANCE]",
    "begin_time": "0:00:01",
    "end_time": "23:59:59",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A60-0004",
    "accessright": "[FINANCE]",
    "begin_time": "0:00:01",
    "end_time": "23:59:59",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A61-0017",
    "accessright": "[FINANCE]",
    "begin_time": "0:00:01",
    "end_time": "23:59:59",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A63-0019",
    "accessright": "[FINANCE]",
    "begin_time": "0:00:01",
    "end_time": "23:59:59",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A63-0028",
    "accessright": "[FINANCE]",
    "begin_time": "0:00:01",
    "end_time": "23:59:59",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "computer": "A63-0029",
    "accessright": "[FINANCE]",
    "begin_time": "0:00:01",
    "end_time": "23:59:59",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
